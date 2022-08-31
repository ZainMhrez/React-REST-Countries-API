import React, { useContext } from "react";
import CountriesContext from "../Context/CountriesContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Country = ({ data }) => {
  const { fetchCountryDetails } = useContext(CountriesContext);

  const navigate = useNavigate();

  // function to navigate to the country's detail page based on the the clicked country
  const handleNavigate = (name) => {
    fetchCountryDetails(name);
    navigate(`/${name}`);
  };

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <motion.article
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      className="country-box"
    >
      <img
        src={`https://flagcdn.com/${data.cca2.toLowerCase()}.svg`}
        alt={data.name.common}
        onClick={() => handleNavigate(data.name.common)}
      />
      <h3 tabIndex="0" onClick={() => handleNavigate(data.name.common)}>
        {data.name.common}
      </h3>
      <ul className="country-box-details">
        <li>
          <strong>Population:</strong> {numberWithCommas(data.population)}
        </li>
        <li>
          <strong>Region:</strong> {data.region}
        </li>
        <li>
          <strong>Capital:</strong> {data.capital}
        </li>
      </ul>
    </motion.article>
  );
};

export default Country;
