import React from 'react';
import { motion } from 'framer-motion';
import './PremiumHeroHighlight.css';

export default function PremiumHeroHighlight() {
  return (
    <section className="premium-hero-container">
      <div className="premium-hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="premium-yellow-card"
        >
          <div className="premium-top-tag">
            Here's what makes us truly different
          </div>
          
          <h2 className="premium-headline">
            India's First <br />
            Creator-First OTT
          </h2>
          
          <p className="premium-footer-text">
            We don't just showcase shows. We celebrate the people who make them - writers, directors, actors, debutants, and crew.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
