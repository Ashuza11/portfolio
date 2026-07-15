import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )

    const register = root => {
      const elements = [
        ...(root.matches?.('.reveal') ? [root] : []),
        ...root.querySelectorAll('.reveal'),
      ]
      elements.forEach(element => {
        if (reduceMotion) element.classList.add('visible')
        else observer.observe(element)
      })
    }

    register(document)
    const mutations = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) register(node)
      }))
    })
    mutations.observe(document.getElementById('main-content'), { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [pathname])
}
