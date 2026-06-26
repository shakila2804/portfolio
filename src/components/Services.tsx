import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, LayoutDashboard, Smartphone, Component, Gauge, Plug } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'React Development',
    description: 'Building scalable, performant React applications with modern hooks, patterns, and best practices.',
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Development',
    description: 'Creating data-rich dashboards with interactive charts, real-time updates, and intuitive UX.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: Smartphone,
    title: 'Responsive UI',
    description: 'Pixel-perfect responsive designs that look stunning on every device and screen size.',
    color: 'text-success-400',
    bg: 'bg-success-500/10',
  },
  {
    icon: Component,
    title: 'Component Library',
    description: 'Designing reusable, well-documented component libraries for faster and consistent development.',
    color: 'text-warning-400',
    bg: 'bg-warning-500/10',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Profiling, code splitting, lazy loading, and caching strategies for blazing-fast apps.',
    color: 'text-error-400',
    bg: 'bg-error-500/10',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Seamlessly integrating REST APIs, GraphQL, and third-party services with robust error handling.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            End-to-end frontend solutions tailored to your business needs.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-6 group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
