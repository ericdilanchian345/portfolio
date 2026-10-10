import type { CSSProperties, ElementType } from 'react'

// Splits text into letters (mode "c") or words (mode "w") so CSS can animate them one by one.
export default function Split({ as: Tag = 'div', text, mode = 'w', className }: { as?: ElementType; text: string; mode?: 'c' | 'w'; className?: string }) {
  let i = 0
  const words = text.split(/\s+/)
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi}>
          <span className="wd" aria-hidden="true">
            {mode === 'c' ? (
              Array.from(w).map((c, ci) => (
                <span key={ci} className="ch" style={{ '--i': i++ } as CSSProperties}>{c}</span>
              ))
            ) : (
              <span className="w" style={{ '--i': i++ } as CSSProperties}>{w}</span>
            )}
          </span>
          {wi < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}
