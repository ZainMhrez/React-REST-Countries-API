import React, { useContext } from "react";
import CountriesContext from "../Context/CountriesContext";
import OptionsSection from "../Components/HomeComponents/OptionsSection";
import Country from "../Components/Country";
import ThemeContext from "../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const { displayedCountries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`home ${theme}`}>
      <div className="container">
        <OptionsSection />
        <motion.div layout className="countries-box">
          <AnimatePresence>
            {displayedCountries?.map((country) => {
              return <Country key={country.cca2} data={country} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
