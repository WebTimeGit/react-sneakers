import React               from 'react'
import { Link }            from 'react-router-dom'
import { IFavoritesProps } from './Favorites.props'
import { ICard }           from '../../interfaces'
import { Card }            from '../../components/Card'
import styles              from './Favorites.module.scss'


const Favorites = ({ favoritesItems }: IFavoritesProps) => {

	return (
		<div>
			<h1 className='main_title'>Мои закладки</h1>
			<Link to="/catalog">catalog</Link>
			<br/>
			<br/>
			Favorites
			<div className={ styles.catalog }>
				{
					favoritesItems.map((card: ICard, i: number) => {
						return (
							<Card
								title={ card.title }
								price={ card.price }
								imgUrl={ card.imgUrl }
								onFavorite={ () => console.log('favorite') }
								onPlus={ () => console.log('cart') }
								key={ i }
								id={ card.id }
								favorited={ true }
							/>
						)
					})
				}
			</div>

		</div>
	)
}

export default Favorites