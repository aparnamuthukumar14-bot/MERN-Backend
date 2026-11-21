
import React, { useState } from "react";
import "./QuickEnquiry.css";

function QuickEnquiry() {
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

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="quick-enquiry">
      <div className="enquiry-container">

        <div className="enquiry-info">
          <h2>Have Any Questions?</h2>
          <p>
            Interested in joining Bright Valley College?
            Send us your enquiry. Our team will be happy to help.
          </p>

          <div className="enquiry-detail">
            <span>📍</span>
            <p>Coimbatore, Tamil Nadu</p>
          </div>

          <div className="enquiry-detail">
            <span>📧</span>
            <p>info@brightvalleycollege.edu</p>
          </div>

          <div className="enquiry-detail">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h2>Quick Enquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Enquiry Type</option>
            <option value="Admissions">Admissions</option>
            <option value="Courses">Courses</option>
            <option value="Placements">Placements</option>
            <option value="General">General Enquiry</option>
          </select>

          <textarea
            name="message"
            placeholder="Write Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Enquiry
          </button>
        </form>

      </div>
    </section>
  );
}

export default QuickEnquiry;
