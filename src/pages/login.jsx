import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    console.log("Form submitted");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            💧
          </div>

          <h2>AquaHeat</h2>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h1>{isLogin ? "Welcome back" : "Create your account"}</h1>

          <p>
            {isLogin
              ? "Log in to continue to AquaHeat."
              : "Sign up to get started with AquaHeat."}
          </p>
        </div>

        {/* Login / Signup */}
        <div className="auth-toggle">

          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>

        </div>

        {/* Name - only for signup */}
        {!isLogin && (
          <div className="input-group">
            <input
              type="text"
              placeholder="Full name"
            />
          </div>
        )}

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Options - only for login */}
        {isLogin && (
          <div className="login-options">

            <label>
              <input type="checkbox" />
              <span>Keep me logged in</span>
            </label>

            <button className="forgot-password">
              Forgot password?
            </button>

          </div>
        )}

        {/* Error */}
        {error && (
          <p style={{ color: "red", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        {/* Login / Signup */}
        <button
          className="login-button"
          onClick={handleSubmit}
        >
          {isLogin ? "Log in" : "Create account"}
        </button>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {/* Google */}
        <button className="google-button">
          <span>G</span>
          Continue with Google
        </button>

      </div>
    </div>
  );
}

export default Login;