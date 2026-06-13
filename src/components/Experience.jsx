import { experience } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-label">// 04 experience</p>
        <h2 className="section-title">Timeline</h2>
        <p className="section-subtitle">Work and community roles that shaped how I build.</p>

        <div className="timeline">
          {experience.map((e, i) => (
            <div key={e.id} className={`timeline-item reveal${i % 2 === 0 ? '' : ' right'}`}>
              <div className="timeline-dot" />
              <div className="timeline-card card">
                <div className="tl-meta">
                  <span className={`tl-type tag`}>{e.type}</span>
                  <span className="tl-period mono">{e.period}</span>
                </div>
                <h3 className="tl-role">{e.role}</h3>
                <p className="tl-org accent">{e.org}</p>
                <p className="tl-location">{e.location}</p>
                <p className="tl-desc">{e.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  )
}
