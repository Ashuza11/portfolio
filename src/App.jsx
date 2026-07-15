import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import HomePage    from './pages/HomePage'
import ProjectsPage   from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import FacilitationPage from './pages/FacilitationPage'
import ContactPage    from './pages/ContactPage'
import NotFoundPage   from './pages/NotFoundPage'
import { useReveal }  from './hooks/useReveal'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash ? document.querySelector(hash) : document.querySelector('h1')
    if (hash && target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    if (target) {
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: Boolean(hash) })
    }
  }, [pathname, hash])
  return null
}

const pageMeta = {
  '/': ['Muhigiri Ashuza — Full Stack Engineer', 'Full Stack and AI engineer building products for African education and communities.'],
  '/projects': ['Projects — Muhigiri Ashuza', 'AI platforms, production systems, and community tools built by Muhigiri Ashuza.'],
  '/experience': ['Experience — Muhigiri Ashuza', 'Professional engineering and developer-community experience.'],
  '/facilitation': ['Facilitation & Mentorship — Muhigiri Ashuza', 'Bootcamps, workshops, and mentorship programs organized for emerging technologists.'],
  '/contact': ['Contact — Muhigiri Ashuza', 'Contact Muhigiri Ashuza about engineering projects and collaboration.'],
}

function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Page not found — Muhigiri Ashuza', 'The requested page could not be found.']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}${pathname}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}${pathname}`)
  }, [pathname])
  return null
}

function Layout({ children, theme, onToggleTheme }) {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMeta />
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/facilitation" element={<FacilitationPage />} />
          <Route path="/gallery"    element={<Navigate replace to="/facilitation" />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
