import LaunchIcon from "@mui/icons-material/Launch"
import {
	Entry,
	NgramIndexesForEntry,
	addEntriesDeduping,
	allentriesAtom,
	dedupedEntryMapAtom,
	defaultNgramIndexesForEntry,
	deleteEntriesFromIndex,
	entryIdDedupedMapAtom,
	getDedupKey,
	justDedupEntries,
	nextEntryIdAtom,
	ngramIndexesForEntryAtom,
	ngramIndexingSequenceEntry,
	sortAndStringify,
	uilanguageAtom,
} from "@/ts/atom"
import { translationTree } from "@/ts/lang"
import { StringNumberTuple } from "@/ts/ts/text"
import { copyToClipboard } from "@/ts/ts/util.list"
import { Box, Button, InputAdornment, TextField, Tooltip, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useEffect, useState } from "react"
import outputmodule from "./output.module.css"

type Props = {
	allentries: Entry[]
}
const JSONoutput: FC = () => {
	const [lang] = useAtom(uilanguageAtom)
	const [allentries, setAllEntries] = useAtom(allentriesAtom)
	const [dedupedEntryMap, setDedupedEntryMap] = useAtom(dedupedEntryMapAtom)
	const [atomNextEntryId, setatomNextEntryId] = useAtom(nextEntryIdAtom)
	const [atomIndex, setatomIndex] = useAtom(ngramIndexesForEntryAtom)
	const [atomEntryIdDedupedMap, setatomEntryIdDedupedMap] = useAtom(entryIdDedupedMapAtom)

	const [messages, setMessages] = useState({
		parseError: "",
	})
	const [output, setOutput] = useState<string>(sortAndStringify(allentries))
	type Buttons = {
		copy: boolean
		append: boolean
		initialize: boolean
	}
	const [openTip, setOpenTip] = useState<Buttons>({
		copy: false,
		append: false,
		initialize: false,
	})

	useEffect(() => {
		const t0 = performance.now()
		setOutput(sortAndStringify(allentries))
		const t1 = performance.now()
		console.log(`sort and output of ${allentries.length} entries took ${t1 - t0}ms`)
		setMessages(s => ({ ...s, parseError: "" }))
	}, [allentries])
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOutput(e.target.value)
	}
	const handleClick = (attr: keyof Buttons) => () => {
		if (attr == "copy") {
			copyToClipboard(output)
		} else {
			importClick(attr)()
		}
		setOpenTip(s => ({ ...s, [attr]: true }))
	}
	type ImportType = "append" | "initialize"
	const importClick = (importType: ImportType) => () => {
		try {
			const res: Entry[] = JSON.parse(output)
			console.log(res)
			if (importType == "initialize") {
				const { entries, dedupedMap } = justDedupEntries(res)
				console.log("imported entries:", entries)
				setAllEntries(entries)
				setDedupedEntryMap(dedupedMap)

				setatomEntryIdDedupedMap(m => new Map(entries.map((e, i) => [getDedupKey(e), i])))
				setatomIndex(indexes => ngramIndexingSequenceEntry(0, defaultNgramIndexesForEntry)(entries))
				setatomNextEntryId(entries.length)
			} else {
				const { entries, dedupedMap } = addEntriesDeduping(dedupedEntryMap)(res)
				console.log("imported entries:", entries)
				setDedupedEntryMap(dedupedMap)
				setAllEntries(entries)

				const newEntryIdMapSrc = [...atomEntryIdDedupedMap.entries()]
				const newEntryMapSpreaded = entries.map(
					(e, i) => [getDedupKey(e), atomNextEntryId + i] as StringNumberTuple
				)
				const newEntryMap = new Map(newEntryMapSpreaded)
				const spreaded = [...atomEntryIdDedupedMap.entries()]
				const duplicateEntryIds = spreaded
					.filter(([key, id]) => newEntryMap.get(key) !== undefined)
					.map(([key, id]) => id)
				setatomEntryIdDedupedMap(m => new Map([...spreaded, ...newEntryMapSpreaded]))
				setatomIndex(indexes => ({
					from: indexes.from.map(index => deleteEntriesFromIndex(duplicateEntryIds)(index)),
					to: indexes.to.map(index => deleteEntriesFromIndex(duplicateEntryIds)(index)),
				}))
				setatomNextEntryId(id => id + entries.length)
			}
		} catch {
			setMessages(s => ({ ...s, parseError: translationTree.error.parse[lang] }))
		}
	}
	const tooltip = function ToolTipWrap(name: keyof Buttons) {
		return (
			<Tooltip
				arrow
				open={openTip[name]}
				onClose={() => setOpenTip(s => ({ ...s, [name]: false }))}
				disableHoverListener
				placement="top"
				title={`${name}!`}>
				<Button
					variant="contained"
					sx={{
						marginRight: 1,
					}}
					onClick={handleClick(name)}>
					{translationTree.output.buttons[name][lang]}
				</Button>
			</Tooltip>
		)
	}
	return (
		<div>
			<Typography variant="h4">JSON({allentries.length})</Typography>
			<div className={outputmodule.spacedButton}>
				{(["copy", "append", "initialize"] as (keyof Buttons)[]).map(name => tooltip(name))}
				{/* <a href="https://workflowy.com/s/text-rewriter-source/b0QLzBCudzhzTVHo" target="_blank">
					example🡥
				</a> */}
				<Box
					component="a"
					target="_blank"
					href="https://workflowy.com/s/text-rewriter-source/b0QLzBCudzhzTVHo">
					<Button endIcon={<LaunchIcon />}>{translationTree.example[lang]}</Button>
				</Box>
			</div>
			<div></div>
			{/* <Tooltip
        arrow
        open={openTip.copy}
        onClose={()=>setOpenTip(s => ({...s, copy: false}))}
        disableHoverListener
        placement="top"
        title="copied!"
      >
          <Button
            onClick={handleClick("copy")}
          >
            copy
          </Button>
      
      </Tooltip>
      <Tooltip
        arrow
        open={openTip.append}
        onClose={()=>setOpenTip(s => ({...s, append: false}))}
        disableHoverListener
        placement="top"
        title="appended!"
      >
          <Button
            disabled={output.length === 0}
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
        placement="top"
        title="initialized!"
      >
          <Button
            disabled={output.length === 0}
            onClick={importClick("reset")}
          >
            import(initialize)
          </Button>
      </Tooltip> */}
			<div className="messages">
				{Object.entries(messages).map(([k, v]) => (
					<div key={k}>{v}</div>
				))}
			</div>
			<TextField
				fullWidth
				multiline
				value={output}
				sx={{
					maxHeight: 500,
					overflowY: "scroll",
					fontFamily: "monospace",
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
