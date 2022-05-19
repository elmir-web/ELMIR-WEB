import React from "react";

import "./FirstScreen.scss";

const FirstScreen = () => {
  return (
    <div className="FirstScreen">
      <div className="container">
        <div className="FirstScreen__content">
          <div className="FirstScreen__hello">ПРИВЕТ, Я</div>
          <div className="FirstScreen__profession-p1">ИНЖЕНЕР</div>
          <div className="FirstScreen__profession-p2">ПРОГРАММИСТ</div>

          <div className="FirstScreen__profdesc">
            Frontend-разработчик с навыками Backend
          </div>

          <div className="FirstScreen__buttons">
            <button className="FirstScreen__button-getproject">
              Хочу
              <br />
              проект
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
