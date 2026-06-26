import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code2, Users, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '6+' },
  { icon: Code2, label: 'Projects Completed', value: '15+' },
  { icon: Users, label: 'Happy Clients', value: '10+' },
  { icon: Award, label: 'Awards Won', value: '5+' },
];

const highlights = [
  'Built reusable component libraries that reduced development time by 40%',
  'Improved application performance by 25% through optimization techniques',
  'Led frontend development for enterprise-grade financial applications',
  'Collaborated with cross-functional teams to deliver high-quality products',
  'Expert in converting Figma designs into pixel-perfect responsive interfaces',
  'Specialized in state management with Redux and Context API',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </h2>

            <p className="text-base text-gray-400 leading-relaxed">
              I am a passionate Senior React Frontend Developer with nearly 6 years of experience
              building scalable enterprise web applications. My journey in frontend development has
              been driven by a relentless pursuit of creating interfaces that are not just functional,
              but delightful to use.
            </p>

            <p className="text-base text-gray-400 leading-relaxed">
              I specialize in React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Redux,
              and performance optimization. I enjoy creating reusable component libraries, responsive
              user interfaces, and high-performance applications while collaborating with
              cross-functional teams.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 text-primary-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Key Highlights</h3>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                    <p className="text-sm text-gray-400">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bachelor of Engineering</h4>
                    <p className="text-xs text-gray-500">Computer Science / Information Technology</p>
                    <p className="text-xs text-gray-600 mt-1">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
