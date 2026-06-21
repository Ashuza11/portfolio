import { personal } from '../data/portfolio'
import './ContactPage.css'

export default function ContactPage() {
  const handleSubmit = e => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`From: ${d.name}\n\n${d.message}`)}`
  }

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact</h1>
          <p className="page-sub">Have a project in mind or want to collaborate? I would love to hear from you.</p>
        </div>

        <div className="contact-layout">
          <form className="contact-form card reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" type="text" required placeholder="What is this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows={6} required placeholder="Tell me more..." />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-side reveal">
            <div className="sidebar-box">
              <h4 className="sidebar-heading">Direct</h4>
              <dl className="info-list">
                <div className="info-row">
                  <dt>Email</dt>
                  <dd><a href={`mailto:${personal.email}`} className="accent">{personal.email}</a></dd>
                </div>
                <div className="info-row">
                  <dt>Phone</dt>
                  <dd><a href={`tel:${personal.phone}`} className="accent">{personal.phone}</a></dd>
                </div>
                <div className="info-row">
                  <dt>Location</dt>
                  <dd>{personal.location}</dd>
                </div>
              </dl>
            </div>

            <div className="sidebar-box">
              <h4 className="sidebar-heading">Social</h4>
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
          </div>
        </div>
      </div>
    </div>
  )
}
