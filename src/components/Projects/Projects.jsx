import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import { projects as projectsData } from '../../data/projects';
import Image from '../Image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('Tất Cả');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories = ['Tất Cả', 'Thương Mại Điện Tử', 'Hệ Thống Phức Tạp', 'Web App'];

  useEffect(() => {
    if (activeCategory === 'Tất Cả') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        className="group relative overflow-hidden rounded-2xl glass-effect card-hover"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              Nổi Bật
            </div>
          )}

          {/* Action Buttons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            {/* Only show GitHub button if link is valid */}
            {project.github !== '#' && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-dark-900 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Xem Mã Nguồn"
              >
                <FaGithub size={20} />
              </motion.a>
            )}

            {/* Only show Live button if link is valid */}
            {project.live !== '#' && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-dark-900 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Xem Demo"
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-md`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-dark-800">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs font-medium rounded"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Dự Án <span className="gradient-text">Tiêu Biểu</span></h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Những sản phẩm tâm huyết với công nghệ hiện đại và thiết kế tối ưu
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 transform -translate-y-0.5'
                : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/hole_six"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>Xem thêm dự án khác trên GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;