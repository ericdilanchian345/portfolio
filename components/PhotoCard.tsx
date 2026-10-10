'use client'

import { tilt, useImageSlot } from '@/lib/useImageSlot'

// Hero photo card. To show your photo to every visitor, put it in /public (e.g. /me.jpg)
// and pass it as `defaultSrc`.
export default function PhotoCard({ defaultSrc }: { defaultSrc?: string }) {
  const s = useImageSlot('eric-portfolio-photo', 900, defaultSrc)
  return (
    <figure
      className={`photo rv${s.src ? ' has' : ''}${s.drag ? ' drag' : ''}`}
      tabIndex={0}
      aria-label="Add your photo"
      onClick={s.open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); s.open() } }}
      {...s.bind}
      {...tilt(12)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={s.src ?? undefined} alt="Portrait of Eric" />
      <div className="ph">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
        <div><b>Add your photo</b>Click or drop an image here</div>
      </div>
      <button className="pbtn" type="button" onClick={(e) => { e.stopPropagation(); s.remove() }}>Remove</button>
      <figcaption className="cap">Eric<span>Web Designer</span></figcaption>
      <input ref={s.input} type="file" accept="image/*" hidden onChange={s.onChange} onClick={(e) => e.stopPropagation()} />
    </figure>
  )
}
