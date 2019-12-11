import React, { Component } from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6356cf2c9a69a1c5dd7e2d381df530a6";
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6356cf2c9a69a1c5dd7e2d381df530a6

class App extends Component {
  state = {
    temperature: 100,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    description: undefined,
    code: undefined,
    error: undefined,
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value || "xxx";
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);

    if (city && country && data.cod === 200) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        description: data.weather[0].description,
        code: data.cod,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        icon: undefined,
        description: undefined,
        error: "City/Country not found! Please try again!",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Titles />
        <Form getWeather={this.getWeather} error={this.state.error} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          sunrise={this.state.sunrise}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
