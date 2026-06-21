import { experience } from '../data/portfolio'
import './ExperiencePage.css'

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Experience</h1>
          <p className="page-sub">Work and community roles that shaped how I build.</p>
        </div>

        <div className="exp-timeline">
          {experience.map(e => (
            <div key={e.id} className="exp-entry reveal">
              <div className="exp-marker">
                <div className="exp-dot" />
                <div className="exp-line" />
              </div>
              <div className="exp-body card">
                <div className="exp-meta">
                  <span className="tag">{e.type}</span>
                  <span className="exp-period mono">{e.period}</span>
                </div>
                <h2 className="exp-role">{e.role}</h2>
                <p className="exp-org accent">{e.org}</p>
                <p className="exp-loc">{e.location}</p>
                <p className="exp-desc">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
