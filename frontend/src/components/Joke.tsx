import React,{FC}from 'react'
import "./Joke.css"
import { JokeProps } from '../utils/Interfaces';

 const Joke: FC<JokeProps> = ({joke})=> {
	const {setup,delivery} = joke;
	return (
		<div className="joke-container">
		<p className="setup">{setup}</p>	
		<p className="delivery">{delivery}</p>	
		</div>
	)
}

export default Joke