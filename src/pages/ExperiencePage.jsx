import { experience, highlights } from '../data/portfolio'
import './ExperiencePage.css'

function HighlightVisual({ item }) {
  if (item.image) return <img src={item.image} alt="" loading="lazy" decoding="async" />
  return (
    <div className="highlight-placeholder" aria-hidden="true">
      <span>{item.kind}</span>
      <strong>{item.title.split(' ').slice(0, 2).map(word => word[0]).join('')}</strong>
    </div>
  )
}

function HighlightCard({ item, featured = false }) {
  return (
    <article className={`highlight-card${featured ? ' highlight-featured' : ''} reveal`}>
      <div className="highlight-visual"><HighlightVisual item={item} /></div>
      <div className="highlight-copy">
        <div className="highlight-meta"><span>{item.kind}</span><span>{item.date}</span></div>
        <h3>{item.title}</h3>
        <p className="highlight-location">{item.location}</p>
        <p>{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Experience</h1>
          <p className="page-sub">Current work, research, challenges, recognition, and community roles that shape how I build.</p>
        </div>

        <section className="highlights-section" aria-labelledby="now-title">
          <div className="experience-section-head">
            <p className="section-label">Current focus</p>
            <h2 id="now-title">Now</h2>
          </div>
          <div className="now-grid">
            {highlights.filter(item => item.group === 'Now').map(item => <HighlightCard item={item} featured key={item.id} />)}
          </div>
        </section>

        {['Challenges and recognition', 'Research and writing'].map(group => (
          <section className="highlights-section" aria-labelledby={`${group.replaceAll(' ', '').toLowerCase()}-title`} key={group}>
            <div className="experience-section-head">
              <p className="section-label">Selected highlights</p>
              <h2 id={`${group.replaceAll(' ', '').toLowerCase()}-title`}>{group}</h2>
            </div>
            <div className="highlights-grid">
              {highlights.filter(item => item.group === group).map(item => <HighlightCard item={item} key={item.id} />)}
            </div>
          </section>
        ))}

        <section className="timeline-section" aria-labelledby="timeline-title">
          <div className="experience-section-head">
            <p className="section-label">Professional path</p>
            <h2 id="timeline-title">Experience timeline</h2>
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
        </section>
      </div>
    </div>
  )
}
