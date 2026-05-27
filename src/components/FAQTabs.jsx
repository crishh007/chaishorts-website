import React, { useState } from 'react';
import './FAQTabs.css';

const faqs = [
  {
    question: "What is a Short Series?",
    answer: "A Short Series is our new storytelling format: quick, powerful episodes under two minutes each. Every series runs anywhere from 10 to 100 episodes, so you get layered stories in bite-sized bursts."
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
    question: "Why ChaiShots over other OTT apps?",
    answer: "Because we're not just streaming content - we're building a new category: the Short Series. 1. Episodes under 2 minutes 2. Pay-as-you-go tickets or ₹99 unlimited 3. India's first creator-first OTT with Clap 4. Regional, original, addictive storytelling"
  }
];

const FAQTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="faq-tabs-section">
      <div className="faq-tabs-container">
        <h2 className="faq-main-title">FAQs</h2>
        <div className="faq-tabs-layout">
          <div className="faq-tabs-list">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className={`faq-tab-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="faq-tab-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-tab-text">{faq.question}</span>
                <span className="faq-tab-arrow">→</span>
              </button>
            ))}
          </div>
          <div className="faq-content-panel">
            <div className="faq-content-inner" key={activeTab}>
              <h3 className="faq-content-question">{faqs[activeTab].question}</h3>
              <div className="faq-content-divider"></div>
              <p className="faq-content-answer">{faqs[activeTab].answer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQTabs;
