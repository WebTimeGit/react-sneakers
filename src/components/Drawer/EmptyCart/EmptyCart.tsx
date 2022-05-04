import React              from 'react'
import styles             from './EmptyCart.module.scss'
import { EmptyCartProps } from './EmptyCart.props'


const EmptyCart = ({ onClickCloseCart }: EmptyCartProps) => {
	return (
		<div className={ styles.cartEmpty }>
			<picture>
				<img src='img/cart_empty.png' alt='image'/>
			</picture>
			<h2 className='main_title'>Корзина пустая</h2>
			<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
			<div className={ `${ styles.btn } btn btn_green` } onClick={ onClickCloseCart }>
				<svg
					className='left'
					width="16" height="14"
					viewBox="0 0 16 14" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
				<span>Оформить заказ</span>
			</div>
		</div>
	)
}

export default EmptyCart