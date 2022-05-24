const {
  SERVER_START_ON_PORT,
  SERVER_WORKIN_ON_ADRESS,
  SERVER_POSTGRESQL_SETTINGS,
} = require("./../ServerConfig.json");

class ProjectsPortfolioService {
  async getAllProjectsPortfolio() {
    return [
      {
        projectImage: `${SERVER_WORKIN_ON_ADRESS}:${SERVER_START_ON_PORT}/1.ELMIR-WEB-PERSONAL-FULLSTACK.png`,
        projectName: "ELMIR-WEB Personal Web App",
        projectLink: "project-elmirweb",
        descriptionText: `Разработка текущего Web-приложения (на котором вы находитесь) в рамках FullStack-разработки с использованием Frontend JavaScript-биб-лиотек React JS, react-router-dom; с использованием Backend JavaScript-фреймворка Express JS и базы данных PostgreSQL. + верстка и дизайн. Открытый исходный код доступен на GitHub.`,
        projectTechsArray: ["React", "Express JS", "PostgreSQL", "Postman"],
      },
      {
        projectImage: `${SERVER_WORKIN_ON_ADRESS}:${SERVER_START_ON_PORT}/2.ELMIR-FILMS-FRONTEND.png`,
        projectName: "Копилка фильмов Frontend",
        projectLink: "project-elmirfilms",
        descriptionText: `Разработка сайта-копилки фильмов в личных целях в рамках FrontendSingle-Page-App с использованием Frontend-библиотеки React JS с функ-циональной возможности JavaScript для получения JSON-данных от Backend-площадки “Неофициальное API Kinopoisk - kinopoiskapiunofficial.tech”. Открытый исходный код доступен на GitHub`,
        projectTechsArray: ["React JS", "REST API", "Postman"],
      },
      {
        projectImage: `${SERVER_WORKIN_ON_ADRESS}:${SERVER_START_ON_PORT}/3.GSM-OGU.png`,
        projectName: "Обоснование запаса топлива для ОГУ",
        projectLink: "project-gsmogu",
        descriptionText:
          "Разработка система учета расхода горюче-смазочных материалов для автомобильной базы в рамках учебного процесса в ОГУ по предмету “Базы данных” на JavaScript-фреймворке Electron JS в виде Desktop-при-ложения для Windows переквалифицированная и подверженное мигра-ции в дальнейшем под FullStack Web-приложение с использованием React JS + Express JS с добавлением функционала авторизации, регист-рации для расширения в дальнейшем под создание математического ап-парата по вычисление стратегического запаса топлива. Открытый исходный код Desktop Express JS + MySQL на GitHub. Открытый исходный код React JS + Express JS + MySQL на GitHub",
        projectTechsArray: ["React", "Express JS", "MySQL", "Postman"],
      },
    ];
  }
}

module.exports = new ProjectsPortfolioService();
