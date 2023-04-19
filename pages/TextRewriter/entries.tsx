import { allentriesAtom, newEntryAtom } from "@/ts/atom";

import { useAtom } from "jotai";
import { FC, useState } from "react";

const Entries: FC = () => {
  return(
    <div className="lists">
      <RecentEntries/>
    </div>
  )
}

const RecentEntries: FC = () => {
  const [newEntry] = useAtom(newEntryAtom)
  const [allentries, setAllEntries] = useAtom(allentriesAtom)
  return(
      <div className="entries">
        {allentries.slice(-10).reverse().map(e => (
          <div key={e.from}>{JSON.stringify(e)}</div>
          ))}
      </div>
  )
}

export default Entries