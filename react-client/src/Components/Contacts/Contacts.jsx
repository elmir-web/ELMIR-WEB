import React from "react";

import "./Contacts.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import Footer from "./../Footer/Footer";

const Contacts = ({ statusMobileNav, setStatusMobileNav }) => {
  return (
    <div className="Contacts">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <div className="container">
        <div className="Contacts__content">
          <div className="Contacts__contactsData">
            <h2>Контакты</h2>

            <div className="Contacts__contactsData-wrapper">
              <div
                className="Contacts__contactsData-item"
                onClick={() => window.open("https://vk.com/elmir_web")}
              >
                ВКонтакте: vk.com/elmir_web
              </div>
              <div
                className="Contacts__contactsData-item"
                onClick={() => window.open("https://t.me/elmir_web")}
              >
                Telegram: @elmir_web
              </div>
              <div
                className="Contacts__contactsData-item"
                onClick={() => window.open("tel:89867784101")}
              >
                Телефон: 8 (986) 778-41-01
              </div>
              <div
                className="Contacts__contactsData-item"
                onClick={() => window.open("mailto:elmir.web@gmail.com")}
              >
                E-Mail: elmir.web@gmail.com
              </div>
              <div
                className="Contacts__contactsData-item"
                onClick={() => window.open("https://github.com/elmir-web")}
              >
                GitHub: github.com/elmir-web
              </div>
            </div>
          </div>

          <div className="Contacts__techsData">
            <h2>Используемые технологии</h2>

            <div className="Contacts__techsData-wrapper">
              <div
                className="Contacts__techsData-item"
                onClick={() => window.open("https://ru.reactjs.org/")}
              >
                Frontend lib: React
              </div>
              <div
                className="Contacts__techsData-item"
                onClick={() => window.open("https://expressjs.com/ru/")}
              >
                Backend framework: Express JS
              </div>
              <div
                className="Contacts__techsData-item"
                onClick={() => window.open("https://www.postgresql.org/")}
              >
                BD: PostgreSQL
              </div>
              <div
                className="Contacts__techsData-item"
                onClick={() => window.open("https://code.visualstudio.com/")}
              >
                Code editor: VS Code
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
