import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Mockup3Devices from '@/assets/Mockup3Devices.webp';
import MockupLaptop from '@/assets/docdiff/MockupLaptop.webp';
import MockupLaptopMesa from '@/assets/mesa/MockupLaptopMesa.webp';

interface Project {
  id: string;
  link: string;
  tags: string[];
  title: string;
  description: string;
  image?: string;
  bgColor?: string;
}

const PROJECTS: Project[] = [
  {
    id: "worksense",
    link: "/projects/worksense",
    tags: ["Healthcare", "Web App", "Mental Health"],
    title: "WorkSense: Preventing Burnout for Students & Professionals",
    description: "A seamless app combining mental health profiling, work hygiene tools, and a supportive community to tackle global burnout.",
    image: Mockup3Devices,
  },
  {
    id: "mesa",
    link: "/projects/mesa",
    tags: ["MERN Stack", "Real-Time", "Collaboration"],
    title: "Mesa: Real-Time Collaborative Gantt Planning System",
    description: "A high-performance planning tool enabling multi-institution task scheduling and concurrent updates synced via WebSockets and Kafka.",
    image: MockupLaptopMesa,
  },
  {
    id: "docdiff",
    link: "/projects/docdiff",
    tags: ["LegalTech", "Collaboration", "Web App"],
    title: "DocDiff: Collaborative Legal Document Comparison",
    description: "A high-accuracy version control system designed for legal teams to visualize inline revisions and structural shifts side-by-side.",
    image: MockupLaptop,
  }
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="w-full px-6 md:px-8 max-w-5xl mx-auto relative z-20">
      <div id="projects" className="flex flex-col gap-12 md:gap-32 mt-12 md:mt-24 relative">
        {PROJECTS.map((project, index) => {
          const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.05; 
          const targetOverlayOpacity = (PROJECTS.length - 1 - index) * 0.4;
          const startProgress = Math.min((index + 1) * (1 / PROJECTS.length), 0.999);
          const range = [startProgress, 1];
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          const overlayOpacity = useTransform(scrollYProgress, range, [0, targetOverlayOpacity]);

          if (!project.image) {
            return (
              <div
                key={project.id}
                className="sticky w-full"
                style={{
                  top: `calc(4vh + ${index * 2.5}vh)`, 
                  paddingBottom: `calc(1.5rem + ${(PROJECTS.length - 1 - index) * 2.5}vh)`,
                }}
              >
                <motion.div
                  style={{ scale, transformOrigin: "top" }}
                  className="w-full bg-black rounded-t-[1.5rem] md:rounded-t-[2rem] flex flex-col gap-4 md:gap-6 border-t border-white/5 relative"
                >
                  <motion.div 
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black pointer-events-none rounded-t-[1.5rem] md:rounded-t-[2rem] z-50"
                  />
                  
                  <div className={`w-full h-[35vh] md:h-[45vh] lg:h-[50vh] min-h-[250px] max-h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden ${project.bgColor} relative flex items-end justify-center`}>
                    <div className="w-[80%] h-[80%] bg-white rounded-t-[1rem] md:rounded-t-[1.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/20">
                       <div className="h-4 md:h-6 flex items-center px-4 md:px-6 bg-neutral-50/50 gap-1.5 md:gap-2">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-200" />
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-200" />
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-200" />
                       </div>
                       <div className="flex-1 bg-white/90 p-4 md:p-8 flex flex-col gap-4">
                          <div className="w-2/3 h-5 md:h-8 bg-neutral-50 rounded-lg md:rounded-xl" />
                          <div className="w-full h-full bg-neutral-50 rounded-lg md:rounded-xl" />
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-3 p-4 md:p-6 mb-4 md:mb-6 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white max-w-2xl leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          }

          return (
            <div
              key={project.id}
              className="sticky w-full"
              style={{
                top: `calc(4vh + ${index * 2.5}vh)`, 
                paddingBottom: `calc(1.5rem + ${(PROJECTS.length - 1 - index) * 2.5}vh)`,
              }}
            >
              <motion.div
                style={{ scale, transformOrigin: "top" }}
                className="w-full bg-black rounded-t-[1.5rem] md:rounded-t-[2rem] flex flex-col gap-4 md:gap-6 border-t border-white/5 relative group cursor-pointer"
              >
                <motion.div 
                  style={{ opacity: overlayOpacity }}
                  className="absolute inset-0 bg-black pointer-events-none rounded-t-[1.5rem] md:rounded-t-[2rem] z-50"
                />
                
                <Link to={project.link} className="w-full block">
                  <div className="w-full h-[85vh] md:h-[90vh] min-h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#050505] relative flex flex-col items-center justify-between p-4 md:p-6 lg:p-8 border border-white/10 group-hover:border-white/20 transition-colors duration-500">
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="flex w-full justify-between items-start z-10 shrink-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 md:px-4 py-1.5 text-xs font-medium tracking-wide border border-white/10 rounded-full bg-white/5 text-neutral-300 backdrop-blur-md">{tag}</span>
                        ))}
                      </div>
                      <div className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="w-full flex-1 min-h-0 flex items-center justify-center relative z-10 py-4 md:py-8">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-[95%] md:w-[85%] lg:w-[75%] h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out drop-shadow-2xl" 
                      />
                    </div>

                    <div className="w-full shrink-0 flex flex-col gap-2 md:gap-3 p-4 md:p-6 border border-white/10 rounded-2xl md:rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl group-hover:bg-[#111]/90 transition-colors duration-500 z-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-3xl font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
