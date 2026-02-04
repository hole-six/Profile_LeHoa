import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaComments, FaHeart, FaCode, FaStore } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hole_six', label: 'GitHub' },
    { icon: FaFacebook, href: 'https://www.facebook.com/hoadt122', label: 'Facebook' },
    { icon: FaStore, href: 'https://www.facebook.com/profile.php?id=61585720092760', label: 'Fanpage' },
    { icon: FaComments, href: 'https://zalo.me/0336487534', label: 'Zalo' },
  ];

  const quickLinks = [
    { name: 'Trang Chủ', href: '#home' },
    { name: 'Về Tôi', href: '#about' },
    { name: 'Kỹ Năng', href: '#skills' },
    { name: 'Dự Án', href: '#projects' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Lê Hòa
                </h3>
                <p className="text-dark-300 leading-relaxed max-w-md">
                  Fullstack Developer chuyên nhận code thuê đồ án web bán hàng, landing page và các dự án web.
                  Liên hệ ngay để được tư vấn và báo giá!
                </p>
              </motion.div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Liên Kết Nhanh
              </motion.h4>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Liên Hệ
              </motion.h4>
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-dark-300">
                  hole_six@hiweb.vn
                </p>
                <p className="text-dark-300">
                  0336487534 (Zalo)
                </p>
                <p className="text-dark-300">
                  Việt Nam
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-dark-300 mb-4 md:mb-0">
              <span>© {currentYear} Được tạo với</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              <span>bởi Lê Hòa</span>
            </div>

            <div className="flex items-center space-x-2 text-dark-300">
              <FaCode className="text-primary-400" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
