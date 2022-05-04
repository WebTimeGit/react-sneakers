import { Header }                           from './components/Header'
import { Drawer }                           from './components/Drawer'
import { ChangeEvent, useEffect, useState } from 'react'
import { ICard }                            from './interfaces'
import endpoints                            from './api/api'
import Catalog                              from './components/Catalog/Catalog'
import { Routes, Route }                    from 'react-router-dom'
import Home                                 from './Pages/Home/Home'
import Favorites                            from './Pages/Favorites/Favorites'


function App() {
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ items, setItems ] = useState<ICard[]>([])
	const [ cartItems, setCartItems ] = useState<ICard[]>([])
	const [ favoritesItems, setFavoritesItems ] = useState<ICard[]>([])
	const [ searchValue, setSearchValue ] = useState<string>('')


	useEffect(() => {
		const getItems = async () => {

			const getSneakers = await endpoints.getSneakers()
			// const getCartItems = await endpoints.getCartItems()
			setItems(getSneakers.data)
			// setCartItems(getCartItems.data)

			await endpoints.getCartItems()
				.then(resp => setCartItems(resp.data))
				.catch(() => setCartItems([]))

		}
		getItems()
	}, [])


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
			const postToCartItem = await endpoints.postToCartItem(obj)
			setCartItems(prev => [ ...prev, postToCartItem.data ])
		}
		catch ( e ) {
			console.log(e)
		}
	}

	const onRemoveCartItem = async (id: number) => {
		try {
			const deleteCartItem = await endpoints.deleteCartItem(id)
			setCartItems(prev => prev.filter(item => item.id !== deleteCartItem.data.id))
		}
		catch ( e ) {
			console.log(e)
		}
	}

	const onAddToFavorite = async (obj: ICard) => {
		try {
			const postToFavoritesItem = await endpoints.postToFavoriteItem(obj)
			setFavoritesItems(prev => [ ...prev, postToFavoritesItem.data ])
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
				<Routes>
					<Route path="/" element={ <Home/> }/>
					<Route path="/catalog" element={
						<Catalog
							onAddToFavorite={ onAddToFavorite }
							sneakers={ items }
							onAddToCart={ onAddToCart }
							searchValue={ searchValue }
							onSearchInput={ onSearchInput }
							resetInput={ resetInput }/>
					}/>
					<Route path='/favorites' element={
						<Favorites
							favoritesItems={ favoritesItems }
						/>
					}/>
				</Routes>
			</main>
		</div>
	)
}

export default App
