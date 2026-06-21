import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  const [roleIdx, setRoleIdx]     = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = personal.taglines[roleIdx]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % personal.taglines.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        {/* Left — text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for new projects
          </div>

          <h1 className="hero-name">
            Muhigiri <span className="accent">Ashuza</span>
          </h1>

          <h2 className="hero-role">
            <span className="typewriter">{displayed}</span>
            <span className="cursor" />
          </h2>

          <p className="hero-bio">{personal.bio}</p>

          <div className="hero-quick">
            <span>📍 {personal.location}</span>
            <span>✉️ {personal.email}</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact"  className="btn btn-outline">Get in Touch</a>
            <a href={personal.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV
            </a>
          </div>

          <div className="hero-social">
            {Object.entries(personal.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img
              src="/images/Mashuza.jpeg"
              alt="Muhigiri Ashuza Albin"
              className="hero-photo"
            />
          </div>
          <div className="hero-photo-stats">
            {personal.stats.slice(0, 2).map(s => (
              <div key={s.label} className="mini-stat">
                <span className="mini-stat-val accent mono">{s.value}{s.suffix}</span>
                <span className="mini-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="scroll-arrow" />
      </a>
    </section>
  )
}
