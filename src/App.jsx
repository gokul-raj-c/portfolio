import React from "react";
import "./App.css";
import { useState } from "react";

// --- TECH STACK ---
const TECH_CATEGORIES = {
  "Frontend": [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  ],

  "Backend": [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
  ],

  "AI / Machine Learning": [
    { name: "Machine Learning", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "Deep Learning", icon: <SiPytorch />, color: "#EE4C2C" },
    { name: "YOLO", icon: <SiOpencv />, color: "#5C3EE8" },
    { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
  ],

  "Database": [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  ],

  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
    
  ]
};

const PROJECTS = [
  { 
      id: 1,
      title: "Repair Vision", 
      desc: "Car Damage Detection",
      longDesc: "A deep learning based car damage detection system that analyzes vehicle images, detects damaged parts using YOLO, and classifies damage type and severity through an interactive web interface.",
      stack: ["Python", "Flask", "Deep Learning", "YOLO", "OpenCV", "CNN", "HTML", "CSS", "JavaScript"],
      color: "#1d4ed8",
      github: "https://github.com/"
  },
  { 
      id: 2,
      title: "Authentify", 
      desc: "Deep Fake Image Detection",
      longDesc: "Authentify is an AI-powered deep fake image detection system that analyzes images using deep learning techniques to identify manipulated or synthetic content.",
      stack: ["Python","Flask","Deep Learning","CNN", "OpenCV", "HTML", "CSS", "JavaScript"],
      color: "#047857",
      github: "https://github.com/"
  },
  { 
      id: 3,
      title: "Career Vista", 
      desc: "AI Career Guidance Platform",
      longDesc: "AI-powered platform that analyzes skills and suggests career paths with learning roadmap.",
      stack: ["Python", "Flask", "Machine Learning", "CNN", "OpenCV", "HTML", "CSS", "JavaScript"],
      color: "#6d28d9",
      github: "https://github.com/"
  },
  { 
      id: 4,
      title: "Garage4", 
      desc: "Car Rental Web App",
      longDesc: "Car rental system with booking, authentication and admin dashboard.",
      stack: ["PHP","MySQL","JavaScript","HTML","CSS"],
      color: "#c2410c",
      github: "https://github.com/"
  },
  { 
      id: 5,
      title: "Grab-It",
      desc: "E-commerce Web App",
      longDesc: "Full stack ecommerce system with cart, order and admin panel.",
      stack: ["React","Node.js","Express","MongoDB"],
      color: "#991b1b",
      github: "https://github.com/"
  },
  { 
      id: 6, 
      title: "Quizzo",
      desc: "Quiz Web Application",
      longDesc: "Interactive quiz app with timer, score tracking and admin panel.",
      stack: ["Java","MongoDB"],
      color: "#7c3aed",
      github: "https://github.com/"
  }
];

import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaLinux, FaLinkedin, FaInstagram, FaFacebook
} from "react-icons/fa";

import {
  SiJavascript, SiHtml5, SiCss3, SiExpress,
  SiFlask, SiPhp, SiTensorflow,
  SiPytorch, SiOpencv, SiMongodb, SiMysql
} from "react-icons/si";


// --- IMAGE IMPORTS (Placeholders) ---
import python1 from './assets/certificate/Python1.png';
import python2 from './assets/certificate/Python2.png';
import mern from './assets/certificate/mern.png';
import iot from './assets/certificate/iot.png';


// --- DATA: CERTIFICATES ---
const CERTIFICATES = [
  { 
    title: "Python For Data Science and Machine Learning Part 1", 
    issuer: "LinkedIn Learning", 
    date: "2025", 
    image: python1 
  },
  { 
    title: "Python For Data Science and Machine Learning Part 2", 
    issuer: "LinkedIn Learning", 
    date: "2025", 
    image: python2 
  },
  { 
    title: "Introduction to Internet Of Things - IIT Kharagpur", 
    issuer: "NPTEL", 
    date: "2025",
    image: iot 
  },
  { 
    title: "End To End Project Life Cycle Using MERN Stack", 
    issuer: "Zero Pixels", 
    date: "2024",
    image: mern 
  }
];


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="main">

      {/* ===== HEADER ===== */}
      <nav className="navbar">

        <div className="logo">
          <h3>GOKUL RAJ C</h3>
        </div>

        <ul className="nav-links">
          <li>INDEX</li>
          <li>ABOUT</li>
          <li>STACK</li>
          <li>PROJECTS</li>
          <li>CERTIFICATES</li>
          <li>HISTORY</li>
        </ul>

        <div className="status">
          <span className="dot"></span>
          AVAILABLE
        </div>

      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">

        <div className="tag">HELLO WORLD, I'M</div>

        <h1>GOKUL RAJ C</h1>
        <h2>MCA STUDENT & SOFTWARE DEVELOPER</h2>

        <p>
          I build scalable web and AI-powered applications from <b>Kerala, India.</b>
          <br />
          Specialized in <b>Java, Python, Machine Learning, and Full Stack Development.</b>
        </p>

        <div className="buttons">
          <button className="btn-primary">View Work →</button>
          <button className="btn-outline">Contact</button>
        </div>

        {/* SOCIAL ICONS */}
  <div className="socials">
    <a href="https://github.com/YOURUSERNAME" target="_blank">
      <FaGithub />
    </a>

    <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank">
      <FaLinkedin />
    </a>

    <a href="https://instagram.com/YOURUSERNAME" target="_blank">
      <FaInstagram />
    </a>

    <a href="https://facebook.com/YOURUSERNAME" target="_blank">
      <FaFacebook />
    </a>
  </div>

      </section>

      {/* ===== ABOUT SECTION ===== */}
{/* ===== ABOUT SECTION ===== */}
<section className="about">

  <div className="about-left">
    <h2>About & Services</h2>

    <p>
      I am currently pursuing my Master of Computer Applications (MCA) at 
      Muthoot Institute of Technology and Science, after completing my BCA. 
      I am passionate about software development, machine learning, and building 
      real-world applications that solve meaningful problems.
      <br /><br />
      I have developed multiple projects in AI, full stack web development, and 
      Java-based applications. I enjoy learning new technologies and continuously 
      improving my problem-solving and development skills.
    </p>

    <div className="about-info">
      <span>📍 Kerala, India</span>
      <span>💼 Open to Job Opportunities</span>
    </div>

    {/* NEW PROFILE DETAILS */}
    <div className="about-details">
      <div><strong>Email:</strong> gokulraj63@email.com</div>
      <div><strong>Phone:</strong> +91 90613 93951</div>
      <div><strong>Age:</strong> 22</div>
      <div><strong>DOB:</strong> 11 April 2003</div>
    </div>
  </div>

  <div className="about-right">

    <div className="profile-tag">[ PROFILE ]</div>

    <p className="service-title">SERVICES I OFFER</p>

    <div className="service-card">
      <div className="icon blue">💻</div>
      <div>
        <h4>Full Stack Web Development</h4>
        <span>MERN Stack, React.js, Node.js, PHP, MySQL</span>
      </div>
    </div>

    <div className="service-card">
      <div className="icon green">📱</div>
      <div>
        <h4>Machine Learning & AI</h4>
        <span>Python, Deep Learning, Computer Vision, Data Analysis</span>
      </div>
    </div>

    <div className="service-card">
      <div className="icon purple">🎥</div>
      <div>
        <h4>Software Development</h4>
        <span>Java, C++, Problem Solving, OOP, Database Systems</span>
      </div>
    </div>

  </div>

</section>

{/* ===== TECH STACK SECTION ===== */}
<section className="tech-section">

  <div className="tech-header">
    <h2>Technical Specification</h2>
    <span>[ MODULES ]</span>
  </div>

  <div className="tech-grid">

    {Object.values(TECH_CATEGORIES).flat().map((tech, index) => (
      <div className="tech-card" key={index}>
        <div
          className="tech-icon"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </div>
        <p>{tech.name}</p>
      </div>
    ))}

  </div>

</section>

<section className="projects">
  <h2 className="section-title">Featured Deployments</h2>

  <div className="project-grid">
    {PROJECTS.map((project)=>(
      <div 
        key={project.id} 
        className="project-card"
        onClick={()=>setSelectedProject(project)}
      >
        <div 
          className="project-top"
          style={{background: project.color}}
        >
          <div className="preview-box"></div>
        </div>

        <div className="project-bottom">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>

          <div className="tags">
            {project.stack.slice(0,4).map((tech,i)=>(
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{selectedProject && (
  <div className="modal-overlay" onClick={()=>setSelectedProject(null)}>
    
    <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
      
      <div className="modal-header">
        <h2>{selectedProject.title}</h2>
        <span onClick={()=>setSelectedProject(null)}>✕</span>
      </div>

      <div className="modal-body">

        <p className="long-desc">{selectedProject.longDesc}</p>

        <h4>Tech Stack</h4>
        <div className="stack-tags">
          {selectedProject.stack.map((tech,i)=>(
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={selectedProject.github} target="_blank">
            <button className="github-btn">View Code</button>
          </a>
        </div>

      </div>
    </div>
  </div>
)}

<section className="cert-section">

  <div className="cert-header">
    <h2>Certifications</h2>
    <span>[ CREDENTIALS ]</span>
  </div>

  <div className="cert-grid">
    {CERTIFICATES.map((cert, index) => (
      <div className="cert-card" key={index}>

        <div className="cert-img">
          <img src={cert.image} alt={cert.title}/>
        </div>

        <div className="cert-info">
          <h3>{cert.title}</h3>

          <div className="cert-meta">
            <span>{cert.issuer}</span>
            <span>{cert.date}</span>
          </div>
        </div>

      </div>
    ))}
  </div>

</section>

<section className="education-section">

  <div className="education-header">
    <h2>Education</h2>
    <span>[ ACADEMICS ]</span>
  </div>

  <div className="education-grid">

    <div className="edu-card">
      <h3>10th</h3>
      <h4>Fatima Central School, Piravom</h4>
      <p>2018 - 2019</p>
      <span>86%</span>
    </div>

    <div className="edu-card">
      <h3>12th - Computer Science</h3>
      <h4>MKM HSS, Piravom</h4>
      <p>2019 - 2021</p>
      <span>94%</span>
    </div>

    <div className="edu-card">
      <h3>Bachelor of Computer Application</h3>
      <h4>BPC College, Piravom</h4>
      <p>2021 - 2024</p>
      <span>79%</span>
    </div>

    <div className="edu-card active">
      <h3>Master of Computer<br></br> Application</h3>
      <h4>Muthoot Institute Of Technology And Science</h4>
      <p>2024 - 2026</p>
      <span>Pursuing</span>
    </div>

  </div>

</section>

{/* ===== CONTACT SECTION ===== */}
<section className="contact-section">

  <div className="contact-left">
    <h2>Initialize <br /> Collaboration.</h2>

    <p>Available for freelance projects and full-time roles.</p>

    <div className="contact-info">
      <div>📍 Muvattupuzha, Kerala</div>
      <div>💼 Open for Work</div>
      <div>✉ gokulraj@email.com</div>
      <div>📞 +91 98765 43210</div>
    </div>

    <div className="contact-socials">
      <a href="https://github.com/YOURUSERNAME" target="_blank"><FaGithub /></a>
      <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank"><FaLinkedin /></a>
      <a href="https://instagram.com/YOURUSERNAME" target="_blank"><FaInstagram /></a>
    </div>
  </div>

  <div className="contact-right">
    <form className="contact-form">
      <label>IDENTITY</label>
      <input type="text" placeholder="Name / Company" />

      <label>TRANSMISSION</label>
      <textarea placeholder="Project details..." rows="5"></textarea>

      <button type="submit" className="contact-btn">
        SEND MESSAGE →
      </button>
    </form>
  </div>

</section>

{/* ===== FOOTER ===== */}
<footer className="footer">

  <div className="footer-line"></div>

  <div className="footer-content">
    <div className="footer-left">
      © 2026 DEV.IO [ SYSTEM ACTIVE ]
    </div>

    <div className="footer-right">
      DESIGNED IN KERALA, INDIA
    </div>
  </div>

</footer>



    </div>
  );
}

export default App;