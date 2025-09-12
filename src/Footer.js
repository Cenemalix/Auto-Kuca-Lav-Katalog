import React, { Component } from "react";
import logo from "./images/auto-kuca-lav.png";
import location from "./images/location.png";
import viber from "./images/viber.png";
import clock from "./images/clock.png";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer" id="contact">
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <div>
          <div className="location">
            <img src={location} alt={location} />
            <h5>Sjedište: </h5>
            <p>
              Maloprodaja, Veleprodaja, Vulkanizerska radnja za putnička vozila
            </p>
            <p className="broj">Put srpskih branilaca 312, 78000 Banja Luka</p>
            <hr className="full-width-line" />
          </div>

          <div className="phone-numbers">
            <img src={viber} alt={viber} />
            <h5>Broj Telefona</h5>
            <p>
              Maloprodaja/Veleprodaja:{" "}
              <span className="broj">+387 51/371-776</span>
            </p>
            <p>
              Maloprodaja/Viber: <span className="broj">+387 65/833-733</span>
            </p>
            <p>
              Email: <span className="broj">autokucalav.1@blic.net</span>
            </p>
            <hr className="full-width-line" />
          </div>

          <div className="working-hours">
            <img src={clock} alt={clock} />
            <h5>Radno Vrijeme:</h5>
            <p>
              Ponedeljak - Petak: <span className="broj">08:00 - 17:00</span>
            </p>
            <p>
              Subota: <span className="broj">08:00 - 14:00</span>
            </p>
            <hr className="full-width-line" />
          </div>
          <div className="copyright1">
            .
          </div>
          <div className="copyright">
            © Copyright 2025 Auto Kuća Lav d.o.o.
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
