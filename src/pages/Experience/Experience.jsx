import "./Experience.css";

const experiences = [
  {
    company: "Microsoft",
    role: "Image Processing Engineer",
    period: "July 2025 – Present",
    location: "Redmond, WA",
    bullets: [
      "Develops and automates camera image quality workflows for Microsoft Surface devices",
      "Evaluates sharpness, noise, distortion, color fidelity, and 3A (AE, AF, AWB) parameters",
      "Designs visualization tools to analyze and report imaging performance across devices",
      "Performs intrinsic/extrinsic camera calibration using RealSense and ZED stereo cameras",
    ],
    tags: ["Python", "MATLAB", "OpenCV", "RealSense", "ZED", "AWS", "Docker"],
    current: true,
  },
  {
    company: "Reality AI Lab",
    role: "Generative AI Engineer",
    period: "Dec 2024 – June 2025 · 7 months",
    location: "Remote",
    bullets: [
      "Engineered Quizify — a Google Cloud–powered NLP application for automated quiz generation from documents",
      "Integrated VertexAI and textembedding-gecko model for advanced text embedding and content relevance",
      "Used LangChain and ChromaDB for RAG-based content retrieval and efficient quiz scoring",
      "Implemented PDF text extraction and processing pipeline for document-based quiz generation",
    ],
    tags: ["Python", "LangChain", "VertexAI", "ChromaDB", "Streamlit", "Pydantic"],
  },
  {
    company: "Reality AI Lab",
    role: "AI Engineer Intern",
    period: "July 2024 – Dec 2024 · 6 months",
    location: "Remote",
    bullets: [
      "Built interactive web applications using Python and Streamlit for rapid AI prototyping",
      "Employed Chroma collections for efficient text data storage and retrieval",
      "Utilized JSON for structured data management ensuring seamless application operation",
    ],
    tags: ["Python", "Streamlit", "ChromaDB", "Google Cloud"],
  },
  {
    company: "Void Robotics",
    role: "Robotics Software Intern",
    period: "Feb 2024 – May 2024 · 4 months",
    location: "Marathon, FL",
    bullets: [
      "Built ROS2 navigation software in C++ and Python for path planning, motion planning, and obstacle avoidance",
      "Integrated ZED stereo cameras, LiDAR, and GPS sensors for improved localization and obstacle detection",
      "Implemented Extended Kalman Filter (EKF) sensor fusion with GPS, IMU, and visual odometry via Nav2 stack",
      "Achieved 20% improvement in navigation accuracy via sensor fusion pipeline",
      "Reduced computational overhead by 30% through optimized deep learning for real-time object detection",
      "Improved path planning by 25% via real-time SLAM on NVIDIA Jetson embedded hardware",
    ],
    tags: ["ROS2", "C++", "Python", "SLAM", "EKF", "ZED", "LiDAR", "NVIDIA Jetson"],
    metrics: ["↑ 20% navigation accuracy", "↓ 30% compute overhead", "↑ 25% path planning"],
  },
  {
    company: "Worcester Polytechnic Institute",
    role: "Camera Image Quality Research Assistant",
    period: "July 2023 – May 2024 · 11 months",
    location: "Worcester, MA",
    bullets: [
      "Designed cGAN framework (U-Net generator + discriminator) to enhance Intel RealSense depth images",
      "Achieved PSNR improvement of 18% and SSIM improvement of 12% over raw inputs",
      "Performed intrinsic and extrinsic camera calibration using checkerboard patterns",
      "Integrated cGAN-enhanced images with GGCNN for robotic grasp detection on Franka Emika 7 DoF arm",
      "Collaborated with firmware teams on I2C/SPI camera control systems and acquisition parameters",
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
      "Built image enhancement pipelines with OpenCV and PyTorch for sharpness, noise, and distortion correction",
      "Reduced manual QA time by 40% through automated large-scale image quality testing with Python and MLflow",
      "Processed petabyte-scale aerial imagery datasets using Apache Spark and Hadoop",
      "Evaluated model quality using PSNR and SSIM metrics; maintained defect tracking documentation",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "MLflow", "Apache Spark", "Hadoop", "Linux"],
    metrics: ["↓ 40% QA time"],
  },
  {
    company: "TE Connectivity",
    role: "Robotics & Automation Engineer Intern",
    period: "May 2019 – Aug 2019 · 4 months",
    location: "Bengaluru, India",
    bullets: [
      "Learnt PLC programming for collaborative robots used in manufacturing cables and connectors",
      "Contributed to future project visions for manufacturing electronic connectors for automotive applications",
    ],
    tags: ["PLC", "Robotics", "Automation"],
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
        <p className="section-subtitle">4+ years across Microsoft, AI labs, and robotics startups.</p>

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
