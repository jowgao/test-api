import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  // const [count, setCount] = useState(0)
  const [weather, setweather] = useState({})
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=88dc2c1a327977587def860499f81012';

const options = {
  params: {
    id: 12345
  }
};

function hander() {
  axios.get(url, options).then((response) => {
    // handle success
    console.log(response);
    setB(response.data.main)
  })
  .catch((error) => {
    // handle errors
  });
}

return (
    <>
       {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<h1>Vite + React</h1> */}
      {/*<div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
      <div className="card">
        <button onClick={() => hander()}>
          start
        </button>
        </div>
        <div>
        <h1>
            {Math.round(b.temp)} °C
        </h1>
        <p>{b.temp}</p>
        </div>
        {/*<h1>{format(new Date(), "dd/MM/yyyy HH:mm")}</h1>
        <h1>
            {Math.round(weather.main.temp)} °C
        </h1>
        <h1> Feels like {Math.round(weathers.main.feels_like)}°C.{""}
        {weathers.weather[0].description}
        </h1>
    <button></button>*/}
    </>
  )
}

export default App 
