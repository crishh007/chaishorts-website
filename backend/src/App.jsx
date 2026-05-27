import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Chatbot from './components/Chatbot';
import FAQPage from './components/FAQPage';

const HomePage = () => (
  <div id="main" className="framer-1gpdsst">
    <Section1 />
    <Section2 />
    <Chatbot />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}
