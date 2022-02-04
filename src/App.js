import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import Travel from "./components/pages/Travel";
import Feedback from "./components/pages/Feedback";
import Gazetteer from "./components/pages/Gazetteer";
import Contact from "./components/pages/Contact";
import GlobalStyles from "./components/styles/Global";

const App = () => {
  const [country, setCountry] = useState("United Kingdom");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const setMyLocation = (latitude, longitude) => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
    });
  };

  const changeCountry = (value) => {
    setCountry(value);
  };
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/travel"
          element={<Travel country={country} changeCountry={changeCountry} />}
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="/gazetteer"
          element={
            <Gazetteer
              loading={loading}
              setLoading={setLoading}
              country={country}
              changeCountry={changeCountry}
              location={location}
              setLocation={setMyLocation}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
