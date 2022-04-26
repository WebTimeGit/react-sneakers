import styles          from './Drawer.module.scss'
import { ICard }       from '../../interfaces'
import { DrawerProps } from './Drawer.props'


const Drawer = ({ onClickCloseCart, items, onRemoveCartItem }: DrawerProps) => {
	return (
		<div className={ styles.drawer_overlay }>
			<div className={ styles.drawer }>
				<div className={ styles.drawer_top }>
					<h2>
						Корзина
						<span className='item__remove' onClick={ onClickCloseCart }>
                            <span></span>
                            <span></span>
                        </span>
					</h2>
				</div>

				<div className={ styles.drawer_body }>

					{ items.map((obj: ICard, i: number) => (
						<div className={ styles.cart_item } key={ i }>
							<div className={ styles.cart_item__img }>
								<img src={ obj.imgUrl } alt='image'/>
							</div>
							<div className={ styles.cart_item__info }>
								<h5 className={ styles.cart_item__title }>{ obj.title }</h5>
								<span className={ styles.cart_item__price }><b>{ obj.price } руб.</b></span>
							</div>
							<div className='item__remove' onClick={ () => onRemoveCartItem(obj.id) }>
								<span></span>
								<span></span>
							</div>
						</div>
					)) }


				</div>

				<div className={ styles.drawer_bottom }>
					<div className={ styles.drawer_bottomBox }>
						<span>Итого:</span>
						<span className={ styles.dashedLine }></span>
						<span><b>21 498 руб.</b></span>
					</div>
					<div className={ styles.drawer_bottomBox }>
						<span>Налог 5%:</span>
						<span className={ styles.dashedLine }></span>
						<span><b>1074 руб.</b></span>
					</div>

					<div className={ `${ styles.drawer_btn } btn btn_green` }>
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