import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    category: "ai",
    icon: "🧩",
    title: "Quizify",
    description: "RAG-powered quiz generation system that turns PDFs into topic-aware quizzes using embeddings, retrieval, and an interactive Streamlit UI.",
    tags: ["Python", "Vertex AI", "LangChain", "ChromaDB", "Streamlit", "RAG"],
    github: "https://github.com/shreyas-chigurupati07/Quizify",
  },
  {
    category: "ai",
    icon: "✈️",
    title: "Gemini Flights",
    description: "FastAPI backend for AI-assisted flight search and booking workflows, designed for function-calling style integrations and tool-driven agents.",
    tags: ["Python", "FastAPI", "Gemini", "APIs", "AI Agents"],
    github: "https://github.com/shreyas-chigurupati07/Gemini-Flights",
  },
  {
    category: "ai",
    icon: "🌾",
    title: "FarmNet",
    description: "Autonomous drone navigation project combining simulation, path planning, and control for obstacle-aware flight in complex environments.",
    tags: ["Python", "A*", "Webots", "Autonomy", "Robotics"],
    github: "https://github.com/shreyas-chigurupati07/FarmNet",
  },
  {
    category: "ai",
    icon: "✨",
    title: "GAN Image Enhancement",
    description: "Depth-image enhancement pipeline for robotic grasping using GANs, ROS, and downstream grasp prediction on real sensor data.",
    tags: ["PyTorch", "TensorFlow", "GANs", "ROS", "Computer Vision"],
    github: "https://github.com/shreyas-chigurupati07/GAN-based-Image-Enhancement",
    metrics: ["↑ PSNR 18%", "↑ SSIM 12%"],
  },
  {
    category: "ai",
    icon: "🎭",
    title: "Mask R-CNN for Dynamic Environments",
    description: "Pose estimation and scene understanding system using Mask R-CNN and ResNet50 for real-time posture feedback in dynamic settings.",
    tags: ["Python", "TensorFlow", "Mask R-CNN", "ResNet50", "OpenCV"],
    github: "https://github.com/shreyas-chigurupati07/Mask-RCNN-for-Dynamic-Environments",
  },
  {
    category: "ai",
    icon: "🤖",
    title: "Autonomous Drone Navigation",
    description: "Deep reinforcement learning for UAV path planning in simulated environments with a focus on autonomous decision-making and control.",
    tags: ["Python", "Deep RL", "AirSim", "Autonomy", "Simulation"],
    github: "https://github.com/shreyas-chigurupati07/Autonomous_Drone_Navigation_through_Deep_Reinforcement_Learning",
  },
  {
    category: "ai",
    icon: "🕷️",
    title: "Rufus Web Crawler",
    description: "Crawler and retrieval utility for feeding external content into RAG pipelines with filtering and relevance-aware processing.",
    tags: ["Python", "LangChain", "ChromaDB", "Redis", "RAG"],
    github: "https://github.com/shreyas-chigurupati07/rufus_web_crawler",
  },
  {
    category: "ai",
    icon: "🎬",
    title: "Scene Detector",
    description: "Python tool for scene-change detection in video clips with both GUI and CLI workflows for practical CV experimentation.",
    tags: ["Python", "OpenCV", "Tkinter", "Computer Vision"],
    github: "https://github.com/shreyas-chigurupati07/scene-detector-tool",
  },
  {
    category: "ai",
    icon: "🔍",
    title: "Object Detection (YOLOv8)",
    description: "Real-time object detection pipeline using YOLOv8n for fast and accurate detection across diverse environments.",
    tags: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    github: "https://github.com/shreyas-chigurupati07/ObjectDetection",
  },
  {
    category: "ai",
    icon: "📊",
    title: "End-to-End ML Project",
    description: "Full machine learning pipeline from data ingestion to model deployment with experiment tracking and reproducible workflows.",
    tags: ["Python", "MLflow", "scikit-learn", "Docker"],
    github: "https://github.com/shreyas-chigurupati07/mlproject",
  },
  {
    category: "web",
    icon: "👕",
    title: "WTWR React App",
    description: "Weather-aware wardrobe app with live weather data, modal workflows, and polished frontend interactions.",
    tags: ["React", "Vite", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/shreyas-chigurupati07/se_project_react",
    live: "https://shreyas-chigurupati07.github.io/se_project_react/",
  },
  {
    category: "web",
    icon: "📍",
    title: "Project Spots",
    description: "Social platform for discovering study and work spots with CRUD flows, REST integration, and responsive UI.",
    tags: ["JavaScript", "Webpack", "REST API", "HTML/CSS"],
    github: "https://github.com/shreyas-chigurupati07/se_project_spots",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI / CV / LLM Systems" },
  { key: "web", label: "Web / Full-Stack" },
];

function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work across AI engineering, computer vision, multimodal systems, and product development.</p>

        <div className="projects__filters">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={`projects__filter-btn ${active === key ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((p) => (
            <div key={p.title} className="project-card card">
              <div className="project-card__top">
                <span className="project-card__icon">{p.icon}</span>
                <div className="project-card__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link" title="Live Demo">
                      ↗
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link" title="GitHub">
                    GitHub
                  </a>
                </div>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              {p.metrics && (
                <div className="project-card__metrics">
                  {p.metrics.map(m => (
                    <span key={m} className="project-card__metric">{m}</span>
                  ))}
                </div>
              )}
              <div className="project-card__tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
