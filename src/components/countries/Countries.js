import React, { useState, useEffect } from "react";
import Country from "../country/Country";
import "../countries/countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Hello from countries Components:{countries.length}</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
