import { ICard } from '../../interfaces'


export interface DrawerProps {
	onClickCloseCart: () => void
	onRemoveCartItem: (id: number) => void
	items: ICard[]
}