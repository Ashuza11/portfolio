import { useState } from 'react'
import { gallery } from '../data/portfolio'
import GallerySlideshow from '../components/GallerySlideshow'
import './GalleryPage.css'

const CATS = ['All', 'conference', 'workshop', 'training']

export default function GalleryPage() {
  const [active,   setActive]   = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.category === active)

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Gallery</h1>
          <p className="page-sub">Workshops, conferences, and community events across Africa.</p>
        </div>

        {/* Featured slideshow */}
        <div className="gallery-featured">
          <GallerySlideshow images={gallery.filter(g => g.category === 'conference')} height={460} />
        </div>

        {/* Filter + grid */}
        <div className="filter-bar">
          {CATS.map(c => (
            <button
              key={c}
              className={`filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div key={i} className="g-item reveal" onClick={() => setLightbox(item)}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="g-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lb-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <p>{lightbox.caption}</p>
            <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}
