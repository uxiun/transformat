import { list_entries, list_modify } from "./list"
import { caseUndefined, ifdo, ifvalue, insertOr, mapUnions, map_map, modifyMap } from "./map"
import { groupByForList, groupByMapForList } from "./util.list"

export const fuzzyMatch = (ngram: string) => (query: string, target: string) => {}

export type NgramIndex = {
  n: number
  index: NgramIndexMap
}
export const emptyNgramIndex = (n: number): NgramIndex => ({
  n,
  index: new Map(),
})
export type NgramIndexMap = Map<string, NgramIndexData>
export type NgramIndexData = Map<TextId, TextPositions>
type TextId = number
type TextPositions = number[]

export const ngramSegmentify = (n: number, text: string): string[] =>
  [...Array(text.length).keys()].map(i => text.slice(i, i + n)).filter(seg => seg.length == n)
console.log("segtameshi", ngramSegmentify(1, "s"))

export const ngramIndexing =
  (index: NgramIndex) =>
  (textid: number, text: string): NgramIndex => {
    const f = [...Array(text.length).keys()]
    console.log("ngramIndexing called")
    console.log("textid:", textid, "text:", text)
    return f
      .map(i => text.slice(i, i + index.n))
      .filter(seg => seg.length == index.n)
      .reduce((s, seg, i) => {
        // const data = index.index.get(s)
        console.log("reduce loop [" + i + "]")
        console.log("current index - s", s)
        s.index.set(
          seg,
          // ...(index.index.get(seg)?.entries() ?? []),
          // [textid, [...(index.index.get(seg)?.get(textid) ?? []), i]],

          new Map(
            caseUndefined(s.index.get(seg))(
              v =>
                // list_modify([...v.entries()])(
                //   ([id, _]) => id == textid,
                //   ([id, textPositions]) => [textid, [...textPositions, i]]
                // ),
                [...v.entries()]
                .flatMap(([id, positions],)=>
                  id == textid? [[id, [...positions, i]]]
                  : [[id, positions], [textid, [i]]])
              ,[[textid, [i]]]
            )
          )
        )
        return {
          n: index.n,
          index: s.index
        }
      }, index)
  }

export const ngramIndexingSequence = (startId: number, index: NgramIndex) => (texts: string[]) =>
  texts.reduce((ind, text, i) => ngramIndexing(ind)(startId + i, text), index)
export const doubleMapCopy = <K, L, D>(mapobj: Map<K, Map<L, D>>) =>
  new Map([...mapobj.entries()].map(([k, v]) => [k, new Map([...v.entries()])]))

export const ngramDeleteIndexing =
  (index: NgramIndex) =>
  (toDeleteId: number, toDeleteText: string): NgramIndex => {
    // const indexCopy: NgramIndexMap = new Map([...index.index.entries()].map(([k, v]) => [k, new Map([...v.entries()])]))
    const indexCopy = doubleMapCopy(index.index)
    ngramSegmentify(index.n, toDeleteText).forEach(ngram =>
      indexCopy.set(
        ngram,
        new Map([...(index.index.get(ngram)?.entries() ?? [])].filter(([k, v]) => k !== toDeleteId))
      )
    )
    return {
      index: indexCopy,
      n: index.n,
    }
  }
export type NgramTarget = {
  n: number,
  m: Map<string, TextPositions>
}
export const ngramTargetFormat = (n: number, str: string): NgramTarget => ({
  n,
  m:
      groupByMapForList
        (list_entries(ngramSegmentify(n, str)))
        (([id, ngram])=> ngram)
        (([id, ngram])=> id)

})
export type StringNumberTuple = [string, number]
export type IdScoreMap = Map<TextId, number>

const ngramHitPoint = (target: number[]) => (vs: NgramIndexData) =>
  new Map(
  [...vs.entries()]
  .map(([id, positions])=> [id,
    // - target.length
    (+ target.filter(d => positions.includes(d)).length *1000
    + Math.min(positions.length, target.length)
    / Math.max(positions.length, target.length) *100
    // - Math.abs(positions.length - target.length) *100
    )/target.length
  ])
  )
export const concernLength =
  (scoreMap: IdScoreMap)=>
  (targetLength: number, lengthmap: Map<number, number>) =>
    new Map(
      [...scoreMap.entries()].map(([id, score])=> [id,
        caseUndefined(lengthmap.get(id))(
          len => score - 1 + Math.min(len, targetLength)/Math.max(len, targetLength)
          , score - 1
        )
      ]

      )
    )

export const ngramScoreMap =
  (index: NgramIndex) =>
  (text: string): IdScoreMap => {
    const es = [...ngramTargetFormat(index.n, text).m.entries()]
    console.info(es)
    console.log("es=", es)
    return map_map(
      mapUnions(
        es.map(([ngram, positions], i, arr) =>
          ngramHitPoint(positions)(
            new Map([...index.index.get(ngram)??[].entries()]))

        )
      )
      (0, (s, d, key) => s + d)

    )((v, ) => ifdo(es.length)(d => d != 0, m => v / m))
  }
    // new Map(
    //   [
    //     ...ngramSegmentify(index.n, text)
    //       .reduce(
    //         (scoremap: IdScoreMap, ngram, i) =>
    //           [...(index.index.get(ngram)?.entries() ?? [])].reduce(
    //             (idScoreMap: IdScoreMap, [id, positions], j) =>
    //               modifyMap(idScoreMap)(id, 0)(v => v + (positions.includes(i) ? 2 : 1)),
    //             scoremap
    //           ),
    //         new Map()
    //       )
    //       .entries(),
    //   ].map(([id, score], i, arr) => {
    //     console.log("loop=", i, "id:", id, "arr:", arr)
    //     return [
    //       id,
    //       caseUndefined(lengthmap.get(id))(len => {
    //         // console.log("[id, score]", id, score)
    //         return score / ifvalue(v => v === 0, 100)((len - index.n + 1) * 2)
    //       }, 0),
    //     ]
    //   })
    // )
