import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header id="header" className="transparent-nav">
      <div className="container">
        <div className="header-content">
          <div className="navbar-header">
          <div className="navbar-brand">
            <Link to="/main" className="logo">Career.ly</Link>
          </div>
            <nav id="nav">
              <ul className="main-menu nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Career-Prediction">Career Prediction</Link></li>
                <li><a href="main#about">About Us</a></li>
                <li><a href="contact">Contact Us</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="register">Register</a></li>
              </ul>
            </nav>
          </div>
    
        </div>
      </div>
    </header>
  );
}

export default Header;
