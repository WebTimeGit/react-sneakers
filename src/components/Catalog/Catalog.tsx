import { ICard }    from '../../interfaces'
import { Card }     from '../Card'
import { ICatalog } from './Catalog.props'
import Search       from '../Search/Search'
import styles       from './Catalog.module.scss'


const Catalog = ({ sneakers, onAddToCart, searchValue, onSearchInput, resetInput, onAddToFavorite }: ICatalog) => {
	return (
		<div className={ styles.catalogWr }>
			<div className={ styles.catalog_header }>
				<h1 className='main_title'>{ searchValue ? `search: ${ searchValue }` : 'Все кроссовки' }</h1>
				<Search searchValue={ searchValue } onSearchInput={ onSearchInput } resetInput={ resetInput }/>
			</div>
			<div className={ styles.catalog }>
				{
					sneakers
						.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((card: ICard, i: number) => {
							return (
								<Card
									title={ card.title }
									price={ card.price }
									imgUrl={ card.imgUrl }
									onFavorite={ () => onAddToFavorite(card) }
									onPlus={ () => onAddToCart(card) }
									key={ i }
									id={ card.id }
								/>
							)
						})
				}
			</div>
		</div>
	)
}

export default Catalog