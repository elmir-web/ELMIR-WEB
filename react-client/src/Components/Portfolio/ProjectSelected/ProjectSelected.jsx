import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProjectSelected.scss";

import Header from "./../../Header/Header";
import Footer from "../../Footer/Footer";
import NavMobile from "./../../Header/NavMobile/NavMobile";
import Loader from "./../../Loader/Loader";

const ProjectSelected = ({
  statusMobileNav,
  setStatusMobileNav,
  portfolioProjectSelect,
  setSelectedProject,
  buttonGoToPortfolio,
}) => {
  let projectSelected = useParams();

  useEffect(() => {
    fetch("http://localhost:8881/api/projects-portfolio")
      .then((res) => res.json())
      .then((result) => {
        if (portfolioProjectSelect === null) {
          console.log(result);

          for (let index = 0; index < result.length; index++) {
            if (result[index].projectLink === projectSelected.projectSelected) {
              setTimeout(() => setSelectedProject(result[index]), 1000);
            }
          }
        }
      });
  }, []);

  window.addEventListener(
    `resize`,
    (event) => {
      if (window.innerWidth > 768 && statusMobileNav === true) {
        setStatusMobileNav(false);
      }
    },
    false
  );

  return (
    <div className="ProjectSelected">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <div className="container">
        {portfolioProjectSelect === null ? (
          <Loader />
        ) : (
          <div className="ProjectSelected__content">
            <h2>Проект: {portfolioProjectSelect?.projectName}</h2>

            <div className="ProjectSelected__description">
              <div className="ProjectSelected__description-image">
                <img src={portfolioProjectSelect?.projectImage} alt="" />
              </div>

              <div className="ProjectSelected__item-techs">
                {portfolioProjectSelect?.projectTechsArray?.map(
                  (tech, index) => {
                    return (
                      <div key={index} className="ProjectSelected__item-tech">
                        {tech}
                      </div>
                    );
                  }
                )}
              </div>

              <div className="ProjectSelected__description-text">
                {portfolioProjectSelect?.descriptionText}
              </div>
            </div>

            <div className="ProjectSelected__buttons">
              <button
                className="ProjectSelected__button-portfolio"
                onClick={buttonGoToPortfolio}
              >
                Ко всем проектам
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectSelected;
