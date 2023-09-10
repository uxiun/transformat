import {
  Entry,
  EntryBoolKey,
  FromToObj,
  allentriesAtom,
  dedupedEntryMapAtom,
  entryIdDedupedMapAtom,
  getDedupKeyById,
  getLengthMap,
  inputtingEntryAtom,
  newEntryAtom,
  ngramIndexesForEntryAtom,
  searchDelayAtom,
  uilanguageAtom,
} from "@/ts/atom"
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useAtom } from "jotai"
import React, { FC, ReactEventHandler, useEffect, useMemo, useState } from "react"
import RecycleForm from "./recycleForm"
import { concernLength, ngramScoreMap } from "@/ts/ts/text"
import { caseUndefined, mapUnions, mapUnionsToAverage } from "@/ts/ts/map"
import { LimitN, SimilarForm, defaultSimilarForm } from "@/ts/type"
import { translationTree } from "@/ts/lang"
import { ketaDirty, ketaDirtyDisplay } from "@/ts/ts/number"
import { Controller, useForm, useWatch } from "react-hook-form"
import { useDebounce } from "@/ts/hook"
import SearchForm from "./searchForm"
import { spacecss } from "@/ts/css"

const Entries: FC = () => {
  return (
    <div className="lists">
      <RecentEntries limit={2} />
      <SimilarEntries maxShowNumber={10} />
    </div>
  )
}

const RecentEntries: FC<LimitN> = ({ limit }) => {
  const [newEntry] = useAtom(newEntryAtom)
  const [allentries, setAllEntries] = useAtom(allentriesAtom)
  return (
    <>
      <div className="entries">
        {allentries
          .slice(-limit)
          .reverse()
          .map(e => (
            <div key={JSON.stringify(e)}>{JSON.stringify(e)}</div>
          ))}
      </div>
    </>
  )
}

// const AutocompleteForm: FC = () => {
//   const [allentries] = useAtom(allentriesAtom)
//   // const [inputting] = useAtom(inputtingEntryAtom)
//   const [formvalue, setFormvalue] = useState

// }

type SimilarEntriesProp = {
  maxShowNumber: number
  allowDiffMax?: number
}
const SimilarEntries: FC<SimilarEntriesProp> = prop => {
  const [allentries, setAllEntries] = useAtom(allentriesAtom)
  const [inputting] = useAtom(inputtingEntryAtom)
  const [atomIndex] = useAtom(ngramIndexesForEntryAtom)
  const [atomEntryIdDedupedMap] = useAtom(entryIdDedupedMapAtom)
  const [atomDedupedMap] = useAtom(dedupedEntryMapAtom)
  const [atomUIlanguage] = useAtom(uilanguageAtom)

  const [showPoint, setShowPoint] = useState(false)

  const lengthmaps = getLengthMap(atomEntryIdDedupedMap, atomDedupedMap)

  const ngramScoreMap_concernLength = (fromto: keyof FromToObj) =>
    concernLength(
      mapUnionsToAverage(
        atomIndex[fromto].map(index => {
          const ngramScored = ngramScoreMap(index)(inputting[fromto])
          // console.log(`ngramScored${index.n}`, ngramScored)
          return ngramScored
        })
      )
    )(inputting[fromto].length, lengthmaps[fromto])

  const similarfrom = useMemo(() => {
    // console.log("atom index", atomIndex)
    const scored = ngramScoreMap_concernLength("from")
    // console.log("scored", scored)
    return [...scored.entries()].sort((d, f) => f[1] - d[1]).slice(0, prop.maxShowNumber)
  }, [allentries, inputting.from])
  const similarto = useMemo(() => {
    const scored = ngramScoreMap_concernLength("to")
    return [...scored.entries()].sort((d, f) => f[1] - d[1]).slice(0, prop.maxShowNumber)
  }, [allentries, inputting.to, inputting.from])

  const similarCalc = {
    from: similarfrom,
    to: similarto,
  }
  const cssflexCenter = {
    display: "flex",
    alignItems: "center",
  }

  const similarList = (fromto: keyof FromToObj) =>
    function listfunc() {
      return (
        <Box>
          <Typography variant="h5">{fromto} </Typography>
          <Box>
            {similarCalc[fromto].map(([id, score]) => {
              // console.log("atomEntryIdDedupedMap", atomEntryIdDedupedMap)
              const fkey = getDedupKeyById(id, atomEntryIdDedupedMap)
              return fkey === undefined ? (
                <Box>cannot get id</Box>
              ) : (
                <Box {...cssflexCenter}>
                  {showPoint ? `${ketaDirtyDisplay("round", 5)(score)}` : ``}
                  {caseUndefined(atomDedupedMap.get(fkey ?? ""))(v => {
                    const e: Entry = { ...JSON.parse(fkey), to: v }
                    return <EachEntry entry={e} />
                  }, <Box>stringified key not found</Box>)}
                </Box>
              )
            })}
          </Box>
        </Box>
      )
    }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          ...spacecss.similarForm,
        }}>
        <Box fontSize={"2em"}>{translationTree.headerTitle.list.similar[atomUIlanguage]}</Box>
        <Box
          sx={{
            display: "flex",
            paddingX: 2,
          }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!showPoint}
                onChange={() => setShowPoint(d => !d)}
                value="showPoint"
              />
            }
            label={translationTree.showPoint[atomUIlanguage]}
          />
          <SearchForm />
        </Box>
      </Box>
      <Box>{[similarList("from")(), similarList("to")()]}</Box>
    </Box>
  )
}

// type DisplayEntryByIdProp = {
//   id: number
// }
// const DisplayEntryById: FC<DisplayEntryByIdProp> = ({id}) => {

// }

type ToggledEntryView = { entry: Entry; hideMe: () => void }
const EntryView: FC<PropEntry> = ({ entry }) => {
  const checkboxAlterTypo = function TypoWrap(label: EntryBoolKey) {
    return (
      <Box
        sx={{
          marginLeft: 1,
          opacity: entry[label] ? 1 : 0.5,
        }}
        key={label}>
        {label}
      </Box>
    )
  }
  return (
    <Box
      sx={{
        display: "flex",
      }}>
      <Box>{entry.from}</Box>
      <Typography
        sx={{
          opacity: 0.5,
        }}>
        →
      </Typography>
      <Box>{entry.to}</Box>
      <Box display={"flex"}>
        {(["ic", "sc", "mw"] as EntryBoolKey[]).map(k => checkboxAlterTypo(k))}
      </Box>
    </Box>
  )
}
type PropEntry = {
  entry: Entry
}
const EachEntry: FC<PropEntry> = ({ entry }) => {
  const [formVisible, setFormVisible] = useState(false)

  return (
    <Box display={"flex"} alignItems={"center"}>
      <IconButton
        size="small"
        onClick={() => {
          setFormVisible(s => !s)
        }}>
        <EditIcon fontSize="small" />
      </IconButton>
      {formVisible ? (
        <RecycleForm hideMe={() => setFormVisible(false)} defaultValues={entry} />
      ) : (
        <EntryView entry={entry} />
      )}
    </Box>
  )
}

export default Entries
