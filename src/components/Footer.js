import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container text-center py-3">
        <p className="mb-0">
          Made with <span className="text-danger"></span> by 
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Abel Hendistya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
