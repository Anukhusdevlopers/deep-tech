import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import "./HeroSection.css";
import img1 from '../../assets/HomeSliderImg/Empowering.png';
import img2 from '../../assets/HomeSliderImg/Best-Machine-Learning-Training-in-Noida.jpg'
import img3 from '../../assets/HomeSliderImg/aboutimg.jpg'

const HeroSection = ({ onSignInClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      titleLine1: 'Innovative Software',
      titleLine2: 'Solutions for the Future',
      subtitle: 'We build powerful, scalable applications that transform businesses and drive exceptional results.',
      image: img1,
    },
    {
      titleLine1: 'Empowering Enterprises',
      titleLine2: 'with AI & Automation',
      subtitle: 'Unlock the full potential of your business through intelligent automation and smart systems.',
      image: img3,
    },
    {
      titleLine1: 'Designing Smart',
      titleLine2: 'User-Centric Interfaces',
      subtitle: 'We craft beautiful, intuitive designs that keep your users engaged and satisfied.',
      image: img2,
    },
    {
      titleLine1: 'Cloud-Ready Solutions',
      titleLine2: 'For Modern Businesses',
      subtitle:
        'Seamlessly migrate and scale with our cloud-native applications and infrastructure expertise.',
      image:
        img3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];


  return (
    <section className="hero-section" id="Home">
      <div className="hero-background-overlay"></div>

      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${slide.backgroundPattern || ""})`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className={`hero-content ${isAnimating ? "content-animating" : ""}`}>
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="hero-title-line" style={{ "--delay": "0.1s" }}>
              {slide.titleLine1}
              <span className="highlight-word">{slide.highlightWord}</span>
            </span>
            <span className="hero-title-line" style={{ "--delay": "0.2s" }}>
              {slide.titleLine2}
            </span>
          </h1>

          <p className="hero-subtitle" style={{ "--delay": "0.3s" }}>
            {slide.subtitle}
          </p>

          <div className="hero-cta" style={{ "--delay": "0.4s" }}>
            <button
              className="cta-button primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Sign in"
            >
              <span>Get Started</span>
              <div className="button-icon">
                <ArrowRight size={20} />
              </div>
              <div className="button-hover-effect"></div>
            </button>

            <button
              className="cta-button secondary"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Learn more"
            >
              <span>Learn More</span>
              <div className="button-icon">
                <ChevronRight size={20} />
              </div>
            </button>
          </div>

          <div className="hero-features" style={{ "--delay": "0.5s" }}>
            {slide.features?.map((feature, index) => (
              <div key={index} className="feature">
                <div className="feature-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-container">
          <div className="floating-shapes">
            <div className="shape-circle"></div>
            <div className="shape-triangle"></div>
            <div className="shape-square"></div>
          </div>

          <div className="image-wrapper">
            <img
              src={slide.image}
              alt={slide.imageAlt || "Hero visual"}
              className={`hero-image ${isAnimating ? "image-animating" : ""}`}
            />
            <div className="image-highlight"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
