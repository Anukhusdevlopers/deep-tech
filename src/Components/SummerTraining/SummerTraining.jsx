import React, { useState } from "react";
import { Calendar, Clock, Award, Briefcase, Code, Users } from "lucide-react";
import "./SummerTraining.css";
import summerImage from "../Assets/summerIntership2.jpg";
import Login from "../LoginSignup/Login";

const SummerTraining = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Code size={20} />,
      text: "Web Development, Python, Java, and more",
    },
    { icon: <Clock size={20} />, text: "Training Duration: 4 / 6 / 8 Weeks" },
    { icon: <Briefcase size={20} />, text: "Live Projects & Case Studies" },
    { icon: <Award size={20} />, text: "Industry-Recognized Certificate" },
    { icon: <Users size={20} />, text: "Resume & Interview Preparation" },
    {
      icon: <Calendar size={20} />,
      text: "Flexible Timings & Affordable Fees",
    },
  ];

  return (
    <section className="summer-section" id="summer">
      <div className="section-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span>Summer 2025</span>
          </div>
          <h2 className="section-title">
            Industrial <span>Training Program</span>
          </h2>
          <p className="section-description">
            Upgrade your skills this summer with hands-on training by industry
            experts
          </p>
        </div>

        <div className="summer-content">
          <div className="summer-image-container">
            <div className="image-frame">
              <img
                src={
                  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="Summer Training Program"
                className="summer-image"
                loading="lazy"
              />
              <div className="image-highlight"></div>
            </div>
            <div className="floating-badge">
              <span>Limited Seats</span>
            </div>
          </div>

          <div className="summer-details">
            <h3 className="details-title">
              Enroll in 4/6/8 Week Industrial Training
            </h3>
            <p className="details-description">
              Choose from multiple courses designed to make you job-ready with
              practical, industry-relevant skills that employers value.
            </p>

            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button
              className="enroll-button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Join training program"
            >
              <span>Join Training</span>
              <div className="button-hover-effect"></div>
            </button>
          </div>
        </div>
      </div>

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default SummerTraining;
