import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css"

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    
    city: "",
    feelsLike: '',
    humidity: '',
    pressure: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    weather: "",
  
  });
  let updateInfo  = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Sonu Kumar Rajak</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox  info ={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
