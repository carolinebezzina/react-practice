import React from "react";
import { getWeather } from "../api/getWeather";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      url: 'https://api.openweathermap.org/data/2.5',
      apikey: 'c11619e746f26d09f3cea244b37a054a',
      lat: 37,
      long: 144,
      weather: null
    };
  }

  componentDidMount() {    
    getWeather(this.state.url, this.state.lat, this.state.long, this.state.apikey).then(currentWeather => {
      this.setState({weather: currentWeather});
    });
  }

  render() {
    return (
      <span>
        {this.state.weather ? 
        this.state.weather
        : `(loading...)`}
      </span>
    );
  }
}

export default Weather;