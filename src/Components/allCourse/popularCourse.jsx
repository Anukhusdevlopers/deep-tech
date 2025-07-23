import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Clock, Users, Zap } from "lucide-react";
import "./popularCourse.css";
import popularCourses from "../Assets/popularCourse.js";

const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".course-card");
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

  return (
    <section className="popular-courses" id="Pcourse">
      <div className="section-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <div className="header-content">
            <div className="section-tag">
              <Zap size={20} className="tag-icon" />
              <span>Trending Programs</span>
            </div>
            <h2 className="section-title">
              Discover Our <span>Popular Courses</span>
            </h2>
            <p className="section-description">
              Transform your skills with our industry-leading programs designed
              for success
            </p>
          </div>

          <button
            className="view-all-button"
            onClick={() => navigate("/all-course")}
            aria-label="View all courses"
          >
            <span>Browse All</span>
            <ArrowRight size={20} className="button-icon" />
            <div className="button-hover-effect"></div>
          </button>
        </div>

        <div className="courses-grid">
          {popularCourses.slice(0, 8).map((course, index) => (
            <div className="course-card" key={index}>
              <div className="card-badge">
                <span>Popular</span>
              </div>

              <div className="course-image-container">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="course-content">
                <div className="course-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{course.students}+ Students</span>
                  </div>
                </div>

                <h3 className="course-title">{course.title}</h3>

                <div className="course-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < course.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span>({course.reviews} reviews)</span>
                </div>

                <div className="course-price">
                  <span className="current-price">${course.price}</span>
                  {course.originalPrice && (
                    <span className="original-price">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>

                <button className="enroll-button">
                  <span>Enroll Now</span>
                  <ArrowRight size={18} className="button-icon" />
                </button>
              </div>

              <div className="course-highlight"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
