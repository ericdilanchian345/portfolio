# Eric — Web Designer Portfolio (Next.js 14, App Router)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- Content: `app/page.tsx` (texts, services, process) and `lib/projects.ts` (your projects).
- Styles: `app/globals.css` (plain CSS, no Tailwind).
- Photo & screenshots: visitors/you can click a card to add an image (kept in that browser only).
  To show them to everyone, put images in `/public` and set `image` in `lib/projects.ts`
  or `defaultSrc="/me.jpg"` on `<PhotoCard />` in `app/page.tsx`.
