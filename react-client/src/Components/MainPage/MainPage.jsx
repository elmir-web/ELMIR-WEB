import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MainPage.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import FirstScreen from "./FirstScreen/FirstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";
import FourthScreen from "./FourthScreen/FourthScreen";
import Footer from "./../Footer/Footer";

const MainPage = ({ projectsArray }) => {
  const [statusMobileNav, setStatusMobileNav] = useState(false);

  let navigate = useNavigate();

  window.addEventListener(
    `resize`,
    (event) => {
      if (window.innerWidth > 768 && statusMobileNav === true) {
        setStatusMobileNav(false);
      }
    },
    false
  );

  const buttonGoToContacts = () => {
    navigate("/contacts");
  };

  const buttonGoToCV = () => {
    navigate("/cv");
  };

  const buttonGoToPortfolio = () => {
    navigate("/portfolio");
  };

  const buttonGoToProject = (project) => {
    navigate(`/portfolio/${project.projectLink}`);
  };

  return (
    <div className="MainPage">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <FirstScreen buttonGoToContacts={buttonGoToContacts} />
      <SecondScreen
        buttonGoToContacts={buttonGoToContacts}
        buttonGoToCV={buttonGoToCV}
      />
      <ThirdScreen
        buttonGoToPortfolio={buttonGoToPortfolio}
        buttonGoToProject={buttonGoToProject}
        projectsArray={projectsArray}
      />
      <FourthScreen />
      <Footer />
    </div>
  );
};

export default MainPage;
