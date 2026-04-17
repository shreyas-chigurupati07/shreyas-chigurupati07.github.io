import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    category: "ai",
    icon: "🤖",
    title: "Autonomous Drone Navigation",
    description: "Deep reinforcement learning for UAV path planning in complex 3D environments using ROS2 and Gazebo simulation.",
    tags: ["Python", "PyTorch", "ROS2", "Gazebo", "Deep RL"],
    github: "https://github.com/shreyas-chigurupati07/Autonomous_Drone_Navigation_through_Deep_Reinforcement_Learning",
  },
  {
    category: "ai",
    icon: "🌾",
    title: "FarmNet",
    description: "AI-powered agricultural intelligence system using deep learning for crop analysis and yield optimization.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    github: "https://github.com/shreyas-chigurupati07/FarmNet",
  },
  {
    category: "ai",
    icon: "✨",
    title: "GAN Image Enhancement",
    description: "Conditional GAN (cGAN) framework for depth image enhancement and super-resolution. Improved PSNR by 18% and SSIM by 12% over raw inputs.",
    tags: ["PyTorch", "TensorFlow", "cGAN", "OpenCV", "CUDA"],
    github: "https://github.com/shreyas-chigurupati07/GAN-based-Image-Enhancement",
    metrics: ["↑ PSNR 18%", "↑ SSIM 12%"],
  },
  {
    category: "ai",
    icon: "🎭",
    title: "Mask R-CNN for Dynamic Environments",
    description: "Instance segmentation for dynamic scene understanding using Mask R-CNN with COCO dataset. Combined with ResNet50 pose estimation.",
    tags: ["Python", "PyTorch", "Mask R-CNN", "ResNet50", "OpenCV"],
    github: "https://github.com/shreyas-chigurupati07/Mask-RCNN-for-Dynamic-Environments",
  },
  {
    category: "ai",
    icon: "✈️",
    title: "Gemini Flights",
    description: "Automated flight booking bot powered by Google Gemini AI, using LangChain and RAG for intelligent query handling.",
    tags: ["Python", "LangChain", "Google Gemini", "RAG", "FastAPI"],
    github: "https://github.com/shreyas-chigurupati07/Gemini-Flights",
  },
  {
    category: "ai",
    icon: "🕷️",
    title: "Rufus Web Crawler",
    description: "AI web scraping tool designed for RAG pipeline integration. Retrieves, filters, and ranks relevant web content for AI applications.",
    tags: ["Python", "ChromaDB", "LangChain", "RAG", "Redis"],
    github: "https://github.com/shreyas-chigurupati07/rufus_web_crawler",
  },
  {
    category: "ai",
    icon: "🎬",
    title: "Scene Detector",
    description: "Python tool for detecting scene changes in video clips with a Tkinter GUI and CLI interface.",
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
    icon: "🦋",
    title: "Butterfly Classifier",
    description: "Image classification pipeline to identify butterfly species using transfer learning and data augmentation.",
    tags: ["Python", "TensorFlow", "Keras", "ImageDataGenerator"],
    github: "https://github.com/shreyas-chigurupati07/butterfly_classifier",
  },
  {
    category: "ai",
    icon: "📊",
    title: "End-to-End ML Project",
    description: "Full machine learning pipeline from data ingestion to model deployment with experiment tracking via MLflow.",
    tags: ["Python", "MLflow", "scikit-learn", "Docker"],
    github: "https://github.com/shreyas-chigurupati07/mlproject",
  },
  {
    category: "web",
    icon: "👕",
    title: "WTWR React App",
    description: "Weather-aware wardrobe app that fetches live weather data and recommends clothing. Includes garment modals and add/preview flows.",
    tags: ["React", "Vite", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/shreyas-chigurupati07/se_project_react",
    live: "https://shreyas-chigurupati07.github.io/se_project_react/",
  },
  {
    category: "web",
    icon: "📍",
    title: "Project Spots",
    description: "Social platform for discovering study and work spots. Full CRUD, REST API integration, form validation, and responsive design.",
    tags: ["JavaScript", "Webpack", "REST API", "HTML/CSS"],
    github: "https://github.com/shreyas-chigurupati07/se_project_spots",
  },
  {
    category: "web",
    icon: "☕",
    title: "Triple Peaks Coffee Shop",
    description: "Responsive multi-section landing page for a coder-friendly coffee shop. Built with BEM methodology and embedded video recipes.",
    tags: ["HTML5", "CSS3", "BEM", "Responsive Design"],
    github: "https://github.com/shreyas-chigurupati07/se_project_coffeeshop",
  },
  {
    category: "web",
    icon: "✅",
    title: "Todo App",
    description: "Clean, responsive todo application with vanilla JS — add, complete, and delete tasks with smooth UI interactions.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/shreyas-chigurupati07/se_project_todo-app",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI / CV / Robotics" },
  { key: "web", label: "Web / Full-Stack" },
];

function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of AI, computer vision, robotics, and web projects.</p>

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
