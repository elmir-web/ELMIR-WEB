import React from "react";

import "./Header.scss";

import headerLogo from "./../../images/Header/Header__logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header__wrapper">
          <div className="Header__logo">
            <img
              src={headerLogo}
              alt="Логотип сайта ELMIR.WEB"
              className="Header__logo-image"
            />
          </div>

          <nav className="Header__nav">
            <ul className="Header__nav-lists">
              <li className="Header__nav-list-item">Главная</li>
              <li className="Header__nav-list-item">Резюме</li>
              <li className="Header__nav-list-item">Контакты</li>
              <li className="Header__nav-list-item">Портфолио</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
