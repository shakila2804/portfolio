import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Product Manager',
    company: 'Tech Company',
    text: 'Shakila delivered exceptional work on our dashboard project. The attention to detail and performance optimizations were outstanding.',
  },
  {
    id: 2,
    name: 'Client Name',
    role: 'Engineering Lead',
    company: 'FinTech Startup',
    text: 'The reusable component library Shakila built reduced our development time significantly. Highly recommended for complex frontend projects.',
  },
  {
    id: 3,
    name: 'Client Name',
    role: 'CTO',
    company: 'Enterprise Company',
    text: 'Working with Shakila was a great experience. The responsive UI and smooth animations made our application stand out.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-card rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <Quote className="w-8 h-8 text-primary-500/20 absolute top-4 right-4" />
              <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
