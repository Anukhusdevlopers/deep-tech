import React, { useState } from 'react';
import './InternshipPrograms.css';
import internshipImg from '../Assets/intership.jpg';
import Login from '../LoginSignup/Login';  // Importing the Login component

const InternshipPrograms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinInternshipOpen = () => {
    setIsModalOpen(true);
  };

  const handleJoinInternshipClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="internship-section" id="internship">
      <h2>Internship Programs</h2>
      <div className="internship-container">
        <div className="internship-text">
          <p className="internship-subtitle">Gain real-world experience with expert guidance</p>
          <p className="internship-desc">
            Work on live projects under the mentorship of industry professionals and elevate your career in tech.
          </p>
          <ul className="internship-features">
            <li>✔ Hands-on Training</li>
            <li>✔ Certificate on Completion</li>
            <li>✔ Flexible Duration</li>
          </ul>
          <button className="internship-btn" onClick={handleJoinInternshipOpen}>Join Internship</button>
        </div>
        <div className="internship-img">
          <img src={internshipImg} alt="Internship" />
        </div>
      </div>

      {/* Render the Login Modal */}
      <Login isOpen={isModalOpen} onClose={handleJoinInternshipClose} />
    </section>
  );
};

export default InternshipPrograms;
