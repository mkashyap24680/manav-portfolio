import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ParticleBackground from "./components/ParticleBackground";
import Overview from "./pages/Overview";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import ToolsDashboard from "./pages/ToolsDashboard";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import "./App.css";

const PAGES = [
  "Overview","About","Skills","Experience","Projects",
  "Certifications","Tools & Dashboard","Education","Contact"
];

export default function App() {
  const [activePage, setActivePage] = useState("Overview");
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handlePageChange = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const renderPage = () => {
    switch (activePage) {
     case "Overview": return <Overview setActivePage={setActivePage} />;
      case "About":             return <About />;
      case "Skills":            return <Skills />;
      case "Experience":        return <Experience />;
      case "Projects":          return <Projects />;
      case "Certifications":    return <Certifications />;
      case "Tools & Dashboard": return <ToolsDashboard />;
      case "Education":         return <Education />;
      case "Contact":           return <Contact />;
      default:                  return <Overview />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Particles — poori site ke peeche */}
      <ParticleBackground />

      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="hamburger" onClick={() => setSidebarOpen(o => !o)} aria-label="menu">
            {sidebarOpen ? "✕" : "☰"}
          </button>
          <span className="topbar-status">
            <span className="dot green pulse" />
            <span className="status-text">Opportunities</span>
          </span>
        </div>
        <span className="topbar-terminal" style={{position:"absolute",left:"50%",transform:"translateX(-50%)"}}>manav@portfolio:~$<span className="cursor">|</span></span>
        <div className="topbar-right">
          <button className="theme-toggle" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")} aria-label="toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="layout">
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}
        <Sidebar
          activePage={activePage}
          setActivePage={handlePageChange}
          pages={PAGES}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
