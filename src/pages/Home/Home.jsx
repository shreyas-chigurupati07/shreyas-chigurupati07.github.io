import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const roles = [
  "Image Processing Engineer @ Microsoft",
  "Machine Learning Engineer",
  "Robotics Software Engineer",
  "Computer Vision Specialist",
  "Seeking Full-Time Opportunities 🚀",
];

const highlights = [
  { icon: "🎓", label: "MSc Robotics Engineering", sub: "Worcester Polytechnic Institute · GPA 3.9" },
  { icon: "💼", label: "Image Processing Engineer", sub: "Microsoft Surface · Redmond, WA" },
  { icon: "🤖", label: "Computer Vision · ML · Robotics", sub: "4+ years experience" },
  { icon: "📍", label: "Greater Seattle Area", sub: "Open to Relocation" },
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="home section">
      <div className="container">
        <div className="home__hero">
          <p className="home__greeting">Hi, I'm</p>
          <h1 className="home__name">Shreyas Chigurupati</h1>
          <div className="home__role-wrap">
            <span className="home__role">{displayed}</span>
            <span className="home__cursor">|</span>
          </div>
          <p className="home__bio">
            I build intelligent systems at the intersection of computer vision, deep learning,
            and robotics. Currently at <span className="home__highlight">Microsoft Surface</span>,
            automating camera image quality workflows — and always looking for the next hard problem to solve.
          </p>
          <div className="home__cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/experience" className="btn btn-outline">My Experience</Link>
            <a href="mailto:shreyas.chigurupati07@gmail.com" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="home__highlights">
          {highlights.map(({ icon, label, sub }) => (
            <div key={label} className="home__highlight-card card">
              <span className="home__highlight-icon">{icon}</span>
              <div>
                <p className="home__highlight-label">{label}</p>
                <p className="home__highlight-sub">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="home__stack">
          <p className="home__stack-label">Core Stack</p>
          <div className="home__tags">
            {["Python", "PyTorch", "OpenCV", "ROS2", "React", "C++", "Docker", "AWS"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
