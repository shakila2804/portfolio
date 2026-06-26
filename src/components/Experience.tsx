import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth and impactful contributions.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 lg:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 lg:mb-16 ${index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%]'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`absolute left-4 lg:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 z-10 lg:-translate-x-1/2 -translate-x-1/2`} />

              <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                <div className="glass-card rounded-2xl p-6 lg:p-8 hover:border-white/15 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-success-500/10 text-success-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.designation}</h3>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-gray-400">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-lg bg-dark-600 text-gray-400">
                        {tech}
                      </span>
                    ))}
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
