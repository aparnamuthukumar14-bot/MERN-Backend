
import React from "react";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>Guidelines for using the Bright Valley College website.</p>
      </section>

      <section className="terms-content">
        <p className="terms-intro">
          Welcome to Bright Valley College. By accessing this website,
          you agree to follow the terms and conditions mentioned below.
        </p>

        <div className="terms-card">
          <h2>1. Website Usage</h2>
          <p>
            Users should use this website only for lawful educational
            and informational purposes. Any misuse of the website is
            not permitted.
          </p>
        </div>

        <div className="terms-card">
          <h2>2. User Accounts</h2>
          <p>
            Users are responsible for maintaining the confidentiality
            of their login credentials. Account details should not be
            shared with unauthorized persons.
          </p>
        </div>

        <div className="terms-card">
          <h2>3. Information Accuracy</h2>
          <p>
            The college aims to provide accurate information on its
            website. However, users should contact the college for
            confirmation of important academic and administrative details.
          </p>
        </div>

        <div className="terms-card">
          <h2>4. Intellectual Property</h2>
          <p>
            Website content, including text, logos, images and design,
            should not be copied or reused without appropriate permission.
          </p>
        </div>

        <div className="terms-card">
          <h2>5. Website Availability</h2>
          <p>
            Website features may occasionally be updated, changed or
            temporarily unavailable for maintenance.
          </p>
        </div>

        <div className="terms-card">
          <h2>6. Changes to Terms</h2>
          <p>
            Bright Valley College may update these terms when necessary.
            Users should review this page periodically.
          </p>
        </div>

        <div className="terms-card">
          <h2>7. Contact Information</h2>
          <p>
            For questions about these terms, please visit the Contact
            page and reach out to the college.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Terms;
