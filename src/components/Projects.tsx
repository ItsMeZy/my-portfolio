import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Globe, Monitor } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../portfolio'

const formats = ['All', 'Web', 'Desktop', 'Research'] as const
const formatIcons = { Web: Globe, Desktop: Monitor, Research: BarChart3 }

export default function Projects() {
  const reduceMotion = useReducedMotion()
  const [format, setFormat] = useState<(typeof formats)[number]>('All')
  const visibleProjects = format === 'All' ? projects : projects.filter((project) => project.format === format)

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header projects-header">
          <div>
            <p className="eyebrow">Personal work</p>
            <h2 id="projects-title">Selected projects</h2>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {formats.map((option) => (
              <button type="button" key={option} aria-pressed={format === option} onClick={() => setFormat(option)}>
                {format === option && (
                  <motion.span className="filter-indicator" layoutId={reduceMotion ? undefined : 'project-filter'} />
                )}
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="visually-hidden" role="status">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown</p>
        <div className="project-grid">
          <AnimatePresence initial={false} mode={reduceMotion ? 'sync' : 'popLayout'}>
            {visibleProjects.map(({ format, category, title, description, stack, repository }) => {
              const Icon = formatIcons[format]
              return (
                <motion.article
                  className="project-card"
                  key={title}
                  layout={reduceMotion ? false : 'position'}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.22, layout: { type: 'spring', stiffness: 320, damping: 32 } }}
                >
                  <div className="project-card-top" data-format={format}>
                    <span className="project-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
                    <p className="project-category">{category}</p>
                  </div>
                  <h3>{title}</h3>
                  <p className="project-description">{description}</p>
                  {stack && (
                    <ul className="tags" aria-label="Technologies">
                      {stack.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  )}
                  {repository && (
                    <a className="project-link" href={repository} aria-label={`View code on GitHub: ${title}`}>
                      <FaGithub size={18} aria-hidden="true" /> View code on GitHub
                    </a>
                  )}
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
