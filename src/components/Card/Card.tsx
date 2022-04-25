import React from 'react'


const Card = () => {
	return (
		<div className='product_card'>
			<div className='product_cardWish'>
				<img src='img/heart_liked.svg' alt='icon'/>
			</div>
			<div className='product_cardImg'>
				<img src='img/sneakers/1.jpg' alt='image'/>
			</div>
			<h4 className='product_cardTitle'>
				Мужские Кроссовки Nike Blazer Mid Suede
			</h4>
			<div className='product_cardBottom'>
				<div className='product_cardPrice'>
					<span>Цена:</span><br/>
					12 999 руб.
				</div>
				<div className='product_cardAdd'>
					<img src='img/btn_plus.svg' alt='icon'/>
				</div>
			</div>
		</div>
	)
}

export default Card