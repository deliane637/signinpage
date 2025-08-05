import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { FaGoogle, FaApple } from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app-container">
      {/* Simple Galaxy Background */}
      <div className="galaxy-bg"></div>
      <div className="stars"></div>

      {/* Header avec logo et barre de recherche */}
      {/* <Navbar /> */}

      <main className="signin-contain">
        <div className="logo-label">Flearnaxy Sign in</div>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
          <div className="forgotpwd">
            <a href="#" className="forgot">Forgot password ?</a>
          </div>

          <button type='submit' className="signin-button">Sign In</button>
        </form>

        <div className="signup-link">
          <div className="signup-text">Don't have an account yet? <Link to="/signup" className="signup-link-text">Create one</Link></div>
        </div>

        <div className="social-login">
          <div className="social-text">or continue with</div>
          <div className="social-buttons">
            <button className="social-button google">
              <FaGoogle className="social-icon" />
              Google
            </button>
            <button className="social-button apple">
              <FaApple className="social-icon" />
              Apple
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;