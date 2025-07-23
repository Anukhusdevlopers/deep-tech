import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import "./Card.css";
import testimonials from "../Assets/testimonials";

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span>Client Voices</span>
          </div>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it - hear from those who've experienced 
            our services firsthand
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              <p className="testimonial-text">"{testimonial.feedback}"</p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                </div>
                <div className="client-details">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-title">{testimonial.title}</p>
                </div>
              </div>
              <div className="card-highlight"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
