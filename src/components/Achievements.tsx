import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Zap, Rocket } from 'lucide-react';

const achievements = [
  { icon: Clock, value: 6, suffix: '+', label: 'Years Experience', color: 'text-primary-400', bg: 'bg-primary-500/10' },
  { icon: Rocket, value: 15, suffix: '+', label: 'Projects Delivered', color: 'text-accent-400', bg: 'bg-accent-500/10' },
  { icon: TrendingUp, value: 40, suffix: '%', label: 'Faster Development', color: 'text-success-400', bg: 'bg-success-500/10' },
  { icon: Zap, value: 25, suffix: '%', label: 'Performance Boost', color: 'text-warning-400', bg: 'bg-warning-500/10' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(ease * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Impact by the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Quantifiable results that showcase my contribution to every project.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${item.bg} flex items-center justify-center`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${item.color}`}>
                <AnimatedCounter value={item.value} suffix={item.suffix} inView={isInView} />
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
