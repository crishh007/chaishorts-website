import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import './VideoReel.css';

const VideoReel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(err => console.log("Autoplay blocked:", err));
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    if (isLoggedIn) {
      // Show overlay image with logout button when clicked after login
      setShowOverlay(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    setShowOverlay(false);
    navigate('/');
  };

  return (
    <section className="video-reel-section">
      <div className="video-reel-container">
        <div className="video-reel-header">
          <h2 className="video-reel-title">Experience the Magic</h2>
          <p className="video-reel-subtitle">Cinematic stories, perfectly sized for your day.</p>
        </div>
        
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="reel-video"
            src="/videos/chaishots-reel.mp4"
            loop
            muted={isMuted}
            playsInline
            onClick={handleVideoClick}
          />
          <div className="video-controls">
             <button className="mute-toggle" onClick={toggleMute}>
                {isMuted ? (
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.41.31-.85.58-1.32.79v2.05c.98-.24 1.88-.67 2.67-1.25L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                )}
             </button>
          </div>
          
          <div className="video-overlay">
            <div className="overlay-content">
              <h3>ChaiShots Originals</h3>
              <p>Exclusive episodes under 2 minutes.</p>
              <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '12px' }}>
                Click anywhere to continue
              </p>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      {showOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          flexDirection: 'column',
          gap: '30px'
        }}>
          <button
            onClick={() => setShowOverlay(false)}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '32px',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001
            }}
          >
            ✕
          </button>

          <button
            onClick={handleLogout}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              border: '1px solid rgba(255, 100, 100, 0.5)',
              color: '#ff6b6b',
              borderRadius: '8px',
              padding: '10px 20px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              zIndex: 1001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(255, 100, 100, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 100, 100, 0.5)';
            }}
          >
            Logout
          </button>

          <div style={{
            textAlign: 'center',
            color: '#fff',
            zIndex: 1001
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#fff'
            }}>
              Premium Content
            </h2>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '30px'
            }}>
              Enjoy exclusive episodes with your subscription
            </p>
            <div style={{
              width: '300px',
              height: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '16px'
              }}>
                Premium Image
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoReel;
