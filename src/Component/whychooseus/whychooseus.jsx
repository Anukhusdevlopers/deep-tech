import React, { useEffect } from "react";
import { Award, Users, Clock, Shield, BookOpen, Globe } from "lucide-react";
import "./whychooseus.css";

const WhyChooseUs = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".why-card");
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

  const icons = {
    award: <Award size={32} />,
    users: <Users size={32} />,
    clock: <Clock size={32} />,
    shield: <Shield size={32} />,
    book: <BookOpen size={32} />,
    globe: <Globe size={32} />,
  };

  const whyChooseUsData = [
    {
      icon: '👥',
      title: 'Expert Teams',
      desc: 'Highly skilled professionals in AI, blockchain, and cloud computing at every location',
    },
    {
      icon: '🛡️',
      title: 'Consistent Quality',
      desc: 'Same rigorous standards and quality control across all branches',
    },
    {
      icon: '💙',
      title: 'Local Understanding',
      desc: 'Deep knowledge of regional business needs and market dynamics',
    },
  ];
  

  return (
    <section className="why-section" id="why-choose-us">
  
      {/* <div className="section-container"> */}
        <div className="section-header">
          <div className="section-tag">
            <span>Our Advantages</span>
          </div>
          <h2 className="section-title">
            Why Choose <span>Deep Tech</span>
          </h2>
          <p className="section-description">
            We deliver exceptional value through our unique combination of
            expertise, innovation, and commitment to your success
          </p>
        </div>

        <div className="cards-grid">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="why-card">
              <div className="card-icon-wrapper">
                <div className="icon-background">
                  {icons[item.icon] || <Award size={32} />}
                </div>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.desc}</p>
              <div className="card-highlight"></div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default WhyChooseUs;
