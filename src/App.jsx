import { useState } from "react";

const skills = [
  { name: "React & Redux", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "HTML & CSS", group: "Frontend" },
  { name: "Material UI & Bootstrap", group: "UI" },
  { name: "SASS, LESS & jQuery", group: "Frontend" },
  { name: "AngularJS", group: "Frontend" },
  { name: "Node.js & SQL Server", group: "Backend" },
  { name: "Git, Bitbucket & VS Code", group: "Tools" },
  { name: "AI-assisted development & MCP", group: "Tools" },
];

const projects = [
  {
    number: "01",
    client: "CENCORA",
    title: "Frontend product development",
    description:
      "Developing and enhancing responsive React features from business requirements and user stories, with a focus on reusable components, testing, and production support.",
    technologies: "React · Redux · JavaScript · HTML · CSS",
  },
  {
    number: "02",
    client: "MBRDI",
    title: "Frontend team leadership",
    description:
      "Led frontend delivery for a project module, coordinated directly with onsite teams, and shaped a maintainable component structure.",
    technologies: "React · Material UI · JavaScript · SASS",
  },
  {
    number: "03",
    client: "SOUTHERN CALIFORNIA EDISON",
    title: "Application upgrades & enhancements",
    description:
      "Built frontend enhancements in an Agile team, led offshore delivery for a module, and contributed to testing and defect resolution.",
    technologies: "React · Redux · Node.js · Bootstrap · SASS",
  },
  {
    number: "04",
    client: "ARIZONA PUBLIC SERVICE",
    title: "Primary customization team",
    description:
      "Delivered application upgrades and enhancements while leading module work across offshore and onsite teams.",
    technologies: "React · Redux · Node.js · jQuery · Bootstrap · LESS",
  },
  {
    number: "05",
    client: "ANZ",
    title: "Banking application enhancements",
    description:
      "Developed enhancements with an offshore team, led a team of four, and supported testing, validation, and bug fixing.",
    technologies: "AngularJS · jQuery · JavaScript · Bootstrap · SQL Server",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          GN<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#writing" onClick={closeMenu}>Writing</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              FRONTEND DEVELOPER · REACT & JAVASCRIPT
            </div>
            <h1>
              I build digital
              <br />
              things with <span>purpose.</span>
            </h1>
            <p className="hero-summary">
              I&apos;m Nagaraju, a frontend developer with 9+ years of
              experience building responsive web applications and leading
              teams from requirements through delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Get in touch <ArrowIcon />
              </a>
              <a className="text-link" href="#about">
                About my experience <span>↓</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>9+ YEARS EXPERIENCE</span>
              <span className="meta-divider" />
              <span>FRONTEND DEVELOPMENT</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration of a creative workspace">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-window">
              <div className="window-top">
                <span />
                <span />
                <span />
                <i>studio_notes.jsx</i>
              </div>
              <div className="code-lines" aria-hidden="true">
                <span className="code-line short"><b>01</b><i>const</i> idea = <em>&quot;make it useful&quot;</em>;</span>
                <span className="code-line"><b>02</b><i>function</i> <strong>build</strong>(problem) {"{"}</span>
                <span className="code-line indent"><b>03</b><i>return</i> <em>something thoughtful</em>;</span>
                <span className="code-line"><b>04</b>{"}"}</span>
                <span className="code-line blank"><b>05</b></span>
                <span className="code-line"><b>06</b>build(idea);<span className="cursor" /></span>
              </div>
            </div>
            <div className="art-sticker">
              <span>DESIGN</span>
              <span className="sticker-star">✳</span>
              <span>DEVELOP</span>
              <span>REPEAT</span>
            </div>
            <div className="art-caption">A little curiosity goes a long way.</div>
          </div>

          <a className="scroll-note" href="#about" aria-label="Scroll to about section">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro section-shell" id="about">
          <div className="section-kicker"><span>01</span> A LITTLE INTRO</div>
          <div className="intro-content">
            <h2>
              Frontend development, from <span>idea to delivery.</span>
            </h2>
            <div className="intro-copy">
              <p>
                I&apos;m Gajarla Nagaraju, a frontend developer with more than
                nine years of experience across the software development
                lifecycle. I work primarily with React and JavaScript, building
                responsive web applications from requirements and user stories.
              </p>
              <p>
                I&apos;ve worked at IBM and Infosys, collaborating with product,
                QA, and onsite teams in Agile environments. I enjoy solving UI
                problems, reviewing and debugging code, and helping teams ship
                maintainable features. I earned a B.Tech in Electronics in 2014.
              </p>
              <div className="experience-list">
                <div><strong>Frontend Developer</strong><span>IBM · Apr 2022 – Present</span></div>
                <div><strong>Senior Systems Engineer</strong><span>Infosys · Jan 2017 – Mar 2022</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell skills-inner">
            <div className="section-kicker"><span>02</span> WHAT I WORK WITH</div>
            <div className="skills-heading">
              <h2>Frontend tools for<br />building <span>real things.</span></h2>
              <p>
                From React and Redux to AngularJS, responsive UI, and AI-assisted
                development — grounded in the needs of each project.
              </p>
            </div>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-index">0{index + 1}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-group">{skill.group}</span>
                  <span className="skill-mark">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-shell" id="projects">
          <div className="section-kicker"><span>03</span> SELECTED PROJECT EXPERIENCE</div>
          <div className="writing-heading">
            <h2>Building for <span>real-world needs.</span></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="article-number">{project.number}</span>
                <div className="article-main">
                  <div className="article-meta"><span>{project.client}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">{project.technologies}</div>
                </div>
                <span className="article-arrow"><ArrowIcon diagonal /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="writing-section section-shell" id="writing">
          <div className="section-kicker"><span>04</span> NOTES FROM THE PROCESS</div>
          <div className="writing-heading">
            <h2>Writing is <span>coming soon.</span></h2>
          </div>
          <p className="writing-empty">
            Blog posts aren&apos;t included in my resume yet. I&apos;ll share
            frontend development notes here as they&apos;re ready.
          </p>
          <a className="underlined-link" href="#contact">
            Get in touch <ArrowIcon diagonal />
          </a>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div className="section-kicker"><span>05</span> CONTACT</div>
            <div className="contact-content">
              <div>
                <p className="contact-eyebrow">GOT A PROJECT OR OPPORTUNITY?</p>
                <h2>Let&apos;s work<br /><span>together.</span></h2>
              </div>
              <div className="contact-details">
                <p>
                  Have a project, a question, or just want to say hello? My
                  inbox is always open.
                </p>
                <a className="contact-email" href="mailto:gajarlanagaraju@outlook.com">
                  gajarlanagaraju@outlook.com <ArrowIcon diagonal />
                </a>
                <a className="contact-phone" href="tel:+919704133928">
                  +91 97041 33928
                </a>
                <div className="social-links">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
                </div>
              </div>
            </div>
            <footer className="site-footer">
              <a className="wordmark footer-mark" href="#home">GN<span>.</span></a>
              <span>DESIGNED & BUILT WITH CARE</span>
              <span>© {new Date().getFullYear()} GAJARLA NAGARAJU</span>
              <a href="#home" className="back-top">BACK TO TOP ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
