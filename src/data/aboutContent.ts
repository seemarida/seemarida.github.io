export const aboutContent = {
  pageTitle: "About Me",
  pageDescription: "About Seema - Cognitive Science student at UCSD",

  profile: {
    name: "Seema Rida",
    title: "Cognitive Science Student",
    bio: [
      "I'm a Cognitive Science student at UC San Diego, specializing in Machine Learning and Neural Computation. I'm currently a research assistant at the Chiba Lab, where I explore brain-computer interfaces and real-time neurotechnology for behavior analysis. I'm especially interested in building tools that help us understand the brain and behavior—blending neuroscience, AI, and human-computer interaction.",
    ],
    imagePlaceholder: "SR",
    email: "srida@ucsd.edu",
    buttons: [
      {
        text: "Connect with me",
        href: "mailto:srida@ucsd.edu",
        type: "primary"
      },
      // {
      //   text: "See my research",
      //   href: "/research",
      //   type: "secondary"
      // }
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "B.S. in Cognitive Science Spec. Machine Learning and Neural Computation (in progress)",
        institution: "University of California, San Diego",
        period: "2022-Present",
        minor: "Computer Science"
      }
      // Add more education items as needed
    ]
  },

  skills: {
    title: "Skills",
    techniques: {
      title: "Technical",
      items: [
        "Python (NumPy, SciPy, Pandas, scikit-learn, Matplotlib) & Jupyter Notebooks",
        "EEG Data Collection & Analysis",
        "Machine Learning & Signal Processing",
        "Network Configuration & Synchronization (PTP, LSL)",
        "Embedded Systems (ESP32, Arduino, EmotiBit, PlatformIO)",
        "Real-Time Data Logging & Parsing",
        "Sensor Network Integration (EmotiBit, Cameras, Mics)",
      ]
    },
    technologies: {
      title: "Research",
      items: [
        "Brain-Computer Interface (BCI) & EEG Experiment Design",
        "Cognitive Task Implementation",
        "Data Visualization",
        "Technical Writing & Presentations",
      ]
    }
  },

  philosophy: {
    title: "Personal Philosophy",
    quote: "I believe that understanding the brain is not just about mapping neurons and circuits—it's about understanding what makes us human. The mysteries of consciousness, perception, and cognition are puzzles I'm determined to help solve, one synapse at a time.",
    collaborationMessage: "I'm always looking for collaboration opportunities with fellow researchers. If you share similar interests, let's connect!"
  }
};