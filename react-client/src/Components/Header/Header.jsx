import React from "react";
import { Link as RouterLink } from "react-router-dom";

import "./Header.scss";

import headerLogo from "./../../images/Header/Header__logo.svg";
import navMobile from "./../../images/Header/menu-mobile.svg";
import navMobileClose from "./../../images/Header/menu-mobile-close.svg";

const Header = ({ statusMobileNav, setStatusMobileNav }) => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header__wrapper">
          <div className="Header__logo">
            <RouterLink to="/">
              <img
                src={headerLogo}
                alt="Логотип сайта ELMIR.WEB"
                className="Header__logo-image"
              />
            </RouterLink>
          </div>

          <nav className="Header__nav">
            <button
              className="Header__nav-mobile"
              onClick={() => {
                setStatusMobileNav(!statusMobileNav);
              }}
            >
              <img
                src={statusMobileNav === false ? navMobile : navMobileClose}
                alt="Мобильное меню"
              />
            </button>

            <ul className="Header__nav-lists">
              <li className="Header__nav-list-item">
                <RouterLink to="/">Главная</RouterLink>
              </li>
              <li className="Header__nav-list-item">
                <RouterLink to="/cv">Резюме</RouterLink>
              </li>
              <li className="Header__nav-list-item">
                <RouterLink to="/contacts">Контакты</RouterLink>
              </li>
              <li className="Header__nav-list-item">
                <RouterLink to="/portfolio">Портфолио</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
