import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import TestimonialForm from "./TestimonialForm";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addOrUpdateTestimonial = (testimonial) => {
    if (editingIndex !== null) {
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editingIndex] = testimonial;
      setTestimonials(updatedTestimonials);
      setEditingIndex(null);
    } else {
      setTestimonials([...testimonials, testimonial]);
    }
    setShowForm(false);
  };

  const deleteTestimonial = (index) => {
    const filteredTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(filteredTestimonials);
  };

  const editTestimonial = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleLearnMore = (index) => {
    Swal.fire({
      title: "What do you want to do?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Edit",
      denyButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        editTestimonial(index); // Call edit function
      } else if (result.isDenied) {
        deleteTestimonial(index); // Call delete function
        Swal.fire("Deleted!", "Your testimonial has been deleted.", "success");
      }
    });
  };

  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-container">
        <div className="col-md-4">
          <button
            className="add-btn"
            onClick={() => {
              setShowForm(!showForm);
              setEditingIndex(null);
            }}
          >
            {showForm ? "Close Form" : "Add Testimonial"}
          </button>

          {showForm && (
            <div className="testimonial-form-container">
              <TestimonialForm
                addTestimonial={addOrUpdateTestimonial}
                editingIndex={editingIndex}
                initialData={editingIndex !== null ? testimonials[editingIndex] : null}
              />
            </div>
          )}
        </div>

        <div className="testimonial-output-container">
          <h2 className="feedback-title">Customer Feedback</h2>
          <div className="row">
            {testimonials.length === 0 ? (
              <p>No testimonials yet. Add one!</p>
            ) : (
              testimonials.map((testimonial, index) => (
                <div key={index} className="col-md-6">
                  <div className="testimonial-card">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`star ${i < testimonial.stars ? "filled" : ""}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="testimonial-message">"{testimonial.message}"</p>
                    <div className="testimonial-actions">
                      <button
                        className="learn-more-btn"
                        onClick={() => handleLearnMore(index)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
