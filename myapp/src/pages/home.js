import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div id="home" className="hero-area">
      {/* Background Image */}
      <div className="bg-image bg-parallax overlay"></div>
      {/* /Background Image */}

      <div className="home-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="white-text">Intelligent Career Guidance System</h1>
              <p className="lead white-text">
                <b>
                  Discover yourself
                  <br />
                  Take the test to find the perfect role for you
                </b>
              </p>
              <a className="main-button icon-button" href="#">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

     