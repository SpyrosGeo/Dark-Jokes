import React, { useState,ChangeEvent} from 'react';
import Joke from './components/Joke'
import Selector from './components/Selector'
import './App.css';
import axios from 'axios';


interface Joke {
  setup:string;
  delivery:string;
}

const  App:React.FC= ()=> {
  const URL: string = "https://v2.jokeapi.dev/joke/"
  const [choice, setChoice] = useState("Any")
  const [joke, setJoke] = useState<Joke>({
    setup:"",
    delivery:"",
  })
  const handleChange = (e:ChangeEvent<HTMLElement>)=> {
    const {value} =e.target as typeof e.target &{
      value:string;
    }
    setChoice(value)
  }

  const handleClick = async () => { 
    const response = await axios.get(`${URL}${choice}`)
    console.log(response.data.setup);
    setJoke({ setup: response.data.setup, delivery: response.data.delivery })
    //(response.data.joke)
  }
  return (
    <div className="App">
      <h1 className="title">Dark Jokes</h1>
      <div className="container">
        <div className="">
          <Selector handleChange={handleChange} />
        </div>
        <div>
          <button className="button" onClick={handleClick}>Click me</button>
        </div>
      </div>
      <Joke joke={joke} />

    </div>
  )
}

export default App;
