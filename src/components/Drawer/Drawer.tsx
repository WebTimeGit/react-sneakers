import React from 'react'


const Drawer = () => {
	return (
		<div className='drawer_overlay' style={ { display: 'none' } }>
			<div className='drawer'>
				<div className='drawer_top'>
					<h2>
						Корзина
						<span className='cart_item__remove'>
                            <span></span>
                            <span></span>
                        </span>
					</h2>
				</div>

				<div className='drawer_body'>
					<div className='cart_item'>
						<div className='cart_item__img'>
							<img src='img/sneakers/1.jpg' alt='image'/>
						</div>
						<div className='cart_item__info'>
							<h5 className='cart_item__title'>Мужские Кроссовки Nike Air Max 270</h5>
							<span className='cart_item__price'><b>12 999 руб.</b></span>
						</div>
						<div className='cart_item__remove'>
							<span></span>
							<span></span>
						</div>
					</div>

					<div className='cart_item'>
						<div className='cart_item__img'>
							<img src='img/sneakers/1.jpg' alt='image'/>
						</div>
						<div className='cart_item__info'>
							<h5 className='cart_item__title'>Мужские Кроссовки Nike Air Max 270</h5>
							<span className='cart_item__price'><b>12 999 руб.</b></span>
						</div>
						<div className='cart_item__remove'>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>

				<div className='drawer_bottom'>
					<div className='drawer_bottomBox'>
						<span>Итого:</span>
						<span className='dashedLine'></span>
						<span><b>21 498 руб.</b></span>
					</div>
					<div className='drawer_bottomBox'>
						<span>Налог 5%:</span>
						<span className='dashedLine'></span>
						<span><b>1074 руб.</b></span>
					</div>

					<div className='btn btn_green drawer_btn'>
						Оформить заказ
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white"
								/* eslint-disable-next-line no-mixed-spaces-and-tabs */
								  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Drawer