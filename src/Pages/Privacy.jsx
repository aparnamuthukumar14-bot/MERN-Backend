
import React from "react";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy and information matter to us.</p>
      </section>

      <section className="privacy-content">
        <p className="privacy-intro">
          Bright Valley College respects the privacy of visitors
          and users of its website. This page describes general
          information-handling practices for this website.
        </p>

        <div className="privacy-card">
          <h2>1. Information We Collect</h2>
          <p>
            Information entered into website forms may include
            your name, email address, phone number and other
            details you choose to provide.
          </p>
        </div>

        <div className="privacy-card">
          <h2>2. How Information Is Used</h2>
          <p>
            Information may be used to respond to enquiries,
            provide relevant college information and improve
            website services.
          </p>
        </div>

        <div className="privacy-card">
          <h2>3. Information Security</h2>
          <p>
            Users should keep their account credentials private.
            Any future system that stores personal information
            should use suitable security measures.
          </p>
        </div>

        <div className="privacy-card">
          <h2>4. Sharing of Information</h2>
          <p>
            Personal information should only be shared with
            authorized persons or where legally required.
          </p>
        </div>

        <div className="privacy-card">
          <h2>5. Cookies</h2>
          <p>
            This website may use cookies or similar technologies
            in the future to improve user experience.
          </p>
        </div>

        <div className="privacy-card">
          <h2>6. External Links</h2>
          <p>
            This website may contain links to external websites.
            Their privacy practices are governed by their own
            policies.
          </p>
        </div>

        <div className="privacy-card">
          <h2>7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy,
            please contact the college through the Contact page.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
