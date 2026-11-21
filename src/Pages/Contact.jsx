
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <span>WE ARE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>
            Have questions? Get in touch with Bright Valley College.
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">

          <div className="contact-heading">
            <span>GET IN TOUCH</span>
            <h2 className="section-title">Let's Start a Conversation</h2>
            <p className="section-subtitle">
              Contact our team for admissions, academic information
              and general enquiries.
            </p>
          </div>

          <div className="contact-info-grid">

            <div className="contact-info-card">
              <div>📍</div>
              <h3>Our Location</h3>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>

            <div className="contact-info-card">
              <div>📞</div>
              <h3>Phone Number</h3>
              <p>+91 73061xxxxx</p>
            </div>

            <div className="contact-info-card">
              <div>✉️</div>
              <h3>Email Address</h3>
              <p>info@brightvalley.edu</p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container contact-form-grid">

          <div className="contact-form-text">
            <span>CONTACT OUR TEAM</span>
            <h2>We Are Ready to Answer Your Questions</h2>
            <p>
              Fill out the form with your details and enquiry.
              Our team can follow up with you.
            </p>

            <div className="contact-extra">
              <h4>Working Hours</h4>
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-box">

            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>

              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select your enquiry</option>
                <option value="Admission">Admission</option>
                <option value="Academics">Academics</option>
                <option value="Placement">Placement</option>
                <option value="General">General Enquiry</option>
              </select>

              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">
                Submit Enquiry →
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}
      <section className="contact-map-section">
        <div className="container">
          <h2 className="section-title">Find Our Location</h2>

          <div className="contact-map">
            <iframe
              title="Coimbatore Map"
              src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
