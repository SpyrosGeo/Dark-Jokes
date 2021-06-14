import React, { FC } from 'react'
import './Selector.css'
interface SelectorProps {

handleChange:(event:React.ChangeEvent<HTMLElement>)=>void
}
const Selector:FC<SelectorProps>=(props):JSX.Element=>{
	const {handleChange} = props;
	return (
		<>
			<select className="selector" name="type" id="" onChange={handleChange}>
				<option value="Any">All Categories</option>
				<option value="Programming">programming</option>
				<option value="Pun">pun</option>
				<option value="Dark">Dark</option>
				<option value="Spooky">Spooky</option>
			</select>
		</>
	)
}
export default Selector;