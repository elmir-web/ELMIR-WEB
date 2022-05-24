import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.scss";

import MainPage from "./MainPage/MainPage";
import Portfolio from "./Portfolio/Portfolio";
import ProjectSelected from "./Portfolio/ProjectSelected/ProjectSelected";
import Contacts from "./Contacts/Contacts";
import CV from "./CV/CV";

import projectImageELMIRWEBFULLSTACK from "./../images/ThirdScreen/1.ELMIR-WEB-PERSONAL-FULLSTACK.png";
import projectImageELMIRFILMS from "./../images/ThirdScreen/2.ELMIR-FILMS-FRONTEND.png";
import projectGSMOGU from "./../images/ThirdScreen/3.GSM-OGU.png";

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
            <CV
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
              buttonGoToContacts={buttonGoToContacts}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <Contacts
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              statusMobileNav={statusMobileNav}
              setStatusMobileNav={setStatusMobileNav}
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
