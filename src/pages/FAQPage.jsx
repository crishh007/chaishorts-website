import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a Short Series?",
    answer: "Quick, powerful episodes under two minutes each. Every series runs 10-100 episodes - layered stories in bite-sized bursts."
  },
  {
    question: "What is Clap?",
    answer: "Clap is our creator-first feature. It lets you directly show appreciation to the cast and crew of every show with both words and money. Write a short note (up to 500 characters). Send a tip (₹20 to ₹10,000). Your Clap becomes recognition + direct support for creators, encouraging them to keep making more stories. It's more than watching - it's a gesture of love and appreciation."
  },
  {
    question: "Is there a subscription plan?",
    answer: "Yes! If you don't want to count episodes, go unlimited. With a subscription, you get access to every Short Series, all month long."
  },
  {
    question: "Which languages are available?",
    answer: "We're launching first in Telugu, with 10 more Indian languages coming soon. Stay tuned!"
  },
  {
    question: "What kind of shows can I expect?",
    answer: "Everything from comedies and romances to thrillers and dramas. All crafted as Short Series, all made for your phone."
  },
  {
    question: "Is the content safe and clean?",
    answer: "Absolutely. ChaiShots is built on genuine, culturally relevant entertainment. No spammy shortcuts, no random dubbed content. Just original stories made with care, in your language."
  },
  {
    question: "Why Chai Shots over other OTT apps?",
    answer: "Because we're not just streaming content - we're building a new category: the Short Series. 1. Episodes under 2 minutes 2. Pay-as-you-go tickets or ₹99 unlimited 3. India's first creator-first OTT with Clap 4. Regional, original, addictive storytelling"
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', padding: '60px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px' }}>
        {/* Left Column: Title and Back Button */}
        <div style={{ flex: '1', position: 'sticky', top: '60px', alignSelf: 'flex-start' }}>
          <Link to="/" style={{ display: 'inline-block', marginBottom: '40px', color: '#111', textDecoration: 'none', fontWeight: '500' }}>
            ← Back to Home
          </Link>
          <h1 style={{ fontSize: '42px', fontWeight: '600', color: '#111', margin: 0 }}>FAQs</h1>
        </div>

        {/* Right Column: Accordion */}
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  backgroundColor: '#F7F7F9', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#111',
                    textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '24px', fontWeight: '300', width: '20px', display: 'inline-block' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                  {faq.question}
                </button>
                
                {isOpen && (
                  <div style={{ padding: '0 24px 24px 60px', color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
