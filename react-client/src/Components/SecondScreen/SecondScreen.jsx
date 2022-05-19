import React from "react";

import "./SecondScreen.scss";

import ownerImageAvatar from "./../../images/SecondScreen/Owner-Image.png";

const SecondScreen = () => {
  return (
    <div className="SecondScreen">
      <div className="container">
        <div className="SecondScreen__content">
          <div className="SecondScreen__owner-avatar">
            <img
              src={ownerImageAvatar}
              alt="Кубагушев Эльмир Ирекович"
              className="SecondScreen__owner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
