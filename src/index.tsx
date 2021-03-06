import React                       from 'react'
import ReactDOM                    from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App                         from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
const rootElement = document.getElementById('root')
if ( !rootElement ) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Router>
			<App/>
		</Router>
	</React.StrictMode>
)
