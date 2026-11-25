import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { projects } from '../portfolio'

const sections = [
  { id: 'experience', label: 'Career' },
  ...(projects.length ? [{ id: 'projects', label: 'Work' }] : []),
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const root = document.documentElement
    const elements = sections.map(({ id }) => document.getElementById(id))
    let scrollPadding = 0

    const updateActiveSection = () => {
      const maxScroll = root.scrollHeight - root.clientHeight
      if (maxScroll > 0 && root.scrollTop >= maxScroll - 1) {
        // Anchors near the footer can share the same scroll position.
        const target = elements.find((element) => element && `#${element.id}` === window.location.hash)
        const targetIsClamped = target && target.getBoundingClientRect().top >= scrollPadding - 1
        setActive(targetIsClamped ? target.id : 'contact')
        return
      }

      const marker = Math.max(scrollPadding + 1, root.clientHeight * 0.32)
      const current = elements.findLast((element) => element && element.getBoundingClientRect().top <= marker)
      setActive(current?.id ?? 'top')
    }

    const updateViewport = () => {
      scrollPadding = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
      updateActiveSection()
    }

    updateViewport()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', updateActiveSection)
    window.addEventListener('resize', updateViewport)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
      window.removeEventListener('resize', updateViewport)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="wordmark" aria-label="Zyril Gatchalian home">
          <span className="monogram" aria-hidden="true">ZG</span>
          <span className="wordmark-name">Zyril Gatchalian</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
              {label}
              {active === id && <motion.span className="nav-indicator" layoutId="site-nav-indicator" />}
            </a>
          ))}
        </nav>
        <button className="icon-button" onClick={toggleTheme} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
          {isDark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
