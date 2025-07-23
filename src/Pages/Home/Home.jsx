import React from 'react';
import './Home.css';
import Card from '../../Components/Card/Card';
import Counter from '../../Components/Counter/counter';
import Popularcourse from '../../Components/allCourse/popularCourse';
import Contact from '../../Component/Contact/Contact.jsx';
import WebAppDevelopment from '../../Components/WebAppDevelopment/WebAppDevelopment';
import Summer from '../../Components/SummerTraining/SummerTraining';
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
