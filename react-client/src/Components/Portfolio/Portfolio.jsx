import React, { useState, useEffect } from "react";

import "./Portfolio.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import Footer from "../Footer/Footer";
import Loader from "./../Loader/Loader";

const Portfolio = ({
  statusMobileNav,
  setStatusMobileNav,
  buttonGoToProject,
}) => {
  const [projectsArray, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8881/api/projects-portfolio")
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => setSelectedProject(result), 1000);
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
    <div className="Portfolio">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <div className="container">
        <div className="Portfolio__content">
          <h2>ПОРТФОЛИО</h2>

          <div className="Portfolio__allProjects my-projects">
            {projectsArray === null ? (
              <Loader />
            ) : (
              projectsArray.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="my-projects__item"
                    onClick={() => {
                      buttonGoToProject(project);
                    }}
                  >
                    <div className="my-projects__item-image-wrapper">
                      <img
                        src={project.projectImage}
                        alt={`Картинка для проекта: ${project.projectName}`}
                      />

                      <div className="my-projects__item-image-hover">
                        <button>Посмотреть работу</button>
                      </div>
                    </div>

                    <h3 className="my-projects__item-title">
                      {project.projectName}
                    </h3>

                    <div className="my-projects__item-techs">
                      {project.projectTechsArray.map((tech, index) => {
                        return (
                          <div key={index} className="my-projects__item-tech">
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
