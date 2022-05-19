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

          <div className="SecondScreen__description">
            <h2 className="SecondScreen__description-name">Эльмир</h2>
            <p className="SecondScreen__description-activity">
              JAVASCRIPT-РАЗРАБОТЧИК
            </p>
            <p className="SecondScreen__description-text">
              Работаю инженером-программистом.
              <br />
              Знаю Frontend-разработку на базе React JS и имею навыки в Backend
              <br />
              на базе Express JS. Верстаю адаптивные сайты HTML5, CSS3, SCSS с
              использованием CSS-Flexbox почти по макету:)
            </p>

            <div className="SecondScreen__buttons">
              <button className="SecondScreen__button-getme">
                Связаться со мной
              </button>

              <button className="SecondScreen__button-go-cv">
                К моему резюме
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
