import "./Pages.css";

const EXPERIENCES = [
  {
    title: "NOC Engineer +1",
    company: "Tech Company Pvt. Ltd.",
    period: "Jan 2024 – Present",
    desc: "Monitor and maintain critical IT infrastructure 24/7. Respond to alerts, troubleshoot production issues, manage AWS resources, and ensure system uptime of 99.9%. Handle incident escalation and root cause analysis.",
    tags: ["AWS", "Linux", "Zabbix", "Incident Management", "Networking"],
  },
 
];

export default function Experience() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Experience</div>
        <div className="page-subtitle">Professional journey and work history</div>
      </div>
      <div className="timeline" style={{paddingLeft:28}}>
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-period">📅 {exp.period}</div>
              <div className="exp-desc">{exp.desc}</div>
              <div className="exp-tags">
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
