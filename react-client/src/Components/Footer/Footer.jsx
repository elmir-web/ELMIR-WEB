import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__content">
          <div className="Footer__createdBy">
            <span>Дизайн и разработка сайта</span>&nbsp;<span>ELMIR.WEB</span>
          </div>

          <div className="Footer__contacts">
            <span>8 (986) 778-41-01</span>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <span>elmir.web@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
