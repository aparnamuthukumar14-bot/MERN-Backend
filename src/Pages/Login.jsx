
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login form submitted successfully! Backend authentication is not connected yet.");
  };

  return (
    <div className="login-page">

      <div className="login-image">
        <div className="login-image-content">
          <h1>Welcome to<br />Bright Valley College</h1>
          <p>
            Your journey towards knowledge, growth
            and success starts here.
          </p>
        </div>
      </div>

      <div className="login-form-area">

        <div className="login-form-box">

          <Link to="/" className="login-brand">
            <div className="login-logo">BV</div>
            <div>
              <h3>BRIGHT VALLEY</h3>
              <span>COLLEGE</span>
            </div>
          </Link>

          <h2>Welcome Back!</h2>
          <p className="login-subtitle">
            Sign in to access your college account.
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="login-options">
              <label className="remember-label">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-submit">
              Sign In
            </button>

          </form>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </p>

          <Link to="/portal" className="back-portal">
            ← Back to College Portal
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Login;
