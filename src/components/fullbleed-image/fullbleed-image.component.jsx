import React from "react";
import "./fullbleed-image.styles.scss";

const FullbleedImage = ({ bgImage }) => (
  <div className="fullbleed-container">
    <div
      className="fullbleed sm:rounded-lg"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  </div>
);

export default FullbleedImage;
