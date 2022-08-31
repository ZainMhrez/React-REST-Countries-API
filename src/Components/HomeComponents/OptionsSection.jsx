import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CountriesContext from "../../Context/CountriesContext";

const OptionsSection = () => {
  const {
    allCountries,
    setDisplayedCountries,
    filterCountriesByRegion,
    filterCountriesByName,
  } = useContext(CountriesContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    filterCountriesByName(e.target.value);
  };

  const filterByRegion = (e) => {
    if (e.target.id === "All") {
      setDisplayedCountries(allCountries);
      setIsExpanded(!isExpanded);
    } else {
      filterCountriesByRegion(e.target.id);
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="options-section">
      <div className="search-box">
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="select-box">
        <button type="button" onClick={handleClick}>
          Filter by region
          {isExpanded === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div className="select-values" aria-expanded={isExpanded}>
          <ul>
            {regions?.map((region) => {
              return (
                <li onClick={(e) => filterByRegion(e)} key={region} id={region}>
                  {region}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionsSection;
