import React, { useState, useEffect } from 'react';
import './Login.css';

function Login({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = activeTab === 'login' ? 'Login successful!' : 'Signup successful!';
    window.confirm(message);

    onClose();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className={`popup-wrapper ${activeTab === 'signup' ? 'signup-mode' : 'login-mode'}`}
        onClick={(e) => e.stopPropagation()}
      >
       
        <div className="popup-content">
        <button className="login-close-btn" onClick={onClose}>×</button>

          <div className="popup-right">
            <div className="tab-buttons">
              <button
                onClick={() => setActiveTab('login')}
                className={activeTab === 'login' ? 'active' : ''}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={activeTab === 'signup' ? 'active' : ''}
              >
                Sign Up
              </button>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: '28px', color: '#002f6c' }}>
    {activeTab === 'login' ? 'Welcome Back!' : 'Create an Account'}
  </h2>

            <form onSubmit={handleFormSubmit}>
              {activeTab === 'signup' && (
                <>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" required />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
                
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>

              {activeTab === 'signup' && (
                <>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required />
                  </div>

                  <div className="terms">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      I accept the <a href="/">Terms & Privacy</a>
                    </label>
                  </div>
                </>
              )}

              <button type="submit" className="submit-btn">
                {activeTab === 'login' ? 'Login' : 'Sign Up'}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
