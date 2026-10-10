'use client'

import { tilt } from '@/lib/useImageSlot'

export default function TiltCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className} {...tilt(14)}>{children}</div>
}
