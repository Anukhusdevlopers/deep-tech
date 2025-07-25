import React from 'react';
import './Home.css';
import Contact from '../../Component/Contact/Contact.jsx';
import HeroSection from '../../Component/HeroSection/HeroSection.jsx';
import About from '../../Component/About/About.jsx';
import Projects from '../../Component/Project/Projects.jsx';
import WhyChooseUs from '../../Component/whychooseus/whychooseus.jsx';
import Services from '../../Component/Services/Services.jsx';

function Home({ onSignInClick }) {
  return (
    <div>
      <HeroSection onSignInClick={onSignInClick} />
      <About />
      <Projects/>
      <WhyChooseUs />
      <Services />
      <Contact />
      
      {/* <Popularcourse /> */}
      {/* <WebAppDevelopment/> */}
      {/* <Internship/> */}
      {/* <Summer/> */}
      {/* <Counter /> */}
      {/* <Card /> */}
      
    </div>
  );
}

export default Home;
