export const portfolioData = {
  name: "Yusuf Solomon Olumide",
  alias: "Badasz",
  role: "Machine Learning Engineer",
  taglines: [
    "Machine Learning Engineer",
    "AI Engineer",
    "MLOps Specialist", 
    "Robotics Enthusiast",
  ],
  bio: "Building intelligent systems at the intersection of ML, robotics, and software engineering.",
  location: "Lagos, Nigeria",
  socials: {
    github: "https://github.com/badaszz",
    twitter: "https://x.com/I_BadaSZ",
    linkedin: "https://linkedin.com/in/yusuf-solomon",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    intro: "I'm a 21-year-old Machine Learning Engineer at Babban Gona, a precision agriculture company in Nigeria. My work sits at the intersection of MLOps, AI engineering, and robotics.",
    focus: "I'm passionate about building end-to-end intelligent systems — from training models to deploying them in production — and I'm expanding into full stack development and autonomous robotics.",
    goal: "Currently pursuing fully funded scholarships in Robotics Engineering abroad while building production-grade ML systems that solve real agricultural problems.",
  },

  skills: [
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "YOLOv8", "Hugging Face", "LLM Fine-tuning", "Groq API"],
  },
  {
    category: "LLM Engineering",
    icon: "🧠",
    items: ["LangChain", "LangGraph", "Prompt Engineering", "RAG Systems", "Groq / Llama 3", "FastAPI"],
  },
  {
    category: "Robotics & Embedded Systems",
    icon: "🦾",
    items: ["ROS2", "Gazebo", "DroneKit", "MAVLink", "Arduino", "ESP32", "OpenCV"],
  },
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "C", "C++", "Bash"],
  },
  {
    category: "DevOps & Tools",
    icon: "⚙️",
    items: ["Docker", "Git", "GitHub Actions", "Linux", "FastAPI"],
  },
  ],
  projects: [
  {
    title: "Oil Spill Detection",
    description:
      "AI-powered oil spill segmentation system using a UNet model trained on satellite imagery. Packaged as an ONNX model, served via FastAPI, containerized with Docker, and deployed on Kubernetes with horizontal pod autoscaling.",
    tags: ["Python", "UNet", "ONNX", "FastAPI", "Docker", "Kubernetes", "OpenCV"],
    category: "ML",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
  {
    title: "Philosophical Debate Simulator",
    description:
      "Multi-turn LLM debate system between synthetic philosopher agents. Uses LangGraph for stateful orchestration, Groq (Llama 3) for inference, Tavily for web retrieval, and Wikipedia enrichment. Exposed via FastAPI with a Streamlit frontend.",
    tags: ["Python", "LangGraph", "Groq", "FastAPI", "Streamlit", "Tavily", "Docker"],
    category: "AI Engineering",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
  {
    title: "Hand Gesture-Controlled Drone",
    description:
      "Gesture-controlled drone system for topographic mapping. Uses MediaPipe for real-time hand landmark detection, supports both MSP and MAVLink protocols, ESP32-CAM image capture, and a RTH-triggered photogrammetry mode.",
    tags: ["Python", "MediaPipe", "MAVLink", "MSP", "ESP32-CAM", "OpenCV", "DroneKit"],
    category: "Robotics",
    github: "https://github.com/Badaszz/Hand_gesture_controlled_drone_for_topographic_mapping",
    demo: null,
    status: "Completed",
  },
  {
    title: "Autonomous Search & Sample Return Rover",
    description:
      "Autonomous rover navigation pipeline for the Udacity Robotics NanoDegree simulator. Achieves ~97% terrain mapping, collects 5+ of 6 samples on average, with wall-crawling, stuck detection, and path-backtracking return-to-home.",
    tags: ["Python", "OpenCV", "NumPy", "Robotics", "Computer Vision", "Path Planning"],
    category: "Robotics",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
  {
    title: "A* Path Planning Demo",
    description:
      "Interactive A* path planner on a 2D grid with obstacles and variable-cost ash terrain. Includes a side-by-side comparison with Dijkstra showing path cost and node exploration metrics. Click-to-set-goal via Matplotlib.",
    tags: ["Python", "NumPy", "Matplotlib", "A*", "Dijkstra", "Path Planning"],
    category: "Robotics",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
  {
    title: "ML Models from Scratch",
    description:
      "Implementations of fundamental ML algorithms using only Python and NumPy — no high-level libraries. Covers Ridge Regression, Logistic Regression, Neural Networks, KNN, Decision Trees, K-Means, and PCA.",
    tags: ["Python", "NumPy", "Matplotlib", "Jupyter"],
    category: "ML",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
  {
    title: "LLM Grind",
    description:
      "Personal workspace documenting hands-on experiments with LLMs — decoding strategies (greedy, beam, top-k, nucleus), seq2seq pipelines, GPT-2 analysis, a NanoGPT trained on Shakespeare, and English-Yoruba parallel data experiments.",
    tags: ["Python", "PyTorch", "Hugging Face", "GPT-2", "NanoGPT", "Jupyter"],
    category: "AI Engineering",
    github: "https://github.com/badaszz",
    demo: null,
    status: "Completed",
  },
],

education: [
  {
    degree: "B.Eng. Mechatronics Engineering",
    institution: "Bells University of Technology",
    period: "Graduated 2024",
    description: "First Class Honours — 4.88 CGPA. Focused on robotics, embedded systems, control systems, and AI. Built multiple autonomous systems as part of coursework and personal projects.",
    current: false,
  },
],

accomplishments: [
  {
    title: "First Class Honours — 4.88 CGPA",
    issuer: "Bells University of Technology",
    year: "2025",
    description: "Graduated top of class with a First Class degree in Mechatronics Engineering.",
  },
  {
    title: "Machine Learning Engineer",
    issuer: "Babban Gona",
    year: "2024",
    description: "Hired as ML Engineer at Nigeria's leading agriculture organization, working at the intersection of MLOps and AI engineering.",
  },
  {
    title: "Generative AI & Data Science Intern",
    issuer: "FlexiSAF",
    year: "2023",
    description: "Worked on computer vision, PyTorch, and pose recognition as part of a Generative AI and Data Science internship.",
  },
  {
    title: "Certifications",
    issuer: "Columbia University · University of Michigan · The Construct",
    year: "2022 — 2024",
    description: "Machine Learning (Columbia), Python for ML (Michigan/Coursera), Python for Robotics and Linux for Robotics (The Construct).",
  },
],
blog: {
  hashnodeUsername: "ysolomon",
  hashnodeUrl: "https://ysolomon.hashnode.dev",
},

contact: {
  email: "ysolomon298@gmail.com",
  message: "I'm currently open to ML engineering roles, robotics collaborations, and research opportunities. My inbox is always open — let's build something.",
},

systemPrompt: `You are Badasz's personal AI assistant on his portfolio website. Your job is to answer questions about Yusuf Solomon Olumide — also known as Badasz — in a casual, laid-back way with just a touch of professionalism. Think of yourself as a knowledgeable friend who knows everything about him.

== WHO IS BADASZ ==
Full name: Yusuf Solomon Olumide. Goes by Badasz online.
Age: 21. Based in Lagos, Nigeria (originally from Ogun State). Christian.
He is a Mechatronics Engineering graduate (First Class, 4.88 CGPA) from Bells University of Technology.
Currently working as a Machine Learning Engineer at Babban Gona — Nigeria's leading precision agriculture company.
His work sits at the intersection of MLOps, AI engineering, robotics, and full stack development.
Hobbies: chess, math puzzles, anime, fashion, video games, philosophy discussions.

== WHAT HE'S DOING RIGHT NOW ==
- Deepening his understanding of LLMs and LLM engineering
- Taking courses on DataCamp (ML, data engineering topics)
- Actively applying for fully funded robotics scholarships abroad (interested in ETH Zurich for a Master's in Robotics — no scholarship awarded yet)
- Building his full stack skills (React, Tailwind, Vite — this portfolio is part of that journey!)
- Exploring robotics simulations and working toward real hardware ROS2 projects

== CAREER GOALS ==
- Pursue a Master's degree in Robotics Engineering abroad (ETH Zurich is a top target)
- Work in Robotics R&D — specifically building AI + robotics tech for precision agriculture
- Eventually pursue a PhD in Robotics and another in AI
- Build a strong international portfolio of ML, robotics, and AI projects

== EXPERIENCE ==
1. Machine Learning Engineer — Babban Gona (current)
   Precision agriculture company. Works on MLOps pipelines, AI engineering, and applying ML to agricultural problems.

2. Generative AI & Data Science Intern — FlexiSAF
   Worked on supervised learning models, generative AI poetry generation, body pose detection and recognition using PyTorch, CNNs, and LSTMs.

3. SIWES Industrial Training — Seven Up Bottling Company (6 months)
   3 months mechanical (maintenance and repair of production machinery), 3 months electrical (diagnosing faults, servicing electrical components). Worked on One Way Pack Line and Returnable Glass Bottle Line.

== EDUCATION ==
- B.Eng Mechatronics Engineering, Bells University of Technology — First Class, 4.88 CGPA (graduated 2024)
  Final year project: Design and Construction of a Hand-Gesture Controlled Drone for Automated Topographic Mapping with Photogrammetry

== CERTIFICATIONS ==
- Python for Robotics — The Construct
- Linux for Robotics — The Construct
- C++ for Robotics — The Construct
- Machine Learning — Columbia University
- Python for Machine Learning — University of Michigan / Coursera

== PROJECTS ==
1. Oil Spill Detection — UNet deep learning model on satellite imagery. ONNX model served via FastAPI. Dockerized and deployed on Kubernetes with HPA. Returns red-overlaid segmentation masks.

2. Philosophical Debate Simulator — Multi-turn LLM debate system. LangGraph orchestration, Groq (Llama 3) for inference, Tavily web search + Wikipedia enrichment. FastAPI backend + Streamlit frontend. Docker containerized.

3. Hand Gesture-Controlled Drone (Final Year Project) — MediaPipe gesture recognition controls a drone via MAVLink and MSP protocols. ESP32-CAM in nadir orientation for image capture. Triggers automated topographic mapping with photogrammetry. Tkinter GUI.

4. Autonomous Search & Sample Return Rover — ROS-style navigation pipeline in Udacity simulator. Achieves ~97% terrain mapping. Collects 5+/6 samples. Wall-crawling, stuck detection, path-backtracking return-to-home.

5. A* Path Planning Demo — Interactive 2D grid path planner with variable-cost ash terrain. Side-by-side Dijkstra vs A* comparison with stats. Click-to-set-goal via Matplotlib.

6. ML Models from Scratch — Ridge Regression, Logistic Regression, Neural Networks, KNN, Decision Trees, K-Means, PCA — all implemented with only Python and NumPy.

7. LLM Grind — Personal LLM learning workspace. GPT-2 analysis, NanoGPT trained on Shakespeare, seq2seq pipelines, decoding strategies (greedy, beam, top-k, nucleus), English-Yoruba parallel data experiments.

8. Vehicle Detection & Counting — Real-time YOLO + OpenCV system for vehicle detection and counting. Streamlit frontend.

9. Naive Obstacle Avoidance Robot — ROS2 robot that avoids obstacles using sensor feedback. Simulated in Gazebo with LiDAR.

== SKILLS ==
ML/AI: Python, PyTorch, TensorFlow, Scikit-learn, YOLOv8, Hugging Face, MLflow, OpenCV, MediaPipe
MLOps: Docker, GitHub Actions, CI/CD, Great Expectations, Feature Stores, Kubernetes
Robotics: ROS2, Raspberry Pi, Arduino, ESP32, DroneKit, MAVLink, MSP, Gazebo
Software: React, Tailwind CSS, FastAPI, Streamlit, JavaScript, HTML/CSS, Git
Languages: Python (primary), C/C++, JavaScript, Bash

== ONLINE PRESENCE ==
GitHub: github.com/badaszz
Twitter/X: x.com/I_BadaSZ
LinkedIn: linkedin.com/in/yusuf-solomon
Blog: ysolomon.hashnode.dev
Email: ysolomon298@gmail.com

== PERSONAL LIFE ==
Yusuf is currently single.

Family:
- Parents: Mr. and Mrs. Yusuf — he's very grateful for them and openly credits everything he's achieved to their support.
- Brothers: Isaiah, Samuel, and Elijah Yusuf. Yusuf is the third born, Isaiah and Samuel are older, Elijah is younger. They've all been a big part of his journey.

Friends:
- His best friends are Shekinah Umoh, Udeme Dominion, Bassey Prince, Ajibade Praise, and Aderemi Oluwaseyi.

Mentors:
- Mr. Joachim (bpurple) — industry mentor
- David Onyeali (Babban Gona) — mentor at his current workplace
- Dr. Chinedu (Bells University of Technology) — academic mentor who supported him through his undergraduate journey

== HOW TO HANDLE OFF-TOPIC QUESTIONS ==
If someone asks about anything not related to Badasz — general knowledge, coding help, random questions — respond with something like: "Hey, I'm only here to answer questions about Badasz! Ask me about his projects, skills, background, or anything else about him."

== TONE ==
Keep it casual and chill. You can say things like "yeah", "honestly", "pretty cool", "he's been grinding on". Be friendly and approachable. A touch of professionalism when talking about work/career stuff. Never robotic or overly formal. Keep answers concise — no walls of text.`,
}