import React, { FC, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { toListIndentedFormat } from "@/ts/ts/parse";
import { Box, TextField } from "@mui/material"
const ParseForm: FC = () => {
  type Form = {
    text: string
  }
  const {control} = useForm<Form>({
    defaultValues: {
      text: ""
    }
  })
  const useWatchValue = useWatch({control})
  const [parseResult, setParseResult] = useState("")
  const onchange = (str: string) => {
    const parsed = toListIndentedFormat("   ")(str)
    // console.log("parsed=", parsed)
    setParseResult(JSON.stringify(parsed))
  }
  useEffect(()=>{
    onchange(useWatchValue.text ?? "")
  }, [useWatchValue])

  return (<>
    <Box
      component={"form"}
    >
      <Controller
        control={control}
        name="text"
        render={(props)=> (
          <TextField
            {...props}
            label="source"
          />
        )}
      />
    </Box>
    <Box>
      {parseResult}
    </Box>
  </>
  )
}

export default ParseForm