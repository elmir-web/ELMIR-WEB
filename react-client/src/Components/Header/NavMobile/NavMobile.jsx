import React from "react";
import { Link as RouterLink } from "react-router-dom";

import "./NavMobile.scss";

const NavMobile = ({ setStatusMobileNav }) => {
  return (
    <div className="NavMobile">
      <ul className="NavMobile__nav-lists">
        <li className="NavMobile__nav-list-item">
          <RouterLink
            to="/"
            onClick={() => {
              setStatusMobileNav(false);
            }}
          >
            Главная
          </RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink
            to="/cv"
            onClick={() => {
              setStatusMobileNav(false);
            }}
          >
            Резюме
          </RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink
            to="/contacts"
            onClick={() => {
              setStatusMobileNav(false);
            }}
          >
            Контакты
          </RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink
            to="/portfolio"
            onClick={() => {
              setStatusMobileNav(false);
            }}
          >
            Портфолио
          </RouterLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
