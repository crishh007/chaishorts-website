import { useState } from 'react';
import { motion } from 'framer-motion';

const formStyle = {
  maxWidth: '760px',
  marginTop: '24px',
};

const inputStyle = {
  width: '100%',
  padding: '18px 16px',
  borderRadius: '16px',
  border: '1px solid #d1d5db',
  fontSize: '1rem',
  color: '#111827',
  background: '#fff',
};

const buttonStyle = {
  backgroundColor: '#111827',
  color: '#fff',
  width: '100%',
  padding: '18px 24px',
  borderRadius: '16px',
  fontSize: '1.1rem',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
};

const labelStyle = {
  display: 'block',
  width: '100%',
  cursor: 'pointer',
  borderRadius: '16px',
  border: '1px solid #d1d5db',
  padding: '18px 16px',
  background: '#f9fafb',
  color: '#6b7280',
  fontSize: '1rem',
};

export default function ApplicationForm() {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  return (
    <section style={{ padding: '40px 0' }} id="apply">
      <div style={{ marginBottom: '24px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '18px' }}
        >
          Submit your application
        </motion.h2>
      </div>

      <form style={formStyle} className="application-form">
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Role" style={inputStyle} />
          <input type="text" placeholder="Location" style={inputStyle} />
          <label style={labelStyle}>
            {resume ? resume.name : 'Upload Resume'}
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <input type="text" placeholder="LinkedIn" style={inputStyle} />
          <input type="text" placeholder="GitHub" style={{ gridColumn: '1 / -1', ...inputStyle }} />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          style={{ ...buttonStyle, marginTop: '24px' }}
        >
          Submit Application
        </motion.button>
      </form>
    </section>
  );
}
