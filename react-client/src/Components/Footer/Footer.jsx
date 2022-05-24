import React from "react";

import "./Footer.scss";

import config from "./../../config.json";

const Footer = () => {
  const getAccessAdmin = () => {
    const password = prompt("Введите пароль доступа к админ-части сайта:");

    fetch(`${config.URL_BACKEND}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    // async function funcRequest(url, method = "GET", data = null, token = null) {
    //   try {
    //     let responseFetch = await
    //     const { ok, status } = responseFetch;
    //     responseFetch = await responseFetch.json();
    //     const returnFetch = { ok, status, responseFetch };
    //     return returnFetch;
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // }
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__content">
          <div className="Footer__createdBy">
            <span>Дизайн и разработка сайта</span>&nbsp;
            <span onClick={getAccessAdmin}>ELMIR.WEB</span>
          </div>

          <div className="Footer__contacts">
            <span onClick={() => window.open("tel:89867784101")}>
              8 (986) 778-41-01
            </span>
            <span onClick={() => window.open("mailto:elmir.web@gmail.com")}>
              elmir.web@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
