import "./Pages.css";

const PROJECTS = [
  {
    title: "Infrastructure Monitoring Dashboard",
    desc: "Built a centralized monitoring dashboard using Zabbix and Grafana to track server health, CPU/memory usage, and network metrics for 50+ servers with real-time alerting.",
    tags: ["Zabbix", "Grafana", "Linux", "Bash"],
    link: "#",
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
