import {FC} from 'react'
import { FavoriteProps } from '../utils/Interfaces'
import "./Favorite.css"
const   Favorite:FC<FavoriteProps>=({favorite})=> {
	const { setup,delivery} = favorite;
	return (
		<div className="">
		<h1>Random Favorite Joke</h1>	
		<div className="favorite-container">
			<p className="_setup">{setup}</p>
			<p className="_punchline">{delivery}</p>
		</div>
		</div>
	)
}
export default Favorite;