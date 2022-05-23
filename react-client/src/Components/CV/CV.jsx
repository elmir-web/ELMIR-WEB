import React from "react";

import "./CV.scss";

import Header from "./../Header/Header";
import NavMobile from "./../Header/NavMobile/NavMobile";
import Footer from "./../Footer/Footer";

const CV = ({ statusMobileNav, setStatusMobileNav, buttonGoToContacts }) => {
  return (
    <div className="CV">
      <Header
        statusMobileNav={statusMobileNav}
        setStatusMobileNav={setStatusMobileNav}
      />

      {statusMobileNav === true ? <NavMobile /> : ""}

      <div className="container">
        <div className="CV__content">
          <h2 className="CV__title">Резюме</h2>

          <h2 className="CV__ownerName"> Эльмир Кубагушев</h2>

          <div className="CV__contentWrapper">
            <div className="CV__contentLeft">
              <div className="CV__contentItem">
                <div className="CV__contentTitle">Профиль</div>
                <div className="CV__contentText">
                  Мне 24 года. Я увлекаюсь JavaScript-разработкой. В основном
                  это Web-разработка (Frontend с навыками Backend), но был опыт
                  и с mobile-раз-работкой с использованием React Native, а также
                  desktop-разработкой с использованием Electron JS. В свободное
                  время пишу свою художест-венную книгу.
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Опыт работы (IT)</div>
                <div className="CV__contentText">
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Инженер-Программист
                    </div>
                    <div className="CV__contentText-job">
                      ООО “Медногорский медно-серный комбинат”
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Май 2022 - по настоящее время
                  </div>
                  Поддержка внутренного MarketPlace, администрирование систем
                  SAP-ERP.
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Трудовой стаж</div>
                <div className="CV__contentText">
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Водитель B, C; Автослесарь
                    </div>
                    <div className="CV__contentText-job">
                      ООО “УралСибГидроСтрой” и дочерние
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Февраль 2018 - Февраль 2020
                  </div>
                  Вождение автомобиля согласно путевому листу, отчетность о
                  работе, содержание автомобиля и рабочего места в чистоте и
                  порядке.
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Образование</div>
                <div className="CV__contentText">
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Программная Инженерия
                    </div>
                    <div className="CV__contentText-job">
                      Оренбургский Государственный Университет
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Сентябрь 2018 - по настоящее время
                  </div>
                  Язык программирования C++, C#, Java. Web-разработка с
                  использовани-ем HTML, CSS, JavaScript, PHP, MySQL.
                  Проектирование и разработка SQL-реляционных баз данных на
                  примере MSSQL, MySQL, и т.д. Основы мате-матического анализа,
                  математической статистики, анализа и автомати-зации процессов.
                  Администрирование Windows, Linux систем. Изучение офисного
                  пакета программ Microsoft Office и аналогов, а также многое и
                  многое другое.
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">
                  Последние или интересные проекты
                </div>
                <div className="CV__contentText">
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      ELMIR-WEB Personal Web App
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Май 2022 - по настоящее время
                  </div>
                  Разработка текущего Web-приложения (на котором вы находитесь)
                  в рамках FullStack-разработки с использованием Frontend
                  JavaScript-биб-лиотек React JS, react-router-dom; с
                  использованием Backend JavaScript-фреймворка Express JS и базы
                  данных PostgreSQL. + верстка и дизайн.
                  <br /> &bull; Открытый исходный код доступен на GitHub.
                  {/*  */}
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Копилка фильмов Frontend
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Февраль 2022 - Март 2022
                  </div>
                  Разработка сайта-копилки фильмов в личных целях в рамках
                  Frontend Single-Page-App с использованием Frontend-библиотеки
                  React JS с функ-циональной возможности JavaScript для
                  получения JSON-данных от Backend-площадки “Неофициальное API
                  Kinopoisk - kinopoiskapiunofficial.tech”.
                  <br /> &bull; Открытый исходный код доступен на GitHub.
                  {/*  */}
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Приложение обоснования стратегического запаса топлива для
                      ОГУ
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Сентябрь 2021 - по настоящее время
                  </div>
                  Разработка система учета расхода горюче-смазочных материалов
                  для автомобильной базы в рамках учебного процесса в ОГУ по
                  предмету “Базы данных” на JavaScript-фреймворке Electron JS в
                  виде Desktop-при-ложения для Windows переквалифицированная и
                  подверженное мигра-ции в дальнейшем под FullStack
                  Web-приложение с использованием React JS + Express JS с
                  добавлением функционала авторизации, регист-рации для
                  расширения в дальнейшем под создание математического ап-парата
                  по вычисление стратегического запаса топлива.
                  <br /> &bull; Открытый исходный код Desktop Express JS + MySQL
                  на GitHub.
                  <br /> &bull; Открытый исходный код React JS + Express JS +
                  MySQL на GitHub.
                </div>
              </div>
            </div>

            <div className="CV__contentRight">
              <div className="CV__contentItem">
                <div className="CV__contentTitle">Контакты и ссылки</div>
                <div className="CV__contentText">
                  &bull; elmir-web@gmail.com
                  <br />
                  &bull; github.com/elmir-web
                  <br />
                  &bull; 8 (986) 778-41-01
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Факультативы и курсы</div>
                <div className="CV__contentText">
                  <div className="CV__contentText-topRow">
                    <div className="CV__contentText-position">
                      Frontend-разработчик
                    </div>
                    <div className="CV__contentText-job">
                      Tinkoff Fintech Frontend Junior
                    </div>
                  </div>
                  <div className="CV__contentText-topDate">
                    Февраль 2020 - Апрель 2020
                  </div>
                  Краткое введение в верстку HTML & CSS, JavaScript-разработку.
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Навыки и умения</div>
                <div className="CV__contentText">
                  &bull; Верстка адаптивных сайтов HTML5 & CSS3
                  <br />
                  &bull; SCSS
                  <br />
                  &bull; JavaScript ES6
                  <br />
                  &bull; JSON
                  <br />
                  &bull; Figma
                  <br />
                  &bull; Git
                  <br />
                  &bull; React JS
                  <br />
                  &bull; Express JS
                  <br />
                  &bull; Частично Electron JS & React Native
                  <br />
                  &bull; SQL-базы данных MySQL & Postgre
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Навыки и умения</div>
                <div className="CV__contentText">
                  &bull; Английский - начинающий A1
                </div>
              </div>

              <div className="CV__contentItem">
                <div className="CV__contentTitle">Навыки и умения</div>
                <div className="CV__contentText">
                  &bull; Адекватность
                  <br />
                  &bull; Стрессоустойчивость
                  <br />
                  &bull; Обучаемость
                  <br />
                  &bull; Социальная поддержка
                </div>
              </div>
            </div>
          </div>

          <div className="CV__buttons">
            <button
              className="CV__button-contacts"
              onClick={buttonGoToContacts}
            >
              Связаться
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CV;
