import React, { useState } from "react";
import TestimonialForm from "./TestimonialForm";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Menambahkan testimonial
  const addTestimonial = (testimonial) => {
    if (editingIndex !== null) {
      // Jika sedang mengedit, update testimonial
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editingIndex] = testimonial;
      setTestimonials(updatedTestimonials);
      setEditingIndex(null); // Reset mode editing
    } else {
      // Jika tidak sedang mengedit, tambahkan testimonial baru
      setTestimonials([...testimonials, testimonial]);
    }
  };

  // Menghapus testimonial
  const deleteTestimonial = (index) => {
    const filteredTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(filteredTestimonials);
  };

  // Mengedit testimonial
  const editTestimonial = (index) => {
    setEditingIndex(index);
  };

  return (
    <section className="testimonials-section">
      {/* Tambahkan title utama di sini */}
      <h1 className="main-title">Testimonials</h1>
      <div className="testimonials-container">
        {/* Form untuk input testimonial */}
        <div className="testimonial-form-container">
          <TestimonialForm
            addTestimonial={addTestimonial}
            editingIndex={editingIndex}
            initialData={editingIndex !== null ? testimonials[editingIndex] : null}
          />
        </div>

        {/* Output testimonial */}
        <div className="testimonial-output-container">
          <h2 className="testimonials-title">Customer Feedback</h2>
          {testimonials.length === 0 ? (
            <p>No testimonials yet. Add one!</p>
          ) : (
            testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <p className="testimonial-quote">"{testimonial.message}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong> - {testimonial.profession}
                </div>
                <div className="testimonial-actions">
                  <button onClick={() => editTestimonial(index)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => deleteTestimonial(index)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
