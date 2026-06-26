import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { skills } from '../data/skills';

interface SkillItem {
  name: string;
  icon: React.ComponentType<any>;
  proficiency: number;
  color: string;
  keywords: string[];
  category: string;
}

const hexToRgb = (hex: string): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255, 255, 255';
};

const getCategoryLabel = (cat: string) => {
  switch (cat) {
    case 'State Management': return 'State';
    case 'Performance': return 'Optimization';
    default: return cat;
  }
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Flatten all items and inject category property
  const allSkills: SkillItem[] = skills.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const categories = ['All', ...skills.map((cat) => cat.category)];

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter((skill) => skill.category === selectedCategory);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 6 years of hands-on experience in frontend development.
          </p>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16 p-4 glass-card rounded-2xl text-center border border-white/5"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <div className="text-2xl lg:text-3xl font-bold gradient-text">20+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-semibold">Tech Stack Items</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-2xl lg:text-3xl font-bold gradient-text">6+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-semibold">Years Experience</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-2xl lg:text-3xl font-bold gradient-text">90%</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-semibold">Avg Proficiency</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-2xl lg:text-3xl font-bold gradient-text">100%</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-semibold">Production Ready</div>
          </div>
        </motion.div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {selectedCategory === category && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full -z-10 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const strokeDashoffset = circumference - (skill.proficiency / 100) * circumference;
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  className="group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    borderColor: isHovered ? `rgba(${hexToRgb(skill.color)}, 0.35)` : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: isHovered ? `0 10px 30px -10px rgba(${hexToRgb(skill.color)}, 0.2)` : 'none',
                    background: isHovered
                      ? `linear-gradient(135deg, rgba(${hexToRgb(skill.color)}, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)`
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Glowing Radial Orb Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none overflow-hidden">
                    <div
                      className="absolute -inset-10 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        background: `radial-gradient(circle at center, rgba(${hexToRgb(skill.color)}, 0.1) 0%, transparent 60%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Circular Progress Ring */}
                      <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          {/* Inner track background */}
                          <circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-white/5 fill-none"
                            strokeWidth="3"
                          />
                          {/* Animated brand indicator ring */}
                          <motion.circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="fill-none"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={isInView ? { strokeDashoffset } : {}}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
                            style={{
                              stroke: skill.color,
                              strokeLinecap: 'round',
                            }}
                          />
                        </svg>
                        {/* Center Icon */}
                        <skill.icon
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      </div>

                      {/* Header text info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5 block">
                          {getCategoryLabel(skill.category)}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-white truncate mb-1">
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold" style={{ color: skill.color }}>
                            {skill.proficiency}%
                          </span>
                          <span className="text-[9px] tracking-wider font-semibold px-1.5 py-0.25 rounded bg-white/5 text-gray-400 border border-white/5 uppercase shrink-0">
                            {skill.proficiency >= 90 ? 'Expert' : skill.proficiency >= 85 ? 'Advanced' : 'Proficient'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Sub-skills Tags */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {skill.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-[9px] tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 hover:text-white transition-colors duration-200"
                          style={{
                            borderColor: isHovered ? `rgba(${hexToRgb(skill.color)}, 0.15)` : 'rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
