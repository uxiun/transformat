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
