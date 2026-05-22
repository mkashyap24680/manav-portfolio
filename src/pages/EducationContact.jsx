import "./Pages.css";

export function Education() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Education</div>
        <div className="page-subtitle">Academic background and learning journey</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        {[
          {
            degree: "Bachelor of Technology – Computer Science",
            school: "Uttarakhand Technical University / DIET",
            year: "2020 – 2024",
            desc: "Focused on networking, operating systems, and cloud computing. Completed projects on web application.",
          },
          {
            degree: "Higher Secondary (12th Grade)",
            school: "GURUKUL INTER SCIENCE COLLEGE",
            year: "2018 – 2020",
            desc: "Science stream with Maths.",
          },
          {
            degree: "Matriculation (10th Grade)",
            school: "Hari Om Saraswati Inter College",
            year: "2017 – 2018",
            desc: ".",
          },
        ].map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-year">📅 {e.year}</div>
            <div className="edu-desc">{e.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title" style={{fontSize:20}}>Contact</div>
        <div className="page-subtitle" style={{fontSize:15}}>Let's connect and work together</div>
      </div>
      <div style={{display:"flex", justifyContent:"center", gap:20}}>
        <div className="card" style={{width:"500px"}}>
          <div className="section-title" style={{marginBottom:14},{fontSize:"20px"}}>📬 Get In Touch</div>
          <div className="contact-info"style={{fontSize:15}}>
            {[
              { icon:"✉",  label:"Email",    value:"kakash24680@gmail.com",   href:"mailto:kakash24680@gmmail.com"},
              { icon:"💼", label:"LinkedIn", value:"linkedin.com/in/manav24680",   href:"https://www.linkedin.com/in/manav24680/" },
              { icon:"🐙", label:"GitHub",   value:"github.com/mkashyap24680",  href:"https://github.com/mkashyap24680" },,
              { icon:"📍", label:"Location", value:"India" },
              { icon:"⏰", label:"Availability", value:"Opportunities" },
            ].map(c => (
                c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-row" style={{textDecoration:"none"}}>
                    <span className="contact-icon">{c.icon}</span>
                    <div>
                      <div className="contact-label"style={{fontSize:15}}>{c.label}</div>
                      <div className="contact-value"style={{fontSize:12}}>{c.value}</div>
                    </div>
                  </a>
                  ) : (
                  <div key={c.label} className="contact-row">
                    <span className="contact-icon">{c.icon}</span>
                    <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.value}</div>
              </div>
                </div>
              )
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
