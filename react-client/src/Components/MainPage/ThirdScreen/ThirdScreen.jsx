import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Mousewheel } from "swiper";

import "./ThirdScreen.scss";
import "swiper/css";

// import projectImage from "./../../../images/ThirdScreen/image-project.png";

const ThirdScreen = ({
  buttonGoToPortfolio,
  buttonGoToProject,
  projectsArray,
}) => {
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

          <Swiper
            modules={[FreeMode, Navigation, Autoplay, Mousewheel]}
            slidesPerView={"auto"}
            spaceBetween={22}
            loop={true}
            freeMode={true}
            speed={1000}
            loopFillGroupWithBlank={true}
            navigation={{
              prevEl: ".control-buttons__prev",
              nextEl: ".control-buttons__next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            mousewheel={{
              sensitivity: 1,
            }}
            className="my-projects__wrapper"
          >
            {projectsArray.map((project, index) => {
              return (
                <SwiperSlide
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
                </SwiperSlide>
              );
            })}
            {/*  */}
          </Swiper>

          <div className="my-projects__buttons">
            <button
              className="my-projects__button-portfolio"
              onClick={buttonGoToPortfolio}
            >
              Ко всем проектам
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
