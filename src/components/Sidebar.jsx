import "./Sidebar.css";

const NAV_ICONS = {
  "Overview": "⊞",
  "About": "👤",
  "Skills": "⚙",
  "Experience": "💼",
  "Projects": "🗂",
  "Certifications": "🏆",
  "Tools & Dashboard": "📊",
  "Education": "🎓",
  "Contact": "✉",
};

export default function Sidebar({ activePage, setActivePage, pages, isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-brand">
  <div className="brand-logo" onClick={() => setActivePage("Overview")} style={{cursor:"pointer"}}>M</div>
  <div onClick={() => setActivePage("Overview")} style={{cursor:"pointer"}}>
    <div className="brand-name">MANAV</div>
    <div className="brand-name accent">NOC Engineer</div>
  </div>
        <button className="sidebar-close" onClick={onClose} aria-label="close sidebar">✕</button>
      </div>

      <nav className="sidebar-nav">
        {pages.map(page => (
          <button
            key={page}
            className={`nav-item ${activePage === page ? "active" : ""}`}
            onClick={() => setActivePage(page)}
          >
            <span className="nav-icon">{NAV_ICONS[page]}</span>
            <span>{page}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
       <a href="/Manav_NOC_Engineer_Resume.pdf" download="Manav_Kashyap_Resume.pdf" ><button className="sidebar-resume-btn">⬇ Download Resume</button></a>
        <div className="sidebar-socials">
          <a href="https://www.linkedin.com/in/manav24680" target="_blank" rel="noreferrer" style={{fontSize:"16px"}} className="social-link" title="LinkedIn">in</a>
          <a href="https://github.com/mkashyap24680" target="_blank" rel="noreferrer" style={{fontSize:"16px"}} className="social-link" title="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="mailto:kakash24680@gmail.com" className="social-link" title="Email">@</a>
        </div>
        <div className="sidebar-status">
          <span className="dot online pulse" /> System Status
          <div className="status-text">manav@copyright</div>
        </div>
      </div>
    </aside>
  );
}
