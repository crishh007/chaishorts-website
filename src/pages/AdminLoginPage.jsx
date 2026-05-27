import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock admin authentication
    if (username === 'admin' && password === 'admin123') {
      login({ email: 'admin@chaishots.com', role: 'admin' });
      navigate('/admin-dashboard');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="admin-login-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div className="admin-login-card" style={{
        backgroundColor: '#111',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(255, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #333'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ff4d4d' }}>Admin Portal</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #444',
                backgroundColor: '#222',
                color: '#fff',
                outline: 'none'
              }}
              placeholder="Enter admin username"
              required
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #444',
                backgroundColor: '#222',
                color: '#fff',
                outline: 'none'
              }}
              placeholder="Enter admin password"
              required
            />
          </div>
          {error && <p style={{ color: '#ff4d4d', fontSize: '14px', marginBottom: '20px', textAlign: 'center' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4d4d'}
          >
            Login as Admin
          </button>
        </form>
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'transparent',
            color: '#888',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Back to Website
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
