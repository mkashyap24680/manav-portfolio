import "./Pages.css";

const SKILL_GROUPS = [
  {
    title: "☁ Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, S3, VPC)", pct: 80 },
      { name: "Linux Administration", pct: 85 },
      { name: "Networking", pct: 75 },
      
    ]
  },
  {
    title: "📊 Monitoring & Tools",
    skills: [
      { name: "Zabbix", pct: 90 },
      { name: "Grafana", pct: 72 },
      { name: "Jenkins", pct: 70 },
      { name: "Prometheus", pct: 50 },
    ]
  },
  {
    title: "🗄 Databases & Scripting",
    skills: [
      { name: "MySQL", pct: 75 },
      { name: "Bash Scripting", pct: 80 },
      { name: "Python (basic)", pct: 60 },
      
    ]
  },
  {
    title: "⚡ Incident & Ops",
    skills: [
      { name: "Incident Management", pct: 90 },
      { name: "Logs Analysis", pct: 82 },
      { name: "PCI DSS", pct: 90 },
      { name: "On-Call Support", pct: 95 },
    ]
  },
];

const COLORS = ["var(--cyan)","var(--green)","var(--purple)","var(--orange)"];

export default function Skills() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Skills & Technologies</div>
        <div className="page-subtitle">Tools and technologies I work with daily</div>
      </div>
      <div className="card" style={{padding:24}}>
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.title} className="skill-group">
            <div className="skill-group-title">{group.title}</div>
            <div className="skills-grid">
              {group.skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width:`${skill.pct}%`, background: COLORS[gi] }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
