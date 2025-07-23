import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Contact.css";
import contactImage from "../../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
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
                <p>khushboopanday05@gmail.com</p>
              </div>
            </div>

            <div className="contact-image">
              <img src={contactImage} alt="Contact us" loading="lazy" />
            </div>
          </div>

          <div className="contact-form">
            <h3><span style={{ borderBottom: '3px solid #fcb830' }}>Send Us a </span> Message</h3>
            <form onSubmit={handleSubmit}>
              {/* <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label className="contact-form-label">First Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label className="contact-form-label">Last Name</label>
                </div>
              </div> */}
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
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
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
