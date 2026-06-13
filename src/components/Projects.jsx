import { useState } from 'react'
import { projects } from '../data/portfolio'
import './Projects.css'

const FILTERS = ['All', 'AI', 'Full Stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">// 03 projects</p>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">Things I've built — production systems, AI platforms, and community tools.</p>

        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => (
            <div key={p.id} className="project-card card reveal">
              <div className="project-header">
                <div>
                  <span className="tag">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
                      GH
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-link accent" title="Live">
                      ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{p.description}</p>

              {p.highlight && (
                <div className="project-highlight">⭐ {p.highlight}</div>
              )}

              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
