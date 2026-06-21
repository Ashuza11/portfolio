import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { personal } from '../data/portfolio'
import './Navbar.css'

const links = [
  { label: 'About',      to: '/#about' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Gallery',    to: '/gallery' },
  { label: 'Contact',    to: '/contact' },
  { label: 'CV',         to: personal.cv, external: true },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="mono accent">ash</span>
          <span className="mono" style={{ color: 'var(--text-2)' }}>.dev</span>
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              {l.external
                ? <a href={l.to} target="_blank" rel="noopener noreferrer" className="nav-cv">
                    {l.label}
                  </a>
                : l.to.startsWith('/#')
                  ? <a href={l.to} onClick={() => setOpen(false)}>{l.label}</a>
                  : <Link to={l.to} className={pathname === l.to ? 'active' : ''}>
                      {l.label}
                    </Link>
              }
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`hamburger${open ? ' active' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
