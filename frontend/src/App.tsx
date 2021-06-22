import React, { useState, ChangeEvent, useEffect } from "react";
import Joke from "./components/Joke";
import Selector from "./components/Selector";
import "./App.css";
import axios from "axios";

interface IJoke {
  setup: string;
  delivery: string;
}

const App: React.FC = () => {
  const URL: string = "https://v2.jokeapi.dev/joke/";
  const [choice, setChoice] = useState("Any");
  const [joke, setJoke] = useState<IJoke>({
    setup: "",
    delivery: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/favorite");
    const {joke} = response.data.favorites[0]
    const {setup,delivery} =joke
    setJoke({
      setup,
      delivery
    })
    };
    fetchData();
  }, [choice])

  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    setChoice(value);
  };

  const handleClick = async () => {
    const response = await axios.get(`${URL}${choice}`);
    console.log(response.data.setup);
    if (response && response.data) {
      setJoke({ setup: response.data.setup, delivery: response.data.delivery });
    }
    //(response.data.joke)
  };
  const handleFavorite = async (e: any) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/favorite",
    data:{
      joke,
      _id:"1234"
    }  
    });
    console.log(response);
  };
  return (
    <div className="App">
      <h1 className="title">Dark Jokes</h1>
      <div className="container">
        <div className="">
          <Selector handleChange={handleChange} />
        </div>
        <div>
          <button className="button" onClick={handleClick}>
            Next Joke 
          </button>
          <button type="submit" onClick={handleFavorite} className="button">
            star
          </button>
        </div>
      </div>
      <Joke joke={joke} />
    </div>
  );
};

export default App;
