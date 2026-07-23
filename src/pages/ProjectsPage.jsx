import { useState } from 'react'
import { projects } from '../data/portfolio'
import './ProjectsPage.css'

const FILTERS = [
  { value: 'All', label: 'All projects' },
  { value: 'AI', label: 'AI systems' },
  { value: 'Full Stack', label: 'Full stack' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-sub">Things I have built. Production systems, AI platforms, and community tools.</p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filter projects">
          {FILTERS.map(filter => (
            <button
              type="button"
              key={filter.value}
              className={`filter-btn${active === filter.value ? ' active' : ''}`}
              onClick={() => setActive(filter.value)}
              aria-pressed={active === filter.value}
            >
              {filter.label}
              <span className="filter-count">{filter.value === 'All' ? projects.length : projects.filter(project => project.category === filter.value).length}</span>
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">Showing {filtered.length} {active === 'All' ? '' : active} projects</p>
        <div className="projects-grid" key={active}>
          {filtered.map(p => (
            <div key={p.id} className="proj-card card reveal">
              <div className="proj-head">
                <span className="tag">{p.category}</span>
                <div className="proj-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`View ${p.title} source code on GitHub`}>GitHub</a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-link accent" aria-label={`Visit ${p.title}`}>Visit ↗</a>
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
