import React, { Component } from "react";
import "./HeroSection.css";

class HeroSection extends Component {

  render() {
    return (
      <div className="HeroSection">
        <div className="HeroContent">
          <h1>Uvoznik i Distributer Autodijelova i Guma</h1>
          <button
            className="aboutBtn"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            O Nama
          </button>
        </div>
      </div>
    );
  }
}

export default HeroSection;
