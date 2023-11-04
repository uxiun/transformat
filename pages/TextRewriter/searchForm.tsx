import { searchDelayAtom, uilanguageAtom } from "@/ts/atom"
import { useDebounce } from "@/ts/hook"
import { translationTree } from "@/ts/lang"
import { SimilarForm, defaultSimilarForm } from "@/ts/type"
import { Box, TextField } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useEffect, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"

const SearchForm: FC = () => {
	const [atomSearchDelay, setAtomSearchDelay] = useAtom(searchDelayAtom)
	const [atomUIlanguage] = useAtom(uilanguageAtom)

	const { control, register } = useForm<SimilarForm>({
		defaultValues: defaultSimilarForm,
	})
	const useWatchValue = useWatch({ control })
	const [focusing, setFocusing] = useState(false)

	useEffect(() => {
		setAtomSearchDelay(useWatchValue.delay ?? defaultSimilarForm.delay)
	}, [useWatchValue, setAtomSearchDelay])

	return (
		<Box>
			<Controller
				control={control}
				name="delay"
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						type="number"
						size="small"
						label={translationTree.searchDelay.label[atomUIlanguage]}
						ref={register("delay").ref}
						onFocus={() => setFocusing(f => !f)}
						onBlur={() => setFocusing(f => !f)}
						helperText={focusing && translationTree.searchDelay.help[atomUIlanguage]}
					/>
				)}
			/>
		</Box>
	)
}

export default SearchForm
