import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const TestimonialForm = ({ addTestimonial, editingIndex, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    message: "",
  });

  // Efek untuk mengisi form ketika sedang dalam mode edit
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(formData);
    setFormData({
      name: "",
      profession: "",
      message: "",
    });
  };

  return (
    <form className="testimonial-form" onSubmit={handleSubmit}>
      <h2>{editingIndex !== null ? "Edit Testimonial" : "Add Testimonial"}</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        {editingIndex !== null ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default TestimonialForm;
