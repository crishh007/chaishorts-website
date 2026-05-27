import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardStyle = {
  padding: '36px 0',
  borderBottom: '1px solid #d1d5db',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.8fr)',
  gap: '24px',
  alignItems: 'start',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '16px',
};

const locationStyle = {
  color: '#6b7280',
  fontWeight: 600,
};

const descriptionStyle = {
  color: '#374151',
  fontSize: '1.05rem',
  lineHeight: 1.8,
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: '#f4c400',
  color: '#000',
  padding: '14px 22px',
  borderRadius: '999px',
  fontWeight: 700,
  textDecoration: 'none',
};

const linkStyle = {
  color: '#f4c400',
  fontWeight: 700,
  fontSize: '1rem',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
};

export default function CareerCard({ title, location, description, slug }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      style={cardStyle}
    >
      <div style={gridStyle}>
        <div>
          <div style={titleStyle}>{title}</div>
          <Link to={`/careers/${slug}#apply`} style={buttonStyle}>
            Apply Now
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          <div style={locationStyle}>{location}</div>
          <p style={{ ...descriptionStyle, marginTop: '22px' }}>{description}</p>
          <Link to={`/careers/${slug}`} style={linkStyle}>
            View More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
