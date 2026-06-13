import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import './About.css'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(target / 40)
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(start)
        }, 40)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">// 01 about</p>
        <h2 className="section-title">More About Me</h2>

        <div className="about-grid">
          <div className="about-bio reveal">
            <p>{personal.bio}</p>
            <br />
            <p>
              I've shipped production AI systems — from GPU backends running Whisper STT to offline-first PWAs
              serving students in African languages. I care about reliability, performance, and real-world impact.
            </p>
            <br />
            <div className="about-langs">
              {personal.languages.map(lang => (
                <span key={lang} className="tag">{lang}</span>
              ))}
            </div>
            <br />
            <a href={personal.cv} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download CV
            </a>
          </div>

          <div className="about-stats reveal">
            {personal.stats.map(s => (
              <div key={s.label} className="stat-card card">
                <div className="stat-value">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
