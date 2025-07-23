import React, { useEffect } from 'react';
import './termsofservice.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);

  return (
    <div className="terms-container">
      <h2 data-aos="fade-up">Terms of Service</h2>

      <div className="terms-card">
        <p data-aos="fade-up">
          Welcome to Code Tools. By accessing or using our coding utilities, tools, website features, or developer resources, you agree to abide by these terms and conditions governed by the laws of India.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Nature of Our Services</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          Code Tools is a digital utility platform providing developers with code formatting, debugging, documentation, and code testing tools.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          We do not offer hosting, compilation-as-a-service, or paid developer infrastructure. Our services are browser-based and depend on public libraries and client-side execution.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Payments, Charges, and Billing</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          Most tools are free. However, premium features like cloud sync, API access, or plugin integrations may be offered under subscription-based plans.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          All payments, if applicable, will be transparently disclosed. We do not charge hidden fees or usage-based costs.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Tool Availability</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          All tools are subject to availability and may be temporarily unavailable due to maintenance, upgrades, or technical issues.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Code Tools does not guarantee uninterrupted access and is not liable for downtime or feature changes.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">User Responsibilities</h3>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">Use tools ethically and within the bounds of software laws.</li>
          <li data-aos="fade-up" data-aos-delay="200">Do not misuse tools for harmful code or violate platform security.</li>
          <li data-aos="fade-up" data-aos-delay="300">Abide by local, national, and international code distribution laws.</li>
        </ul>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Limitation of Liability</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          Code Tools is not liable for any data loss, coding errors, or indirect damages caused by use of the tools.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          All services are provided “as-is” without any guarantees of accuracy or uptime.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Data and Privacy</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          We comply with the Digital Personal Data Protection Act, 2023. Data collected is minimal and detailed in our Privacy Policy.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Modification of Terms</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          We reserve the right to change these terms at any time. Continued use of the tools constitutes agreement to the updated terms.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Governing Law & Dispute Resolution</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          These terms are governed by Indian law. Any disputes will be resolved through arbitration in Bengaluru, Karnataka in accordance with the Arbitration and Conciliation Act, 1996.
        </p>
      </div>

      <div className="terms-card">
        <h3 data-aos="fade-up">Grievance Redressal</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          For questions or complaints, contact us at 📧 <a href="mailto:khushboopanday05@gmail.com">khushboopanday05@gmail.com</a>
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          We respond within 14 days in accordance with the Consumer Protection Act, 2019.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
