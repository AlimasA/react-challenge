import React from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import {Route, Routes} from 'react-router-dom';
import Travel from './components/pages/Travel';
import Feedback from './components/pages/Feedback';
import Gazetteer from './components/pages/Gazetteer';
import Contact from './components/pages/Contact';
import GlobalStyles from './components/styles/Global';

const App = () => {
  
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
          <Route path="/about-us" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gazetteer" element={<Gazetteer />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
