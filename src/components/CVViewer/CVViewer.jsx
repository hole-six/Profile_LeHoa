import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';

const CVViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-dark-900/90 to-transparent p-4 flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">CV - Lê Hòa</h3>
            <div className="flex items-center gap-2">
              <a
                href="/Infomation.pdf"
                download="CV_LeHoa.pdf"
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaDownload />
                <span className="hidden sm:inline">Tải xuống</span>
              </a>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Đóng"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <iframe
            src="/Infomation.pdf"
            className="w-full h-full"
            title="CV - Lê Hòa"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CVViewer;
