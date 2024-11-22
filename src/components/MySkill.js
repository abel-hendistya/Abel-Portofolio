import React from "react";
import "./MySkill.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const MySkill = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Figma", icon: <SiFigma size={50} color="#F24E1E" /> },
  ];

  return (
    <section className="my-skill-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkill;
