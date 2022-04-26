import styles        from './Card.module.scss'
import { useState }  from 'react'
import { CardProps } from './Card.props'


const Card = ({ title, price, imgUrl, onPlus, onFavorite, id }: CardProps): JSX.Element => {

	const [ isAdded, setIsAdded ] = useState(false)
	const [ isFavorite, setFavorite ] = useState(false)

	const handleAddCart = () => {
		onPlus()
		setIsAdded(!isAdded)
	}

	const handleFavorite = () => {
		onFavorite()
		setFavorite(!isFavorite)
	}

	return (
		<div className={ styles.product_card }>
			<div className={ styles.product_cardWish } onClick={ handleFavorite }>
				<img src={ isFavorite ? 'img/heart_liked.svg' : 'img/heart_unliked.svg' } alt='icon'/>
			</div>
			<div className={ styles.product_cardImg }>
				<img src={ imgUrl } alt={ title }/>
			</div>
			<h4 className={ styles.product_cardTitle }>
				{ title }
			</h4>
			<div className={ styles.product_cardBottom }>
				<div className={ styles.product_cardPrice }>
					<span>Цена:</span><br/>
					{ price } руб.
				</div>
				<div className={ styles.product_cardAdd } onClick={ handleAddCart }>
					<img src={ isAdded ? 'img/btn_checked.svg' : 'img/btn_plus.svg' } alt='icon'/>
				</div>
			</div>
		</div>
	)
}

export default Card