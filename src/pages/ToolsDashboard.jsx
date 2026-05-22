import { useState, useEffect } from "react";
import "./Pages.css";
import "./ToolsDashboard.css";

const TOOLS = [
  { name: "AWS Console", icon: "☁", category: "Cloud", color: "#ff8c00" },
  { name: "Zabbix", icon: "📊", category: "Monitoring", color: "#00d4ff" },
  { name: "Grafana", icon: "📈", category: "Visualization", color: "#ff6b35" },
  { name: "Jenkins", icon: "⚙", category: "CI/CD", color: "#d33833" },
  { name: "PuTTY / SSH", icon: "💻", category: "Remote Access", color: "#00ff88" },
  { name: "Wireshark", icon: "🌐", category: "Network Analysis", color: "#1ba0e2" },
  { name: "MySQL Workbench", icon: "🗄", category: "Database", color: "#f29111" },
  { name: "VS Code", icon: "📝", category: "IDE", color: "#0078d4" },
  { name: "Linux Terminal", icon: ">_", category: "Shell", color: "#00ff88" },
  { name: "Docker", icon: "🐳", category: "Containers", color: "#2496ed" },
];

function useLiveValue(base, range = 10, interval = 2500) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const iv = setInterval(() => {
      setVal(base + (Math.random() - 0.5) * range);
    }, interval);
    return () => clearInterval(iv);
  }, [base, range, interval]);
  return Math.max(0, val).toFixed(1);
}

export default function ToolsDashboard() {
  const cpu = useLiveValue(23, 14);
  const mem = useLiveValue(45, 10);
  const disk = useLiveValue(62, 4);
  const net = useLiveValue(1.2, 0.4);

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Tools & Dashboard</div>
        <div className="page-subtitle">Live infrastructure metrics and toolset overview</div>
      </div>

      {/* Live metrics */}
      <div className="grid-4" style={{marginBottom:4}}>
        {[
          { label:"CPU Usage", value:`${cpu}%`, color:"var(--cyan)", icon:"🖥" },
          { label:"Memory Usage", value:`${mem}%`, color:"var(--green)", icon:"💾" },
          { label:"Disk Usage", value:`${disk}%`, color:"var(--orange)", icon:"💽" },
          { label:"Network", value:`${net} Gbps`, color:"var(--purple)", icon:"🌐" },
        ].map(m => (
          <div key={m.label} className="card live-card">
            <div style={{fontSize:30,marginBottom:6}}>{m.icon}</div>
            <div style={{color:'var(--text2)',fontSize:11,marginBottom:4}}>{m.label}</div>
            <div style={{color:m.color,fontSize:26,fontWeight:700,fontFamily:'var(--font-mono)'}}>{m.value}</div>
            <div className="live-indicator"><span className="dot green pulse"/>LIVE</div>
          </div>
        ))}
      </div>

      {/* Tools grid */}
      <div className="card">
        <div className="section-title" style={{marginBottom:16}}>🔧 Daily Tools</div>
        <div className="tools-grid">
          {TOOLS.map(t => (
            <div key={t.name} className="tool-card" style={{"--tool-color": t.color}}>
              <div className="tool-icon">{t.icon}</div>
              <div className="tool-name">{t.name}</div>
              <div className="tool-cat">{t.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
