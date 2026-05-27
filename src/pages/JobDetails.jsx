import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ApplicationForm from '../components/ApplicationForm';

const sectionStyle = {
  padding: '80px 24px',
  maxWidth: '1180px',
  margin: '0 auto',
};

const headerGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '32px',
};

const detailsStyle = {
  maxWidth: '720px',
  color: '#374151',
  fontSize: '1.05rem',
  lineHeight: 1.8,
};

const stickyBox = {
  background: '#fff',
  borderRadius: '32px',
  padding: '32px',
  boxShadow: '0 25px 60px rgba(15,23,42,0.08)',
  alignSelf: 'start',
};

const linkStyle = {
  color: '#f4c400',
  fontWeight: 700,
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
};

export default function JobDetails() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#apply') {
      const element = document.getElementById('apply');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div style={sectionStyle}>
      <div style={{ marginBottom: '40px' }}>
        <div style={headerGrid}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{ color: '#6b7280', fontWeight: 600, marginBottom: '18px' }}
            >
              Full Time • Hyderabad (Chai Shots HQ) or Remote
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(3rem, 4vw, 5rem)', fontWeight: 800, marginBottom: '28px' }}
            >
              Product Manager
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{ marginBottom: '24px' }}
            >
              <a href="#apply" className="career-button">
                Apply Now
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={detailsStyle}
            >
              This isn’t just another product role. You will own the soul of Chai Shots - the experience, the platform, the tech, the heart. You’ll be trusted to build the app that millions will use daily - and to keep reinventing it as we scale from our first 10,000 users to 10 million and beyond.
            </motion.p>
          </div>

          <div style={stickyBox}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '18px' }}>More role positions</h3>
              <p style={{ color: '#6b7280', marginBottom: '12px' }}>Can’t find your role?</p>
              <Link to="#" style={linkStyle}>
                Open application
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '760px', marginBottom: '60px', gap: '36px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '24px' }}>Role Overview</h2>
          <div style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.85 }}>
            <p>We are seeking a dynamic, first-principles-driven Product Head to own and scale the Chai Shots app and ecosystem.</p>
            <p>You will be responsible for envisioning, building, and continuously improving a product loved by millions - ensuring it is beautifully designed, data-backed, consumer-first, and constantly evolving.</p>
            <p>You will lead product strategy, execution, consumer research, and growth enablement. You will work directly with the founders and will have full ownership to drive product-market fit, scalability, and innovation.</p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '24px' }}>Key responsibilities</h2>
          <ul style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.85, paddingLeft: '1.2rem' }}>
            <li>Own the entire product strategy, roadmap, and user experience.</li>
            <li>Deeply understand consumers through research and data.</li>
            <li>Design unforgettable experiences.</li>
            <li>Own the end-to-end UX across the app journey.</li>
            <li>Define UX vision and user flows.</li>
            <li>Use data and analytics for continuous iteration.</li>
            <li>Think from first principles.</li>
            <li>Build and lead product and design teams.</li>
            <li>Collaborate across engineering, content, and growth.</li>
            <li>Balance art and science.</li>
            <li>Own the emotional core of the product.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '24px' }}>Required skills & qualifications</h2>
          <ul style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.85, paddingLeft: '1.2rem' }}>
            <li>Proven experience as a Product Manager in SaaS or technology.</li>
            <li>Strong Agile understanding.</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Familiarity with JIRA, Trello, or Asana.</li>
            <li>Strong communication and leadership.</li>
            <li>Cross-functional collaboration ability.</li>
            <li>Bachelor’s degree in Business, CS, or related field.</li>
          </ul>
        </section>

        <ApplicationForm />
      </div>
    </div>
  );
}
