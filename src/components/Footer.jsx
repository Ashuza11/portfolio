import { Link } from 'react-router-dom'
import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono accent">ash.dev</span>
        <span className="footer-copy">© {new Date().getFullYear()} {personal.name}</span>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/facilitation">Community</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
