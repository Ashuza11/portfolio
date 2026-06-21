import { useState, useEffect, useCallback } from 'react'
import './GallerySlideshow.css'

export default function GallerySlideshow({ images, height = 420 }) {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)

  useEffect(() => {
    if (paused || images.length < 2) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next, images.length])

  if (!images.length) return null

  return (
    <div
      className="slideshow"
      style={{ height }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div key={img.src} className={`slide${i === current ? ' active' : ''}`}>
          <img src={img.src} alt={img.caption} loading="lazy" />
          <div className="slide-caption">{img.caption}</div>
        </div>
      ))}

      <button className="slide-btn prev" onClick={prev} aria-label="Previous">‹</button>
      <button className="slide-btn next" onClick={next} aria-label="Next">›</button>

      <div className="slide-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
