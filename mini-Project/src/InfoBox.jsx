import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

import "./InfoBox.css";

function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1662377824580-a540e7728635?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5fGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW55fGVufDB8fDB8fHww";
  if (!info || !info.city) {
    return (
      <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={INIT_URL}
              title="Default Weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weather App
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Enter your city name to get the weather information.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp <= 15
                ? COLD_URL
                : HOT_URL
            
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} 
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp <=15 ? (
                <AcUnitIcon />
              ):(
                 <SunnyIcon />
              ) 
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Temperature_Max = {info.temp_max}&deg;C</p>
              <p>Temperature_Min = {info.temp_min}&deg;C</p>
              <p>Pressure = {info.pressure}</p>
              <p>
                Weather is <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
