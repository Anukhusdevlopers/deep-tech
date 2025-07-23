import React from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="modal-header">
      <h3>Book Your Free Consultation</h3>
        <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="Tell us about your project" required />
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Modal;
