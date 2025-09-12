import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import LogoBar from "./LogoBar";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MiddleSection from "./MiddleSection";
import Map from "./Map";
import TiresList from "./TiresList";
import TireDetail from "./TireDetail";
import Footer from "./Footer";
import About from "./About.js";
import tiresData from "./JSON/tires_data.json";
import { filterTires } from "./helper/filterTires.js";

function App() {
  const [filteredTires, setFilteredTires] = useState(tiresData);

  const handleFilter = (filters) => {
    const filtered = filterTires(tiresData, filters);
    setFilteredTires(filtered);
  };

  return (
    <div className="App">
      <LogoBar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MiddleSection onFilter={handleFilter} />
              <div className="tire-container">
                <TiresList tires={filteredTires} />
              </div>
              <About />
            </>
          }
        />

        {/* Jednostavna ruta, query parametri se čitaju u TireDetail */}
        <Route path="/tires" element={<TireDetail tires={tiresData} />} />
      </Routes>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
