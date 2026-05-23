import "./Pages.css";

const PROJECTS = [
  {
    title: "College Management Portal",
    desc: "Designed and developed a full-stack web-based college management system. Integrated frontend and backend using PHP and MySQL for seamless data handling. Implemented secure login, student records management, and data reporting features.",
    tags: ["HTML", "CSSa", "JavaScript", "MySQL"],
    link: "https://github.com/mkashyap24680/my-diet-web.git",
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Projects</div>
        <div className="page-subtitle">Things I've built and automated</div>
      </div>
      <div className="grid-2" style={{gap:14}}>
        {PROJECTS.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-footer">
              <div className="about-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.link} className="project-link">→ GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
