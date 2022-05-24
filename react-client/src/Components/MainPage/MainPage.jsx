import React from "react";

import "./MainPage.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import FirstScreen from "./FirstScreen/FirstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";
import FourthScreen from "./FourthScreen/FourthScreen";
import Footer from "./../Footer/Footer";

const MainPage = ({
  statusMobileNav,
  setStatusMobileNav,
  setSelectedProject,
  buttonGoToPortfolio,
  buttonGoToContacts,
  buttonGoToCV,
  buttonGoToProject,
}) => {
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
    <div className="MainPage">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? (
        <NavMobile setStatusMobileNav={setStatusMobileNav} />
      ) : (
        ""
      )}

      <FirstScreen buttonGoToContacts={buttonGoToContacts} />
      <SecondScreen
        buttonGoToContacts={buttonGoToContacts}
        buttonGoToCV={buttonGoToCV}
      />
      <ThirdScreen
        buttonGoToPortfolio={buttonGoToPortfolio}
        buttonGoToProject={buttonGoToProject}
      />
      <FourthScreen />
      <Footer />
    </div>
  );
};

export default MainPage;
