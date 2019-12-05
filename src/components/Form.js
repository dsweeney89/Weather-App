import React from "react";
import "../App.css";
import countries from "../countries";
import cities from "../cities";

const populateCountries = options => {
  options = countries;

  return options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
};

const populateCities = options => {
  options = cities;

  return options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
};

const Form = props => (
  <form onSubmit={props.getWeather} method="get">
    <div className="form-row">
      <div className="form-group col-md-4 offset-md-2">
        <input
          list="citylist"
          className="form-control"
          name="city"
          id="city"
          placeholder="City"
          autoComplete="off"
        />
        <datalist id="citylist">{populateCities()}</datalist>
      </div>

      <div className="form-group col-md-4">
        <input
          list="countrylist"
          className="form-control"
          name="country"
          id="country"
          placeholder="Country"
          autoComplete="off"
        />
        <datalist id="countrylist">{populateCountries()}</datalist>
      </div>
    </div>

    {props.error && <p className="error">{props.error}</p>}

    <div className="text-center">
      <button className="btn btn-primary">Get Weather</button>
    </div>
  </form>
);

export default Form;
