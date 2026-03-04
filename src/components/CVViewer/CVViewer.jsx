import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const CVViewer = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isOpen) return null;

  const pdfUrl = '/CV_LeHoa_2026.pdf';

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl bg-white dark:bg-dark-800 rounded-2xl shadow-2xl flex flex-col"
          style={{ height: '90vh', maxHeight: '90vh' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - fixed at top */}
          <div className="flex-shrink-0 bg-dark-900/95 dark:bg-dark-900 p-3 sm:p-4 flex items-center justify-between rounded-t-2xl">
            <h3 className="text-white font-semibold text-base sm:text-lg">CV - Lê Hòa</h3>
            <div className="flex items-center gap-2">
              {isMobile && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors text-sm"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Mở</span>
                </a>
              )}
              <a
                href={pdfUrl}
                download="CV_LeHoa_2026.pdf"
                className="px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg flex items-center gap-2 transition-colors text-sm"
              >
                <FaDownload size={14} />
                <span className="hidden sm:inline">Tải xuống</span>
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Đóng"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div
            className="flex-1 overflow-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {isMobile ? (
              /* Mobile: use object with img fallback + prominent CTA */
              <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-6 bg-dark-100 dark:bg-dark-900">
                <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">CV - Lê Hòa</h4>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mb-6">
                    Trình duyệt mobile không hỗ trợ xem PDF trực tiếp. Vui lòng mở hoặc tải xuống CV.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl flex items-center justify-center gap-2 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={14} />
                    Mở CV trong tab mới
                  </a>
                  <a
                    href={pdfUrl}
                    download="CV_LeHoa_2026.pdf"
                    className="w-full px-6 py-3 bg-white dark:bg-dark-700 text-dark-700 dark:text-white border border-dark-200 dark:border-dark-600 rounded-xl flex items-center justify-center gap-2 transition-colors font-medium hover:bg-dark-50 dark:hover:bg-dark-600"
                  >
                    <FaDownload size={14} />
                    Tải CV về máy
                  </a>
                </div>
              </div>
            ) : (
              /* Desktop: iframe works fine */
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="CV - Lê Hòa"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CVViewer;
