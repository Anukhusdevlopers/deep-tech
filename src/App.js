import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Components/LoginSignup/Login";
import Pcourse from './Components/allCourse/popularCourse';
import AllCourse from './Components/allCourse/allCourse';
// import Service from "./Components/Services/Services";
import WebAppDevelopment from "./Components/WebAppDevelopment/WebAppDevelopment";
import Summer from "./Components/SummerTraining/SummerTraining";
import Internship from "./Components/IntershipProgram/InternshipPrograms";
import PrivacyPolicy from "./Pages/privacypolicy/privacypolicy";
import TermsOfService from "./Pages/termsofservice/termsofservice";
import './App.css';
import ScrollToTop from "./Components/scrollto top";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const handleSignInClick = () => {
    console.log("Join Training button clicked, opening login modal...");
    setIsLoginOpen(true);
  };

  // Paths where Navbar and Footer should be hidden
  const hideLayoutPaths = ["/privacy-policy", "/terms-of-service"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="app-container">
       <ScrollToTop/>
      {!shouldHideLayout && <Navbar onLoginClick={() => setIsLoginOpen(true)} />}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onSignInClick={handleSignInClick} />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/Pcourse" element={<Pcourse />} />
          <Route path="/contact" element={<ContactHero />} />
          <Route path="/all-course" element={<AllCourse />} />
          <Route path="/services" element={<Service />} />
          <Route path="/summer" element={<Summer onJoinTrainingClick={handleSignInClick} />} />
          <Route path="/internship" element={<Internship />} />
          */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} /> 
        </Routes>
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
