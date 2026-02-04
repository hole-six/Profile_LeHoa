import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaCode, FaShieldAlt, FaCogs } from 'react-icons/fa';

const Engineering = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const philosophies = [
        {
            icon: FaServer,
            title: 'Scalable Architecture',
            desc: 'Thiết kế hệ thống chịu tải lớn, Microservices, Cluster Database.',
        },
        {
            icon: FaCode,
            title: 'Clean Code & Patterns',
            desc: 'Tuân thủ SOLID, DRY, Design Patterns. Dễ dàng bảo trì và mở rộng.',
        },
        {
            icon: FaShieldAlt,
            title: 'Security First',
            desc: 'Bảo mật đa lớp, chống DDoS, XSS, CSRF, mã hóa dữ liệu nhạy cảm.',
        },
        {
            icon: FaCogs,
            title: 'DevOps & CI/CD',
            desc: 'Tự động hóa quy trình deploy, Dockerization, Monitoring hệ thống.',
        }
    ];

    return (
        <section className="py-20 bg-dark-950 text-white relative overflow-hidden">
            {/* Background Network Animation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Tư Duy <span className="text-primary-500">Kỹ Thuật</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Không chỉ là viết code, tôi kiến tạo những giải pháp công nghệ bền vững,
                        hiệu suất cao và mang lại giá trị thực tế cho doanh nghiệp.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary-500/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center text-xl mb-4">
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/10 pt-16">
                    {[
                        { number: '50+', label: 'Dự Án Hoàn Thành' },
                        { number: '99.9%', label: 'Uptime Hệ Thống' },
                        { number: '1M+', label: 'User Traffic' },
                        { number: '24/7', label: 'Support & Monitor' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="text-center"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-primary-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Engineering;
