import { useState } from 'react'
import { gallery } from '../data/portfolio'
import './Gallery.css'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  if (gallery.length === 0) {
    return (
      <section id="gallery">
        <div className="container">
          <p className="section-label">// 05 gallery</p>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle gallery-empty">
            Drop images into <code className="mono">/public/gallery/</code> and add entries to the{' '}
            <code className="mono">gallery</code> array in <code className="mono">src/data/portfolio.js</code> to populate this section.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery">
      <div className="container">
        <p className="section-label">// 05 gallery</p>
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Workshops, conferences, and community events.</p>

        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <div key={i} className="gallery-item reveal" onClick={() => setLightbox(item)}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <p>{lightbox.caption}</p>
            <button onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  )
}
