import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Database, GraduationCap, Layers3, Workflow } from 'lucide-react'
import { certification, education, experience, skills } from '../portfolio'

const areas = [
  { Icon: Layers3, title: 'Enterprise POS & web applications', text: 'Build and maintain POS software and React back-office interfaces for retail and hospitality workflows.' },
  { Icon: Code2, title: 'Modular .NET services', text: 'Develop C# services, reporting tools, and authentication and identity integrations.' },
  { Icon: Database, title: 'Data integration', text: 'Work with SQL Server and Oracle to connect relational data to web applications and reports.' },
  { Icon: Workflow, title: 'Testing & deployment', text: 'Automate test and deployment workflows and package services for containerized environments.' },
]

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <h2 id="experience-title">Experience &amp; education</h2>
        </div>
        <div className="career-grid">
          <article className="experience-card">
            <div className="experience-role">
              <span className="experience-icon"><Code2 size={26} aria-hidden="true" /></span>
              <div>
                <p>{experience.company}</p>
                <h3>{experience.role}</h3>
              </div>
            </div>
            <ul className="career-periods" aria-label="Employment history">
              {experience.periods.map(({ type, start, startLabel, end, endLabel }) => (
                <li key={type}>
                  <h4>{type}</h4>
                  <p><time dateTime={start}>{startLabel}</time> – {end ? <time dateTime={end}>{endLabel}</time> : endLabel}</p>
                </li>
              ))}
            </ul>
            <motion.ul className="experience-areas" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
            }}>
              {areas.map(({ Icon, title, text }) => (
                <motion.li key={title} variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.38 } },
                }}>
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  <div><h4>{title}</h4><p>{text}</p></div>
                </motion.li>
              ))}
            </motion.ul>
          </article>
          <article className="education-card">
            <div className="education-top">
              <span className="experience-icon"><GraduationCap size={26} aria-hidden="true" /></span>
              <p className="eyebrow">Education</p>
            </div>
            <h3>{education.field}</h3>
            <p className="education-institution">{education.institution} <span>{education.fullName}</span></p>
            <ul className="education-records">
              <li>
                <h4>Master of Science studies</h4>
                <p>{education.masterPeriod}</p>
              </li>
              <li>
                <h4>Bachelor of Science</h4>
                <p>{education.bachelorPeriod}</p>
                <p><a href={education.source}>Thesis</a> · {education.thesis}</p>
              </li>
              <li>
                <h4>{certification.name}</h4>
                <p>{certification.issuer} · <time dateTime={certification.date}>{certification.dateLabel}</time></p>
              </li>
            </ul>
          </article>
        </div>
        <section className="technical-skills" aria-labelledby="skills-title">
          <h3 id="skills-title">Technical skills</h3>
          <dl className="skills-grid">
            {skills.map(({ title, tools }) => (
              <div className="skill-group" key={title}>
                <dt>{title}</dt>
                <dd>
                  <ul className="tags">
                    {tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  )
}
