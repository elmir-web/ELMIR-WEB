import React from "react";

import "./ThirdScreen.scss";

import projectImage from "./../../images/ThirdScreen/image-project.png";

const ThirdScreen = () => {
  return (
    <div className="ThirdScreen">
      <div className="container">
        <div className="SecondScreen__content my-projects">
          <div className="my-projects__head">
            <h2 className="my-projects__title">МОИ ПРОЕКТЫ</h2>

            <div className="my-projects__control-buttons control-buttons">
              <button className="control-buttons__prev"></button>
              <button className="control-buttons__next"></button>
            </div>
          </div>

          <div className="my-projects__wrapper">
            <div className="my-projects__item">
              <div className="my-projects__item-image-wrapper">
                <img src={projectImage} alt="Картинка название проекта" />
              </div>

              <h3 className="my-projects__item-title">
                E-commerce web application
              </h3>

              <div className="my-projects__item-techs">
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
              </div>
            </div>

            <div className="my-projects__item">
              <div className="my-projects__item-image-wrapper">
                <img src={projectImage} alt="Картинка название проекта" />
              </div>

              <h3 className="my-projects__item-title">
                E-commerce web application
              </h3>

              <div className="my-projects__item-techs">
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
              </div>
            </div>

            <div className="my-projects__item">
              <div className="my-projects__item-image-wrapper">
                <img src={projectImage} alt="Картинка название проекта" />
              </div>

              <h3 className="my-projects__item-title">
                E-commerce web application
              </h3>

              <div className="my-projects__item-techs">
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
                <div className="my-projects__item-tech">HTML</div>
              </div>
            </div>
          </div>

          <div className="my-projects__buttons">
            <button className="my-projects__button-portfolio">
              Ко всем проектам
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
