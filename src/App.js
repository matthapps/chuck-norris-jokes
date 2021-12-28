import "./App.css";
import { useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState();

  const apiJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((json) => {
        setData(json.value)
      });
  };

  // generates quote onload
  useEffect(() => {
    apiJoke()
  }, [])

  return (
    <div className='App'>
      <h1 className='App-title'>Chuck Norris Random Jokes</h1>
      <img
        className='App-img'
        src='https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/chuck-norris.jpg'
        alt='Chuck Norris'
      ></img>
      <button onClick={apiJoke} className='App-btn'>
        Click for new Chuck Norris Joke
      </button>
      <h4 className='App-joke-text'>{JSON.stringify(data)}</h4>
    </div>
  );
}

export default App;
