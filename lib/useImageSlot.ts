'use client'

import { useEffect, useRef, useState } from 'react'

// Lets a visitor pick / drop an image; it is resized and kept in localStorage (this browser only).
export function useImageSlot(key: string, max: number, initial?: string) {
  const [src, setSrc] = useState<string | null>(initial ?? null)
  const [drag, setDrag] = useState(false)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key)
      if (saved) setSrc(saved)
    } catch {}
  }, [key])

  const load = (file?: File) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const s = Math.min(1, max / Math.max(img.width, img.height))
        const c = document.createElement('canvas')
        c.width = Math.round(img.width * s)
        c.height = Math.round(img.height * s)
        c.getContext('2d')?.drawImage(img, 0, 0, c.width, c.height)
        const data = c.toDataURL('image/jpeg', 0.88)
        setSrc(data)
        try { localStorage.setItem(key, data) } catch {}
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  return {
    src, drag, input,
    open: () => input.current?.click(),
    remove: () => { setSrc(null); try { localStorage.removeItem(key) } catch {} },
    bind: {
      onDragOver: (e: React.DragEvent) => { e.preventDefault(); setDrag(true) },
      onDragLeave: () => setDrag(false),
      onDrop: (e: React.DragEvent) => { e.preventDefault(); setDrag(false); load(e.dataTransfer.files[0]) },
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => { load(e.target.files?.[0]); e.target.value = '' },
  }
}

export function tilt(deg: number) {
  return {
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
      const el = e.currentTarget, r = el.getBoundingClientRect()
      el.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * deg + 'deg')
      el.style.setProperty('--rx', -((e.clientY - r.top) / r.height - 0.5) * deg + 'deg')
    },
    onPointerLeave: (e: React.PointerEvent<HTMLElement>) => {
      e.currentTarget.style.setProperty('--rx', '0deg')
      e.currentTarget.style.setProperty('--ry', '0deg')
    },
  }
}
