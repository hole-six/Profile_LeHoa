import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    'Frontend Developer',
    'React Developer',
    'JavaScript Expert',
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];

      if (!isDeleting) {
        if (currentIndex < current.length) {
          setCurrentText(current.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(current.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {currentText}
      <motion.span
        className="text-primary-500 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default Typewriter;
