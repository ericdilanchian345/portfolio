'use client'

import { useEffect, useRef, useState } from 'react'

// Adds the "in" class while the section is on screen, so its animations replay on every visit.
export default function Section({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.rv').forEach((n, k) => n.style.setProperty('--d', 500 + k * 110 + 'ms'))
    const io = new IntersectionObserver((es) => es.forEach((e) => setOn(e.isIntersecting)), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`${className}${on ? ' in' : ''}`.trim()}>
      {children}
    </section>
  )
}
