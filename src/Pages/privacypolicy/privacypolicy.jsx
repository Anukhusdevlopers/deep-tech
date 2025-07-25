import React, { useEffect } from 'react';
import './privacypolicy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);

  return (
    <div className="privacy-container">
      <h2 data-aos="fade-up">Privacy Policy</h2>

      <div className="privacy-card">
        <p data-aos="fade-up">
          Deep Stack Tech is a developer-focused web application built to assist programmers with utilities like code formatting, debugging tools, documentation generators, and API testing environments.
        </p>
        <p data-aos="fade-up" data-aos-delay="100">
          This is an independently developed platform and does not represent or affiliate with any official software company, development firm, or commercial provider.
        </p>
      </div>

      <div className="privacy-card">
        <h3 data-aos="fade-up">Information We Collect</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          By default, Code Tools does not collect or store any personal user data.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">Optional features may access:</p>
        <ul>
          <li data-aos="fade-up" data-aos-delay="300">Clipboard data — used only for in-app code pasting (never stored or transmitted)</li>
          <li data-aos="fade-up" data-aos-delay="400">Crash reports & performance logs — enabled only if opted in, to help improve tool stability</li>
        </ul>
        <p data-aos="fade-up" data-aos-delay="500">There is no requirement to create an account or provide personal information to use the core features.</p>
      </div>

      <div className="privacy-card">
        <h3 data-aos="fade-up">How We Use Information</h3>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">Enhancing tool performance</li>
          <li data-aos="fade-up" data-aos-delay="200">Saving recent code snippets in browser storage</li>
          <li data-aos="fade-up" data-aos-delay="300">Debugging input/output issues</li>
        </ul>
        <p data-aos="fade-up" data-aos-delay="400">We do not share, sell, or use data for advertising purposes.</p>
      </div>

      <div className="privacy-card">
        <h3 data-aos="fade-up">Third-Party Services</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          Some utilities may integrate trusted third-party services such as:
        </p>
        <ul>
          <li data-aos="fade-up" data-aos-delay="200">CodeMirror – for advanced code editing</li>
          <li data-aos="fade-up" data-aos-delay="300">Firebase – for optional cloud sync (if enabled)</li>
          <li data-aos="fade-up" data-aos-delay="400">Google Fonts – for UI/UX typography</li>
        </ul>
      </div>

      <div className="privacy-card">
        <h3 data-aos="fade-up">Data Security</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          All locally generated data remains within the user’s browser environment unless explicitly exported. No sensitive information is transmitted externally without user action.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          When third-party APIs are used, requests are made anonymously wherever possible.
        </p>
      </div>

      <div className="privacy-card">
        <h3 data-aos="fade-up">Developer Contact</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          This project is independently built and maintained by a Deep Stack Tech Team.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          📧 <a href="mailto:deeptech2087@gmail.com">deeptech2087@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
