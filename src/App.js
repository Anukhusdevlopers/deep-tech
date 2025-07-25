import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/privacypolicy/privacypolicy";
import TermsOfService from "./Pages/termsofservice/termsofservice";
import './App.css';
import ScrollToTop from "./Component/ScrollToTop/ScroolToTop";
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
      {/* <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onSignInClick={handleSignInClick} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} /> 
        </Routes>
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
