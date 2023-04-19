import { splitIf } from "./util.list"

export type ListIndentedFormat = {
  indent: string
  body: ListIndented
}
type TreeNode<T> = {
  self: T
  childs: TreeNode<T>[]
}
type ListIndented = TreeNode<string>[]

type TextRewriterEntity = {
  from: string
  ic: boolean
  mw: boolean
  sc: boolean
  to: string
}



export const to_froms_regexReplace_src_json = (src: string, indent: string) => {

}

type TakeCount = {
  str: string
  take: string
  cnt: number
}
const takeCount = ({str, take, cnt}: TakeCount): TakeCount =>
  (str.startsWith(take)) ? takeCount({str: str.slice(take.length), take, cnt: cnt+1})
  : ({str, take, cnt})
const takeCountToTreeNode = (takecount: TakeCount): TreeNode<string> =>
  ({
    childs: [],
    self: takecount.str
  })

const readlineTree = (src: TakeCount[]) => {
  src.reduce((prev, cur) => {
    if (cur === undefined) {
      return [] as ListIndented
    } else {
      return []
    }
  }, [] as ListIndented)
}
// const treeBuild = (src: TakeCount[], currentIndent?: number) => (trees: ListIndented) => (tree: TreeNode<string>): ListIndented => {
//   return src.length === 0 || currentIndent??1 < 0
//   ? trees
//   : (()=>{
//     const i = currentIndent ?? src[0].cnt
//     const [s,d] = splitIf(src)(takecount => takecount.cnt === i)
//     const lastNode = s.pop()
//     if (lastNode === undefined){
//       return tree
//     }else{
//       const t = treeBuild(d, i+1)(s.map(tk => takeCountToTreeNode(tk)))(takeCountToTreeNode(lastNode))

//       // const sl = d.slice(0,1)
//       // sl.every(e => e.cnt > i)
//       // ?
//     }

//     // treeBuild(d, i+1)(trees)(tree)
//     // [...s, {
//     //   self: lastNode.str,
//     //   childs: treeBuild
//     // }]
//     return s.length === 0
//     ? treeBuild(d, i-2)(trees)()
//     : {
//       self
//     }
//   })()
// }

export const toListIndentedFormat = (indent: string) => (src: string) =>{
  const counteds = src.split("\n")
    .filter(line => line.match(/^\s*$/) ? true : false)
    .map(line => takeCount({
      str: line,
      take: indent,
      cnt: 0,
    }))

  return counteds
}