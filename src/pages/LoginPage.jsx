import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!user.password) {
      setError("Password is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Successfully Logged In");
        login(data.user || { email: user.email });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("Failed to connect to server. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.header}>
          <img src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg" alt="logo" style={styles.logo} />
          <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Login to ChaiShots</h2>
        </div>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Sign In
        </button>

        <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.6)' }}>
          Not registered? <Link to="/signup" style={{ color: '#fcd302', textDecoration: 'none' }}>Sign Up</Link>
        </p>

        <Link to="/" style={{ display: 'block', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#000",
    backgroundImage: "radial-gradient(circle at center, #1a1a1a 0%, #000 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  box: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    textAlign: "center"
  },
  header: {
    marginBottom: "32px"
  },
  logo: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    marginBottom: "16px"
  },
  input: {
    width: "100%",
    padding: "14px",
    margin: "8px 0",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "white",
    fontSize: "16px",
    boxSizing: "border-box"
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#fcd302",
    color: "#000",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "16px",
    transition: "transform 0.2s ease"
  },
  error: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    color: "#ff4d4d",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px",
    border: "1px solid rgba(255, 0, 0, 0.2)"
  },
  success: {
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    color: "#4dff4d",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px",
    border: "1px solid rgba(0, 255, 0, 0.2)"
  }
};

export default LoginPage;
