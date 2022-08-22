import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);

  const nameFilterResponse =
    "?fields=name,capital,cca2,cca3,population,region,nativeName,subregion,tld,currencies,languages,borders";

  // Get all Countries
  useEffect(() => {
    // Fetch all countries
    const fetchAllCountries = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/all${nameFilterResponse}`)
        .then((res) => res.data)
        .then((data) => {
          setAllCountries(data);
          setDisplayedCountries(data);
        })
        .catch((err) => console.log(err));
    };

    fetchAllCountries();
  }, []);

  // Get Countries details based on region
  const filterCountriesByRegion = (region) => {
    setDisplayedCountries(allCountries.filter((d) => d.region === region));
  };

  // Get Countries based on the country name
  const filterCountriesByName = (country) => {
    setDisplayedCountries(
      allCountries.filter(
        (d) => d.name.common.toLowerCase().indexOf(country) > -1
      )
    );
  };

  // Get Country Details based on the country name
  const fetchCountryDetails = /* async */ (country) => {
    const name = allCountries.filter((d) => d.name.common === country);
    setCountryDetails([...name]);
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        setAllCountries,
        displayedCountries,
        setDisplayedCountries,
        filterCountriesByRegion,
        filterCountriesByName,
        countryDetails,
        fetchCountryDetails,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
