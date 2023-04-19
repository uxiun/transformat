import { Entry, addEntriesDeduping, allentriesAtom, dedupedEntryMapAtom, justDedupEntries, sortAndStringify, uilanguageAtom } from "@/ts/atom"
import { translationTree } from "@/ts/lang"
import { copyToClipboard } from "@/ts/ts/util.list"
import { Button, InputAdornment, TextField, Tooltip } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useEffect, useState } from "react"

type Props = {
  allentries: Entry[]
}
const JSONoutput: FC = () => {
  const [lang] = useAtom(uilanguageAtom)
  const [allentries, setAllEntries] = useAtom(allentriesAtom)
  const [dedupedEntryMap, setDedupedEntryMap] = useAtom(dedupedEntryMapAtom)
  const [messages, setMessages] = useState({
    parseError: ""
  })
  const [output, setOutput] = useState<string>(sortAndStringify(allentries))
  const [openTip, setOpenTip] = useState<boolean>(false)
  useEffect(()=>{
    setOutput(sortAndStringify(allentries))
    setMessages(s => ({...s, parseError: ""}))
  }, [allentries])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOutput(e.target.value)
  }
  const handleClick = () => {
    copyToClipboard(output)
    setOpenTip(true)
  }
  type ImportType = "append"|"reset"
  const importClick = (importType: ImportType) => () => {
    try {
      const res: Entry[] = JSON.parse(output)
      console.log(res)
      if (importType == "reset") {
        setAllEntries(justDedupEntries(res))
      } else {
        const {entries, dedupedMap} = addEntriesDeduping(dedupedEntryMap)(res)
        setDedupedEntryMap(dedupedMap)
        setAllEntries(entries)
      }
    } catch {
      setMessages(s => ({...s, parseError: translationTree.error.parse[lang]}))
    }
  }
  return(
    <div>
      <h3>JSON({allentries.length})</h3>
      <div>{allentries.length >= 0 ? "" : ""}</div>
      <Tooltip
        arrow
        open={openTip}
        onClose={()=>setOpenTip(false)}
        disableHoverListener
        placement="left"
        title="copied!"
      >
          <Button
            disabled={allentries.length === 0}
            onClick={handleClick}
          >
            copy
          </Button>

      </Tooltip>
      <Tooltip
        arrow
        open={openTip}
        onClose={()=>setOpenTip(false)}
        disableHoverListener
        placement="left"
        title="copied!"
      >
          <Button
            disabled={allentries.length === 0}
            onClick={importClick("append")}
          >
            import(append)
          </Button>
      </Tooltip>
      <Tooltip
        arrow
        open={openTip}
        onClose={()=>setOpenTip(false)}
        disableHoverListener
        placement="left"
        title="copied!"
      >
          <Button
            disabled={allentries.length === 0}
            onClick={importClick("reset")}
          >
            import(reset)
          </Button>
      </Tooltip>
      <div className="messages">
        {Object.entries(messages).map(([k,v])=> <div key={k}>{v}</div> )}
      </div>
      <TextField
        fullWidth
        multiline
        value={output}
        sx={{
          maxHeight: 500,
          overflowY: "scroll",
          fontFamily: "monospace"
        }}
        // InputProps={{
        //   startAdornment: <InputAdornment position="start">
        //     <Tooltip
        //       arrow
        //       open={openTip}
        //       onClose={()=>setOpenTip(false)}
        //       disableHoverListener
        //       placement="left"
        //       title="copied!"
        //     >
        //         <Button
        //           disabled={allentries.length === 0}
        //           onClick={handleClick}
        //         >
        //           copy
        //         </Button>

        //     </Tooltip>
        //   </InputAdornment>
        // }}
        // disabled
        onChange={handleChange}
      />
    </div>
  )
}

export default JSONoutput