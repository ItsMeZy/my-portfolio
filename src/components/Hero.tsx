import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Braces, Database, Layers3, MapPin } from 'lucide-react'
import { profile } from '../portfolio'

const layers = [
  { title: 'Interface', tech: 'React + TypeScript', Icon: Layers3, color: 'mint', description: 'Reusable components for data-heavy workflows.' },
  { title: 'Services', tech: 'C# + .NET', Icon: Braces, color: 'violet', description: 'Application logic and reporting services.' },
  { title: 'Data', tech: 'SQL Server + Oracle', Icon: Database, color: 'blue', description: 'Relational data behind reports and backoffice tools.' },
]

export default function Hero() {
  const [activeLayer, setActiveLayer] = useState(0)
  const hero = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 125])
  const layer = layers[activeLayer]
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 180, damping: 28 })
  const y = useSpring(pointerY, { stiffness: 180, damping: 28 })
  const glow = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, var(--spotlight), transparent)`

  return (
    <section id="top" className="hero" ref={hero}>
      <motion.div className="hero-grid" style={reduceMotion ? undefined : { y: backgroundY }} aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="eyebrow"><span className="eyebrow-line" /> Software Engineer</p>
          <h1>Zyril Errol <span>Gatchalian<span className="name-period">.</span></span></h1>
          <p className="hero-lead">I build point-of-sale and web software for retail and hospitality.</p>
          <p className="hero-context">At Zucchetti since 2019, I’ve worked across .NET services, React interfaces, and the databases, tests, and deployment workflows that support them.</p>
          <div className="hero-actions">
            <a href="#experience" className="button button-primary">View experience</a>
            <a href="#contact" className="button button-secondary">Get in touch</a>
          </div>
          <p className="hero-location"><MapPin size={17} aria-hidden="true" /> {profile.location}</p>
        </motion.div>

        <motion.div className="stack-panel" onPointerMove={(event) => {
          if (reduceMotion || event.pointerType !== 'mouse') return
          const bounds = event.currentTarget.getBoundingClientRect()
          pointerX.set(event.clientX - bounds.left)
          pointerY.set(event.clientY - bounds.top)
        }} initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.12 }}>
          {!reduceMotion && <motion.div className="stack-glow" style={{ backgroundImage: glow }} aria-hidden="true" />}
          <div className="stack-header">
            <h2>Explore my stack</h2>
            <span className="stack-mark" aria-hidden="true"><Braces size={18} /></span>
          </div>
          <div className="stack-topology" role="group" aria-label="Explore the technical stack">
            <div className="stack-connector" aria-hidden="true">
              <motion.span animate={{ x: `${activeLayer * 100}%` }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }} />
            </div>
            {layers.map(({ title, Icon, color }, index) => (
              <button key={title} type="button" data-tone={color} className="stack-node" aria-pressed={activeLayer === index} aria-controls="stack-detail" onClick={() => setActiveLayer(index)}>
                <span className="node-icon">
                  {activeLayer === index && <motion.span layoutId="stack-highlight" className="node-highlight" transition={{ type: 'spring', stiffness: 320, damping: 32 }} />}
                  <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                </span>
                {title}
              </button>
            ))}
          </div>
          <div id="stack-detail" className="stack-detail" aria-live="polite" aria-atomic="true">
            <AnimatePresence initial={false} mode="wait">
              <motion.div key={layer.title} initial={reduceMotion ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.16 }}>
                <p className="stack-tech" data-tone={layer.color}>{layer.tech}</p>
                <p>{layer.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
