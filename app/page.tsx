import Split from '@/components/Split'
import Section from '@/components/Section'
import PhotoCard from '@/components/PhotoCard'
import ProjectCard from '@/components/ProjectCard'
import TiltCard from '@/components/TiltCard'
import ProgressBar from '@/components/ProgressBar'
import { projects } from '@/lib/projects'

const SERVICES = ['Web Design', 'UI/UX Design', 'Landing Pages', 'E-commerce', 'Responsive Layouts', 'Figma', 'HTML · CSS · JS', 'Tailwind CSS', 'React / Next.js', 'Motion & 3D']

const STEPS = [
  { n: '01', t: 'Discover', d: 'We talk about your goals, audience and brand to define what the site must achieve.' },
  { n: '02', t: 'Design', d: 'Wireframes and a polished visual design in Figma, refined with your feedback.' },
  { n: '03', t: 'Build', d: 'Clean, responsive, fast code that looks right on every screen.' },
  { n: '04', t: 'Launch', d: 'Testing, launch and support, so your site keeps performing after day one.' },
]

export default function Home() {
  return (
    <>
      <ProgressBar />
      <nav>
        <a className="logo" href="#top">ERIC</a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <Section id="top" className="hero">
          <div className="hero-text">
            <Split className="tag" text="Web Designer " />
            <Split as="h1" mode="c" text="ERIC" />
            <Split as="p" className="sub" text="I design and build modern, fast and beautiful websites that turn visitors into customers." />
            <a className="btn rv" href="#work">View my work</a>
          </div>
          <PhotoCard />
        </Section>

        <Section id="about" className="center">
          <Split className="tag" text="About" />
          <Split as="h2" mode="c" text="Websites that look great and work harder." />
          <Split as="p" text="I’m a web designer who turns ideas into clean, responsive and memorable websites. Every project starts with understanding your goals and ends with a site that is fast, easy to use and built to grow your business." />
          <Split as="p" text="From landing pages and online stores to full brand websites, I care about typography, spacing and the small details that make a design feel premium." />
        </Section>

        <Section id="work">
          <Split className="tag" text="Selected Work" />
          <Split as="h2" mode="c" text="My latest websites" />
          <div className="cards">
            {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </Section>

        <Section id="skills" className="left">
          <Split className="tag" text="Services" />
          <Split as="h2" mode="c" text="What I do" />
          <div className="chips">{SERVICES.map((s) => <span key={s} className="rv">{s}</span>)}</div>
        </Section>

        <Section id="process">
          <Split className="tag" text="Process" />
          <Split as="h2" mode="c" text="How I work" />
          <div className="cards">
            {STEPS.map((s) => (
              <TiltCard key={s.n} className="card step rv">
                <small>{s.n}</small><h3>{s.t}</h3><p>{s.d}</p>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section id="contact" className="center">
          <Split className="tag" text="Contact" />
          <Split as="h2" mode="c" text="Have a project in mind?" />
          <a className="mail rv" href="mailto:hello@example.com">hello@example.com</a>
          <div className="social rv"><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Twitter</a></div>
        </Section>
      </main>

      <footer>© 2026 Eric. All rights reserved.</footer>
    </>
  )
}
