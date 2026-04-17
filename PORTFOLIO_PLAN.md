# Portfolio Website Plan — Shreyas Chigurupati

## Overview

A personal portfolio website for **Shreyas Chigurupati**, Image Processing Engineer at Microsoft Surface, MSc Robotics Engineering (WPI, GPA 3.9). The site positions Shreyas as a multidisciplinary AI/ML/Robotics engineer open to full-time opportunities in AI, ML, Computer Vision, and Robotics Software Engineering.

**Target audience:** Hiring managers and technical recruiters at AI, robotics, computer vision, and full-stack companies.

**Headline (from LinkedIn):**
> Image Processing Engineer @ Microsoft | Full-Stack Software Engineer | Machine Learning Engineer | Robotics Software Engineer | Seeking Full-time opportunities

**Existing portfolio:** https://chigurupatishreyas.wixsite.com/shreyas-portfolio  
**Deployment target:** GitHub Pages → `shreyas-chigurupati07.github.io`

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | React + Vite | Already used in se_project_react, react-router-demo |
| Routing | React Router v6 | Core skill being practiced |
| Styling | CSS Modules | Clean, maintainable, matches existing SE projects |
| Deployment | GitHub Pages | Free, already set up at .github.io |
| Animation | Framer Motion (optional) | Smooth page transitions |

---

## Site Structure & Pages

### 1. Home `/`
- **Hero:** Name ("Shreyas Chigurupati"), animated title cycling through roles:
  - "Image Processing Engineer @ Microsoft"
  - "Machine Learning Engineer"
  - "Robotics Software Engineer"
  - "Seeking Full-Time Opportunities 🚀"
- **Location:** Greater Seattle Area
- **CTA buttons:** View Projects | Download Resume | Contact Me
- **Highlights bar:** 4 key facts
  - 🎓 MSc Robotics Engineering — WPI (GPA 3.9)
  - 💼 Image Processing Engineer @ Microsoft
  - 🤖 Computer Vision · Deep Learning · Robotics
  - 📍 Redmond, WA · Open to Work

### 2. About `/about`
- **Summary** (from LinkedIn):
  > Passionate about building intelligent systems that connect software, AI, and hardware to solve real-world problems. Builds perception pipelines, camera image quality workflows, and scalable ML solutions. Currently at Microsoft Surface automating camera image quality analysis.
- **Expertise areas:** Computer Vision, Deep Learning, Autonomous Systems, Full-Stack Development
- **Publication:** Analysis of Bending Abilities of Soft Pneumatic Actuator
- **Top Skills:** Sequence-to-Sequence Models, Retrieval-Augmented Generation (RAG), Redis Vector Search
- Links to LinkedIn, GitHub, email

### 3. Experience `/experience`
Full timeline (reverse chronological):

| Company | Role | Duration |
|---------|------|----------|
| **Microsoft** | Image Processing Engineer | July 2025 – Present · Redmond, WA |
| **Reality AI Lab** | Generative AI Engineer | Dec 2024 – June 2025 (7 mo) |
| **Reality AI Lab** | AI Engineer Intern | July 2024 – Dec 2024 (6 mo) |
| **Void Robotics** | Robotics Software Intern | Feb 2024 – May 2024 (4 mo) · Marathon, FL |
| **WPI** | Camera Image Quality Research Assistant | July 2023 – May 2024 (11 mo) · Worcester, MA |
| **EagleView** | Image Processing Engineer | Aug 2021 – Dec 2022 (1 yr 5 mo) · Bengaluru |
| **TE Connectivity** | Robotics & Automation Engineer Intern | May 2019 – Aug 2019 (4 mo) · Bengaluru |
| **JSW Steel** | Automation Engineer Intern | June 2018 – Aug 2018 (3 mo) · Ballari |

**Key bullet points to highlight (with metrics):**

**Microsoft — Image Processing Engineer** *(Jul 2025 – Present)*
- Develops and automates camera image quality workflows for Microsoft Surface devices
- Evaluates sharpness, noise, distortion, color fidelity, and 3A (AE, AF, AWB) parameters
- Designs visualization tools to analyze imaging performance across devices
- Stack: Python, MATLAB, OpenCV, RealSense/ZED cameras, I2C/SPI, AWS, Docker

**Reality AI Lab — Generative AI Engineer** *(Dec 2024 – Jun 2025)*
- Engineered Quizify — a Google Cloud–powered NLP app automating quiz generation from documents
- Integrated VertexAI + textembedding-gecko model for advanced text embeddings
- Used LangChain + ChromaDB for RAG-based content retrieval and quiz scoring
- Implemented PDF text extraction pipeline; deployed via Streamlit

**Void Robotics — Robotics Software Intern** *(Feb 2024 – May 2024)*
- Built ROS2 navigation software in C++ and Python for autonomous robots
- Sensor fusion: ZED stereo camera, LiDAR, GPS with Extended Kalman Filter (EKF)
- **↑ 20% navigation accuracy** via sensor fusion with Nav2 stack
- **↓ 30% computational overhead** via optimized deep learning for real-time object detection
- **↑ 25% path planning improvement** via real-time SLAM

**WPI — Camera Image Quality Research Assistant** *(Jul 2023 – May 2024)*
- Designed cGAN framework (U-Net generator + discriminator) to enhance RealSense depth images
- **↑ PSNR by 18%** and **↑ SSIM by 12%** over raw inputs in low-light conditions
- Performed intrinsic/extrinsic camera calibration using checkerboard patterns
- Integrated cGAN-enhanced images with GGCNN on Franka Emika 7 DoF arm for grasp detection
- Stack: PyTorch, TensorFlow/Keras, OpenCV, Python, MATLAB

**EagleView — Image Processing Engineer** *(Aug 2021 – Dec 2022)*
- Built image enhancement pipelines with OpenCV + PyTorch (sharpness, noise, distortion)
- **↓ 40% manual QA time** via automated large-scale image quality testing with Python + MLFlow
- Processed petabyte-scale aerial imagery datasets using Apache Spark + Hadoop
- PSNR/SSIM evaluation and defect tracking documentation

### 4. Education `/about` (section within About, or separate `/education`)

| Institution | Degree | Dates |
|-------------|--------|-------|
| **TripleTen** | Software Engineer | June 2025 – May 2026 |
| **Worcester Polytechnic Institute** | MSc, Machine Learning / Robotics Engineering (GPA 3.9) | Jan 2023 – Dec 2024 |
| **RV College of Engineering** | BEng, Mechanical Engineering | 2016 – 2020 |

**Certifications:**
- Machine Learning Specialization
- Scikit-Learn For ML Classification Problems
- Advanced Learning Algorithms
- Neural Networks and Deep Learning
- Scikit-Learn to Solve Regression ML Problems

### 5. Projects `/projects`
Filterable grid with tabs: **All | AI/CV | Robotics | Web**

#### AI / Computer Vision
| Project | Description | Tech |
|---------|-------------|------|
| 🤖 Autonomous Drone Navigation | Deep RL for UAV path planning in complex 3D environments | Python, ROS2, PyTorch, Gazebo |
| 🌾 FarmNet | AI-powered agricultural intelligence system | Python, Deep Learning |
| ✨ GAN Image Enhancement | cGAN super-resolution and depth image enhancement (WPI research) | PyTorch, TensorFlow, CUDA |
| 🎭 Mask R-CNN | Instance segmentation for dynamic scene understanding | Python, PyTorch |
| ✈️ Gemini Flights | Automated flight booking bot via Google Gemini AI | Python, LangChain, Gemini |
| 🕷️ Rufus Web Crawler | AI web scraping tool with RAG pipeline integration | Python, ChromaDB, LangChain |
| 🎬 Scene Detector | Scene change detection with CLI/GUI | Python, OpenCV, Tkinter |
| 🔍 ObjectDetection (YOLOv8) | Real-time object detection | Python, YOLOv8, OpenCV |
| 🦋 Butterfly Classifier | Image classification pipeline | Python, TensorFlow |
| 🐔 Chicken Disease Classifier | End-to-end ML classification pipeline | Python, scikit-learn |
| 🧍 Human Pose Estimation & Object Detection | Custom ResNet50 pose estimation + Mask R-CNN with COCO dataset | PyTorch, TensorFlow, Keras, OpenCV |
| 📊 End-to-End ML Project | Full ML pipeline with experiment tracking | Python, MLflow |

#### Web / Full-Stack
| Project | Description | Tech |
|---------|-------------|------|
| 👕 WTWR React App | Weather-aware wardrobe app with live OpenWeather API | React, Vite, OpenWeather API |
| 📍 Project Spots | Social platform for study spots, full CRUD + REST API | JS, Webpack, REST API |
| ☕ Triple Peaks Coffee Shop | Responsive multi-section landing page (BEM) | HTML, CSS (BEM) |
| ✅ SE Todo App | Vanilla JS todo app with clean UI | JS, HTML, CSS |

Each card shows: title + icon, 2-line description, tech badges, GitHub link, Live demo link (where available).

### 6. Skills `/skills`

Display as visual badge grid, grouped by category:

- **Languages & Scripting:** Python, MATLAB, Bash, C++, C# (familiar), SQL, JavaScript
- **Image Processing & Analysis:** OpenCV, scikit-image, PIL, ImageDataGenerator, Matplotlib
- **Image Quality Evaluation:** PSNR, SSIM, sharpness, noise, distortion, color fidelity, 3A (AE, AF, AWB)
- **AI / ML:** PyTorch, TensorFlow, Keras, YOLO, scikit-learn, HuggingFace, LangChain, Google Gemini, CUDA, MLflow, ChromaDB, Redis, NLTK, SpaCy, Kubeflow
- **Camera Systems:** RealSense, ZED stereo cameras, intrinsic/extrinsic calibration, I2C/SPI
- **Robotics:** ROS, ROS2, Gazebo, Webots, SLAM, EKF, Sensor Fusion, Nav2
- **Big Data:** Apache Spark, Hadoop
- **Web & APIs:** React, Node.js, Express, MongoDB, FastAPI, Streamlit, HTML5, CSS3
- **Cloud & DevOps:** GCP (VertexAI), AWS (Lambda, EC2), Azure, Docker, Git, GitHub, GitLab, Linux

### 7. Contact `/contact`
- **Email:** shreyas.chigurupati07@gmail.com
- **LinkedIn:** linkedin.com/in/shreyas-chigurupati
- **GitHub:** github.com/shreyas-chigurupati07
- Contact form (Formspree or EmailJS — no backend needed)
- "Open to Full-Time Opportunities" badge

---

## Header / Navigation
- Logo: "SC" monogram or full name
- Nav: Home | About | Experience | Projects | Skills | Contact
- Sticky on scroll
- Mobile hamburger menu
- Subtle "Open to Work" green indicator

## Footer
- Social links (GitHub, LinkedIn)
- "Built with React · Deployed on GitHub Pages"

---

## Design Direction

| Element | Choice |
|---------|--------|
| Theme | Dark mode (Tokyo Night palette) |
| Accent | Cyan `#6AD3F7` (matches GitHub profile) |
| Heading font | Fira Code |
| Body font | Inter or system sans-serif |
| Feel | Technical, minimal, clean |

---

## Implementation Order

1. **Setup** — Scaffold React + Vite + React Router in `shreyas-chigurupati07.github.io/`
2. **Layout** — Header (sticky nav, hamburger) + Footer
3. **Home** — Hero with animated titles, highlights bar, CTAs
4. **Projects** — Filterable grid (highest impact page)
5. **Experience** — Timeline component
6. **About** — Bio, education, certifications, publication
7. **Skills** — Badge grid
8. **Contact** — Form + social links
9. **Polish** — Animations, mobile responsiveness, SEO meta tags
10. **Deploy** — GitHub Pages via `gh-pages` branch

---

## Open Items

- [ ] Profile photo to include on About page?
- [ ] Resume PDF path confirmed? (mentioned: Desktop/resume/companies/Paccar)
- [ ] Live demo URLs for AI projects (drone nav, FarmNet, etc.)?
- [ ] Should Wix portfolio be replaced entirely or run in parallel?
- [ ] Any projects from Microsoft work that can be shown (or NDA-restricted)?
- [ ] Quizify — is there a live link or demo video?
