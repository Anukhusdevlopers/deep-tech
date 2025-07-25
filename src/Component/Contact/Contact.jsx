import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Contact.css";
import success from "../../assets/success.webp";
import contactImage from "../../assets/contact.jpg";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


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
    <section className="contact-section" id="contact">


      {/* <div className="section-container"> */}
      <div className="section-header">
        <div className="section-tag">
          <span>Contact Us</span>
        </div>
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="section-description">
          Have questions or ready to start your project? Contact us today!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3><span style={{ borderBottom: '3px solid #fcb830' }}>Contact Inform</span>ation</h3>
          <div className="info-item">
            <div className="info-icon">
              <IoLocationOutline size={24} />
            </div>
            <div>
              <h4>Address</h4>
              <p>Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <IoMdCall size={24} />
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 87070 87926</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <MdOutlineMailOutline size={24} />
            </div>
            <div>
              <h4>Email</h4>
              <p>deeptech2087@gmail.com</p>
            </div>
          </div>

          <div className="contact-image">
            <img src={contactImage} alt="Contact us" loading="lazy" />
          </div>
        </div>

        <div className="contact-form">
          <h3><span style={{ borderBottom: '3px solid #fcb830' }}>Send Us a </span> Message</h3>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="contact-form-label">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="contact-form-label">Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label className="contact-form-label">Phone Number</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label className="contact-form-label">Your Message</label>
            </div>

            <button type="submit" className="submit-button">
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img src={success} alt="Success" className="popup-image" />
            <h2>Thank you for reaching out!</h2>
            <p>We've received your message and will get back to you shortly.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* </div> */}
    </section>
  );
};

export default Contact;
