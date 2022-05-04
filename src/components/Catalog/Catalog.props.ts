import { ICard }       from '../../interfaces'
import { ChangeEvent } from 'react'


export interface ICatalog {
	onAddToFavorite: (obj: ICard) => void
	sneakers: ICard[]
	onAddToCart: (obj: ICard) => void
	searchValue: string
	onSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
	resetInput: () => void
}