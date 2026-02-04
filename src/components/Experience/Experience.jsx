import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Web Developer',
            company: 'Công ty Hiweb.vn',
            period: '2025 - Hiện tại',
            description: 'Làm việc tại đơn vị chuyên cung cấp giải pháp Domain & Hosting. Tham gia phát triển website, quản trị hệ thống và hỗ trợ kỹ thuật khách hàng.',
            skills: ['Hosting/Domain', 'System', 'Frontend', 'Backend']
        },
        {
            type: 'work',
            title: 'Freelancer (Code Dạo)',
            company: 'Tự Do',
            period: '2021 - Hiện tại',
            description: 'Chuyên nhận code thuê đồ án, website bán hàng, landing page và các công cụ theo yêu cầu. Cam kết tiến độ và chất lượng code tối ưu.',
            skills: ['Fullstack', 'Web Design', 'Support 24/7', 'Optimization']
        },
        {
            type: 'education',
            title: 'Kỹ sư Công nghệ thông tin',
            company: 'Đại học Công nghệ',
            period: '2017 - 2022', // Updated to 5 years for Engineer degree typically
            description: 'Tốt nghiệp Bằng Giỏi. Được đào tạo bài bản theo chương trình Kỹ sư. Tham gia và đạt giải trong các cuộc thi lập trình sinh viên.',
            skills: ['Software Engineering', 'Algorithms', 'System Architecture']
        }
    ];
    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Hành trình của tôi</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-dark-900 dark:text-white">Kinh nghiệm & Học vấn</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-primary-200 dark:bg-dark-700 transform -translate-x-1/2 group-last:bottom-auto group-last:h-full group-last:mb-0"></div>

                            <div className={`md:flex items-center justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot (Center) */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-900 border-4 border-primary-500 transform -translate-x-1/2 md:translate-x-[-50%] z-10 flex items-center justify-center shadow-glow">
                                    {item.type === 'work' ? <FaBriefcase className="text-xs text-primary-600" /> : <FaGraduationCap className="text-xs text-primary-600" />}
                                </div>

                                {/* Content Box */}
                                <div className="w-full md:w-[calc(50%-2.5rem)]">
                                    <div className="glass-card p-6 rounded-2xl relative hover:-translate-y-1 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full mb-3">
                                            {item.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-dark-500 dark:text-dark-400 font-medium text-sm mb-4">{item.company}</p>
                                        <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, idx) => (
                                                <span key={idx} className="text-xs font-medium text-dark-500 dark:text-dark-400 bg-gray-100 dark:bg-dark-800 px-2 py-1 rounded">
                                                    #{skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block w-full md:w-[calc(50%-2.5rem)]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
