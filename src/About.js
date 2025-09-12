import React, { Component } from "react";
import "./About.css";
import mechanic from "./images/mechanic.png";
import finance from "./images/finance.png";
import wheel from "./images/wheel.png";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div>
          <h1>O Nama</h1>
        </div>
        <div className="About">
          <div className="card">
            <div className="title">
              <h3>Pozdan partner u auto industriji</h3>
            </div>
            <div className="description">
              <p>
                Ovlašteni uvoznik i distributer autodijelova i guma renomiranih
                svjetskih brendova. Naš cilj je da vam omogućimo vrhunski
                kvalitet i sigurnost u vožnji uz brzu i pouzdanu uslugu.
              </p>
            </div>

            <div className="image">
              <img src={mechanic} alt={mechanic} />
            </div>
          </div>

          <div className="card">
            <div className="title">
              <h3>Kvalitet po povoljnim cijenama</h3>
            </div>
            <div className="description">
              <p>
                Vjerujemo da kvalitet ne mora biti skup. Nudimo širok izbor guma
                i autodijelova po konkurentnim cijenama, prilagođenih potrebama
                fizičkih lica i svakodnevnih vozača
              </p>
            </div>
            <div className="image">
              <img src={finance} alt={finance} />
            </div>
          </div>

          <div className="card">
            <div className="title">
              <h3>Široka ponuda</h3>
            </div>
            <div className="description">
              <p>
                Naš webshop omogućava vam jednostavnu pretragu iz udobnosti
                doma. Bilo da tražite ljetne, zimske ili univerzalne gume, tu
                smo da vam pomognemo da donesete najbolji izbor.
              </p>
            </div>
            <div className="image">
              <img src={wheel} alt={wheel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
