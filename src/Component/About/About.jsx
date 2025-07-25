import React, { useState } from "react";
import "./About.css";
import aboutimg from '../../assets/HomeSliderImg/aboutimg.jpg';
import { ArrowRight, ChevronsRight, X } from "lucide-react";
import axios from "axios";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Validate phone number format (basic validation)
      const phonePattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
      if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      const result = await axios.post("https://deep-stack-tech-server.onrender.com/send-mail", formData);

      if (result.status === 200) {
        setShowPopup(true);
        // alert("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
    catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    }
    finally {
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    setLoading(false);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-image-wrapper">
        <div className="image-frame">
          <img
            src={aboutimg}
            alt="Digital Marketing"
            className="about-image"
            loading="lazy"
          />
          <div className="image-highlight"></div>
        </div>
      </div>

      <div className="about-content">
        <div className="section-tag">
          <span>About Us</span>
        </div>

        <h2 className="about-title">
          Transforming Education Through <span>Digital Innovation</span>
        </h2>

        <p className="about-subtitle">
          Creative Design & Development Excellence
        </p>

        <div className="about-description">
          <p>
            At <strong>Deep Stack Tech</strong>, we bridge the gap between
            technology and education, empowering businesses worldwide to
            achieve their strategic objectives through cutting-edge digital
            solutions.
          </p>
          <p>
            Our team specializes in creating perfect harmony between stunning
            visual design and compelling content, enabling organizations to
            forge meaningful connections with their audiences.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">
              <ChevronsRight size={18} />
            </div>
            <span>Custom EdTech Solutions</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <ChevronsRight size={18} />
            </div>
            <span>Data-Driven Strategies</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <ChevronsRight size={18} />
            </div>
            <span>User-Centric Design</span>
          </div>
        </div>

        <button
          onClick={handlePopupOpen}
          className="consultation-button"
          aria-label="Get free consultation"
        >
          <span>FREE CONSULTATION</span>
          <div className="button-icon">
            <ArrowRight size={20} />
          </div>
          <div className="button-hover-effect"></div>
        </button>
      </div>

      {/* POPUP FORM */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="popup-close" onClick={handlePopupClose}>
              <X size={24} />
            </button>
            <h3>Get Your Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" required />
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

      )}
    </section>
  );
};

export default About;
