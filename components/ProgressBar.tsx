'use client'

import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`
    }
    addEventListener('scroll', update, { passive: true })
    update()
    return () => removeEventListener('scroll', update)
  }, [])
  return <div id="bar" ref={ref} />
}
