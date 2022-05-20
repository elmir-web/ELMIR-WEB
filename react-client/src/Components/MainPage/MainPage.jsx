import React, { useState } from "react";

import "./MainPage.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import FirstScreen from "./FirstScreen/FirstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";
import FourthScreen from "./FourthScreen/FourthScreen";
import Footer from "./../Footer/Footer";

const MainPage = () => {
  const [statusMobileNav, setStatusMobileNav] = useState(false);

  return (
    <div className="MainPage">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <FirstScreen />
      {/* <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Footer /> */}
    </div>
  );
};

export default MainPage;
