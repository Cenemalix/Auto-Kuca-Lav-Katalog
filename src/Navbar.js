import React, { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

class Navbar extends Component {
  state = {
    dimension: "",
    menuActive: false,
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { dimension } = this.state;

    if (!dimension || dimension.length < 7) return;

    const width = dimension.slice(0, 3);
    const height = dimension.slice(3, 5);
    const diameter = dimension.slice(5);

    const params = new URLSearchParams();
    if (width) params.append("width", width);
    if (height) params.append("height", height);
    if (diameter) params.append("diameter", diameter);

    this.props.navigate(`/tires?${params.toString()}`);

    this.setState({ dimension: "" });
  };

  toggleMenu = () =>
    this.setState((prev) => ({ menuActive: !prev.menuActive }));

  closeMenu = () => this.setState({ menuActive: false });

  render() {
    const { dimension, menuActive } = this.state;

    return (
      <div className="Navbar">
        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={this.toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`Phars ${menuActive ? "active" : ""}`}>
          <p
            onClick={() => {
              document
                .getElementById("tires")
                .scrollIntoView({ behavior: "smooth" });
              this.closeMenu();
            }}
          >
            Gume
          </p>
          <p
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              this.closeMenu();
            }}
          >
            Kontakt
          </p>
          <p
            onClick={() => {
              document
                .getElementById("map")
                .scrollIntoView({ behavior: "smooth" });
              this.closeMenu();
            }}
          >
            Lokacija
          </p>
          <a
            href="https://autokucalav.bestparts.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.closeMenu}
          >
            Webshop
          </a>
        </div>

        <form onSubmit={this.handleSubmit} className="SearchBar">
          <input
            name="dimension"
            type="number"
            value={dimension}
            onChange={this.handleChange}
            placeholder="Unesite dimenziju"
          />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

function WithNavigate(props) {
  const navigate = useNavigate();
  return <Navbar {...props} navigate={navigate} />;
}

export default WithNavigate;
