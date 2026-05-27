import React from 'react';
import { motion } from 'framer-motion';

const shows = [
  { id: 1, img: '/assets/8eKX0BzqfGpgP6Lzd75KkaDBc5k.jpg', title: '30 Weds 21' },
  { id: 2, img: '/assets/hMSbusXDw5gM4CFu8mTYENiozQ.jpg', title: 'Baker and the Beauty' },
  { id: 3, img: '/assets/e6Q9fCDRVmQMpwsjARolrXLwWk.jpg', title: 'Software Engg' },
  { id: 4, img: '/assets/pIlD5kYTu2ey3KY8yxH6kuBhQM.jpg', title: 'Aha Naa Pellanta' },
  { id: 5, img: '/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png', title: 'Show 5' },
  { id: 6, img: '/assets/F1oHtcFmTOKoyIf3lCZXnmeWH0.png', title: 'Show 6' },
];

export default function ChaiBisketCarousel() {
  // Triple the array for smooth infinite scroll
  const displayShows = [...shows, ...shows, ...shows];

  return (
    <div className="chai-bisket-carousel-container" style={{
      width: '100%',
      overflow: 'hidden',
      padding: '40px 0',
      perspective: '1000px',
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div className="bisket-logo" style={{ marginBottom: '20px' }}>
         <img src="/assets/zGU5sba3O9VE9yhmNLRMoWx3Ko.png" alt="Chai Bisket" style={{ width: '150px', height: 'auto' }} />
      </div>

      <div className="marquee-wrapper" style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        height: '350px'
      }}>
        <motion.div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '30px',
            position: 'absolute',
            left: 0,
            willChange: 'transform'
          }}
          animate={{
            x: [0, -1200], // Adjust based on item width + gap
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {displayShows.map((show, index) => (
            <div
              key={`${show.id}-${index}`}
              className="carousel-card"
              style={{
                width: '200px',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(0, 153, 255, 0.2)',
                border: '1px solid rgba(0, 153, 255, 0.1)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <img
                src={show.img}
                alt={show.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div className="card-overlay" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '10px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {show.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .carousel-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(0, 153, 255, 0.4);
          border-color: rgba(0, 153, 255, 0.3);
        }
        
        .marquee-track {
           transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
