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
export const unicodePointSum = (str: string) => [...str].reduce((sum, char)=> sum + (char.codePointAt(0)??0) , 0)


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