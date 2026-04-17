import "./Skills.css";

const skillGroups = [
  {
    title: "Languages & Scripting",
    icon: "💬",
    skills: ["Python", "C++", "MATLAB", "JavaScript", "Bash", "SQL", "HTML/CSS"],
  },
  {
    title: "AI / Machine Learning",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "HuggingFace", "LangChain", "Google Gemini", "NLTK", "SpaCy", "CUDA", "Kubeflow"],
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    skills: ["OpenCV", "YOLOv8", "Mask R-CNN", "scikit-image", "PIL", "ImageDataGenerator", "Matplotlib", "PSNR/SSIM"],
  },
  {
    title: "Camera & Imaging",
    icon: "📷",
    skills: ["Intel RealSense", "ZED Stereo Camera", "Intrinsic/Extrinsic Calibration", "3A (AE/AF/AWB)", "I2C/SPI", "Image Quality Evaluation"],
  },
  {
    title: "Robotics & Simulation",
    icon: "🤖",
    skills: ["ROS", "ROS2", "Gazebo", "Webots", "SLAM", "EKF", "Nav2", "Sensor Fusion", "NVIDIA Jetson"],
  },
  {
    title: "MLOps & Data",
    icon: "📊",
    skills: ["MLflow", "ChromaDB", "Redis", "Apache Spark", "Hadoop", "Docker", "Git", "GitHub", "GitLab"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    skills: ["Google Cloud (VertexAI)", "AWS (Lambda, EC2)", "Azure SDK", "Linux", "Bash Scripting"],
  },
  {
    title: "Web & APIs",
    icon: "🌐",
    skills: ["React", "Node.js", "Express", "MongoDB", "FastAPI", "Streamlit", "Vite", "Webpack"],
  },
];

function Skills() {
  return (
    <section className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools across AI, robotics, imaging, and web development.</p>

        <div className="skills__grid">
          {skillGroups.map(({ title, icon, skills }) => (
            <div key={title} className="skills__group card">
              <h3 className="skills__group-title">
                <span>{icon}</span> {title}
              </h3>
              <div className="skills__tags">
                {skills.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
