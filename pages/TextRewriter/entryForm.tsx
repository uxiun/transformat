import validator from "validator";
import { Entry, TooltipOperationBools, allentriesAtom, dedupEntries, dedupedEntryMapAtom, defaultEntry, defaultTooltipOperationBools, entryAttributeReadable, entryIdDedupedMapAtom, get_by_entry, inputtingEntryAtom, keyvalueToEntry, matchingEntryAtom, newEntryAtom, nextEntryIdAtom, ngramIndexesForEntryAtom, ngramIndexingEntry, uilanguageAtom } from "@/ts/atom";
import { translationTree } from "@/ts/lang";
import { Box, Button, Checkbox, FormControlLabel, TextField, Tooltip } from "@mui/material";
import { useAtom } from "jotai";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import Entries from "./entries";
import JSONoutput from "./output";
import { ngramIndexing, ngramSegmentify } from "@/ts/ts/text";

const EntryForm: FC = () => {
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
  

  const [entriesForJSON, setEntriesForJSON] = useState(allentries)
  type Form = Entry
  const {control, handleSubmit, formState} = useForm<Form>({
    defaultValues: defaultEntry
  })
  const useWatchValue = useWatch({control})
  const [dedupedEntryMap, setDedupedEntryMap] = useAtom(dedupedEntryMapAtom)
  const [isCheckboxEnable, setIsCheckboxEnable] = useState(false);
  type AddButtonContent = "add"|"update"
  const [addButtonContent, setAddButtonContent] = useState<AddButtonContent>("add");
  const [openTip, setOpenTip] = useState<TooltipOperationBools>(defaultTooltipOperationBools)
  
  useEffect(()=>{
    const newe: Entry = {
      from: useWatchValue.from?? newForm.from,
      to: useWatchValue.to?? newForm.to,
      ic: useWatchValue.ic?? newForm.ic,
      mw: useWatchValue.mw?? newForm.mw,
      sc: useWatchValue.sc?? newForm.sc
    }
    setatomInputtingEntry(newe);
    setIsCheckboxEnable(!!newe.from.match(/.*[a-zA-Z].*/))
    const to = get_by_entry(dedupedEntryMap)(newe)
    if (typeof to=="string") {
      setMessage(s => ({...s, alreadyExist: translationTree.confirm.alreadyExist[lang]}))
      setAddButtonContent("update")
      setatomMatchingEntry({...newe, to})
    } else {
      setMessage(s => ({...s, alreadyExist: ""}))
      setAddButtonContent("add")
      setatomMatchingEntry(newe)
    }
  }, [useWatchValue, allentries])
  const addEntry = (f: Form) => {
    const {to, ...fkey} = f
    const key = JSON.stringify(fkey)
    const matchedEntry = atomMatchingEntry
    const hasDeleted = dedupedEntryMap.delete(key) //削除しておくことで更新した項目が上に来る
    dedupedEntryMap.set(key, to)
    if (hasDeleted) {
      console.log("updated ", matchedEntry)
      console.log("to", `"${to}"`)
      setMessage(s => ({...s, operation: translationTree.tooltip.operation.update(f.from, matchedEntry.to)(f.to)[lang] }) )
      setatomIndex(indexes => ({
        from: indexes.from,
        to: indexes.to.map(index => {
          ngramSegmentify(index.n, matchedEntry.to).forEach(ngram => index.index.delete(ngram))
          return ngramIndexing(index)(atomNextEntryId, to)
        })
      }))
    } else {
      console.log("added:", f);
      setMessage(s => ({...s, operation: translationTree.tooltip.operation.add(f.from, f.to)[lang] }) )
      setatomIndex(indexes => ngramIndexingEntry(atomNextEntryId, indexes)(f))
    }
    setatomEntryIdDedupedMap(m => {
      m.set(key, atomNextEntryId)
      return new Map([...m.entries()])
    })
    setatomNextEntryId(i => i+1)
    const array = Array.from(dedupedEntryMap)
    const map = new Map(array)
    setDedupedEntryMap(map)
    const newEntries = array.map(k => keyvalueToEntry(k))
    setAllEntries(newEntries)
    setEntriesForJSON(newEntries)
  }
  const deleteEntry = (f: Form) => {
    const {to, ...fkey} = f
    const key = JSON.stringify(fkey)
    const hasDeleted = dedupedEntryMap.delete(key)
    if (hasDeleted){
      console.log("deleted:", matchingEntryAtom)
      setMessage(s => ({...s, operation: translationTree.tooltip.operation.delete(f.from, f.to)[lang] }))
      setatomEntryIdDedupedMap(m => {
        m.delete(key)
        return new Map([...m.entries()])
      })
    } else {
      console.log("failed to delete")
      setMessage(s => ({...s, operation: translationTree.tooltip.fail("delete")[lang]}))
    }
    
    const array = Array.from(dedupedEntryMap)
    const map = new Map(array)
    setDedupedEntryMap(map)
    const newEntries = array.map(k => keyvalueToEntry(k))
    setAllEntries(newEntries)
    setEntriesForJSON(newEntries)

  }
  const checkbox = function CheckboxWrapper (name: keyof Form){return (
    <FormControlLabel control={
      <Controller
        name={name}
        control={control} 
        render={({field})=>(
          <Checkbox {...field}
            checked={!!field.value}
            disabled={name=="mw"? undefined: !isCheckboxEnable}
          />
        )}
      />
    }
      label={entryAttributeReadable("en")(name)}
    />
  )}

  const handleClick =
  // : MouseEventHandler<HTMLButtonElement> = e => 
  (name: keyof TooltipOperationBools) => {
    const entry: Entry = {
      from: useWatchValue.from?? newForm.from,
      to: useWatchValue.to?? newForm.to,
      ic: useWatchValue.ic?? newForm.ic,
      mw: useWatchValue.mw?? newForm.mw,
      sc: useWatchValue.sc?? newForm.sc
    }
    setOpenTip(s => ({...defaultTooltipOperationBools, [name]: true}))
    if (name=="add"){
      addEntry(entry)
    } else if (name=="delete"){
      deleteEntry(entry)
    }
  }

  const tooltip = function ToolTipWrap(name: keyof TooltipOperationBools) {
    return(
      <Tooltip
        arrow
        open={!!openTip[name]}
        onClose={()=>setOpenTip(s => ({...s, [name]: false}) )}
        disableHoverListener
        placement="top"
        title={
          name=="add"
          ? (addButtonContent=="update"
          ? translationTree.tooltip.operation.update(atomMatchingEntry.from, atomMatchingEntry.to)(atomInputtingEntry.to)[lang]
          : translationTree.tooltip.operation.add(atomMatchingEntry.from, atomMatchingEntry.to)[lang])
          : (translationTree.tooltip.operation.delete(atomMatchingEntry.from, atomMatchingEntry.to)[lang])
        }
      >
          <Button
            onClick={e => handleClick(name)}
          >
            {name=="add"? translationTree[addButtonContent][lang]: translationTree.delete[lang]}
          </Button>
      </Tooltip>
    )
  }

  return(
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(addEntry)}
      >
        <Box component={"div"}
          // sx={{
          //   opacity: isCheckboxEnable?1: 0.5
          // }}
        >
          {[
            checkbox("ic"),
            checkbox("sc"),
            checkbox("mw"),
          ]}
        </Box>

        <Controller
          control={control}
          name="from"
          rules={{
            required: translationTree.form.rules.required[lang],
          }}
          render={({field})=>(
            <TextField {...field}
              label={readableAttr("from")}
              error={!!formState.errors.from}
              helperText={formState.errors.from && formState.errors.from.message || !formState.isValid && 
              translationTree.form.helperText.invalid[lang]}
            />
          )}/>
        <Controller
          control={control}
          name="to"
          
          render={({field})=>(
            <TextField {...field}
              label={readableAttr("to")}
              error={!!formState.errors.to}
              helperText={formState.errors.to && formState.errors.to.message || !formState.isValid && "invalid"}
            />
          )}/>

        <Button type="submit"
          sx={{
            display: "none"
          }}
        >{translationTree.add[lang]}</Button>
        {[
          tooltip("add"),
          tooltip("delete"),
        ]}
      </Box>
      <MessageBox {...message}/>
    </>
  )

}

const Output: FC = () => {
  const [allentries] = useAtom(allentriesAtom)
  return(
    <></>
  )
}

type MessageBoxProps = {
  alreadyExist: string
  operation: string
}
const MessageBox: FC<MessageBoxProps> = ms => (
  <Box className="messages">
    {Object.entries(ms).map(([k,m])=>(
      <div key={k}>
        {m}
      </div>
    ) )}
  </Box>
)

export default EntryForm