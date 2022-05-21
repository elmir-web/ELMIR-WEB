import React from "react";
import { useParams } from "react-router-dom";

import "./ProjectSelected.scss";

const ProjectSelected = ({ projectsArray }) => {
  let projectSelected = useParams();

  return (
    <div className="ProjectSelected">
      ProjectSelected (
      {projectsArray.map((project, index) => {
        if (project.projectLink === projectSelected.projectSelected)
          return <span key={index}>{project.projectName}</span>;
      })}
      )
      <a
        href="https://www.figma.com/file/ZDBtTU1yPA5Yr7XXootWhr/ELMIR-WEB?node-id=27%3A2"
        target="_blank"
      >
        Пока можешь посмотреть на макет, ведь пока эта страница появится -
        пройдет какое-количество времени:)
      </a>
    </div>
  );
};

export default ProjectSelected;
