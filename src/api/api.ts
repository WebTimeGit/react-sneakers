import axios     from 'axios'
import { ICard } from '../interfaces'


const apiInstance = axios.create({
	baseURL: 'https://6266bfb763e0f382568673cf.mockapi.io',
})

const endpoints = {
	getSneakers: () => apiInstance.get('/items'),
	getCartItems: () => apiInstance.get('/cart'),

	postToCartItem: (obj: ICard) => apiInstance.post('/cart', obj),
	postToFavoriteItem: (obj: ICard) => apiInstance.post('/favorites', obj),


	deleteCartItem: (id: number) => apiInstance.delete(`/cart/${ id }`),
}

export default endpoints