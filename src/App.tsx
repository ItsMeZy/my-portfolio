import { useEffect, useLayoutEffect, useState } from 'react'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/NavBar'
import { profile, projects } from './portfolio'

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') !== 'light'
    } catch {
      return true
    }
  })
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 36, restDelta: 0.001 })

  useLayoutEffect(() => {
    // On direct visits, the fragment target only exists after React renders.
    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'instant' })
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    try {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    } catch {
      // The theme remains usable when browser storage is unavailable.
    }
  }, [isDark])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark((value) => !value)} />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        {projects.length > 0 && <Projects />}
        <About />
      </main>
      <footer id="contact" className="contact">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /> Email me
            </a>
            <a className="button button-secondary" href={profile.linkedin}>
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="container footer-note">
          <span>{profile.name} · Software Engineer</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </MotionConfig>
  )
}

export default App
