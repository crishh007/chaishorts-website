import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import '../styles/Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open chatbot exactly 5 seconds after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Play a subtle notification sound
      try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audio.play().catch(e => console.log('Audio autoplay prevented by browser'));
      } catch (error) {
        console.error("Audio playback error", error);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-popup-wrapper">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      )}
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChat} aria-label="Open Chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
