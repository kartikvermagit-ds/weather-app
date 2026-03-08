import { useState } from "react";
import "./App.css";

function Weather(){

const [city,setCity]=useState("");
const [data,setData]=useState(null);

const API_KEY="put you api";

const emojis={
Clear:"☀️",
Clouds:"⛅",
Rain:"🌧️",
Drizzle:"🌦️",
Thunderstorm:"⛈️",
Snow:"❄️",
Mist:"🌫️"
};

const getWeather=()=>{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
.then(res=>res.json())
.then(result=>setData(result));

};

return(

<div className="container">

<h1>Weather App</h1>

<div className="search">

<input
type="text"
placeholder="Enter city"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button onClick={getWeather}>Search</button>

</div>

{data && data.main &&(

<div className="weather">

<div className="icon">
{emojis[data.weather[0].main] || "🌡️"}
</div>

<h2>{data.name}</h2>

<div className="temp">
{Math.round(data.main.temp)}°C
</div>

<div className="desc">
{data.weather[0].description}
</div>

<div className="details">

<div className="box">
<p>{data.main.humidity}%</p>
<small>Humidity</small>
</div>

<div className="box">
<p>{Math.round(data.wind.speed*3.6)} km/h</p>
<small>Wind</small>
</div>

</div>

</div>

)}

</div>

);

}

export default Weather;