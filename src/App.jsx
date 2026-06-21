import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import HomePage    from './pages/HomePage'
import ProjectsPage   from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import GalleryPage    from './pages/GalleryPage'
import ContactPage    from './pages/ContactPage'
import { useReveal }  from './hooks/useReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children, theme, onToggleTheme }) {
  useReveal()
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
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
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/gallery"    element={<GalleryPage />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
