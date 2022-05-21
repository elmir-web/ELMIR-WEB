import { Routes, Route } from "react-router-dom";

import "./App.scss";

import MainPage from "./MainPage/MainPage";
import Portfolio from "./Portfolio/Portfolio";
import ProjectSelected from "./Portfolio/ProjectSelected/ProjectSelected";

const projectsArray = [
  {
    projectImage: "https://picsum.photos/385/385",
    projectName: "Проект 1",
    projectLink: "project-1",
    projectTechsArray: ["html", "css", "javascript"],
  },
  {
    projectImage: "https://picsum.photos/385/385",
    projectName: "Проект 2",
    projectLink: "project-2",
    projectTechsArray: ["html", "css", "javascript"],
  },
  {
    projectImage: "https://picsum.photos/385/385",
    projectName: "Проект 3",
    projectLink: "project-3",
    projectTechsArray: ["html", "css", "javascript"],
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage projectsArray={projectsArray} />} />
        <Route
          path="/cv"
          element={
            <div>
              Тут будет резюме{" "}
              <a
                href="https://www.figma.com/file/ZDBtTU1yPA5Yr7XXootWhr/ELMIR-WEB?node-id=27%3A2"
                target="_blank"
              >
                Пока можешь посмотреть на макет, ведь пока эта страница появится
                - пройдет какое-количество времени:)
              </a>
            </div>
          }
        />
        <Route
          path="/contacts"
          element={
            <div>
              Тут будут контакты
              <a
                href="https://www.figma.com/file/ZDBtTU1yPA5Yr7XXootWhr/ELMIR-WEB?node-id=27%3A2"
                target="_blank"
              >
                Пока можешь посмотреть на макет, ведь пока эта страница появится
                - пройдет какое-количество времени:)
              </a>
            </div>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/:projectSelected"
          element={<ProjectSelected projectsArray={projectsArray} />}
        />
      </Routes>
    </div>
  );
}

export default App;
