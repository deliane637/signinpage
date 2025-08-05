import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { FaGoogle, FaApple } from 'react-icons/fa';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
        phoneNumber: '',
        location: ''
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
        console.log('Signup form submitted:', formData);
    };

    const countries = [
        'Select Location',
        'United States',
        'Canada',
        'United Kingdom',
        'Germany',
        'France',
        'Spain',
        'Italy',
        'Netherlands',
        'Belgium',
        'Switzerland',
        'Austria',
        'Sweden',
        'Norway',
        'Denmark',
        'Finland',
        'Australia',
        'New Zealand',
        'Japan',
        'South Korea',
        'Singapore',
        'Hong Kong',
        'Brazil',
        'Mexico',
        'Argentina',
        'Chile',
        'Colombia',
        'Peru',
        'South Africa',
        'Nigeria',
        'Kenya',
        'Ghana',
        'Egypt',
        'Morocco',
        'India',
        'China',
        'Thailand',
        'Malaysia',
        'Indonesia',
        'Philippines',
        'Vietnam',
        'Cameroon',
        'Other'
    ];

    return (
        <div className="app-container">
            {/* Galaxy Background */}
            <div className="galaxy-bg"></div>
            <div className="stars"></div>

            {/* Header */}
            {/* <Navbar/> */}

            <main className="signin-contain">
                <div className="logo-label">Flearnaxy Sign up!</div>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        {/* Username */}
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Username'
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                        />

                        {/* Password */}
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                        />

                        {/* Verify Password */}
                        <input
                            type="password"
                            name="verifyPassword"
                            value={formData.verifyPassword}
                            onChange={handleChange}
                            placeholder='Verify Password'
                        />

                        {/* Phone Number */}
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder='Phone Number (e.g. +237 123, 456, 786)'
                        />

                        {/* Location Dropdown */}
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="location-select"
                        >
                            {countries.map((country, index) => (
                                <option key={index} value={country === 'Select Location' ? '' : country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type='submit' className="signin-button">Sign Up</button>
                </form>

                <div className="signin-link">
                    <div className="signin-text">Already have an account? <Link to="/" className="signin-link-text">Sign in</Link></div>
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

export default Signup;