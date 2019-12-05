import React from "react";

const convert = time => {
  let unixtimestamp = time;
  let date = new Date(unixtimestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let convertedTime =
    " " + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return convertedTime;
};

const toTitleCase = str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Weather = props =>
  props.city || props.country ? (
    <div className="list mt-4 col-md-8 offset-md-2">
      <ul className="list-group">
        {props.city && props.country && (
          <li className="list-group-item">
            <span className="data-label">Location: </span>
            {toTitleCase(props.city)}, {props.country.toUpperCase()}
          </li>
        )}

        {props.temperature && (
          <li className="list-group-item">
            <span className="data-label">Temperature: </span>
            {props.temperature}&#176;C
          </li>
        )}

        {props.humidity && (
          <li className="list-group-item">
            <span className="data-label">Humidity: </span>
            {props.humidity}%
          </li>
        )}

        {props.pressure && (
          <li className="list-group-item">
            <span className="data-label">Pressure: </span>
            {props.pressure} hPA
          </li>
        )}

        {props.sunrise && (
          <li className="list-group-item">
            <span className="data-label">Sunrise: </span>
            {convert(props.sunrise)}
          </li>
        )}

        {props.sunset && (
          <li className="list-group-item">
            <span className="data-label">Sunset: </span>
            {convert(props.sunset)}
          </li>
        )}

        {props.description && (
          <li className="list-group-item">
            <span className="data-label">Conditions: </span>
            {toTitleCase(props.description)}
          </li>
        )}
      </ul>
    </div>
  ) : null;

export default Weather;
