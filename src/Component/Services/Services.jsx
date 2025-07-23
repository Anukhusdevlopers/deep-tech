import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Cloud,
  Smartphone,
  Server,
  BarChart2,
  Lock,
} from "lucide-react";
import "./Services.css";
import { FaCode, FaServer, FaUserTie, FaCloud, FaShieldAlt, FaCheckCircle, FaHeadset, FaLock } from 'react-icons/fa';



const Services = () => {
  const iconComponents = {
    code: <Code size={32} />,
    globe: <Globe size={32} />,
    database: <Database size={32} />,
    cloud: <Cloud size={32} />,
    smartphone: <Smartphone size={32} />,
    server: <Server size={32} />,
    chart: <BarChart2 size={32} />,
    lock: <Lock size={32} />,
  };

  const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    desc: 'Custom websites and web apps\nbuilt for performance & scalability.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'App Development',
    desc: 'We design and build user-friendly, high-performance mobile applications tailored to your business goal',
  },  
  {
    icon: <FaCode />,
    title: 'Graphic Designing',
    desc: 'From branding to promotional materials, we craft compelling visuals that leave a lasting impression.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Digital Marketing',
    desc: 'Drive growth and visibility with our result-driven digital marketing strategies.',
  },  
  //  {
  //   icon: <FaCloud />,
  //   title: 'Cloud Services',
  //   desc: 'Seamless cloud migration and\nmanagement solutions.',
  // },
  // {
  //   icon: <FaShieldAlt />,
  //   title: 'Deployment',
  //   desc: 'Protect systems with modern\nsecurity strategies and audits.',
  // },
];

  return (
    <section className="services-section" id="service">
     

      {/* <div className="section-container"> */}
        <div className="section-header">
          <div className="section-tag">
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">
            Our <span>Specialized Services</span>
          </h2>
          <p className="section-description">
            Comprehensive solutions tailored to meet your business needs and
            drive digital transformation
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-icon-wrapper">
                <div className="icon-background">
                  {iconComponents[service.icon] || <Code size={32} />}
                </div>
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.desc}</p>
              <div className="card-highlight"></div>
            </motion.div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
