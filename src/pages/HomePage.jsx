import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { personal, projects, experience, gallery } from '../data/portfolio'
import GallerySlideshow from '../components/GallerySlideshow'
import './HomePage.css'

function Typewriter({ words }) {
  const [idx, setIdx]           = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx, words])

  return (
    <span className="tw-wrap">
      <span className="tw-text">{displayed}</span>
      <span className="tw-cursor" />
    </span>
  )
}

export default function HomePage() {
  const featured = projects.filter(p => p.featured)
  const recentExp = experience.slice(0, 2)

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="home-hero" id="home">
        <div className="container hero-row">
          <div className="hero-photo-col">
            <div className="hero-ring">
              <img src={personal.avatar} alt={personal.name} className="hero-img" />
            </div>
            {personal.available && (
              <div className="avail-badge">
                <span className="avail-dot" /> Available
              </div>
            )}
          </div>

          <div className="hero-info-col">
            <h1 className="home-name">{personal.name}</h1>
            <p className="home-title">
              <Typewriter words={personal.taglines} />
            </p>
            <div className="hero-meta">
              <span>📍 {personal.location}</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <div className="hero-socials">
              {Object.entries(personal.social).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-pill">
                  {name}
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact"  className="btn btn-outline">Get in Touch</Link>
              <a href={personal.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: content + sidebar ── */}
      <div className="home-body container" id="about">
        <div className="home-main">

          {/* About */}
          <section className="home-section reveal">
            <h2 className="home-section-title">About</h2>
            <p className="home-bio">{personal.bio}</p>

            <h3 className="interests-title">Technical Interests</h3>
            <ul className="interests-list">
              {personal.interests.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Featured Projects */}
          <section className="home-section reveal">
            <div className="section-row-head">
              <h2 className="home-section-title">Featured Projects</h2>
              <Link to="/projects" className="see-all">See all projects →</Link>
            </div>
            <div className="feat-projects">
              {featured.map(p => (
                <div key={p.id} className="feat-card card">
                  <div className="feat-top">
                    <span className="tag">{p.category}</span>
                    <div className="feat-links">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-link">GH</a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-link accent">↗</a>
                      )}
                    </div>
                  </div>
                  <h3 className="feat-title">{p.title}</h3>
                  <p className="feat-desc">{p.description}</p>
                  {p.highlight && (
                    <div className="feat-highlight">⭐ {p.highlight}</div>
                  )}
                  <div className="feat-tech">
                    {p.tech.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Experience */}
          <section className="home-section reveal">
            <div className="section-row-head">
              <h2 className="home-section-title">Recent Experience</h2>
              <Link to="/experience" className="see-all">See full timeline →</Link>
            </div>
            <div className="recent-exp">
              {recentExp.map(e => (
                <div key={e.id} className="exp-row card">
                  <div className="exp-period mono">{e.period}</div>
                  <div className="exp-content">
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-org accent">{e.org}</p>
                    <p className="exp-loc">{e.location}</p>
                    <p className="exp-desc">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery preview */}
          {gallery.length > 0 && (
            <section className="home-section reveal">
              <div className="section-row-head">
                <h2 className="home-section-title">Gallery</h2>
                <Link to="/gallery" className="see-all">See all photos →</Link>
              </div>
              <GallerySlideshow images={gallery} height={400} />
            </section>
          )}

        </div>

        {/* ── Sidebar ── */}
        <aside className="home-sidebar reveal">
          <div className="sidebar-box">
            <h4 className="sidebar-heading">Info</h4>
            <dl className="info-list">
              <div className="info-row">
                <dt>Role</dt>
                <dd>{personal.role}</dd>
              </div>
              <div className="info-row">
                <dt>Location</dt>
                <dd>{personal.location}</dd>
              </div>
              <div className="info-row">
                <dt>Email</dt>
                <dd><a href={`mailto:${personal.email}`} className="accent">{personal.email}</a></dd>
              </div>
              <div className="info-row">
                <dt>Phone</dt>
                <dd>{personal.phone}</dd>
              </div>
            </dl>
          </div>

          <div className="sidebar-box">
            <h4 className="sidebar-heading">Profiles</h4>
            <dl className="info-list">
              {Object.entries(personal.socialHandles).map(([name, handle]) => (
                <div className="info-row" key={name}>
                  <dt>{name.charAt(0).toUpperCase() + name.slice(1)}</dt>
                  <dd>
                    <a href={personal.social[name]} target="_blank" rel="noopener noreferrer" className="accent">
                      {handle}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sidebar-box">
            <h4 className="sidebar-heading">Stats</h4>
            <dl className="info-list">
              {personal.stats.map(s => (
                <div className="info-row" key={s.label}>
                  <dt>{s.label}</dt>
                  <dd className="accent mono">{s.value}{s.suffix}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  )
}
