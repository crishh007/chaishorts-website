import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const EpisodesPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logoLink}>
          <img src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg" alt="logo" style={styles.logo} />
          <span>ChaiShots</span>
        </Link>
        <div style={styles.navRight}>
          <span style={styles.welcome}>Welcome, {user?.email || 'User'}</span>
          <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        </div>
      </nav>

      <main style={styles.main}>
        <h1 style={styles.title}>Original Short Series</h1>
        <p style={styles.subtitle}>Watch exclusive content made for your phone.</p>
        
        <div style={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardImage}></div>
              <div style={styles.cardContent}>
                <h3>Episode {i}</h3>
                <p>2 min • Action • Telugu</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    fontFamily: 'Inter, sans-serif'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
    fontWeight: '700'
  },
  logo: {
    width: '32px',
    height: '32px',
    borderRadius: '8px'
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  welcome: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)'
  },
  logoutBtn: {
    padding: '8px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  main: {
    padding: '60px 40px'
  },
  title: {
    fontSize: '40px',
    fontWeight: '800',
    marginBottom: '8px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '48px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease'
  },
  cardImage: {
    height: '300px',
    backgroundColor: '#333',
    backgroundImage: 'linear-gradient(45deg, #1a1a1a, #333)'
  },
  cardContent: {
    padding: '16px'
  }
};

export default EpisodesPage;
