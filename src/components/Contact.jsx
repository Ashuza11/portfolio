import { personal } from '../data/portfolio'
import './Contact.css'

const socialIcons = {
  github:   'GH',
  linkedin: 'LI',
  youtube:  'YT',
  twitter:  'TW',
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">// 06 contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you.</p>

        <div className="contact-grid">
          <form
            className="contact-form card reveal"
            onSubmit={e => {
              e.preventDefault()
              const data = Object.fromEntries(new FormData(e.target))
              window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name}\n\n${data.message}`)}`
            }}
          >
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" type="text" required placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows={5} required placeholder="Tell me more..." />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info reveal">
            <div className="contact-detail">
              <span className="contact-label">Email</span>
              <a href={`mailto:${personal.email}`} className="accent">{personal.email}</a>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Phone</span>
              <a href={`tel:${personal.phone}`} className="accent">{personal.phone}</a>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Location</span>
              <span>{personal.location}</span>
            </div>

            <div className="contact-social">
              {Object.entries(personal.social).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <span className="mono">{socialIcons[name]}</span>
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
