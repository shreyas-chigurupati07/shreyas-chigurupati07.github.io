import "./About.css";

const certifications = [
  "Machine Learning Specialization",
  "Scikit-Learn For ML Classification Problems",
  "Advanced Learning Algorithms",
  "Neural Networks and Deep Learning",
  "Scikit-Learn to Solve Regression ML Problems",
];

function About() {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Engineer. Researcher. Builder of intelligent systems.</p>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm passionate about building intelligent systems that connect software, AI, and hardware
              to solve real-world problems. Currently at <strong>Microsoft Surface</strong>, I develop and
              automate camera image quality workflows — designing tools that analyze and visualize imaging
              data to improve performance across devices.
            </p>
            <p>
              Before this, I worked on AI-driven solutions across research and industry: building
              GAN-based image enhancement models at the <strong>Manipulation & Environmental Robotics Lab</strong>,
              optimizing large-scale object detection systems at <strong>EagleView</strong>, and engineering
              Quizify — a Google Cloud–powered NLP app — at <strong>Reality AI Lab</strong>.
            </p>
            <p>
              I hold a <strong>Master's in Robotics Engineering</strong> (ML & AI specialization) from
              Worcester Polytechnic Institute (GPA 3.9), and I'm currently completing the
              TripleTen Software Engineering Bootcamp to sharpen my full-stack development skills.
            </p>
            <p>
              Outside of work, I'm passionate about robotics projects, camera imaging science,
              and exploring how AI can enhance everyday human interaction with devices.
            </p>

            <div className="about__links">
              <a href="https://linkedin.com/in/shreyas-chigurupati" target="_blank" rel="noreferrer" className="btn btn-primary">
                LinkedIn
              </a>
              <a href="https://github.com/shreyas-chigurupati07" target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href="mailto:shreyas.chigurupati07@gmail.com" className="btn btn-outline">
                Email Me
              </a>
            </div>
          </div>

          <div className="about__sidebar">
            <div className="about__card card">
              <h3 className="about__card-title">Quick Facts</h3>
              <ul className="about__facts">
                <li><span>📍</span> Redmond, WA — Greater Seattle Area</li>
                <li><span>💼</span> Image Processing Engineer @ Microsoft</li>
                <li><span>🎓</span> MSc Robotics Engineering, WPI (GPA 3.9)</li>
                <li><span>🚀</span> Open to Full-Time Opportunities</li>
                <li><span>📧</span> shreyas.chigurupati07@gmail.com</li>
              </ul>
            </div>

            <div className="about__card card">
              <h3 className="about__card-title">Publication</h3>
              <p className="about__publication">
                Analysis of Bending Abilities of Soft Pneumatic Actuator
              </p>
            </div>

            <div className="about__card card">
              <h3 className="about__card-title">Certifications</h3>
              <ul className="about__certs">
                {certifications.map(c => (
                  <li key={c}>
                    <span className="about__cert-check">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
