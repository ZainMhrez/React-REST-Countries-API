import React, { useContext, Suspense } from "react";
import BackBtn from "../Components/DetailsComponents/BackBtn";
import ThemeContext from "../Context/ThemeContext";
import Loader from "../Components/Loader";
const CountryDetails = React.lazy(() =>
  import("../Components/DetailsComponents/CountryDetails")
);

const DetailsPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`details-page ${theme}`}>
      <Suspense fallback={<Loader />}>
        <div className="container">
          <BackBtn />
          <CountryDetails />
        </div>
      </Suspense>
    </section>
  );
};

export default DetailsPage;
