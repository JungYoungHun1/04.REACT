import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherBusan() {
  const [weather, setWeather] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=67686de39e214490f00c0d06469e6a68"
      )
      .then((response) => {
        // console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Busan</h1>
      <div>날씨 : {weather.weather[0].main}</div>
      <div>날씨 설명 : {weather.weather[0].description}</div>
      <div>풍속 : {weather.wind.speed}</div>
      <div>일몰 시간 : {weather.sys.sunset}</div>
    </div>
  );
}

export default WeatherBusan;
