// __________________________________________________ ИМПОРТЫ
const express = require("express");
const cors = require("cors");
// const axios = require("axios");
const fileUpload = require("express-fileupload");

const {
  SERVER_START_ON_PORT,
  SERVER_WORKIN_ON_ADRESS,
  SERVER_POSTGRESQL_SETTINGS,
} = require("./ServerConfig.json");

const projectsPortfolioRouter = require("./Routes/ProjectsPortfolio.Router");
const adminRouter = require("./Routes/Admin.Router");

// __________________________________________________ ОБЪЕКТЫ
const app = express(); // Создаем приложение Express JS

// __________________________________________________ ЗАПУСК СЕРВЕРА
(() => {
  app.listen(SERVER_START_ON_PORT, async () => {
    console.log(
      `Приложение Express JS запущено на порту "${SERVER_START_ON_PORT}" и подключение к СуБД PostgreSQL успешно.`
    );
  });
})();

// __________________________________________________ НАСТРОЙКА
app.use(cors());
app.use(express.json());
app.use(express.static("static/images"));
app.use(fileUpload({}));

// __________________________________________________ РОУТИНГ API
app.use("/api", projectsPortfolioRouter);
app.use("/admin", adminRouter);
