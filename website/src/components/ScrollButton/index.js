import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowButton(window.scrollY > 150);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollUp = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.scrollButtonContainer}>
      {showButton && (
        <button
          onClick={scrollUp}
          className={styles.scrollButton}
          aria-label="Scroll to top"
          data-test="scroll-button"
        >
          <svg 
            className={styles.scrollIcon} 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}
