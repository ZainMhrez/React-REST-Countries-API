import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
// import Pages
import DetailsPage from "./Pages/DetailsPage";
// import Components
import Header from "./Components/Header";
import Loader from "./Components/Loader";
// import Contexts
import { CountriesContextProvider } from "./Context/CountriesContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
const HomePage = React.lazy(() => import("./Pages/HomePage"));

const App = () => {
  return (
    <CountriesContextProvider>
      <ThemeContextProvider>
        <Header />
        <HashRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path=":name" element={<DetailsPage />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeContextProvider>
    </CountriesContextProvider>
  );
};

export default App;
