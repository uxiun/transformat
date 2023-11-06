import { SearchConfig, defaultSearchConfig, searchConfigAtom, uilanguageAtom } from "@/ts/atom"
import { useDebounce } from "@/ts/hook"
import { translationTree } from "@/ts/lang"
import { fallback } from "@/ts/ts/map"
import { Box, TextField } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useEffect, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"

const SearchForm: FC = () => {
	const [atomSearchConfig, setAtomSearchConfig] = useAtom(searchConfigAtom)
	const [atomUIlanguage] = useAtom(uilanguageAtom)

	const { control, register } = useForm<SearchConfig>({
		defaultValues: defaultSearchConfig,
	})
	const useWatchValue = useDebounce(300, useWatch({ control }))
	const defaultFocusState = {
		delay: false,
		maxShowNumber: false,
	}
	const [focusing, setFocusing] = useState(defaultFocusState)

	useEffect(() => {
		const m = useWatchValue.maxShowNumber ?? defaultSearchConfig.maxShowNumber
		setAtomSearchConfig({
			...atomSearchConfig,
			delay: useWatchValue.delay ?? defaultSearchConfig.delay,
			maxShowNumber: m,
			// fallback(n => n < 0, 0)(m),
		})
	}, [useWatchValue, setAtomSearchConfig, atomSearchConfig])

	const width = 120
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
						sx={{ width }}
						label={translationTree.searchConfig.searchDelay.label[atomUIlanguage] + " [ms]"}
						ref={register("delay").ref}
						onFocus={() => setFocusing(f => ({ ...f, delay: !f.delay }))}
						onBlur={() => setFocusing(f => ({ ...f, delay: !f.delay }))}
						helperText={
							focusing.delay && translationTree.searchConfig.searchDelay.help[atomUIlanguage]
						}
					/>
				)}
			/>
			<Controller
				control={control}
				name="maxShowNumber"
				rules={{
					min: 0,
				}}
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						type="number"
						size="small"
						sx={{ width }}
						label={translationTree.searchConfig.maxNumberlabel[atomUIlanguage]}
						onFocus={() => setFocusing(f => ({ ...f, maxShowNumber: !f.maxShowNumber }))}
						onBlur={() => setFocusing(f => ({ ...f, maxShowNumber: !f.maxShowNumber }))}
						helperText={
							focusing.maxShowNumber && translationTree.searchConfig.maxNumberlabel[atomUIlanguage]
						}
					/>
				)}
			/>
		</Box>
	)
}

export default SearchForm
