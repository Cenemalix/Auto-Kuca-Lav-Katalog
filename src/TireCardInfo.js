import React from "react";
import "./TireCardInfo.css";

function TireCardInfo({ name, img, showDetails = false, price }) {

  const discountedPrice = price ? (Number(price) * 0.9).toFixed(2) : null;

  return (
    <div className="tire-card">
      <img src={img} alt={name} referrerPolicy="no-referrer" />
      <h3>{name}</h3>

      {showDetails && (
        <>
          <p className="price">{discountedPrice} KM</p>
        </>
      )}
    </div>
  );
}

export default TireCardInfo;
