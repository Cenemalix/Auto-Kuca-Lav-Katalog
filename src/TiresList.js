import React, { Component } from "react";
import { Link } from "react-router-dom";
import TireCardInfo from "./TireCardInfo";
import "./TiresList.css";
import { v4 as uuid } from "uuid";

class TiresList extends Component {
  render() {
    const { tires } = this.props;

    if (!tires || tires.length === 0) {
      return (
        <div className="tires-wrapper">
          <h1 className="tires-title">Ponuda Guma</h1>
          <p>Nema rezultata za odabrane filtere.</p>
        </div>
      );
    }

    const manufacturers = Array.from(
      new Map(tires.map((tire) => [tire.supplier, tire])).values()
    );

    return (
      <div className="tires-wrapper">
        <h1 className="tires-title">Ponuda Guma</h1>
        <div className="TiresList">
          {manufacturers.map((tire) => {
            const params = new URLSearchParams();
            params.append("supplier", tire.supplier);

            return (
              <Link
                key={uuid()}
                to={`/tires?${params.toString()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <TireCardInfo name={tire.supplier} img={tire.itemPicture1} />
              </Link>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}

export default TiresList;
