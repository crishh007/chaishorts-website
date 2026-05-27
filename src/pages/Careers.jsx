import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CareerCard from '../components/CareerCard';

const Careers = () => {
  const { t } = useTranslation('careers');
  const jobsList = t('jobs', { returnObjects: true }) || [];

  return (
    <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ marginBottom: '56px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(2.75rem, 4vw, 5.5rem)', fontWeight: 800, marginBottom: 24 }}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4a4a4a', maxWidth: 720 }}
        >
          {t('subtitle')}
        </motion.p>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '40px 0' }} />

      <section>
        {jobsList.map((job) => (
          <CareerCard key={job.slug} {...job} />
        ))}
      </section>
    </div>
  );
};

export default Careers;
