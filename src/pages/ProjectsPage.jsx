import { useState } from 'react'
import { projects } from '../data/portfolio'
import './ProjectsPage.css'

const FILTERS = ['All', 'AI', 'Full Stack']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-sub">Things I have built — production systems, AI platforms, and community tools.</p>
        </div>

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
            <div key={p.id} className="proj-card card reveal">
              <div className="proj-head">
                <span className="tag">{p.category}</span>
                <div className="proj-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-link">GH</a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-link accent">↗</a>
                  )}
                </div>
              </div>
              <h2 className="proj-title">{p.title}</h2>
              <p className="proj-desc">{p.description}</p>
              {p.highlight && (
                <div className="proj-highlight">⭐ {p.highlight}</div>
              )}
              <div className="proj-tech">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
