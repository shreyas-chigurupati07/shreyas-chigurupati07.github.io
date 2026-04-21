import "./Experience.css";

const experiences = [
  {
    company: "Microsoft",
    role: "Imaging Engineer",
    period: "July 2025 – Present",
    location: "Redmond, WA",
    bullets: [
      "Works on camera image quality workflows for Microsoft Surface devices",
      "Builds tooling for analyzing sharpness, noise, distortion, color fidelity, and 3A imaging behavior",
      "Created a CLIP-based scene detection tool for subjective evaluation workflows",
      "Supports repeatable evaluation and automation across imaging and perception pipelines",
    ],
    tags: ["Python", "OpenCV", "CLIP", "RealSense", "ZED", "AWS", "Docker"],
    current: true,
  },
  {
    company: "Reality AI Lab",
    role: "Generative AI Engineer",
    period: "Dec 2024 – June 2025 · 7 months",
    location: "Remote",
    bullets: [
      "Engineered Quizify, a document-to-quiz application powered by retrieval-augmented generation",
      "Integrated Vertex AI embeddings, LangChain, and ChromaDB to improve content relevance and retrieval quality",
      "Implemented document ingestion and preprocessing pipeline for PDF-based AI workflows",
      "Built product-oriented AI functionality rather than standalone model demos",
    ],
    tags: ["Python", "LangChain", "Vertex AI", "ChromaDB", "Streamlit", "Pydantic"],
  },
  {
    company: "Reality AI Lab",
    role: "AI Engineer Intern",
    period: "July 2024 – Dec 2024 · 6 months",
    location: "Remote",
    bullets: [
      "Built AI application prototypes with Python and Streamlit for rapid experimentation",
      "Worked on retrieval and structured data workflows for user-facing AI features",
      "Supported early-stage product development across document understanding and LLM-assisted flows",
    ],
    tags: ["Python", "Streamlit", "ChromaDB", "Google Cloud"],
  },
  {
    company: "Void Robotics",
    role: "Robotics Software Intern",
    period: "Feb 2024 – May 2024 · 4 months",
    location: "Marathon, FL",
    bullets: [
      "Built ROS2 navigation software in C++ and Python for path planning, obstacle avoidance, and localization",
      "Integrated ZED stereo cameras, LiDAR, and GPS for improved perception and navigation accuracy",
      "Implemented EKF sensor fusion with GPS, IMU, and visual odometry through the Nav2 stack",
      "Improved navigation accuracy by 20% and reduced compute overhead by 30% in embedded workflows",
    ],
    tags: ["ROS2", "C++", "Python", "SLAM", "EKF", "ZED", "LiDAR", "NVIDIA Jetson"],
    metrics: ["↑ 20% navigation accuracy", "↓ 30% compute overhead"],
  },
  {
    company: "Worcester Polytechnic Institute",
    role: "Camera Image Quality Research Assistant",
    period: "July 2023 – May 2024 · 11 months",
    location: "Worcester, MA",
    bullets: [
      "Designed a cGAN framework to enhance Intel RealSense depth images for robotics perception",
      "Achieved PSNR improvement of 18% and SSIM improvement of 12% over raw depth inputs",
      "Integrated enhanced outputs with grasp prediction workflows on robotic hardware",
      "Combined model development, calibration, and systems integration across software and sensing pipelines",
    ],
    tags: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "MATLAB", "ROS", "Python"],
    metrics: ["↑ PSNR 18%", "↑ SSIM 12%"],
  },
  {
    company: "EagleView",
    role: "Image Processing Engineer",
    period: "Aug 2021 – Dec 2022 · 1 yr 5 months",
    location: "Bengaluru, India",
    bullets: [
      "Built image enhancement and quality analysis workflows for large-scale aerial imagery datasets",
      "Reduced manual QA time by 40% through automation and repeatable testing pipelines",
      "Worked with petabyte-scale image processing workloads and quantitative quality metrics",
      "Developed strong foundations in applied CV, data quality, and operational ML workflows",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "MLflow", "Apache Spark", "Hadoop", "Linux"],
    metrics: ["↓ 40% QA time"],
  },
];

const education = [
  {
    institution: "TripleTen",
    degree: "Software Engineering",
    period: "June 2025 – May 2026",
    details: "Full-stack web development: React, JavaScript, Node.js, Express, MongoDB",
  },
  {
    institution: "Worcester Polytechnic Institute",
    degree: "MSc Robotics Engineering — ML & AI Specialization",
    period: "Jan 2023 – Dec 2024",
    details: "GPA 3.9 · Autonomous systems, computer vision, deep learning, motion planning",
  },
  {
    institution: "RV College of Engineering",
    degree: "BEng Mechanical Engineering",
    period: "2016 – 2020",
    details: "Foundation in engineering systems, automation, and robotics",
  },
];

function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Experience across Microsoft, AI labs, robotics, and production-minded ML systems.</p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline__item ${exp.current ? "timeline__item--current" : ""}`}>
              <div className="timeline__dot" />
              <div className="timeline__content card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">
                      {exp.company}
                      {exp.current && <span className="timeline__badge">Current</span>}
                    </p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className="timeline__location">{exp.location}</span>
                  </div>
                </div>

                {exp.metrics && (
                  <div className="timeline__metrics">
                    {exp.metrics.map(m => (
                      <span key={m} className="timeline__metric">{m}</span>
                    ))}
                  </div>
                )}

                <ul className="timeline__bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                <div className="timeline__tags">
                  {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: "80px" }}>Education</h2>
        <p className="section-subtitle">Academic background in robotics, ML, and software engineering.</p>

        <div className="education__grid">
          {education.map((ed, i) => (
            <div key={i} className="education__card card">
              <p className="education__institution">{ed.institution}</p>
              <h3 className="education__degree">{ed.degree}</h3>
              <p className="education__period">{ed.period}</p>
              <p className="education__details">{ed.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
