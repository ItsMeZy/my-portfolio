import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer",
    company: "TCPOS",
    period: "Recent",
    description: "Engineered a comprehensive React-based backoffice application and developed the Web Reporting Engine. Architected solutions utilizing C# and .NET 8, bridging complex SQL Server and Oracle databases with modern front-end interfaces.",
    tech: ["C#", ".NET 8", "React", "TypeScript", "Docker", "SQL Server"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-600 dark:text-blue-500 font-mono text-xl">01.</span> Professional Journey
        </h3>

        <div className="space-y-12 border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0 pl-8 relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Glowing timeline dot */}
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-900 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-2xl font-semibold">{exp.role} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span></h4>
                <span className="text-slate-500 font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-mono text-blue-700 dark:text-blue-200/70">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}