import React, { useState } from "react";
import "./Testimonials.css";

const TestimonialForm = ({ addTestimonial, editingIndex, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [message, setMessage] = useState(initialData?.message || "");
  const [stars, setStars] = useState(initialData?.stars || 0); // State untuk bintang

  // Fungsi untuk menangani klik pada bintang
  const handleStarClick = (index) => {
    setStars(index + 1); // Mengatur jumlah bintang (0-based index)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial({ name, message, stars });
    setName("");
    setMessage("");
    setStars(0);
  };

  return (
    <form className="testimonial-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label>Rating:</label>
        <div className="testimonial-stars">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`star ${i < stars ? "filled" : ""}`} // Cek apakah bintang terisi
              onClick={() => handleStarClick(i)} // Klik untuk mengisi
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default TestimonialForm;
