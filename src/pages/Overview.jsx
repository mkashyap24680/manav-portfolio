import { useState, useEffect, useRef } from "react";
import "./Overview.css";
import "./Education"

const STATS = [
  { icon: "📅", label: "Experience", value: "1+", desc: "Years in NOC & Infrastructure Support", color: "cyan" },
  { icon: "⚡", label: "Incidents Resolved", value: "100+", desc: "Successfully resolved production incidents", color: "green" },
  { icon: "🖥", label: "Systems Monitored", value: "30+", desc: "Servers & applications monitored 24/7", color: "purple" },
  { icon: "🛡", label: "Uptime Maintained", value: "99.9%", desc: "High availability ensured", color: "orange" },
];

const CORE_FOCUS = [
  "Infrastructure Monitoring",
  "Incident Management",
  "AWS Cloud Operations",
  "Linux Administration",
  "Performance Optimization",
];

const SERVERS = [
  { name: "Web Server 01", ip: "127.0.0.1", status: "Online" },
  { name: "App Server 02", ip: "127.0.0.2", status: "Online" },
  { name: "DB Server 01",  ip: "127.0.0.3", status: "Online" },
  { name: "Backup Server", ip: "127.0.0.4", status: "Online" },
];

const ALERTS = [
  { type: "critical", msg: "High CPU Usage on Web Server 01", time: "2m ago" },
  { type: "warning",  msg: "Memory Usage Warning on App Server 02", time: "15m ago" },
  { type: "info",     msg: "SSL Certificate Expiring in 7 Days", time: "1h ago" },
  { type: "info",     msg: "Database Backup Completed", time: "3h ago" },
];

// Terminal lines with delays
const TERMINAL_SEQUENCE = [
  { type: "prompt", text: "manav@127.0.0.1:~$ ", delay: 500 },
  { type: "cmd",    text: "whoami", delay: 80, charByChar: true },
  { type: "output", text: "manav - NOC Engineer", delay: 400 },
  { type: "prompt", text: "manav@127.0.0.1:~$ ", delay: 600 },
  { type: "cmd",    text: "skills --all", delay: 80, charByChar: true },
  { type: "output", text: "AWS, Linux, Zabbix, Jenkins, Networking, Incident Management, MySQL, Monitoring", delay: 400 },
  { type: "prompt", text: "manav@127.0.0.1:~$ ", delay: 600 },
  { type: "cmd",    text: "uptime", delay: 80, charByChar: true },
  { type: "output", text: "up 365 days, 99.9% availability", delay: 400 },
  { type: "prompt", text: "manav@127.0.0.1:~$ ", delay: 600 },
];

function MiniChart({ color = "#00d4ff" }) {
  const pts = Array.from({ length: 20 }, (_, i) => ({
    x: i * 14,
    y: 20 + Math.sin(i * 0.8) * 10 + Math.random() * 6
  }));
  return (
    <svg width="140" height="40" style={{ display: "block" }}>
      <polyline points={pts.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function LiveMetric({ label, value, color, chartColor }) {
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent(v => Math.min(99, Math.max(1, Math.round(v + (Math.random()-0.5)*4))));
    }, 2000);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="live-metric">
      <span className="metric-label">{label}</span>
      <span className="metric-value" style={{color}}>{current}%</span>
      <MiniChart color={chartColor||color}/>
    </div>
  );
}

// ─── AUTO LOOPING TERMINAL ───
function AutoTerminal() {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const termRef = useRef(null);
  const seqIdx = useRef(0);
  const charIdx = useRef(0);
  const timeoutRef = useRef(null);

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setShowCursor(s => !s), 530);
    return () => clearInterval(iv);
  }, []);

  // Auto scroll
  useEffect(() => {
   if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [lines, currentText]);

  useEffect(() => {
    function runSequence() {
      const seq = TERMINAL_SEQUENCE;
      const item = seq[seqIdx.current];
      if (!item) {
        // Loop: clear and restart after pause
        timeoutRef.current = setTimeout(() => {
          setLines([]);
          setCurrentText("");
          seqIdx.current = 0;
          charIdx.current = 0;
          runSequence();
        }, 2000);
        return;
      }

      if (item.charByChar) {
        // Type character by character
        if (charIdx.current < item.text.length) {
          setCurrentText(prev => prev + item.text[charIdx.current]);
          charIdx.current++;
          timeoutRef.current = setTimeout(runSequence, item.delay);
        } else {
          // Done typing this cmd — move to next
          const typed = item.text;
          setCurrentText("");
          charIdx.current = 0;
          // Add the completed line
          const prevItem = seq[seqIdx.current - 1];
          setLines(prev => {
            const last = prev[prev.length - 1];
            if (last && last.type === "prompt") {
              return [...prev.slice(0,-1), { ...last, cmd: typed }];
            }
            return prev;
          });
          seqIdx.current++;
          timeoutRef.current = setTimeout(runSequence, seq[seqIdx.current]?.delay || 400);
        }
      } else if (item.type === "prompt") {
        setLines(prev => [...prev, { type: "prompt", text: item.text, cmd: "" }]);
        setCurrentText("");
        charIdx.current = 0;
        seqIdx.current++;
        // Next item is charByChar cmd — start typing
        timeoutRef.current = setTimeout(runSequence, 200);
      } else if (item.type === "output") {
        setLines(prev => [...prev, { type: "output", text: item.text }]);
        seqIdx.current++;
        timeoutRef.current = setTimeout(runSequence, item.delay);
      } else {
        seqIdx.current++;
        timeoutRef.current = setTimeout(runSequence, item.delay || 300);
      }
    }

    timeoutRef.current = setTimeout(runSequence, 800);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="terminal-block">
      <div className="terminal-titlebar">
        <span className="dot red"/> <span className="dot orange"/> <span className="dot green"/>
        <span className="terminal-title">Terminal</span>
      </div>
      <div className="terminal-body" ref={termRef}>
        {lines.map((line, i) => (
          <div key={i} className="term-line">
            {line.type === "prompt" && (
              <>
                <span className="term-prompt">{line.text}</span>
                <span className="term-cmd">{line.cmd}</span>
              </>
            )}
            {line.type === "output" && (
              <span className="term-output">{line.text}</span>
            )}
          </div>
        ))}
        {/* Current typing line */}
        <div className="term-line">
          <span className="term-prompt">
            {lines.length > 0 && lines[lines.length-1]?.type === "prompt" ? "" : "manav@portfolio:~$ "}
          </span>
          <span className="term-cmd">{currentText}</span>
          <span className="term-cursor" style={{opacity: showCursor ? 1 : 0}}>█</span>
        </div>
      </div>
    </div>
  );
}

export default function Overview({ setActivePage }) {

  return (
    <div className="overview">
      {/* Hero */}
      <div className="hero">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Manav</h1>
          <p className="hero-role">
            <span className="role-tag">NOC Engineer | AWS &amp; Linux Infrastructure Support</span>
          </p>
          <p className="hero-desc">
            I monitor, troubleshoot and optimize IT infrastructure to ensure high availability,
            performance and security. Experienced in AWS cloud services, Linux administration,
            monitoring tools and incident management.
          </p>
          <div className="hero-actions">
           <a href="/Manav_NOC_Engineer_Resume.pdf" download="Manav_Kashyap_Resume.pdf" className="btn-primary" style={{textDecoration:"none"}}> ⬇ Download Resume</a>
            <button className="btn-primary" onClick={() => setActivePage("Contact")} style={{ cursor: "pointer" }}>Contact Me ✈</button>
             <div onClick={() => setActivePage("Contact")} style={{cursor:"pointer"}}></div>
          </div>
        </div>

        {/* 3D Attractive Infra Diagram */}
        <div className="hero-visual">
          <div className="infra3d">
            {/* Floating badges */}
            <div className="badge3d aws3d">
              <div className="badge3d-icon">☁</div>
              <div className="badge3d-label">aws</div>
            </div>
            <div className="badge3d linux3d">
              <div className="badge3d-icon">🐧</div>
              <div className="badge3d-label">Linux</div>
            </div>
            <div className="badge3d nginx3d">
              <div className="badge3d-icon" style={{color:"var(--green)",fontWeight:800,fontSize:22}}>N</div>
              <div className="badge3d-label">Nginx</div>
            </div>
            <div className="badge3d fire3d">
              <div className="badge3d-icon">🔥</div>
              <div className="badge3d-label">Alert</div>
            </div>

            {/* Center Server Rack 3D */}
            <div className="server3d-wrap">
              <div className="server3d">
                <div className="server3d-top"/>
                <div className="server3d-front">
                  {[
                    {color:"var(--green)",label:"WEB-01"},
                    {color:"var(--green)",label:"APP-02"},
                    {color:"var(--orange)",label:"DB-01"},
                    {color:"var(--green)",label:"BAK-01"},
                  ].map((s,i)=>(
                    <div key={i} className="rack3d-unit">
                      <span className="rack3d-led" style={{background:s.color,boxShadow:`0 0 6px ${s.color}`}}/>
                      <span className="rack3d-name">{s.label}</span>
                      <div className="rack3d-bars">
                        <div className="rack3d-bar" style={{width:"60%"}}/>
                        <div className="rack3d-bar" style={{width:"40%"}}/>
                      </div>
                    </div>
                  ))}
                  <div className="terminal3d">
                    <span style={{color:"var(--green)"}}>$</span>
                    <span style={{color:"var(--cyan)"}}> ping 127.0.01</span>
                  </div>
                </div>
                <div className="server3d-side"/>
              </div>
            </div>

            {/* Connecting lines SVG */}
            <svg className="infra-lines3d" viewBox="0 0 320 240" fill="none">
              <line x1="70" y1="50" x2="155" y2="115" stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="5 3"/>
              <line x1="255" y1="50" x2="165" y2="115" stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="5 3"/>
              <line x1="60" y1="190" x2="155" y2="145" stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="5 3"/>
              <line x1="255" y1="190" x2="165" y2="145" stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="5 3"/>
              {/* Glow dots */}
              <circle cx="155" cy="115" r="3" fill="var(--cyan)" opacity="0.8"/>
              <circle cx="165" cy="145" r="3" fill="var(--cyan)" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {STATS.map(s => (
          <div key={s.label} className={`stat-card stat-${s.color}`}>
            <div className="stat-icon" style={{fontSize:"28px"}}>{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className={`stat-value ${s.color}`}>{s.value}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
        <div className="card core-focus">
          <div className="section-title" style={{marginBottom:10}}>
            <span style={{fontSize:"22px"}}>⊙ Core Focus</span>
          </div>
          {CORE_FOCUS.map(f => (
            <div key={f} className="focus-item">
              <span className="focus-dot"/>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom panels */}
      <div className="bottom-panels">
        <div className="card panel">
          <div className="section-header">
            <span className="section-title"style={{fontSize:"20px"}}>≋ Live System Overview</span>
          </div>
          <div className="metrics-list">
            <LiveMetric label="CPU Usage"    value={23} color="var(--cyan)"   chartColor="#00d4ff"/>
            <LiveMetric label="Memory Usage" value={45} color="var(--green)"  chartColor="#00ff88"/>
            <LiveMetric label="Disk Usage"   value={62} color="var(--orange)" chartColor="#ff8c00"/>
          </div>
          <div className="net-row">
            <span className="metric-label">Network In/Out</span>
            <span style={{color:"var(--purple)",fontWeight:600}}>1.2 Gbps</span>
            <MiniChart color="var(--purple)"/>
          </div>
        </div>

        <div className="card panel">
          <div className="section-header">
            <span className="section-title"style={{fontSize:"20px"}}>≡ Server Status</span>
          </div>
          <div className="server-list">
            {SERVERS.map(s => (
              <div key={s.name} className="server-row">
                <span className="server-name"style={{fontSize:"14px"}}>{s.name}</span>
                <span className="server-ip">{s.ip}</span>
                <span className="badge success">● {s.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="section-header">
            <span className="section-title"style={{fontSize:"20px"}}>🔔 Recent Alerts</span>
          </div>
          <div className="alert-list">
            {ALERTS.map((a,i) => (
              <div key={i} className="alert-row">
                <span className={`badge ${a.type}`}>{a.type}</span>
                <span className="alert-msg"style={{fontSize:"14px"}}>{a.msg}</span>
                <span className="alert-time">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto Terminal */}
      <AutoTerminal/>
    </div>
  );
}
