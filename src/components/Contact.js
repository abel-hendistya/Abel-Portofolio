import React, { useRef } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqc3h5h",
        "template_drluqsv",
        form.current,
        "sg5aeNTf84mJyL2pD"
      )
      .then(
        (result) => {
          alert("Pesan berhasil dikirim!");
          console.log(result.text);
        },
        (error) => {
          alert("Terjadi kesalahan, coba lagi.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {}
        <div className="contact-form">
          <h2 className="contact-title">Contacts</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Abel Hendistya"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="abelhendistya@gmail.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send <FaPaperPlane />
            </button>
          </form>
        </div>

        {}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>abelhendistya@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+6281393613355</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Yogyakarta, Indonesia</span>
          </div>

          {}
          <div className="sosmed">
            <a
              href="https://www.instagram.com/abelhendistya?igsh=MWtrN2o4ZTRscWhubw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="sosmed-icon" />
            </a>
            <a
              href="https://www.facebook.com/share/k2HkRqqYGWvZa1hi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="sosmed-icon" />
            </a>
            <a
              href="https://github.com/abel-hendistya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="sosmed-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
