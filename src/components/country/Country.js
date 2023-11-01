import React from "react";
import "../country/country.css";

const Country = (props) => {
  // console.log(props.country);
  const { name, population, region, area, flags } = props.country;
  // console.log(props.country);
  return (
    <div className="country">
      <h1>Country Name: {name.common}</h1>
      <h2>Population: {population}</h2>
      <h3>Region:{region} </h3>
      <p>area: {area} </p>
      <img src={flags.png} />
    </div>
  );
};

export default Country;
