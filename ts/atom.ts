import { atom, useAtom } from "jotai"
import {
	consoler,
	groupByForList,
	groupByForSet,
	objectSortByASCIIsort,
	sortFnAsFarFromZero,
	sortManyTimes,
	sortManyTimesByGrouping,
} from "./ts/util.list"
import { listtools, objdo, objectToJsonRelaxed, strlisttools } from "./ts/object"
import {
	NgramIndex,
	NgramIndexData,
	emptyNgramIndex,
	ngramIndexing,
	ngramIndexingSequence,
	ngramSegmentify,
} from "./ts/text"
import { caseUndefined, fallback } from "./ts/map"
export type Entry = {
	from: string
	to: string
	ic: boolean
	mw: boolean
	sc: boolean
}
export const langs = ["ja", "en"] as const
export type Lang = (typeof langs)[number]
export const defaultLanguage = "ja"
export const defaultSearchConfig: SearchConfig = {
	delay: 700,
	maxShowNumber: 10,
}
export type SearchConfig = {
	delay: number
	maxShowNumber: number
}
export const searchConfigAtom = atom(defaultSearchConfig)
const entryAttributeTranslations: Record<keyof Entry, Record<Lang, string>> = {
	from: {
		en: "from",
		ja: "置換対象",
	},
	ic: {
		en: "ignore case",
		ja: "大文字小文字を無視する",
	},
	mw: {
		en: "match word",
		ja: "単語のみ",
	},
	sc: {
		en: "smart case",
		ja: "賢い大小文字",
	},
	to: {
		en: "to",
		ja: "置換結果",
	},
}
export const entryAttributeReadable =
	(lang: Lang) =>
	(attr: keyof Entry): string =>
		entryAttributeTranslations[attr][lang]
export const isEqualEntry = (ej: Entry, ek: Entry) =>
	Object.keys(ej).every(k => ej[k as keyof Entry] == ek[k as keyof Entry])
export const uilanguageAtom = atom<Lang>("ja")
export const allentriesAtom = atom<Entry[]>([])
export const nextEntryIdAtom = atom(0)
export type TextLengthMaps = {
	from: Map<number, number>
	to: Map<number, number>
}

export type IdEntryMap = Map<number, Entry>
export type IdEntryMapUpdate = <V>(v: V) => V
export const IdEntryMapAtom = atom<IdEntryMap>(new Map())

export type NgramIndexesForEntry = {
	from: NgramIndex[]
	to: NgramIndex[]
}

export const defaultNgramIndexesForEntry: NgramIndexesForEntry = {
	from: [emptyNgramIndex(1), emptyNgramIndex(2)],
	to: [emptyNgramIndex(1), emptyNgramIndex(2)],
}
export const ngramIndexesForEntryAtom = atom<NgramIndexesForEntry>(defaultNgramIndexesForEntry)

export const defaultEntry: Entry = {
	from: "",
	ic: false,
	mw: false,
	sc: false,
	to: "",
}
export type EntryBoolKey = "ic" | "mw" | "sc"
export const inputtingEntryAtom = atom<Entry>(defaultEntry)
export const topFormEntryAtom = atom<Entry>(defaultEntry)
export const matchingEntryAtom = atom<Entry>(defaultEntry)
export const newEntryAtom = atom<Entry>(defaultEntry)
export const dedupedEntryMapAtom = atom<Map<string, string>>(new Map())

export const get_by_entry = (dedupedMap: Map<string, string>) => (e: Entry) => {
	let { to, ...key } = e
	const stringified = JSON.stringify(key)
	const value = dedupedMap.get(stringified)
	return value
}
export const keyvalueToEntry = ([k, to]: [string, string]): Entry =>
	({ ...JSON.parse(k), to } as Entry)
export const dedupEntries = (es: Entry[]) =>
	Array.from(new Set(es.map(e => JSON.stringify(e)))).map(str => JSON.parse(str) as Entry)

export const addEntriesDeduping = (dedupedEntryMap: Map<string, string>) => (entries: Entry[]) => {
	const deduped = new Map([
		...dedupedEntryMap,
		...entries.map(f => {
			const { to, ...fkey } = f
			const key = JSON.stringify(fkey)
			return [key, to] as [string, string]
		}),
	])
	const array = Array.from(deduped)
	const newEntries = array.map(k => keyvalueToEntry(k))
	return {
		entries: newEntries,
		dedupedMap: deduped,
	}
}
export const justDedupEntries = (entries: Entry[]) => {
	const deduped = new Map(
		entries.map(f => {
			const { to, ...fkey } = f
			const key = JSON.stringify(fkey)
			return [key, to] as [string, string]
		})
	)
	const array = Array.from(deduped)
	const e = array.map(k => keyvalueToEntry(k))
	return {
		entries: e,
		dedupedMap: deduped,
	}
}

const entryBoolApplyRangePoint = (e: Entry): number =>
	(e.mw ? 0 : 4) + (e.ic ? 2 : 0) + (e.sc ? 0 : 1) + 0
export const sortAndStringify = (entries: Entry[]) => {
	const sorted = [...groupByForList(entries)(e => e.from.length).entries()]
		.map(([n, es]): [number, Entry[]] => [
			n,
			[...groupByForList(es)(e => e.from).entries()]
				.map(([fromtext, es]): [string, Entry[]] => [
					fromtext,
					es.sort(
						sortFnAsFarFromZero(
							0,
							n
						)((a, b, i) => entryBoolApplyRangePoint(a) - entryBoolApplyRangePoint(b))
					),
				])
				.sort(
					sortFnAsFarFromZero(
						0,
						n
					)(([a, as], [b, bs], i) => (a.codePointAt(i) ?? 0) - (b.codePointAt(i) ?? 0))
				)
				.flatMap(([text, es]) => es),
			// es.sort(sortFnAsFarFromZero(0, n)(
			//   (a, b, i)=>  ((a.from.codePointAt(i)??0) - (b.from.codePointAt(i)??0))
			// ))
		])
		.sort(([n, _], [m, __]) => m - n)
		.flatMap(([n, es]) => es)
	const output: string = strlisttools.intersperse_reduce(",\n")(
		sorted.map(entry =>
			objectToJsonRelaxed(entry)({
				propColon: { after: " " },
				entryComma: { after: " " },
			})
		)
	)
	// return JSON.stringify(sorted)
	return "[" + output + "]"
}

export type TooltipOperationBools = {
	add: boolean
	delete: boolean
}
export const defaultTooltipOperationBools: TooltipOperationBools = {
	add: false,
	delete: false,
}
export type FromToObj = {
	from: string
	to: string
}

export type EntryIdDedupedMap = Map<string, number>
export const entryIdDedupedMapAtom = atom<EntryIdDedupedMap>(new Map())

export const ngramIndexingSequenceEntry =
	(startId: number, indexes: NgramIndexesForEntry) =>
	<T extends FromToObj>(entries: T[]): NgramIndexesForEntry => {
		// console.log("ngramIndexingSequenceEntry, entries:", entries)
		const calc = (key: keyof FromToObj) =>
			indexes[key].map(index => ngramIndexingSequence(startId, index)(entries.map(e => e[key])))
		return {
			from: calc("from"),
			to: calc("to"),
		} as NgramIndexesForEntry
	}

export const ngramIndexingEntryFromTo =
	(entryId: number, indexes: NgramIndexesForEntry) =>
	(fromto: keyof FromToObj, text: string): NgramIndex[] =>
		indexes[fromto].map(index => ngramIndexing(index)(entryId, text))

export const ngramIndexingEntry =
	(entryId: number, indexes: NgramIndexesForEntry) =>
	<T extends FromToObj>(entry: T): NgramIndexesForEntry => {
		// console.log("ngramIndexingEntry called")
		const calc = ngramIndexingEntryFromTo(entryId, indexes)
		return {
			from: calc("from", entry.from),
			to: calc("to", entry.to),
		}
	}

// export const ngramDeleteIndexingEntry = (entryId: number)

export const getDedupKeyObj = (e: Entry) => {
	const { to, ...keys } = e
	return keys
}
export const getDedupKey = (e: Entry) => JSON.stringify(getDedupKeyObj(e))

export const getDedupKeyById = (id: number, eimap: EntryIdDedupedMap) => {
	const matched = [...eimap.entries()].filter(([key, idd]) => id == idd)
	return matched.length > 0 ? matched[0][0] : undefined
}
export type UniqueInfoAsKeyOfEntry = {
	from: string
	ic: boolean
	mw: boolean
	sc: boolean
}
export type UniqueInfoTo_dedupedMap = Map<string, string>
export const getLengthMap = (
	getidMap: EntryIdDedupedMap,
	dedupedMap: UniqueInfoTo_dedupedMap
): TextLengthMaps => {
	return [...dedupedMap.entries()].reduce(
		(lenmap: TextLengthMaps, [key, to]) =>
			["from", "to"].reduce((m, fromto) => {
				return {
					...m,
					[fromto]: new Map(
						[
							...m[fromto as keyof TextLengthMaps].entries(),
							[
								getidMap.get(key) ?? -1,
								fromto === "to"
									? to.length
									: (JSON.parse(key) as UniqueInfoAsKeyOfEntry).from.length,
							] as [number, number],
						].filter(([id, _]) => id >= 0)
					),
				}
			}, lenmap),
		{
			from: new Map(),
			to: new Map(),
		}
	)
}
export type TextAndId = {
	text: string
	id: number
}
export const updateIndexList =
	(key: string) =>
	(indexes: NgramIndexesForEntry, matchedEntry: Entry, atomEntryIdDedupedMap: EntryIdDedupedMap) =>
	(fromTo: keyof FromToObj, toIndex?: TextAndId) => {
		return indexes[fromTo].map(index => {
			ngramSegmentify(index.n, matchedEntry[fromTo]).forEach(ngram => {
				caseUndefined(index.index.get(ngram))(
					indexData =>
						caseUndefined(atomEntryIdDedupedMap.get(key))(id => {
							indexData.delete(id)
							return indexData
						}, indexData),
					new Map()
				)
			})
			return caseUndefined(toIndex)(({ id, text }) => ngramIndexing(index)(id, text), index)
		})
	}

export const modifyNgramData =
	(modifier: (data: NgramIndexData) => NgramIndexData) =>
	(index: NgramIndex): NgramIndex => ({
		n: index.n,
		index: new Map([...index.index.entries()].map(([ngram, data]) => [ngram, modifier(data)])),
	})

export const deleteEntriesFromIndex =
	(deleteIds: number[]) =>
	(index: NgramIndex): NgramIndex => ({
		n: index.n,
		index: new Map(
			[...index.index.entries()].map(([ngram, data]) => [
				ngram,
				new Map([...data.entries()].filter(([id, _]) => !deleteIds.includes(id))),
			])
		),
	})
