// Edit this list with your real projects.
// Screenshots: click a preview in the browser to add one (saved in that browser only),
// or put images in /public and use the `image` field to show them for every visitor.
export type Project = { title: string; category: string; host: string; description: string; tags: string[]; url: string; image?: string }

export const projects: Project[] = [
  { title: 'Luxe Store', category: 'E-commerce', host: 'luxestore.com', description: 'A fast, conversion-focused online store with a clean checkout flow.', tags: ['Figma', 'Next.js', 'Stripe'], url: '#' },
  { title: 'Nova SaaS', category: 'Landing page', host: 'novasaas.io', description: 'A bold product landing page that explains the value in seconds.', tags: ['UI/UX', 'Tailwind', 'Motion'], url: '#' },
  { title: 'Aurora Studio', category: 'Agency website', host: 'aurorastudio.co', description: 'A creative agency site with smooth animations and a strong brand feel.', tags: ['Branding', 'React', 'GSAP'], url: '#' },
  { title: 'Fitly', category: 'Web app', host: 'fitly.app', description: 'A clean dashboard that makes tracking workouts simple and motivating.', tags: ['Dashboard', 'UI/UX', 'Charts'], url: '#' },
  { title: 'Café Noir', category: 'Restaurant', host: 'cafenoir.com', description: 'An elegant, mobile-first website with online menu and reservations.', tags: ['Responsive', 'Design', 'SEO'], url: '#' },
  { title: 'Atlas Travel', category: 'Booking site', host: 'atlastravel.com', description: 'A travel booking experience with big visuals and a simple search flow.', tags: ['Figma', 'Next.js', 'API'], url: '#' },
]
