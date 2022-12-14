import React, { useContext } from "react";
import CountriesContext from "../../Context/CountriesContext";
import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const { allCountries, countryDetails, fetchCountryDetails } =
    useContext(CountriesContext);

  const navigate = useNavigate();
  const handleNavigate = (name) => {
    fetchCountryDetails(name);
    navigate(`/${name}`, { replace: true });
  };

  // Get the key of the first element of NativeName object
  const nativeNameKey = Object.keys(countryDetails[0].name.nativeName)[0];
  // Get the key of the first element of currencies object
  const currenciesKey = Object.keys(countryDetails[0].currencies)[0];
  // Get languages
  const languages = Object.values(countryDetails[0].languages);
  // Function to loop on languages
  const getLanguages = languages?.map((lang, index) => {
    return <span key={`${lang}${index}`}>{lang}, </span>;
  });
  // Get Borders
  const borders = Object.values(countryDetails[0].borders);
  // Function to loop on languages
  const getNameFromBorder = borders
    .map((border) => {
      const names = allCountries.filter((a) => a.cca3 === border);
      return names[0].name.common;
    })
    ?.map((name) => {
      return (
        <span onClick={() => handleNavigate(name)} key={name}>
          {name}
        </span>
      );
    });
  // Add commas to population
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="country-details">
      <div className="image">
        <img
          src={`https://flagcdn.com/w640/${countryDetails[0].cca2.toLowerCase()}.webp`}
          alt={countryDetails[0].name.common}
        />
      </div>
      <div className="text-details">
        <h2>{countryDetails[0].name.common}</h2>
        <div className="text-details-container">
          <ul className="section-1">
            <li>
              <strong>Native Name:</strong>{" "}
              {countryDetails[0].name.nativeName[nativeNameKey].common}
            </li>
            <li>
              <strong>Population:</strong>{" "}
              {numberWithCommas(countryDetails[0].population)}
            </li>
            <li>
              <strong>Region:</strong> {countryDetails[0].region}
            </li>
            <li>
              <strong>Sub Region:</strong> {countryDetails[0].subregion}
            </li>
            <li>
              <strong>Capital:</strong> {countryDetails[0].capital}
            </li>
          </ul>
          <ul className="section-2">
            <li>
              <strong>Top Level Domain:</strong> {countryDetails[0].tld}
            </li>
            <li>
              <strong>Currencies:</strong>{" "}
              {countryDetails[0].currencies[currenciesKey].name}
            </li>
            <li>
              <strong>Languages:</strong> {getLanguages}
            </li>
          </ul>

          <div className="border-countries">
            <strong>Border Countries: </strong>
            {getNameFromBorder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
