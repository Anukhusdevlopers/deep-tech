import React, { useState } from 'react';
import './popularCourse.css';
import { Link } from 'react-router-dom';
import Login from '../LoginSignup/Login';

const CourseCard = ({ image, title, reviews, users, logo }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <div className="course-card">
        <img src={image} alt="Course" className="course-image" />
        <h3>{title}</h3>
        <div className="rating">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
          <p>{reviews} | {users} User Reviews</p>
        </div>
        <button className="register-btn" onClick={handleLoginOpen}>Register Now</button>
      </div>

      {/* ✅ Render Login Modal */}
      <Login isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
};

export default CourseCard;
