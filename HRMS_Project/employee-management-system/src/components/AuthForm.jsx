/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For this example, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className={`wrapper ${isLogin ? '' : 'active'}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      <div className={`form-box ${isLogin ? 'login' : 'register'}`}>
        <h2 className="animation" style={{ '--i': 0, '--j': 22 }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          {!isLogin && (
            <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <i className='bx bxs-envelope'></i>
            </div>
          )}
          <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 }}>
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <a href="#" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign Up' : 'Login'}
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className={`info-text ${isLogin ? 'login' : 'register'}`}>
        <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 1, '--j': 21 }}>
          Welcome to the Human Resource Management System...
        </p>
      </div>
    </div>
  );
};

export default AuthForm;

