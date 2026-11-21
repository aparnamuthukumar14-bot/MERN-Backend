
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {

  const features = [
    {
      icon: "🎓",
      title: "Quality Education",
      text: "Learn from experienced educators."
    },
    {
      icon: "💻",
      title: "Modern Technology",
      text: "Experience innovative digital learning."
    },
    {
      icon: "🏆",
      title: "Career Excellence",
      text: "Prepare for successful careers."
    }
  ];

  return (
    <div>

      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">

            <span className="hero-tag">
              WELCOME TO BRIGHT VALLEY COLLEGE
            </span>

            <h1>
              Discover Your Potential.
              <br />
              <span>Shape Your Future.</span>
            </h1>

            <p>
              Empowering the next generation with knowledge,
              creativity and excellence.
            </p>

            <div className="hero-buttons">
              <Link to="/portal" className="primary-btn">
                Explore Our Portal
              </Link>

              <Link to="/about" className="hero-secondary">
                Discover More
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="home-heading">
            <span>WHY CHOOSE US</span>

            <h2 className="section-title">
              Building a Brighter Tomorrow
            </h2>

            <p className="section-subtitle">
              We provide a learning environment that encourages
              innovation, leadership and personal growth.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="home-about">
        <div className="container about-grid">

          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=900"
            alt="Bright Valley College campus"
          />

          <div>
            <span>ABOUT OUR COLLEGE</span>

            <h2 className="section-title">
              Education That Inspires Excellence
            </h2>

            <p>
              Bright Valley College aims to create an inspiring
              educational environment where students develop
              knowledge, confidence and professional skills.
            </p>

            <Link to="/about" className="primary-btn">
              Learn More
            </Link>
          </div>

        </div>
      </section>
    </div>
  
  );
}

export default Home;
