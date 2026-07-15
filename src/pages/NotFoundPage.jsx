import { Link } from 'react-router-dom'
import './ProjectsPage.css'

export default function NotFoundPage() {
  return (
    <div className="page-wrap">
      <div className="container page-header">
        <p className="mono accent">404</p>
        <h1 className="page-title">Page not found</h1>
        <p className="page-sub">The page you requested does not exist or may have moved.</p>
        <Link to="/" className="btn btn-primary not-found-action">Return home</Link>
      </div>
    </div>
  )
}
