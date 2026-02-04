import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaDownload } from 'react-icons/fa';
import Typewriter from './Typewriter';
import CinematicBackground from './CinematicBackground';
import { images } from '../../assets/images';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hole_six', label: 'GitHub' },
    { icon: FaFacebook, href: 'https://www.facebook.com/hoadt122', label: 'Facebook' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' }, // Updated or placeholder if not known
    { icon: FaTwitter, href: 'https://zalo.me/0336487534', label: 'Zalo' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-500">
      {/* Cinematic Background */}
      <CinematicBackground />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-dark-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-xl md:text-2xl font-normal text-dark-500 dark:text-dark-400 mb-2 font-sans">Xin chào, tôi là</span>
            Lê Hòa
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-6 h-[50px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typewriter />
          </motion.div>

          <motion.p
            className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fullstack Developer chuyên tạo ra các giải pháp web hiệu quả, đẹp mắt và tối ưu.
            Thành thạo PHP, Node.js, React.js và các công nghệ hiện đại.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Xem Dự Án
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/resume.pdf" className="btn-secondary inline-flex items-center justify-center gap-2">
              <FaDownload className="text-sm" />
              Tải CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-600 dark:text-dark-500 dark:hover:text-primary-400 transition-colors text-2xl"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent rounded-full blur-2xl transform rotate-12" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent z-10 mix-blend-overlay" />
              <img
                src={images.profile}
                alt="Le Hoa - Fullstack Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary-200 dark:border-dark-700 rounded-[2rem] transform -rotate-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
