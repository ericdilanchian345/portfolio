'use client'

import { tilt, useImageSlot } from '@/lib/useImageSlot'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const s = useImageSlot(`eric-shot-${index}`, 1200, p.image)
  return (
    <article className="card proj rv" {...tilt(14)}>
      <div
        className={`shot${s.src ? ' has' : ''}${s.drag ? ' drag' : ''}`}
        tabIndex={0}
        role="button"
        aria-label={`Add screenshot for ${p.title}`}
        onClick={s.open}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); s.open() } }}
        {...s.bind}
      >
        <div className="bar"><i /><i /><i /><span>{p.host}</span></div>
        <div className="vp">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src ?? undefined} alt={`${p.title} screenshot`} />
          <div className="wf"><b /><u /><s /><s /><s /></div>
          <div className="hint">Add screenshot</div>
          <button className="pbtn" type="button" onClick={(e) => { e.stopPropagation(); s.remove() }}>Remove</button>
        </div>
      </div>
      <div className="meta">
        <small>{String(index + 1).padStart(2, '0')} — {p.category.toUpperCase()}</small>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tags">{p.tags.map((t) => <em key={t}>{t}</em>)}</div>
        <a className="view" href={p.url}>View project →</a>
      </div>
      <input ref={s.input} type="file" accept="image/*" hidden onChange={s.onChange} />
    </article>
  )
}
