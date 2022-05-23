import React from "react";

import "./FourthScreen.scss";

const FourthScreen = () => {
  return (
    <div className="FourthScreen">
      <div className="container">
        <div className="FourthScreen__content">
          <div className="FourthScreen__educations">
            <h3 className="FourthScreen__title-edu">Образование</h3>

            <div className="FourthScreen__educations-items">
              <div className="FourthScreen__educations-item">
                <h3 onClick={() => window.open("http://www.osu.ru/")}>
                  Оренбургский Государственный Университет
                </h3>

                <div className="FourthScreen__educations-item-bottom">
                  <div className="FourthScreen__educations-faculty">
                    ФМИТ (Факультет Математики и Информационных Технологий)
                  </div>

                  <div className="FourthScreen__educations-dates">
                    &bull; 2018 -&nbsp;по наст. вр.
                  </div>
                </div>
              </div>

              {/* <div className="FourthScreen__educations-item">
                <h3>Другое название</h3>

                <div className="FourthScreen__educations-item-bottom">
                  <div className="FourthScreen__educations-faculty">
                    ФАК (ФАКУЛЬТЕТ)
                  </div>

                  <div className="FourthScreen__educations-dates">
                    &bull; ГГГГ -&nbsp;ГГГГ.
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="FourthScreen__experience">
            <h3 className="FourthScreen__title-exp">Опыт работы</h3>

            <div className="FourthScreen__experience-items">
              <div className="FourthScreen__experience-item mmsk">
                <h3 onClick={() => window.open("https://mmsk.ugmk.com/ru/")}>
                  ООО “Медногорский медно-серный комбинат”
                </h3>

                <div className="FourthScreen__experience-item-bottom">
                  <div className="FourthScreen__experience-position">
                    Инженер-Программист
                  </div>

                  <div className="FourthScreen__experience-dates">
                    &bull; Май 2022 - По наст. вр.
                  </div>
                </div>
              </div>

              {/* <div className="FourthScreen__experience-item other">
                <h3>Название компании</h3>

                <div className="FourthScreen__experience-item-bottom">
                  <div className="FourthScreen__experience-position">
                    Инженер-Программист
                  </div>

                  <div className="FourthScreen__experience-dates">
                    &bull; Месяц ГГГГ - Месяц ГГГГ
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;
