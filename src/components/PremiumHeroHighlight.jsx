import React from 'react';
import { motion } from 'framer-motion';
import './PremiumHeroHighlight.css';

export default function PremiumHeroHighlight() {
  return (
    <section className="premium-hero-container">
      {/* Background elements */}
      <div className="premium-bg-orb orb-1"></div>
      <div className="premium-bg-orb orb-2"></div>
      
      {/* Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="premium-glass-card"
        >
          <div className="premium-badge">
            <span className="badge-text">CREATOR-FIRST EXPERIENCE</span>
            <div className="badge-glow"></div>
          </div>
          
          <h2 className="premium-headline">
            India's First <br />
            <span className="gradient-highlight">Creator-First</span> OTT
          </h2>
          
          <p className="premium-description">
            Here’s what makes us truly different: We don’t just showcase shows. We celebrate the people who make them - writers, directors, actors, debutants, and crew.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
