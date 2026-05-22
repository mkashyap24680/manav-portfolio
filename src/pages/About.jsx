import "./Pages.css";

export default function About() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">About Me</div>
        <div className="page-subtitle">Get to know the person behind the terminal</div>
      </div>

      <div className="grid-2" style={{gap:20}}>
        <div className="card">
          <div className="section-title" style={{marginBottom:14},{fontSize:"22px"}}>👤 Profile</div>
          <div className="about-avatar">
            <div className="avatar-placeholder">M</div>
            <div>
              <h2 style={{fontSize:20,fontWeight:700}}>Manav</h2>
              <p style={{color:'var(--cyan)',fontFamily:'var(--font-mono)',fontSize:12,marginTop:4}}>NOC Engineer</p>
              <p style={{color:'var(--text2)',fontSize:12,marginTop:4}}>📍 India</p>
            </div>
          </div>
          <p style={{color:'var(--text2)',fontSize:13,lineHeight:1.8,marginTop:16,fontFamily:'var(--font-mono)'}}>
            I'm a passionate NOC Engineer with hands-on experience in monitoring, troubleshooting,
            and optimizing IT infrastructure. My focus is on ensuring high availability and
            performance for production systems across cloud and on-premise environments.
          </p>
          <div className="about-tags" style={{marginTop:16}}>
            {["AWS","Linux","Zabbix","Jenkins","MySQL","Networking"].map(t=>(
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <div className="card">
            <div className="section-title" style={{marginBottom:14},{fontSize:"22px"}}>📊 Quick Stats</div>
            {[
              ["Experience","1+ Years in NOC"],
              ["Incidents Resolved","100+"],
              ["Systems Monitored","30+ Servers & Apps"],
              ["Uptime Maintained","99.9%"],
              ["Availability","24/7 On-Call"],
            ].map(([k,v])=>(
              <div key={k} className="stat-row">
                <span style={{color:'var(--text2)',fontSize:14}}>{k}</span>
                <span style={{color:'var(--cyan)',fontWeight:600,fontSize:12,fontFamily:'var(--font-mono)'}}>{v}</span>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="section-title" style={{marginBottom:14},{fontSize:"22px"}}>🎯 What I Do</div>
            {["Monitor and maintain critical infrastructure 24/7",
              "Respond to and resolve production incidents",
              "Manage AWS cloud resources and services",
              "Administer Linux servers and configurations",
              "Implement monitoring and alerting solutions"].map((item,i)=>(
              <div key={i} className="about-item">
                <span style={{color:'var(--cyan)'}}>▶</span>
                <span style={{fontSize:14,color:'var(--text2)'}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
