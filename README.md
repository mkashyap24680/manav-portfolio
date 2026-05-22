# Manav Kashyap — NOC Engineer Portfolio

A dark-themed, terminal-style developer portfolio built with **React + Vite**.

## ✨ Features

- **9 fully navigable pages**: Overview, About, Skills, Experience, Projects, Certifications, Tools & Dashboard, Education, Contact
- **Live metrics dashboard** with animated CPU, Memory, Disk, and Network values
- **Terminal animation** on the Overview page with typewriter effect
- **Dark / Light theme toggle**
- **Server status monitor** with real-time-style alerts
- **Infrastructure diagram** hero visual
- Fully responsive sidebar navigation
- Production-ready with Vite build system

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/manav-portfolio.git
cd manav-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Opens at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## 📁 Project Structure

```
manav-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Sidebar.jsx
    │   └── Sidebar.css
    └── pages/
        ├── Overview.jsx / Overview.css
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        ├── ToolsDashboard.jsx / ToolsDashboard.css
        ├── Education.jsx
        ├── Contact.jsx
        ├── EducationContact.jsx
        └── Pages.css
```

## 🛠 Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **CSS Variables** — Theming system (dark/light)
- **JetBrains Mono + Space Grotesk** — Typography
- **Pure CSS animations** — No animation library needed

## 📝 Customization

Edit these files to personalize the portfolio:

| File | What to update |
|------|---------------|
| `src/pages/Overview.jsx` | Stats, alerts, server list |
| `src/pages/About.jsx` | Bio, social links |
| `src/pages/Skills.jsx` | Skill names and percentages |
| `src/pages/Experience.jsx` | Work history |
| `src/pages/Projects.jsx` | Projects and GitHub links |
| `src/pages/Certifications.jsx` | Certifications |
| `src/pages/Education.jsx` | Academic background |
| `src/pages/Contact.jsx` | Contact details |
| `src/components/Sidebar.jsx` | Social links (LinkedIn, GitHub, Email) |

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
# Also add: "homepage": "https://YOUR_USERNAME.github.io/manav-portfolio"

npm run deploy
```

## 📄 License

MIT — free to use and modify.
