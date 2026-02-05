import { socialLinks } from './siteConfig.js';

export const homeContent = {
  hero: {
    title: "hi, i'm seema 🕺",
    subtitle: "cogsci student • researcher • brain nerd",
    description: "I'm a senior at UCSD majoring in Cognitive Science, specializing in Machine Learning and Neural Computation. I'm also a research assistant at the Chiba Lab! I'm interested in how our brains process learning, speech, and language, and in developing neurotechnology and BCIs.",
    currentlyDoing: "Currently working with Professor Andrea Chiba, developing a time-synchronized embedded system to analyze student behavior and wellbeing in classroom environments through multimodal data collection.",
    // "I'm in the UC Scholars Research program working with Dr. Andrea Chiba, developing a time-synchronized embedded system to analyze student behavior and wellbeing in classroom environments through multimodal data collection."
    // "I was recently accepted into the Cognitive Science Honors Program and will be mentored by Professors Andrea Chiba and Virginia de Sa. I’m continuing my research in the Chiba Lab and am currently exploring job opportunities in neurotech, biotech, machine learning/data science, and UX."
    personality: "When I’m not at the lab, I’m playing piano, collecting CDs, bench-pressing my heart out, or creating yet another Spotify playlist.",
    ctaButtons: [
      {
        text: "See what I'm building",
        href: "/projects",
        type: "primary"
      },
      {
        text: "Let's connect!",
        href: "mailto:srida@ucsd.edu",
        type: "secondary"
      }
    ]
  },

  projects: [
    {
      slug: "optical-illusions-clip",
      title: "Optical Illusions in CLIP",
      description: "Analyzed how CLIP encodes perceptual ambiguity using the rabbit-duck illusion, designed systematic image perturbations to evaluate model bias, and compared outputs against human perception data.",
      fields: ["Computer Vision", "Machine Learning", "Perceptual AI", "Experimental Design"],
      image: "/projects/optical-illusions-clip.png"
    },
    {
      slug: "biobehavioral-phenotyping",
      title: "Biobehavioral Phenotyping in Classrooms",
      description: "Time-locked physiology to classroom events, compared autonomic responses across tasks, and used biometrics to quantify engagement, stress regulation, and individual differences.",
      fields: ["Behavioral Research", "Autonomic Physiology", "Data Analysis", "Child Development"],
      image: "/projects/biobehavioral-phenotyping.png"
    },
    {
      slug: "biosignal-pipeline",
      title: "Biosignal Processing Pipeline",
      description: "Developed a Python pipeline for cleaning and extracting physiological features from noisy wearable data, including motion artifact removal and PPG/EDA filtering for HR and HRV extraction.",
      fields: ["Signal Processing", "Wearables", "Data Engineering", "Python"],
      image: "/projects/biosignal-pipeline.png"
    },
    {
      slug: "eeg-attention",
      title: "EEG-based Attention Classification",
      description: "Designed an EEG-based attention classification pipeline for an adaptive neurofeedback system using real-time OpenBCI data, signal preprocessing, and frequency-domain analysis.",
      fields: ["Neuroscience", "Signal Processing", "BCI", "Real-time Systems"],
      image: "/projects/eeg-attention.png"
    },
    {
      slug: "sarcastic-headlines",
      title: "Sarcastic Headline Generator",
      description: "Explored whether character-level RNNs can learn sarcasm using The Onion dataset with RNN, LSTM, and GRU architectures.",
      fields: ["NLP", "Deep Learning", "RNN / LSTM", "Text Generation"],
      image: null
    },
    {
      slug: "supervised-learning-comparison",
      title: "Comparing Supervised Learning Algorithms",
      description: "Built and evaluated logistic regression, KNN, and SVM classifiers on multiple datasets using cross-validation, confusion matrices, and performance visualizations.",
      fields: ["Machine Learning", "Classification", "Model Evaluation", "Python"],
      image: null
    }
  ],

  favorites: {
    song: {
      title: "What I've been listening to:",
      details: {
        title: "You Make Loving Fun",
        artist: "Fleetwood Mac",
        albumArt: "/images/fleetwood.jpg"
      }
    },
    photo: {
      title: "What I've been up to:",
      details: {
        imagePath: "/images/IMG_6871.jpeg",
        caption: "Beach sunsets"
      }
    }
  },

  socialLinks: {
    title: "Find me elsewhere",
    description: "Let's connect!",
    links: socialLinks
  },

  researchExperience: {
    title: "Current Research",
    description: "In the UC Scholars Summer Research program working at the Chiba Lab on a project about something",
    labName: "Chiba Lab",
    position: "UC Scholars Summer Research Program",
    period: "Summer 2025"
  }
};