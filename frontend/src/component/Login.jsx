import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Apple,
} from "lucide-react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email/phone and password.");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Heading */}
        <div className="login-header">
          <h1>Login to your account</h1>

          <p>
            Don't have an account?{" "}
            <a href="/signup">Sign Up</a>
          </p>
        </div>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="form-group">
            <label>Email or Phone Number</label>

            <div className="input-box">
              <Mail size={19} />

              <input
                type="text"
                placeholder="Enter your email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group password-group">
            <label>Password</label>

            <div className="input-box">
              <Lock size={19} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>

          {/* OR Divider */}
          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* Google */}
          <button type="button" className="social-button">
            <span className="google-icon">G</span>
            <span>Continue with Google</span>
          </button>

          {/* Apple */}
          <button type="button" className="social-button">
            <Apple size={20} fill="black" />
            <span>Continue with Apple</span>
          </button>

        </form>

        {/* Security message */}
        <div className="security-message">
          <ShieldCheck size={21} />
          <span>Your data is safe and secure with us.</span>
        </div>

      </div>
    </div>
  );
};

export default Login;