import { personal } from '../data/portfolio'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact</h1>
          <p className="page-sub">Have a project in mind or want to collaborate? I would love to hear from you.</p>
        </div>

        <div className="contact-direct reveal">
          <div className="contact-intro card">
            <p className="section-label">Direct contact</p>
            <h2>Let’s build something meaningful.</h2>
            <p>Email is the best way to reach me for projects, research, speaking, or community collaboration.</p>
            <a href={`mailto:${personal.email}`} className="btn btn-primary">Email me</a>
          </div>

          <div className="contact-side">
            <div className="sidebar-box">
              <h4 className="sidebar-heading">Direct</h4>
              <dl className="info-list">
                <div className="info-row">
                  <dt>Email</dt>
                  <dd><a href={`mailto:${personal.email}`} className="accent">{personal.email}</a></dd>
                </div>
                <div className="info-row">
                  <dt>Phone</dt>
                  <dd><a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="accent">{personal.phone}</a></dd>
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
                    <dt>{name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</dt>
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
