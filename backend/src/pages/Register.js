import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPassword = /^(?=.*[!@#$%^&*])[^\s]{8,}$/;

    if (!user.username.trim()) {
      alert("Username is required");
      return;
    }

    if (!emailPattern.test(user.email)) {
      alert("Enter a valid email address");
      return;
    }

    if (!strongPassword.test(user.password)) {
      alert("Password must be 8+ chars, include special character, no spaces");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      navigate("/login");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>

        <div style={styles.header}>
          <img src="/logo.png" alt="logo" style={styles.logo} />
          <h2>Chaishots Registration</h2>
        </div>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
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

        <button onClick={register} style={styles.button}>
          Sign Up
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    border: "20px solid yellow",
    backgroundImage: "url('/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box"
  },
  box: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    color: "white",
    textAlign: "center"
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  },
  logo: {
    width: "40px",
    marginRight: "10px"
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "none"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "yellow",
    border: "none",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Register;