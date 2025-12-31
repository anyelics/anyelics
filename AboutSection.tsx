import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-terminal-border bg-terminal-bg/60 backdrop-blur-xl p-8 terminal-glow"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-terminal-purple font-mono">01.</span>
            <h2 className="text-2xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-terminal-border ml-4" />
          </div>

          {/* Content */}
          <div className="space-y-4 text-terminal-text leading-relaxed">
            <p>
              Hello! I'm Dev, a passionate full-stack developer based in India. I enjoy creating things 
              that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            
            <p>
              My interest in web development started back in 2018 when I decided to try building custom 
              themes for a CMS — turns out hacking together a custom reblog button taught me a lot about 
              HTML & CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at a start-up, a huge corporation, 
              and a student-led design studio. My main focus these days is building accessible, inclusive 
              products and digital experiences.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>

            {/* Tech list */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="text-terminal-purple">▹</span>
                  <span className="text-terminal-text font-mono">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
