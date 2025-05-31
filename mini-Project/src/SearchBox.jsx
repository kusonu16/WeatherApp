import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
function SearchBox({updateInfo}) {
     const [city, setCity] = useState("");
     const [error, setError] = useState(false)
    // `&{API_URL}?q=${city},${state},${country}&appid=${API_KEY}`
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "89c5f17c72726f6fa4e624ce4ec3cba3";

    let getWeatherInfo  = async () => {
      setError("");
      try {
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
         if (!response.ok) {
        throw new Error("City not found");
      }

         let jsonResponse = await response.json();
        let result  ={
          city: city,
            temp : jsonResponse.main.temp,
            temp_min :jsonResponse.main.temp_min,
            temp_max : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            pressure: jsonResponse.main.pressure,
            weather : jsonResponse.weather[0].description,
        };
        return result;
      } catch (error) {
        throw error;
      }
       
    }
 
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    event.preventDefault();
    setError(false);
     if (!city || !/^[a-zA-Z\s,]+$/.test(city)) {
      alert("Please enter a valid city name!");
      return;
    }

    try { 
   let newInfo = await getWeatherInfo();
   updateInfo(newInfo);
   setCity("");
    } catch (error) {
      setError(true);
    }
    
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit" >
          Search
        </Button>
        {error && <p style={{color : 'red'}}>No such place in our Database!</p>}
      </form>
    </div>
  );
}

export default SearchBox;
