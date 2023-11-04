import {
	Entry,
	TooltipOperationBools,
	allentriesAtom,
	dedupedEntryMapAtom,
	defaultTooltipOperationBools,
	deleteEntriesFromIndex,
	entryAttributeReadable,
	entryIdDedupedMapAtom,
	get_by_entry,
	inputtingEntryAtom,
	keyvalueToEntry,
	matchingEntryAtom,
	modifyNgramData,
	newEntryAtom,
	nextEntryIdAtom,
	ngramIndexesForEntryAtom,
	ngramIndexingEntry,
	searchDelayAtom,
	uilanguageAtom,
	updateIndexList,
} from "@/ts/atom"
import { useDebounce } from "@/ts/hook"
import { translationTree } from "@/ts/lang"
import { list_modify } from "@/ts/ts/list"
import { caseUndefined } from "@/ts/ts/map"
import { ngramIndexing, ngramSegmentify } from "@/ts/ts/text"
import { Box, Button, Checkbox, FormControlLabel, TextField, Tooltip } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useEffect, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"

type RecycleFormProp = {
	defaultValues: Entry
	hideMe?: () => void
}
const RecycleForm: FC<RecycleFormProp> = prop => {
	const [message, setMessage] = useState<MessageBoxProps>({
		alreadyExist: "",
		operation: "",
	})
	const [lang] = useAtom(uilanguageAtom)
	const [newForm, setNewForm] = useAtom(newEntryAtom)
	const readableAttr = (k: keyof Entry) => entryAttributeReadable(lang)(k)
	const [allentries, setAllEntries] = useAtom(allentriesAtom)
	const [atomMatchingEntry, setatomMatchingEntry] = useAtom(matchingEntryAtom)
	const [atomInputtingEntry, setatomInputtingEntry] = useAtom(inputtingEntryAtom)
	const [atomIndex, setatomIndex] = useAtom(ngramIndexesForEntryAtom)
	const [atomNextEntryId, setatomNextEntryId] = useAtom(nextEntryIdAtom)
	const [atomEntryIdDedupedMap, setatomEntryIdDedupedMap] = useAtom(entryIdDedupedMapAtom)
	const [atomSearchDelay] = useAtom(searchDelayAtom)

	const [entriesForJSON, setEntriesForJSON] = useState(allentries)
	type Form = Entry
	const { control, handleSubmit, formState } = useForm<Form>({
		defaultValues: prop.defaultValues,
	})
	const realtimeUseWatchValue = useWatch({ control })
	const [dedupedEntryMap, setDedupedEntryMap] = useAtom(dedupedEntryMapAtom)
	const [isCheckboxEnable, setIsCheckboxEnable] = useState(false)
	type AddButtonContent = "add" | "update"
	const [addButtonContent, setAddButtonContent] = useState<AddButtonContent>("add")
	const [openTip, setOpenTip] = useState<TooltipOperationBools>(defaultTooltipOperationBools)
	const useWatchValue = useDebounce(atomSearchDelay, realtimeUseWatchValue)

	useEffect(() => {
		const newe: Entry = {
			from: useWatchValue.from ?? newForm.from,
			to: useWatchValue.to ?? newForm.to,
			ic: useWatchValue.ic ?? newForm.ic,
			mw: useWatchValue.mw ?? newForm.mw,
			sc: useWatchValue.sc ?? newForm.sc,
		}
		setatomInputtingEntry(newe)
		setIsCheckboxEnable(!!newe.from.match(/.*[a-zA-Z].*/))
		const to = get_by_entry(dedupedEntryMap)(newe)
		if (typeof to == "string") {
			setMessage(s => ({ ...s, alreadyExist: translationTree.confirm.alreadyExist[lang] }))
			setAddButtonContent("update")
			setatomMatchingEntry({ ...newe, to })
		} else {
			setMessage(s => ({ ...s, alreadyExist: "" }))
			setAddButtonContent("add")
			setatomMatchingEntry(newe)
		}
	}, [useWatchValue, allentries])

	const addEntry = (f: Form) => {
		// console.log("addEntry called")
		// console.log("atomNextEntryId", atomNextEntryId)
		const { to, ...fkey } = f
		const key = JSON.stringify(fkey)
		const matchedEntry = atomMatchingEntry
		const hasDeleted = dedupedEntryMap.delete(key) //削除しておくことで更新した項目が上に来る
		dedupedEntryMap.set(key, to)
		if (hasDeleted) {
			console.log("updated ", matchedEntry)
			console.log("to", `"${to}"`)
			setMessage(s => ({
				...s,
				operation: translationTree.tooltip.operation.update(f.from, matchedEntry.to)(f.to)[lang],
			}))
			console.log("atomEntryIdDedupedMap:", atomEntryIdDedupedMap)

			setatomIndex(
				indexes =>
					caseUndefined(atomEntryIdDedupedMap.get(key))(
						targetid => ({
							from: indexes.from.map(index =>
								modifyNgramData(
									data => {
										data.delete(targetid)
										return data
									}
									// new Map(
									// 	list_modify([...data.entries()])(
									// 		([id, posi]) => id == targetid,
									// 		([id, positions]) => [targetid, positions]
									// 	)
									// )
								)(index)
							),
							to: indexes.to.map(index =>
								ngramIndexing(deleteEntriesFromIndex([targetid])(index))(atomNextEntryId, to)
							),
						}),
						indexes
					)
				// const updater = updateIndexList(key)(indexes, matchedEntry, atomEntryIdDedupedMap)
				// return {
				//   from: updater("from"),
				//   to: updater("to", {
				//     id: atomNextEntryId,
				//     text: to,
				//   }),
				// }
			)
		} else {
			console.log("added:", f)
			setMessage(s => ({
				...s,
				operation: translationTree.tooltip.operation.add(f.from, f.to)[lang],
			}))
		}
		setatomIndex(indexes => ngramIndexingEntry(atomNextEntryId, indexes)(f))
		setatomEntryIdDedupedMap(m => {
			m.set(key, atomNextEntryId)
			return new Map([...m.entries()])
		})
		setatomNextEntryId(i => i + 1)
		const array = Array.from(dedupedEntryMap)
		const map = new Map(array)
		setDedupedEntryMap(map)
		const newEntries = array.map(k => keyvalueToEntry(k))
		setAllEntries(newEntries)
		setEntriesForJSON(newEntries)
	}

	const deleteEntry = (f: Form) => {
		const { to, ...fkey } = f
		const key = JSON.stringify(fkey)
		const hasDeleted = dedupedEntryMap.delete(key)
		if (hasDeleted) {
			console.log("deleted:", matchingEntryAtom)
			setMessage(s => ({
				...s,
				operation: translationTree.tooltip.operation.delete(f.from, f.to)[lang],
			}))
			setatomEntryIdDedupedMap(m => {
				m.delete(key)
				return new Map([...m.entries()])
			})
			setatomIndex(indexes => {
				const upd = updateIndexList(key)(indexes, atomMatchingEntry, atomEntryIdDedupedMap)
				return {
					from: upd("from"),
					to: upd("to"),
				}
			})
		} else {
			console.log("failed to delete")
			setMessage(s => ({ ...s, operation: translationTree.tooltip.fail("delete")[lang] }))
		}

		const array = Array.from(dedupedEntryMap)
		const map = new Map(array)
		setDedupedEntryMap(map)
		const newEntries = array.map(k => keyvalueToEntry(k))
		setAllEntries(newEntries)
		setEntriesForJSON(newEntries)
	}

	const checkbox = function CheckboxWrapper(name: keyof Form) {
		return (
			<FormControlLabel
				control={
					<Controller
						name={name}
						control={control}
						render={({ field }) => (
							<Checkbox
								{...field}
								size="small"
								checked={!!field.value}
								disabled={name == "mw" ? undefined : !isCheckboxEnable}
							/>
						)}
					/>
				}
				label={entryAttributeReadable(lang)(name)}
			/>
		)
	}

	const handleClick =
		// : MouseEventHandler<HTMLButtonElement> = e =>
		(name: keyof TooltipOperationBools) => {
			const entry: Entry = {
				from: useWatchValue.from ?? newForm.from,
				to: useWatchValue.to ?? newForm.to,
				ic: useWatchValue.ic ?? newForm.ic,
				mw: useWatchValue.mw ?? newForm.mw,
				sc: useWatchValue.sc ?? newForm.sc,
			}
			setOpenTip(s => ({ ...defaultTooltipOperationBools, [name]: true }))
			if (name == "add") {
				addEntry(entry)
			} else if (name == "delete") {
				deleteEntry(entry)
			}
		}

	const tooltip = function ToolTipWrap(name: keyof TooltipOperationBools) {
		return (
			<Tooltip
				arrow
				open={!!openTip[name]}
				onClose={() => setOpenTip(s => ({ ...s, [name]: false }))}
				disableHoverListener
				placement="top"
				title={
					name == "add"
						? addButtonContent == "update"
							? translationTree.tooltip.operation.update(
									atomMatchingEntry.from,
									atomMatchingEntry.to
							  )(atomInputtingEntry.to)[lang]
							: translationTree.tooltip.operation.add(atomMatchingEntry.from, atomMatchingEntry.to)[
									lang
							  ]
						: translationTree.tooltip.operation.delete(
								atomMatchingEntry.from,
								atomMatchingEntry.to
						  )[lang]
				}>
				<Button variant="contained" onClick={e => handleClick(name)}>
					{name == "add" ? translationTree[addButtonContent][lang] : translationTree.delete[lang]}
				</Button>
			</Tooltip>
		)
	}

	return (
		<>
			<Box component={"form"} onSubmit={handleSubmit(addEntry)}>
				<Box
					component={"div"}
					// sx={{
					//   opacity: isCheckboxEnable?1: 0.5
					// }}
				>
					{[checkbox("ic"), checkbox("sc"), checkbox("mw")]}
				</Box>

				<Controller
					control={control}
					name="from"
					rules={{
						required: translationTree.form.rules.required[lang],
					}}
					render={({ field }) => (
						<TextField
							{...field}
							variant="standard"
							size="small"
							label={readableAttr("from")}
							error={!!formState.errors.from}
							helperText={
								(formState.errors.from && formState.errors.from.message) ||
								(!formState.isValid && translationTree.form.helperText.invalid[lang])
							}
						/>
					)}
				/>
				<Controller
					control={control}
					name="to"
					render={({ field }) => (
						<TextField
							{...field}
							variant="standard"
							size="small"
							label={readableAttr("to")}
							error={!!formState.errors.to}
							helperText={
								(formState.errors.to && formState.errors.to.message) ||
								(!formState.isValid && "invalid")
							}
						/>
					)}
				/>

				<Button
					type="submit"
					sx={{
						display: "none",
					}}>
					{translationTree.add[lang]}
				</Button>
				{[tooltip("add"), tooltip("delete")]}
			</Box>
			<MessageBox {...message} />
		</>
	)
}

const Output: FC = () => {
	const [allentries] = useAtom(allentriesAtom)
	return <></>
}

type MessageBoxProps = {
	alreadyExist: string
	operation: string
}
const MessageBox: FC<MessageBoxProps> = ms => (
	<Box className="messages">
		{Object.entries(ms).map(([k, m]) => (
			<div key={k}>{m}</div>
		))}
	</Box>
)

export default RecycleForm
