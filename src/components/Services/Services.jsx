import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaRocket, FaServer, FaShieldAlt, FaTools } from 'react-icons/fa';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            id: 1,
            icon: FaLaptopCode,
            title: 'Thiết Kế & Lập Trình Web',
            description: 'Xây dựng website trọn gói từ Landing Page, Website bán hàng đến các Web App phức tạp. Giao diện hiện đại, chuẩn UI/UX và tối ưu chuyển đổi.',
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: 2,
            icon: FaMobileAlt,
            title: 'Responsive Design',
            description: 'Tối ưu hóa hiển thị trên mọi thiết bị (Mobile, Tablet, Desktop). Đảm bảo trải nghiệm người dùng mượt mà và đồng nhất.',
            color: 'from-purple-400 to-purple-600'
        },
        {
            id: 3,
            icon: FaRocket,
            title: 'Tối Ưu Hóa Hiệu Năng',
            description: 'Tăng tốc độ tải trang, tối ưu SEO Technical và chỉ số Core Web Vitals. Giúp website đạt thứ hạng cao trên Google.',
            color: 'from-pink-400 to-pink-600'
        },
        {
            id: 4,
            icon: FaServer,
            title: 'Domain & Hosting',
            description: 'Cung cấp giải pháp hạ tầng server, vps, hosting tốc độ cao (Hiweb.vn). Hỗ trợ kỹ thuật 24/7 và bảo mật dữ liệu.',
            color: 'from-cyan-400 to-cyan-600'
        },
        {
            id: 5,
            icon: FaTools,
            title: 'Bảo Trì & Nâng Cấp',
            description: 'Dịch vụ chăm sóc website, fix lỗi, cập nhật tính năng mới và backup dữ liệu định kỳ. Để bạn yên tâm kinh doanh.',
            color: 'from-orange-400 to-orange-600'
        },
        {
            id: 6,
            icon: FaShieldAlt,
            title: 'Bảo Mật Hệ Thống',
            description: 'Tư vấn và triển khai các giải pháp bảo mật, chống DDoS, cài đặt SSL và bảo vệ website khỏi các lỗ hổng bảo mật.',
            color: 'from-emerald-400 to-emerald-600'
        }
    ];

    const ServiceCard = ({ service, index }) => (
        <motion.div
            className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Icon */}
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon />
            </div>

            <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
            </h3>

            <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-sm">
                {service.description}
            </p>

            {/* Decorative Corner */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-bl-full`} />
        </motion.div>
    );

    return (
        <section id="services" className="section-padding relative overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Dịch Vụ</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Giải Pháp <span className="gradient-text">Toàn Diện</span></h2>
                    <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                        Cung cấp các dịch vụ công nghệ chất lượng cao để giúp doanh nghiệp của bạn phát triển mạnh mẽ
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
