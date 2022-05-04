import { Link } from 'react-router-dom'


const Home = () => {
	return (
		<div>
			<Link to="/catalog">catalog</Link>
			<br/>
			<br/>
			Тут будет главная
		</div>
	)
}

export default Home