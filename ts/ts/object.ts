export type Recordkey = string|number|symbol
export type RecordGeneral = Record<Recordkey, any>

export const objdo = <T extends RecordGeneral>(obj: T) => ({
  spread: (...keys: [keyof T]): [T,T]=>{
    const spr = Object.entries(obj).reduce((
      {extracted, rest},
      c
    )=> keys.includes(c[0])
      ? {rest, extracted: 
          {...extracted, [c[0]]: c[1]}}
      : {extracted, rest: {
        ...rest, [c[0]]: c[1]
      }}
      , {extracted: {} as T, rest: {} as T}
    );
    return [spr.extracted, spr.rest]
  }
})

export const jsonStringAppend = <T, U extends RecordGeneral>(obj: T, objappends: U) => {
  
}

export const objectToJsonRelaxed = <T extends RecordGeneral>(obj: T) => (affixes: {
  propColon?: {before?: string, after?: string},
  entryComma?: {before?: string, after?: string}
}) : string => {
  const entryDelemeter = (affixes.entryComma?.before??"") +"," +(affixes.entryComma?.after??"")
  return "{"
  +Object.entries(obj).reduce((t, e)=> 
    t 
    +JSON.stringify(e[0]) 
    +(affixes.propColon?.before??"") +":"
    +(affixes.propColon?.after??"")
    +JSON.stringify(e[1])
    +entryDelemeter
  , "").slice(0, -entryDelemeter.length)
  + "}"
}

export const listtools = <T>(list: T[]) => ({
  intersperse: (delemeter: T)=> list.reduce((s,c)=> [...s, delemeter, c], [] as T[])
    .slice(1)
})

export const strlisttools = {
  reduce: (list: string[])=> list.reduce((s, c)=> s+c, "")
  ,intersperse_reduce: (delemeter: string)=> (list: string[])=> strlisttools.reduce(
    listtools(list).intersperse(delemeter)
  )
}

export const objSetbool = <T extends Record<Recordkey, boolean>>(obj: T) : T => Object.entries(obj).reduce((o, [k, v])=> ({...o, [k]: false}), {} as T)