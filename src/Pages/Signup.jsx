
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Student",
    password: "",
    confirmPassword: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const signupData = {
  fullName: formData.fullName.trim(),
  email: formData.email.trim().toLowerCase(),
  phone: formData.phone.trim(),
  role: formData.role,
  password: formData.password,
  confirmPassword: formData.confirmPassword
};

      // Debug information (never log the password)
      console.log("1. Signup button clicked");
      console.log("2. Backend URL:", "http://localhost:5000/api/users/signup");
      console.log("3. Signup data:", {
        ...signupData,
        password: "[HIDDEN]"
      });

      // Send signup request
      const response = await fetch(
        "http://localhost:5000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(signupData)
        }
      );

      console.log("4. Response status:", response.status);

      // Read response
      const responseText = await response.text();

      let data = {};

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          "Backend returned an invalid response."
        );
      }

      console.log("5. Backend response:", data);

      // Check response status
      if (!response.ok) {
  throw new Error(
    data.error || data.message || `Signup failed: ${response.status}`
  );
}
      // Successful registration
      alert(data.message || "User created successfully!");

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "Student",
        password: "",
        confirmPassword: ""
      });

      // Navigate to login
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);

      if (error instanceof TypeError) {
        alert(
          "Cannot connect to backend. Check whether your server is running on port 5000."
        );
      } else {
        alert("Signup Error: " + error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      {/* Signup Banner */}
      <div className="signup-banner">
        <div>
          <div className="signup-banner-logo">
            BV
          </div>

          <h1>Start Your Journey With Us</h1>

          <p>
            Create your Bright Valley College account and
            become part of our learning community.
          </p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="signup-content">
        <div className="signup-box">

          {/* College Logo */}
          <Link to="/" className="signup-brand">
            <div className="signup-logo">
              BV
            </div>

            <div>
              <h3>BRIGHT VALLEY</h3>
              <span>COLLEGE</span>
            </div>
          </Link>

          <h2>Create Your Account</h2>

          <p className="signup-description">
            Enter your details to register.
          </p>

          <form onSubmit={handleSignup}>

            {/* Full Name */}
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Account Type */}
            <label>Account Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Administration">Administration</option>
            </select>

            {/* Password */}
            <label>Password</label>
            <div className="signup-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                minLength="8"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <label>Confirm Password</label>
            <div className="signup-password">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength="8"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Terms and Conditions */}
            <label className="signup-terms">
              <input type="checkbox" required />

              I agree to the

              <Link to="/terms">
                Terms & Conditions
              </Link>

              and

              <Link to="/privacy">
                Privacy Policy
              </Link>.
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="signup-submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          {/* Login Link */}
          <p className="signup-login">
            Already have an account?

            <Link to="/login">
              Sign In
            </Link>
          </p>

          {/* Back to Portal */}
          <Link to="/portal" className="signup-back">
            ← Back to College Portal
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Signup;
