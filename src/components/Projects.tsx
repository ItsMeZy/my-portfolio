import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Web Reporting Engine",
    description: "A robust back-end microservice designed for processing and serving complex data reports, packaged and deployed via Docker containers.",
    tech: [".NET 8", "C#", "Docker", "SQL Server"],
    links: { github: "#", live: "#" }
  },
  {
    title: "React Backoffice Portal",
    description: "A comprehensive administrative dashboard built with a component-driven architecture to manage high-volume transactional data.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Home Command Dashboard",
    description: "A custom tablet-optimized interface designed specifically for a Galaxy Tab S7+, integrating daily smart home metrics and personal schedules.",
    tech: ["React", "Vite", "Framer Motion"],
    links: { github: "#", live: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-600 dark:text-blue-500 font-mono text-xl">02.</span> Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-600 dark:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.links.github} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><FaGithub size={20} /></a>
                  <a href={project.links.live} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-mono text-slate-500">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}