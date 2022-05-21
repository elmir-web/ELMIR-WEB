import React from "react";
import { Link as RouterLink } from "react-router-dom";

import "./NavMobile.scss";

const NavMobile = () => {
  return (
    <div className="NavMobile">
      <ul className="NavMobile__nav-lists">
        <li className="NavMobile__nav-list-item">
          <RouterLink to="/">Главная</RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink to="/cv">Резюме</RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink to="/contacts">Контакты</RouterLink>
        </li>
        <li className="NavMobile__nav-list-item">
          <RouterLink to="/portfolio">Портфолио</RouterLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
