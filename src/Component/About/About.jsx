import React, { useEffect } from "react";
import "./About.css";
import aboutimg from '../../assets/HomeSliderImg/aboutimg.jpg'
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronsRight, Sparkles } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("#contact");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section" id="about">

      {/* <div className="about-container"> */}
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
          {/* <div className="floating-badge">
            <Sparkles size={20} />
            <span>Innovation Leaders</span>
          </div> */}
        </div>

        <div className="about-content">
          <div className="section-tag">
            <span>About Us</span>
            {/* <div className="tag-line"></div> */}
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
            onClick={handleRedirect}
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
      {/* </div> */}
    </section>
  );
};

export default About;
