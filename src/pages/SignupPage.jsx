import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPassword = /^(?=.*[!@#$%^&*])[^\s]{8,}$/;

    if (!user.username.trim()) {
      setError("Username is required");
      return;
    }

    if (!emailPattern.test(user.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!strongPassword.test(user.password)) {
      setError("Password must be 8+ chars, include special character, no spaces");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError(data.message || "Signup failed. Please try again.");
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
          <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Join ChaiShots</h2>
        </div>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={styles.input}
        />

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

        <button onClick={handleSignup} style={styles.button}>
          Sign Up
        </button>

        <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.6)' }}>
          Already have an account? <Link to="/login" style={{ color: '#fcd302', textDecoration: 'none' }}>Login</Link>
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

export default SignupPage;
