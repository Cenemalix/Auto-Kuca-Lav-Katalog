import React, { Component } from "react";
import "./LogoBar.css";
import logo from "./images/auto-kuca-lav.png";

class LogoBar extends Component {

  render() {
    return (
      <div>
        <div className="Heading">
          <div className="logoImage">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoBar;
