import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      year: "2016–2019",
      title: "Junior Hight School",
      institution: "MTS Hamalatul Qur'an Boarding School",
    },
    {
      year: "2019–2022",
      title: "Senior High School",
      institution: "MA Hamalatul Qur'an Boarding School",
    },
    {
      year: "2023–Present",
      title: "Master of Technology",
      institution: "Aisyiyah University Yogyakarta",
    },
  ];

  return (
    <section className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <div className="education-content">
              <span className="education-year">{item.year}</span>
              <h3 className="education-degree">{item.title}</h3>
              <p className="education-institution">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
