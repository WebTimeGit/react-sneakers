import axios                                from 'axios'
import { Card }                             from './components/Card'
import { Header }                           from './components/Header'
import { Drawer }                           from './components/Drawer'
import { ChangeEvent, useEffect, useState } from 'react'
import { ICard }                            from './interfaces'


function App() {

	const [ items, setItems ] = useState<ICard[]>([])
	const [ cartItems, setCartItems ] = useState<ICard[]>([])
	const [ searchValue, setSearchValue ] = useState<string>('')


	useEffect(() => {
		axios.get('https://6266bfb763e0f382568673cf.mockapi.io/items')
			.then(res => setItems(res.data))

		axios.get('https://6266bfb763e0f382568673cf.mockapi.io/cart')
			.then(res => setCartItems(res.data))
	}, [])

	const [ cartOpened, setCartOpened ] = useState(false)

	const onClickOpenCart = () => {
		setCartOpened(true)
		document.body.style.overflow = 'hidden'
	}

	const onClickCloseCart = () => {
		setCartOpened(false)
		document.body.style.overflow = 'auto'
	}

	const onAddToCart = async (obj: ICard) => {
		try {
			await axios.post('https://6266bfb763e0f382568673cf.mockapi.io/cart', obj)
				.then(res => setCartItems(prev => [ ...prev, res.data ]))
		}
		catch ( e ) {
			console.log(e)
		}

	}

	const onRemoveCartItem = async (id: number) => {
		try {
			await axios.delete(`https://6266bfb763e0f382568673cf.mockapi.io/cart/${ id }`)
				.then(resp => setCartItems(prev => prev.filter(item => item.id !== resp.data.id)))
		}
		catch ( e ) {
			console.log(e)
		}
	}

	const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const resetInput = () => {
		setSearchValue('')
	}

	return (
		<div className='wrapper'>
			{ cartOpened && <Drawer
				onClickCloseCart={ onClickCloseCart }
				onRemoveCartItem={ onRemoveCartItem }
				items={ cartItems }
			/> }
			<Header onClickOpenCart={ onClickOpenCart }/>

			<main className='content'>
				<div className='content_header'>
					<h1>{ searchValue ? `search: ${ searchValue }` : 'Все кроссовки' }</h1>
					<label className='default_label default_label__search'>
						<input
							type='text' className='default_input search_input' onChange={ onSearchInput } value={ searchValue }
							placeholder='Поиск...'/>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
								stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
						</svg>
						{ searchValue && <span className='item__remove' onClick={ resetInput }>
                            <span></span>
                            <span></span>
                        </span> }
					</label>
				</div>

				<div className='catalog'>
					{
						items
							.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map((card: ICard, i: number) => {
								return (
									<Card
										title={ card.title }
										price={ card.price }
										imgUrl={ card.imgUrl }
										onFavorite={ () => console.log('wish') }
										onPlus={ () => onAddToCart(card) }
										key={ i }
										id={ card.id }
									/>
								)
							})
					}
				</div>

			</main>
		</div>
	)
}

export default App
