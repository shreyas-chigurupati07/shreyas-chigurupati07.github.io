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
        <p className="section-subtitle">AI engineer focused on turning strong models into useful products.</p>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I build intelligent systems that connect software, machine learning, and product thinking.
              My background spans computer vision, imaging, robotics, and applied AI, with a strong interest
              in production AI engineering where model quality, evaluation, and user experience all matter.
            </p>
            <p>
              At <strong>Microsoft</strong>, I work on camera and imaging quality workflows for Surface devices,
              building tools and pipelines that improve analysis, repeatability, and developer efficiency.
              Before that, I worked on retrieval-based AI applications, document understanding flows,
              GAN-based image enhancement, and robotics perception systems across research and startup environments.
            </p>
            <p>
              I hold a <strong>Master's in Robotics Engineering</strong> with an ML and AI specialization from
              Worcester Polytechnic Institute (GPA 3.9). That foundation helped me develop depth in perception,
              control, and modeling, while my recent work has pushed me toward LLM systems, multimodal AI,
              APIs, and end-to-end application delivery.
            </p>
            <p>
              I'm targeting full-time <strong>AI Engineer</strong> roles where I can contribute across model-backed
              product development, backend systems, experimentation, and deployment.
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
                <li><span>💼</span> AI Engineer @ Microsoft</li>
                <li><span>🎓</span> MSc Robotics Engineering, WPI (GPA 3.9)</li>
                <li><span>🚀</span> Open to full-time AI Engineer roles</li>
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
