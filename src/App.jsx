import { useState } from 'react';
import './App.css';
import flearnaxylogo from './assets/flearnaxylogo.jpeg';
import flearnaxysignin from './assets/flearnaxysignup.jpeg';
import flearnaxy from './assets/flearnaxy.jpeg';

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
    <div className="login-container">
      {/* Header avec logo et barre de recherche */}
      <header className="flearnaxy-header">
        <div className="logo-container">
          <img 
            src={flearnaxylogo}
            alt="flearnaxy Logo" 
            className="logo"
          />
        </div>
        <div className="flearnaxy-contain">
          <img src={flearnaxy} alt="" className="flearimg"/>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search flearnaxy" />
        </div>
        <div className="signin1">
          <fieldset>
            <p>signin</p>
          </fieldset>
        </div>
        <div className="signup1">
          <fieldset>
            <p>signup</p>
          </fieldset>
        </div>
      </header>

      <main className="signin-contain">
        <img src={flearnaxysignin} alt="" />  

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
              placeholder='Mot de passe'
            />
          </div>
          <div className="forgotpwd">
            <a href="#" className="forgot">Fogot password ?</a>
          </div>

          <button type='submit' className="signin-button">Sign in</button>
        </form>

        <div className="social-login">
          <div className="social-text">or continue with</div>
          <div className="social-buttons">
            <button className="social-button apple">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Apple Logo"
                className="social-icon"
              />
              Apple
            </button>
            <button className="social-button google">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google Logo"
                className="social-icon"
              />
              Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;