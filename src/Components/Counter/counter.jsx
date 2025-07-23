import React from "react";
import { Users, BookOpen, Briefcase, Clock } from "lucide-react";
import CountUp from "react-countup";
import "./counter.css";

const stats = [
  { number: 200000, label: "Students", icon: <Users size={32} /> },
  { number: 1000, label: "Courses", icon: <BookOpen size={32} /> },
  { number: 300, label: "Clients", icon: <Briefcase size={32} /> },
  { number: 20, label: "Years Serving", icon: <Clock size={32} /> },
];

const Counter = () => {
  return (
    <section className="counter-section">
      <div className="counter-background">
        <div className="background-overlay"></div>
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
      </div>

      <div className="counter-container">
        <div className="counter-grid">
          {stats.map((stat, index) => (
            <div className="counter-card" key={index}>
              <div className="card-icon">{stat.icon}</div>
              <div className="card-content">
                <h3 className="counter-number">
                  <CountUp
                    end={stat.number}
                    duration={3}
                    separator=","
                    suffix="+"
                  />
                </h3>
                <p className="counter-label">{stat.label}</p>
              </div>
              <div className="card-highlight"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
