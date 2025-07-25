import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";
import karwan from '../../assets/Projects/karwan.png'
import sh from '../../assets/Projects/scrap.png'
import evapp from '../../assets/Projects/Screenshot 2025-07-23 144335.png'
import shapp from '../../assets/Projects/Screenshot 2025-07-23 144132.png'
import nmims from '../../assets/Projects/Screenshot 2025-07-23 144357.png'
import chef from '../../assets/Projects/Screenshot 2025-07-23 144411.png'
import bvc from '../../assets/Projects/Screenshot 2025-07-23 144424.png'
import alliance from '../../assets/Projects/Screenshot 2025-07-23 144436.png'
import deemed from '../../assets/Projects/Screenshot 2025-07-23 144452.png'
import portfolio from '../../assets/Projects/Screenshot 2025-07-23 144548.png'

const Projects = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null); // For scrolling

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const Projects = [
    {
      image: sh,
      title: 'Scrap Hawker',
      description: 'A scrap selling platform connecting customers to hawkers with doorstep pickup.',
      link: 'https://scraphawker.com/',
      type: 'Website'
    },
    {
      image: karwan,
      title: 'Karwan Tours',
      description: 'A tourism booking site offering custom tour packages across India.',
      link: 'https://karwaninternationaltours.com/',
      type: 'Website'
    },
    {
      image: evapp,
      title: '2 Charge EV',
      description: 'App designed to help electric vechile drivers in india easily find public charging stations.',
      link: 'https://play.google.com/store/apps/details?id=com.twocharge.ev',
      type: 'App'
    },
    {
      image: shapp,
      title: 'Scrap Hawker',
      description: 'A scrap selling platform connecting customers to hawkers with doorstep pickup.',
      link: 'https://play.google.com/store/apps/details?id=com.kabadimobileapp',
      type: 'App'
    },
    {
      image: nmims,
      title: 'NMIMS',
      description: 'Create website for admission purpose in university.',
      link: 'https://nimmsnapt.manavrachnauniversity.tech/',
      type: 'Website'
    },
    {
      image: chef,
      title: 'NMIMS School',
      description: 'This one is created for admission purpose.',
      link: 'https://nmimsschoolofhospitality.tech/',
      type: 'Website'
    },
    {
      image: bvc,
      title: 'Bhartiya Vidyapeeth',
      description: 'Create website for admission purpose in university.',
      link: 'https://bvduniversity.tech/',
      type: 'Website'
    },
    {
      image: alliance,
      title: 'Alliance University',
      description: 'Create website for admission purpose in university.',
      link: 'https://allianceuniversity.tech/',
      type: 'Website'
    },
    {
      image: deemed,
      title: 'Deemed University',
      description: 'Create website for admission purpose in university.',
      link: 'https://symbiosisuniversity.tech/',
      type: 'Website'
    }

  ];
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };


  return (
    <section className="popular-courses" id="project">
      <div className="section-header">
        <div className="header-content">
          <div className="section-tag">
            {/* <ChevronLeft /> */}
            <Zap size={20} className="tag-icon" />
            <span>Latest Projects</span>
          </div>
          <h2 className="section-title">
            Explore Our <span>Latest Work</span>
          </h2>
          <p className="section-description">
            Take a closer look at our recent work and the challenges we’ve helped solve.
          </p>
        </div>
      </div>

      <div className="slider-container">
        {/* Left Arrow (desktop only) */}
        <button className="arrow-btn arrow-left" onClick={scrollLeft}>
          <ChevronLeft size={24} />
        </button>

        <div className="courses-slider" ref={sliderRef}>
          {Projects.map((course, index) => (
            <div className="project-card" key={index}>
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-image" loading="lazy" />
                <div className="image-overlay"></div>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title} - {course.type}</h3>
                <p>{course.description}</p>
                {course.link && (
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    <button className="enroll-button">
                      <span>View</span>
                      <ArrowRight size={18} className="button-icon" />
                    </button>
                  </a>
                )}
              </div>

              <div className="course-highlight"></div>
            </div>
          ))}
        </div>


        {/* <div className="arrow-group-mobile">
          <button className="arrow-btn left mobile" onClick={scrollLeft}>
            <ChevronLeft size={24} />
          </button>

          <button className="arrow-btn left mobile" onClick={scrollRight}>
            <ChevronRight size={24} />
          </button>
        </div> */}
        <button className="arrow-btn arrow-right" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>

      </div>

      <div className="arrow-buttons-mobile">
        <button className="arrow-btn" onClick={scrollLeft}>
          <ChevronLeft size={24} />
        </button>
        <button className="arrow-btn" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
