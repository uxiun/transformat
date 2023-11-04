import { defaultSearchDelay } from "./atom"

export type LimitN = {
	limit: number
}

export type SimilarForm = {
	delay: number
}

export const defaultSimilarForm: SimilarForm = {
	delay: defaultSearchDelay,
}
