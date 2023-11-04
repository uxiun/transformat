import { Lang, defaultLanguage, uilanguageAtom } from "@/ts/atom"
import { translationTree } from "@/ts/lang"
import { Autocomplete, Box, Button, TextField, ToggleButton } from "@mui/material"
import { useAtom } from "jotai"
import { FC, useState } from "react"
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import { Controller, useForm, useWatch } from "react-hook-form"
import styles from "./info.module.css"

type LangForm = {
	lang: Lang
}

const InfoComponent: FC = () => {
	const [show, setShow] = useState(true)
	const [lang, setLang] = useAtom(uilanguageAtom)
	console.info("InfoComponent(), lang=", lang)
	const { control, handleSubmit, formState, getValues } = useForm<LangForm>({
		defaultValues: { lang },
	})
	const useWatchValue = useWatch({ control })
	const [formValue, setFormValue] = useState(lang)

	const options = [...Object.entries(translationTree.form.languages)].map(([value, label]) => value)

	const onSubmit = (f: LangForm) => {
		// const v: Lang = langs.find(o => o.label == f.lang)?.value ?? defaultLanguage
		// setLang(v)
		// setLang(f.lang)
	}
	return (
		<div className={styles.flex}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Autocomplete
					value={formValue}
					options={options}
					// autoSelect
					sx={{
						width: 200,
					}}
					onChange={(e, va) => {
						// e.preventDefault()
						// const v = getValues("lang")
						setFormValue((va as Lang) ?? defaultLanguage)
						setLang(va as Lang)
					}}
					renderOption={(ps, op) => (
						<Box component="li" {...ps}>{`${op} ${
							translationTree.form.languages[op as Lang]
						}`}</Box>
					)}
					renderInput={params => <TextField {...params} label={translationTree.language[lang]} />}
				/>
				{/* <Controller
					control={control}
					name="lang"
					render={({ field }) => (
						<Autocomplete
							{...field}
							options={options}
							// autoSelect
							sx={{
								width: 300,
							}}
							onChange={(e, va) => {
								e.preventDefault()
								const v = getValues("lang")
								setLang(v as Lang)
							}}
							renderOption={(ps, op) => (
								<Box component="li" {...ps}>{`${op} ${
									translationTree.form.languages[op as Lang]
								}`}</Box>
							)}
							renderInput={params => (
								<TextField {...params} label={translationTree.language[lang]} />
							)}
						/>
					)}></Controller> */}
			</form>
			<div>
				<Button
					// value={"check"}
					// selected={!show}
					onClick={() => setShow(!show)}
					startIcon={show ? <ExpandMoreOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}>
					{translationTree.infobutton[lang]}
				</Button>
			</div>
			<div>
				{show
					? [...Object.entries(translationTree.info)].map((o, i) => <p key={i}>{o[1][lang]}</p>)
					: ""}{" "}
			</div>
		</div>
	)
}

export default InfoComponent
