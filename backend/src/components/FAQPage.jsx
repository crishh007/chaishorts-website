import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a Short Series?",
    answer: "A Short Series is our new storytelling format: quick, powerful episodes under two minutes each. Every series runs anywhere from 10 to 100 episodes, so you get layered stories in bite-sized bursts."
  },
  {
    question: "What is Clap?",
    answer: "Clap is our creator-first feature. It lets you directly show appreciation to the cast and crew of every show with both words and money. Write a short note (up to 500 characters). Send a tip (₹20 to ₹10,000). Your Clap becomes recognition + direct support for creators, encouraging them to keep making more stories. It’s more than watching - it’s a gesture of love and appreciation."
  },
  {
    question: "Is there a subscription plan?",
    answer: "We believe in flexibility. You can either buy individual tickets for a show or subscribe to our monthly unlimited plan for just ₹99. No hidden costs."
  },
  {
    question: "Which languages are available?",
    answer: "We’re currently streaming in Telugu. We’ll be launching in Tamil, Kannada, Malayalam, and Hindi very soon. Stay tuned!"
  },
  {
    question: "What kind of shows can I expect?",
    answer: "Expect everything from gritty thrillers and heartfelt dramas to light-hearted comedies and experimental storytelling. We focus on real emotions and culturally rooted narratives."
  },
  {
    question: "Is the content safe and clean?",
    answer: "Yes. VideoApp is built on genuine, culturally relevant entertainment. No spammy shortcuts, no random dubbed content. Just original stories made with care, in your language."
  },
  {
    question: "Why VideoApp over other OTT apps?",
    answer: "Because we’re not just streaming content - we’re building a new category: the Short Series. 1. Episodes under 2 minutes 2. Pay-as-you-go tickets or ₹99 unlimited 3. India’s first creator-first OTT with Clap 4. Regional, original, addictive storytelling"
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{ marginBottom: '12px', width: '100%' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '20px 24px',
          backgroundColor: 'rgb(245, 245, 247)',
          border: 'none',
          borderRadius: isOpen ? '10px 10px 0 0' : '10px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'border-radius 0.3s ease'
        }}
      >
        <span style={{ 
          fontSize: '24px', 
          fontWeight: '300', 
          marginRight: '16px',
          color: 'rgb(29, 29, 31)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}>
          +
        </span>
        <span style={{ 
          fontSize: '17px', 
          fontWeight: '500', 
          color: 'rgb(29, 29, 31)',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          {question}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              backgroundColor: 'rgb(245, 245, 247)',
              borderRadius: '0 0 10px 10px',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              padding: '0 24px 24px 64px', 
              fontSize: '15px', 
              lineHeight: '1.5', 
              color: 'rgb(119, 119, 119)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        color: '#000',
        padding: '60px 20px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          color: 'rgb(119, 119, 119)', 
          textDecoration: 'none',
          marginBottom: '40px',
          gap: '8px',
          fontSize: '15px',
          fontWeight: '500'
        }}>
          <span>←</span> Back to Home
        </Link>

        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            marginBottom: '48px',
            color: 'rgb(29, 29, 31)',
            textAlign: 'center'
          }}
        >
          FAQs
        </motion.h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQPage;
