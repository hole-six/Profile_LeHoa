import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const blogs = [
    {
        id: 1,
        title: 'Advanced React Hooks: Build a Complete Application with Modern React Architecture',
        description:
            'Khám phá sâu về React Hooks hiện đại — từ useState, useEffect, useContext đến Custom Hooks. Xây dựng ứng dụng hoàn chỉnh với kiến trúc React chuẩn.',
        url: 'https://viblo.asia/p/advanced-react-hooks-build-a-complete-application-with-modern-react-architecture-13VM9q0DVY7',
        tags: ['React', 'Hooks', 'Architecture'],
        readTime: '12 phút',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        category: 'Deep Dive',
    },
    {
        id: 2,
        title: 'React Performance Optimization: Kỹ thuật tối ưu hiệu suất ứng dụng React',
        description:
            'Tìm hiểu các kỹ thuật tối ưu hiệu suất React chuyên sâu: memo, useMemo, useCallback, lazy loading, code splitting và các chiến lược rendering hiệu quả.',
        url: 'https://viblo.asia/p/react-performance-optimization-lZL9XeweJQK',
        tags: ['React', 'Performance', 'Optimization'],
        readTime: '10 phút',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        category: 'Performance',
    },
    {
        id: 3,
        title: 'ReactJS Advanced State Management: Quản lý State nâng cao trong React',
        description:
            'Chiến lược quản lý state nâng cao với Context API, useReducer, và các pattern chuyên nghiệp. So sánh Redux vs Context vs Zustand.',
        url: 'https://viblo.asia/p/reactjs-advanced-state-management-oKLnqKBZJQO',
        tags: ['React', 'State Management', 'Redux'],
        readTime: '15 phút',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        category: 'State Management',
    },
    {
        id: 4,
        title: 'Next.js là gì? Vì sao React Developer nên học Next.js?',
        description:
            'Giải thích chi tiết Next.js — SSR, SSG, ISR, file-based routing và những lợi ích vượt trội so với React thuần. Hướng dẫn từ cơ bản đến nâng cao.',
        url: 'https://viblo.asia/p/nextjs-la-gi-vi-sao-react-developer-nen-hoc-nextjs-gdJzvmbvJz5',
        tags: ['Next.js', 'SSR', 'React'],
        readTime: '8 phút',
        image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
        category: 'Framework',
    },
    {
        id: 5,
        title: 'ReactJS là gì? Vì sao Frontend Developer hiện đại không thể bỏ qua React?',
        description:
            'Tổng quan đầy đủ về ReactJS — lịch sử, Virtual DOM, Component-based architecture và lý do tại sao React trở thành lựa chọn hàng đầu cho Frontend development.',
        url: 'https://viblo.asia/p/reactjs-la-gi-vi-sao-frontend-developer-hien-dai-khong-the-bo-qua-react-kNLr382WVgA',
        tags: ['React', 'Frontend', 'JavaScript'],
        readTime: '7 phút',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        category: 'Beginner Guide',
    },
];

const BlogCard = ({ blog, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-xl overflow-hidden bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Image Thumbnail */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-dark-800">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Badge on Image */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-md shadow-lg">
                        {blog.category}
                    </span>
                </div>
                {/* Read Time Badge */}
                <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-md">
                        <FaClock className="text-xs" />
                        {blog.readTime}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-dark-900 dark:text-white leading-snug mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs rounded-md font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-800">
                    <span className="text-xs font-medium text-dark-500 dark:text-dark-500">
                        viblo.asia
                    </span>
                    <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400"
                        animate={{ x: hovered ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span>Đọc thêm</span>
                        <FaArrowRight className="text-xs" />
                    </motion.div>
                </div>
            </div>
        </motion.a>
    );
};

const Blogs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="blogs"
            className="section-padding bg-gray-50 dark:bg-dark-950 relative overflow-hidden transition-colors duration-500"
        >
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Bài Viết <span className="gradient-text">Kỹ Thuật</span>
                    </h2>
                    <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
                        Chia sẻ kiến thức về React, Next.js và Frontend Development
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://viblo.asia/u/hole_six"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span>Xem tất cả bài viết</span>
                        <FaArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
