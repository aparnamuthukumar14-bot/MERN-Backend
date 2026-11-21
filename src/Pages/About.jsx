
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <span>GET TO KNOW US</span>
          <h1>About Bright Valley College</h1>
          <p>
            Inspiring minds, building confidence and creating
            opportunities for a better tomorrow.
          </p>
          <Link to="/" className="about-home-link">
            Home
          </Link>
          <span className="breadcrumb"> / About Us</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container about-intro">

         <div className="about-image">
  <img
    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1000"
    alt="Bright Valley College campus"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src =
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000";
    }}
  />
</div>

          <div className="about-text">
            <span className="about-label">WHO WE ARE</span>

            <h2 className="section-title">
              A Place Where Learning Meets Opportunity
            </h2>

            <p>
              Bright Valley College is committed to providing
              quality education and creating a supportive
              environment for students to achieve their goals.
            </p>

            <p>
              We encourage creativity, critical thinking,
              teamwork and lifelong learning through academic
              activities and practical experiences.
            </p>

            <Link to="/portal" className="primary-btn">
              Explore College Portal
            </Link>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-section">
        <div className="container">

          <div className="mission-grid">

            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To provide accessible, quality education that
                develops knowledge, skills, values and
                responsible individuals.
              </p>
            </div>

            <div className="mission-card vision-card">
              <div className="mission-icon">🌟</div>
              <h2>Our Vision</h2>
              <p>
                To create an innovative learning community
                that inspires excellence and prepares students
                for future opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">

          <div className="values-heading">
            <span className="about-label">WHAT WE BELIEVE IN</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our college community.
            </p>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <span>📚</span>
              <h3>Knowledge</h3>
              <p>Promoting continuous learning and curiosity.</p>
            </div>

            <div className="value-card">
              <span>🤝</span>
              <h3>Integrity</h3>
              <p>Building trust through honesty and responsibility.</p>
            </div>

            <div className="value-card">
              <span>💡</span>
              <h3>Innovation</h3>
              <p>Encouraging creativity and new ideas.</p>
            </div>

            <div className="value-card">
              <span>🏆</span>
              <h3>Excellence</h3>
              <p>Striving for high standards in everything we do.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
