import "./Pages.css";

const CERTS = [
 //{ icon: "☁", name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", status: "Active" },
//{ icon: "🐧", name: "Linux Professional Institute (LPIC-1)", issuer: "Linux Professional Institute", date: "2023", status: "Active" },
//{ icon: "🌐", name: "Cisco CCNA (pursuing)", issuer: "Cisco", date: "2024", status: "In Progress" },
//{ icon: "🛡", name: "CompTIA Security+", issuer: "CompTIA", date: "2024", status: "Planned" },
  //{ icon: "📊", name: "Zabbix Certified User", issuer: "Zabbix", date: "2023", status: "Active" },
];

export default function Certifications() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Certifications</div>
        <div className="page-subtitle">Industry credentials and ongoing learning</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {CERTS.map((c, i) => (
          <div key={i} className="cert-card">
            <div className="cert-icon">{c.icon}</div>
            <div style={{flex:1}}>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-date">📅 {c.date}</div>
            </div>
            <span className={`badge ${c.status === 'Active' ? 'success' : c.status === 'In Progress' ? 'warning' : 'info'}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
