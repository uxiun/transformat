import { count } from "console"
import { ifdo, ifvalue } from "./map"

const mathketa = {
  round: Math
}
type RoundCeilFloor = "round"|"ceil"|"ceil"
export const ketaDirty = (which: RoundCeilFloor, keta: number) => (target: number): number =>
  {
    const targetMinus = target < 0
    let s = Math.abs(target).toString().split(`.`)

    if (s.length < 2) {
      // console.error("literal number split was incorrect")
      s.push("")
    }
    let remketa = keta + 1;
    const sliced = s.map(w => {
      const sliced = w.slice(0, remketa)
      remketa -= sliced.length
      return sliced
    })
    if (remketa > 0) return target
    else {

      const index = ifvalue(d => d == 0, s[0].length - sliced[0].length)(- sliced[1].length) + 1
      const topow = parseInt(`${sliced[0]}${sliced[1]}`) / 10
      const fixed =
      // Math[targetMinus? "ceil": "floor"]
      (Math[which](targetMinus? - topow: topow))
      // let f = parseInt(fixed.toString().split(".")[0])

      return Math.pow(10, index)* fixed
    }

  }

export const ketaDirtyDisplay = (which: RoundCeilFloor, keta: number) => (target: number): string =>
{
  const d = ketaDirty(which, keta)(target)
  const e = Math.abs(d).toString().split("").reduce(({seisu, shosu, atshosu}, char)=>
    (atshosu ?
      {
        seisu,
        shosu: seisu.length + shosu.length < keta ? shosu + char : shosu,
        atshosu
      }:
      (char == "." ?
        {
          seisu,
          shosu,
          atshosu: true
        } :
        {
          seisu: seisu + char,
          shosu,
          atshosu
        })
      )
    , {
      seisu: "",
      shosu: "",
      atshosu: false
    } )
  return (d < 0 ? "-" : "")+ e.seisu + ifdo(e.shosu)(t => t.length > 0, t => `.${t}`)
}