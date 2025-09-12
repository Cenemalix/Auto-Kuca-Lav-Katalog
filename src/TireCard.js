import React, { Component } from "react";
import "./TireCard.css";

class TireCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      tireName: "",
      tireDimension: "",
      tirePhoto: "",
      tirePrice: "",
    };
  }

  render() {
    return (
      <div className="tire-container">
        {this.state.tires.map((tire) => (
          <div className="tire-card">
            <img src={tire.photo} alt={tire.name} />
            <h3>{tire.name}</h3>
            <p className="dimension">{tire.dimension}</p>
            <p className="price">{tire.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default TireCard;
