import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono accent">ash.dev</span>
        <span className="footer-copy">© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        <div className="footer-links">
          {Object.entries(personal.social).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
