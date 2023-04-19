import { atom } from "jotai";
import { objectSortByASCIIsort, sortManyTimes, unicodePointSum } from "./ts/util.list";
export type Entry = {
  from: string
  to: string
  ic: boolean
  mw: boolean
  sc: boolean
}
const langs = ["ja", "en"] as const
type Lang = typeof langs[number]
const entryAttributeTranslations: Record<keyof Entry, Record<Lang, string>> = {
  from: {
    en: "from",
    ja: "置換対象"
  }
  ,ic: {
    en: "ignore case",
    ja: "大文字小文字を無視する",
  }
  ,mw: {
    en: "match word",
    ja: "単語のみ"
  }
  ,sc: {
    en: "smart case",
    ja: "賢い大小文字"
  },
  to: {
    en: "to",
    ja: "置換結果"
  }
}
export const entryAttributeReadable = (lang: Lang)=>(attr: keyof Entry): string =>
  entryAttributeTranslations[attr][lang]
export const isEqualEntry = (ej: Entry, ek: Entry) =>
  Object.keys(ej).every(k => ej[k as keyof Entry] == ek[k as keyof Entry])
export const uilanguageAtom = atom<Lang>("ja")
export const allentriesAtom = atom<Entry[]>([])
export const defaultEntry: Entry = {
  from: ""
  ,ic: false
  ,mw: false
  ,sc: false
  ,to: ""
}
export const newEntryAtom = atom<Entry>(defaultEntry)
export const dedupedEntryMapAtom = atom<Map<string, string>>(new Map())
export const get_by_entry = (dedupedMap: Map<string, string>) => (e: Entry) => {
  let {to, ...key} = e
  const stringified = JSON.stringify(key)
  const value = dedupedMap.get(stringified)
  return value
}
export const keyvalueToEntry = ([k,to]: [string,string]): Entry => ({...JSON.parse(k), to} as Entry)
export const dedupEntries = (es: Entry[]) => Array.from(new Set(es.map(e => JSON.stringify(e)))).map(str => JSON.parse(str) as Entry)


export const addEntriesDeduping = (dedupedEntryMap: Map<string, string>) => (entries: Entry[]) => {
  const deduped = new Map([
    ...dedupedEntryMap,
    ...entries.map(f => {
      const {to, ...fkey} = f
      const key = JSON.stringify(fkey)
      return [key, to] as [string, string]
    })
  ])
  const array = Array.from(deduped)
  const newEntries = array.map(k => keyvalueToEntry(k))
  return {
    entries: newEntries,
    dedupedMap: deduped
  }
}
export const justDedupEntries = (entries: Entry[]) => {
  const deduped = new Map(
    entries.map(f => {
      const {to, ...fkey} = f
      const key = JSON.stringify(fkey)
      return [key, to] as [string, string]
    })
  )
  const array = Array.from(deduped)
  const e = array.map(k => keyvalueToEntry(k))
  return {
    entries: e,
    dedupedMap: deduped
  }

}


export const sortAndStringify = (entries: Entry[]) => JSON.stringify(objectSortByASCIIsort(entries)(k => k.from)
  .reverse()
  .sort((d,f)=> sortManyTimes(d,f)([
  e => {
    const {to, from, ...bools} = e
    return unicodePointSum(JSON.stringify(bools))
  }
])))