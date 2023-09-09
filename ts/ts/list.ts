export const list_filterMap =
  <K>(list: K[]) =>
  <L>(filterF: (v: K) => L | undefined): L[] =>
    list.map(k => filterF(k)).filter(k => k !== undefined) as L[]
export const list_modify =
  <K>(list: K[]) =>
  (selector: (i: K) => boolean, modifier: (k: K) => K) =>
    list.map(k => (selector(k) ? modifier(k) : k))

export const list_entries = <K>(list: K[]) => [...list.entries()]

// export const list_dedup = 