import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const roles = ['Senior React Developer', 'Frontend Architect', 'UI/UX Enthusiast', 'Performance Optimizer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-success-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Shakila</span>
              <br />
              <span className="gradient-text">Sekar</span>
            </motion.h1>

            <motion.div
              className="h-8 sm:h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300">
                {displayText}
                <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary-400 ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Senior React Frontend Developer with nearly 6 years of experience building scalable
              enterprise web applications. I craft high-performance, pixel-perfect interfaces
              with modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                Chennai, Tamil Nadu
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                shakilass2804@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                +91 9094180062
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-2xl" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 glass-card">
                <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">SS</span>
                    </div>
                    <p className="text-lg font-semibold text-white">Shakila Sekar</p>
                    <p className="text-sm text-primary-400">React Developer</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2 text-sm font-medium text-primary-400">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <span className="text-xs">6+</span>
                  </div>
                  Years Exp
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2 text-sm font-medium text-success-400">
                  <div className="w-8 h-8 rounded-lg bg-success-500/20 flex items-center justify-center">
                    <span className="text-xs">40%</span>
                  </div>
                  Faster Dev
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 p-3 glass-card rounded-xl"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm font-medium text-accent-400">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <span className="text-xs">15+</span>
                  </div>
                  Projects
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
