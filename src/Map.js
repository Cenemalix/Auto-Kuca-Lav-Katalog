import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-container" id="map">
      <h2>Naša lokacija</h2>
      <div className="frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.5177351207426!2d17.218799787110104!3d44.83355634512059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03cbfbb98df5%3A0x20a14cfa47b461f3!2z0JDRg9GC0L4g0LrRg9Gb0LAg0JvQkNCS!5e1!3m2!1ssr!2sba!4v1753883510363!5m2!1ssr!2sba"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
