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
    navigate(`/${name}`, { replace: true });
  };

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="country-box"
    >
      <div className="img-container">
        <img
          src={`https://flagcdn.com/w320/${data.cca2.toLowerCase()}.webp`}
          alt={data.name.common}
          onClick={() => handleNavigate(data.name.common)}
        />
      </div>
      <div className="text-container">
        <h3 tabIndex="0" onClick={() => handleNavigate(data.name.common)}>
          {data.name.common}
        </h3>
        <div className="country-box-details">
          <p>
            <strong>Population:</strong> {numberWithCommas(data.population)}
          </p>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <p>
            <strong>Capital:</strong> {data.capital}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Country;
