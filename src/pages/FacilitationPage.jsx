import { engagements } from '../data/portfolio'
import './FacilitationPage.css'

function EventImages({ event }) {
  return (
    <div className={`event-mosaic event-mosaic-${Math.min(event.images.length, 5)}`} role="group" aria-label={`Photos from ${event.title}`}>
      {event.images.map(src => (
        <figure className="event-photo" key={src}>
          <img src={src} alt={`${event.title} participants and activities`} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

export default function FacilitationPage() {
  return (
    <div className="page-wrap facilitation-page">
      <div className="container">
        <header className="page-header facilitation-header">
          <p className="section-label">Community learning</p>
          <h1 className="page-title">Facilitation & Mentorship</h1>
          <p className="page-sub">Bootcamps, workshops, and community programs I organized to help emerging technologists turn curiosity into practical skills and opportunity.</p>
          <div className="facilitation-summary" aria-label="Facilitation impact">
            <span><strong>9</strong> programs</span>
            <span><strong>500+</strong> learners reached</span>
            <span><strong>8+</strong> countries represented</span>
          </div>
        </header>

        <div className="event-list">
          {engagements.map(event => (
            <article className="event-card reveal" key={event.id}>
              <EventImages event={event} />
              <div className="event-copy">
                <div className="event-kicker">
                  <span>{event.year}</span>
                  <span>{event.format}</span>
                </div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div className="event-impact">
                  <span className="event-impact-label">Participation</span>
                  <strong>{event.audience}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
