import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Impor file CSS untuk kustomisasi tambahan

import employeeImage from "../assets/Login1.png"; // Gambar untuk Employee Management
import railwayImage from "../assets/Screenshot 2024-11-23 052617.png"; // Gambar untuk Railway Tracking
import weatherImage from "../assets/Screenshot 2024-11-23 051653.png"; // Gambar untuk Weather App

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
      title: "Game Ambulance Adventure ",
      // description: "Membuat aplikasi game ambulance adventure",
      image: weatherImage,
    },
  ];

  return (
    <section className="projects-section">
      <div className="container py-5">
        <h2 className="text-center mb-4 projects-title">Projects</h2>
        <div className="row g-4">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card shadow-sm">
                {/* Gambar Project */}
                <img
                  src={project.image}
                  className="card-img-top project-image"
                  alt={project.title}
                />
                {/* Konten Project */}
                <div className="card-body text-center">
                  <h5 className="card-title project-title">{project.title}</h5>
                  <p className="card-text text-muted project-description">
                    {project.description}
                  </p>
                </div>
                {/* Tombol di Footer */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
