const until = <T>(list: T[]) => <U>(task: (_: T) => U) => (returnIf: (_: U)=>boolean) => (lastChoise: U): U => {
  const first = list.shift()
  return !!first
  ? (()=>{
    const res = task(first)
    return returnIf(res) ? res : until(list)(task)(returnIf)(lastChoise)
  })()
  : lastChoise
}

export const sortManyTimes = <T>(a: T, b: T) => (compareFns: ((t: T) => number)[]) =>
  until(compareFns)
    (fn => fn(a) - fn(b))
    (comparedResult => comparedResult != 0)
    (0)

export const groupByForSet = <T>(sett: Set<T>) => <U>(groupingFn: (t: T)=>U) => {
  const m: Map<U, Set<T>> = new Map()
  sett.forEach(t => {
    const u = groupingFn(t)
    const got = m.get(u)
    if (!!got) {
      m.set(u, got.add(t))
    } else {
      m.set(u, new Set([t]))
    }
  })
  return m;
}

export const groupByForList = <T>(list: T[]) => <U>(groupingFn: (t: T)=>U) => {
  const m: Map<U, T[]> = new Map()
  list.forEach(t => {
    const u = groupingFn(t)
    const got = m.get(u)
    if (!!got) {
      m.set(u, [...got, t])
    } else {
      m.set(u, [t])
    }
  })
  return m;
}

export const groupByMapForList = <T>(list: T[]) => <U>(groupingFn: (t: T)=>U) => <V>(modifier: (t: T)=>V) => {
  const m: Map<U, V[]> = new Map()
  list.forEach(t => {
    const u = groupingFn(t)
    const got = m.get(u)
    if (got != undefined) {
      m.set(u, [...got, modifier(t)])
    } else {
      m.set(u, [modifier(t)])
    }
  })
  return m;
}

export const sortManyTimesByGrouping = <T>(list: T[]) => (sortFns: (
  (t1: T) => number
)[]): T[] => {
  const go = (fni: number) => (list: T[]): T[] => {
    const fn = sortFns.at(fni)
    return !!fn ?
      [...groupByForList(list)(fn).entries()].map(([k,v]): [number, T[]]=>
        v.length > 1 ?
          [k, go(fni+1)(v)]
          : [k, v])
        .sort(([m, _], [n, __]) => m - n)
        .flatMap(([k, v]) => v)
      : list
  }
  return go(0)(list)
  // sortFns.reduce((s, fn) => [...groupByForList(list)(t => fn(t)).entries].map(([key, v])=> ))
}

export const sortFnAsFarFromZero = (start: number, over: number) => <T>(sortFn: (a: T, b: T, i: number) => number) => (a: T, b: T): number => {
  if (start < over) {
    const v = sortFn(a, b, start);
    return v == 0 ? sortFnAsFarFromZero(start+1, over)(sortFn)(a, b) : v
  } else {
    return 0
  }
}

export const consoler = (label: string) => <T>(x: T): T => {
  console.log(label, x)
  return x;
}

// export const sortManyTimesByPair = <T>(list: T[]) => (sortFns: (
//   (a: T, b: T)=> number
// )[]) =>
// export const unicodePointSum = (str: string) => [...str].reduce((sum, char)=> sum + (char.codePointAt(0)??0) , 0)
// export const unicodePointsForSort = (str: string) => [...str].reduce((point, c, i) => c.codePointAt())


export const copyToClipboard = async(text: string) => {
  await global.navigator.clipboard.writeText(text)
}

export const splitIf = <T>(list: T[]) => (splitter: (t: T)=>boolean): [T[], T[]]=> {
  const go = ([d,f]: [T[], T[]]): [T[], T[]] =>
    f.length === 0
    ? [[], []]
    : splitter(f[0])
      ? go([
        [...d, f[0]],
        f.slice(1)
      ])
      : [d, f]
  return go([[], list])
}
export const passOr = <T>(pass: (t: T) => boolean) => <U>(else_return: U) => (if_do: (t: T) => U) => (t: T): U =>
  pass(t) ? if_do(t) : else_return

export const isEmptyObject = (r: Record<any, any>) => Object.entries(r).length === 0

export const objectSortBy = <U>(compareFn: ([j, ij]: [U, number], [k, il]: [U, number]) => number) => <T>(objects: T[]) => (target: (t: T) => U) => {
  let order = objects.map((o,i) => [target(o), i] as [U, number]).sort(compareFn)
  // console.log("objectPropertySort() order =", order)
  return order.map(([u, i])=> objects[i])
}
export const objectPropertySort = <U>(compareFn: ([j, ij]: [U, number], [k, il]: [U, number]) => number) => <T>(property: keyof T) =>  (objects: T[]) => {
  let order = objects.map((o,i) => [o[property], i] as [U, number]).sort(compareFn)
  // console.log("objectPropertySort() order =", order)
  return order.map(([u, i])=> objects[i])
}
// const rev = <T,U,K>(f: (t: T) => (u: U) => K) => (paramLast: U) => f(paramLast)
export const asciiSortFn = ([j,id]: [string, number], [k,il]: [string, number]) => {
  if ([j,k].sort()[0] === j) return -1
  else return 0
}
export const objectPropertyASCIIsort = objectPropertySort(asciiSortFn)
export const objectSortByASCIIsort = objectSortBy(asciiSortFn)