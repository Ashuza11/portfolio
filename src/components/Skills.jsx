import { skills } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">// 02 skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Tools and technologies I use to build things.</p>

        <div className="skills-grid">
          {skills.map(group => (
            <div key={group.category} className="skill-card card reveal">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-items">
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
