
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Password reset request submitted. Connect an email service through a backend to send a real reset link."
    );
  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        <Link to="/" className="forgot-logo">
          BV
        </Link>

        <div className="forgot-icon">🔐</div>

        <h1>Forgot Password?</h1>

        <p>
          Don't worry! Enter your registered email address
          and we'll help you reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        <Link to="/login" className="forgot-back">
          ← Back to Login
        </Link>

        <p className="forgot-signup">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;
