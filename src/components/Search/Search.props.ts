import { ChangeEvent } from 'react'


export interface ISearch {
	searchValue: string
	onSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
	resetInput: () => void
}