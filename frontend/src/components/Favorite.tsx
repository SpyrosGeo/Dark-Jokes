import {FC} from 'react'
import { FavoriteProps } from '../utils/Interfaces'
const   Favorite:FC<FavoriteProps>=({favorite})=> {
	const { setup,delivery} = favorite;
	return (
		<div>
		<h1>Random Favorite Joke</h1>	
		<div className="container">
			<p className="_setup">{setup}</p>
			<p className="_punchline">{delivery}</p>
		</div>
		</div>
	)
}
export default Favorite;