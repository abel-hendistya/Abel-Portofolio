import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import About from "./components/About";
import Education from "./components/Education";
import MySkill from "./components/MySkill";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Aktifkan animasi setelah halaman dimuat
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay untuk efek halus
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Tambahkan kelas animasi untuk setiap elemen */}
      <div id="home" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <Profile />
      </div>
      <div id="about" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <About />
      </div>
      <div id="resume" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <Education />
      </div>
      <div id="projects" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <Projects />
      </div>
      <div id="skills" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <MySkill />
      </div>
      <div id="testimonials" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <Testimonials />
      </div>
      <div id="contact" className={`fade-slide-up ${isLoaded ? "show" : ""}`}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
