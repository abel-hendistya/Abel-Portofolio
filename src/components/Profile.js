import React from "react";
import "./Profile.css";
import fbImage from "../assets/Screenshot 2024-11-23 062557.png";
import cvPDF from "../assets/Abel-CV.pdf";

function Profile() {
  const handleContactClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <img src={fbImage} alt="Your Profile" className="profile-image" />
      </div>
      <div className="profile-right">
        <h2>Web Developer & UI/UX Desain</h2>
        <h1>Abel Hendistya</h1>
        <p>
          If you're used to facing storms, why should you shiver because of a small storm
        </p>
        <div className="custom-buttons">
          <a href={cvPDF} download="Abel-Hendistya-CV" className="btn custom-download-btn">
            Download CV
          </a>
          <button className="btn custom-contact-btn" onClick={handleContactClick}>
            Contact
          </button>
        </div>
        <div className="sosmed">
          <a
            href="https://www.instagram.com/abelhendistya"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/share/k2HkRqqYGWvZa1hi/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://github.com/abel-hendistya"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
