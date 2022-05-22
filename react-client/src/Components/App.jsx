import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.scss";

import MainPage from "./MainPage/MainPage";
import Portfolio from "./Portfolio/Portfolio";
import ProjectSelected from "./Portfolio/ProjectSelected/ProjectSelected";

import projectImageELMIRWEBFULLSTACK from "./../images/ThirdScreen/1.ELMIR-WEB-PERSONAL-FULLSTACK.png";
import projectImageELMIRFILMS from "./../images/ThirdScreen/2.ELMIR-FILMS-FRONTEND.png";
import projectGSMOGU from "./../images/ThirdScreen/3.GSM-OGU.png";

const projectsArray = [
  {
    projectImage: projectImageELMIRWEBFULLSTACK,
    projectName: "ELMIR-WEB Personal Web App",
    projectLink: "project-elmirweb",
    descriptionText: `Разработка текущего Web-приложения (на котором вы находитесь) в рамках FullStack-разработки с использованием Frontend JavaScript-биб-лиотек React JS, react-router-dom; с использованием Backend JavaScript-фреймворка Express JS и базы данных PostgreSQL. + верстка и дизайн. Открытый исходный код доступен на GitHub.`,
    projectTechsArray: ["React", "Express JS", "PostgreSQL", "Postman"],
  },
  {
    projectImage: projectImageELMIRFILMS,
    projectName: "Копилка фильмов Frontend",
    projectLink: "project-elmirfilms",
    descriptionText: `Разработка сайта-копилки фильмов в личных целях в рамках FrontendSingle-Page-App с использованием Frontend-библиотеки React JS с функ-циональной возможности JavaScript для получения JSON-данных от Backend-площадки “Неофициальное API Kinopoisk - kinopoiskapiunofficial.tech”. Открытый исходный код доступен на GitHub`,
    projectTechsArray: ["React JS", "REST API", "Postman"],
  },
  {
    projectImage: projectGSMOGU,
    projectName: "Обоснование запаса топлива для ОГУ",
    projectLink: "project-gsmogu",
    descriptionText:
      "Разработка система учета расхода горюче-смазочных материалов для автомобильной базы в рамках учебного процесса в ОГУ по предмету “Базы данных” на JavaScript-фреймворке Electron JS в виде Desktop-при-ложения для Windows переквалифицированная и подверженное мигра-ции в дальнейшем под FullStack Web-приложение с использованием React JS + Express JS с добавлением функционала авторизации, регист-рации для расширения в дальнейшем под создание математического ап-парата по вычисление стратегического запаса топлива. Открытый исходный код Desktop Express JS + MySQL на GitHub. Открытый исходный код React JS + Express JS + MySQL на GitHub",
    projectTechsArray: ["React", "Express JS", "MySQL", "Postman"],
  },
];

function App() {
  const [statusMobileNav, setStatusMobileNav] = useState(false);
  const [portfolioProjectSelect, setSelectedProject] = useState(null);
  let navigate = useNavigate();

  const buttonGoToPortfolio = () => {
    navigate("/portfolio");
  };

  const buttonGoToContacts = () => {
    navigate("/contacts");
  };

  const buttonGoToCV = () => {
    navigate("/cv");
  };

  const buttonGoToProject = (project) => {
    setSelectedProject(project);

    navigate(`/portfolio/${project.projectLink}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
              projectsArray={projectsArray}
              setSelectedProject={setSelectedProject}
              buttonGoToPortfolio={buttonGoToPortfolio}
              buttonGoToContacts={buttonGoToContacts}
              buttonGoToCV={buttonGoToCV}
              buttonGoToProject={buttonGoToProject}
            />
          }
        />
        <Route
          path="/cv"
          element={
            <div>
              Тут будет резюме{" "}
              <a
                href="https://www.figma.com/file/ZDBtTU1yPA5Yr7XXootWhr/ELMIR-WEB?node-id=27%3A2"
                target="_blank"
              >
                Пока можешь посмотреть на макет, ведь пока эта страница появится
                - пройдет какое-количество времени:)
              </a>
            </div>
          }
        />
        <Route
          path="/contacts"
          element={
            <div>
              Тут будут контакты
              <a
                href="https://www.figma.com/file/ZDBtTU1yPA5Yr7XXootWhr/ELMIR-WEB?node-id=27%3A2"
                target="_blank"
              >
                Пока можешь посмотреть на макет, ведь пока эта страница появится
                - пройдет какое-количество времени:)
              </a>
            </div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
              projectsArray={projectsArray}
              buttonGoToProject={buttonGoToProject}
            />
          }
        />
        <Route
          path="/portfolio/:projectSelected"
          element={
            <ProjectSelected
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
              projectsArray={projectsArray}
              portfolioProjectSelect={portfolioProjectSelect}
              setSelectedProject={setSelectedProject}
              buttonGoToPortfolio={buttonGoToPortfolio}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
