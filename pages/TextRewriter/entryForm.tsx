import { Entry, allentriesAtom, dedupEntries, dedupedEntryMapAtom, defaultEntry, entryAttributeReadable, get_by_entry, keyvalueToEntry, newEntryAtom, uilanguageAtom } from "@/ts/atom";
import { translationTree } from "@/ts/lang";
import { Box, Button, TextField } from "@mui/material";
import { useAtom } from "jotai";
import { FC, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import Entries from "./entries";
import JSONoutput from "./output";


const EntryForm: FC = () => {
  const [message, setMessage] = useState<MessageBoxProps>({
    alreadyExist: ""
  })
  const [lang] = useAtom(uilanguageAtom)
  const [newForm, setNewForm] = useAtom(newEntryAtom)
  const readableAttr = (k: keyof Entry) => entryAttributeReadable(lang)(k)
  const [allentries, setAllEntries] = useAtom(allentriesAtom)
  const [entriesForJSON, setEntriesForJSON] = useState(allentries)
  type Form = Entry
  const {control, handleSubmit, formState} = useForm<Form>({
    defaultValues: defaultEntry
  })
  const useWatchValue = useWatch({control})
  const [dedupedEntryMap, setDedupedEntryMap] = useAtom(dedupedEntryMapAtom)
  useEffect(()=>{
    const newe: Entry = {
      from: useWatchValue.from?? newForm.from,
      to: useWatchValue.to?? newForm.to,
      ic: useWatchValue.ic?? newForm.ic,
      mw: useWatchValue.mw?? newForm.mw,
      sc: useWatchValue.sc?? newForm.sc
    }
    const to = get_by_entry(dedupedEntryMap)(newe)
    console.log("to", to)
    if (to) {
      setMessage(s => ({...s, alreadyExist: translationTree.confirm.alreadyExist[lang]}))
    } else {
      console.log("not already exist")
      setMessage(s => ({...s, alreadyExist: ""}))
    }
  }, [useWatchValue])
  const addEntry = (f: Form) => {
    console.log("addEntry(), Entry=", f)
    const {to, ...fkey} = f
    const key = JSON.stringify(fkey)
    dedupedEntryMap.set(key, to)
    const array = Array.from(dedupedEntryMap)
    const map = new Map(array)
    setDedupedEntryMap(map)
    const newEntries = array.map(k => keyvalueToEntry(k))
    setAllEntries(newEntries)
    setEntriesForJSON(newEntries)
  }
  return(
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(addEntry)}
      >
        <Controller
          control={control}
          name="from"
          rules={{
            required: "input something",
          }}
          render={({field})=>(
            <TextField {...field}
              label={readableAttr("from")}
              error={!!formState.errors.from}
              helperText={formState.errors.from && formState.errors.from.message || !formState.isValid && "invalid"}
            />
          )}/>
        <Controller
          control={control}
          name="to"
          rules={{
            required: "input something",
          }}
          render={({field})=>(
            <TextField {...field}
              label={readableAttr("to")}
              error={!!formState.errors.to}
              helperText={formState.errors.to && formState.errors.to.message || !formState.isValid && "invalid"}
            />
          )}/>

        <Button type="submit">{translationTree.add[lang]}</Button>
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