import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

import employeeImage from "../assets/Login1.png";
import railwayImage from "../assets/Screenshot 2024-11-23 052617.png";
import weatherImage from "../assets/Screenshot 2024-11-23 051653.png";

const Projects = () => {
  const projectData = [
    {
      title: "UI/UX Desain",
      image: employeeImage,
    },
    {
      title: "UI/UX Desain",
      image: railwayImage,
    },
    {
      title: "Game Ambulance",
      image: weatherImage,
    },
  ];

  return (
    <section className="projects-section">
      <div className="container py-5">
        <h2 className="text-center mb-3 projects-title">Projects</h2>
        <div className="row g-4 justify-content-center">
          {projectData.map((project, index) => (
            <div className="col-md-3" key={index}>
              <div className="card project-card shadow-sm">
                <div className="d-flex justify-content-center align-items-center project-image-container">
                  <img
                    src={project.image}
                    className="project-image"
                    alt={project.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title project-title">{project.title}</h5>
                  <p className="card-text text-muted project-description">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
