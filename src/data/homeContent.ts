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
      slug: "eeg-attention",
      title: "EEG-based Attention Analysis",
      description: "Designed EEG experiments to examine attentional fluctuations, applied frequency domain analysis, and identified attention-related brainwave patterns.",
      image: "/projects/eeg-attention.png"
    },
    {
      slug: "biometric-integration",
      title: "Biometric Integration",
      description: "Integrated multimodal biometric data to characterize behavioral patterns and developmental trajectories in young children.",
      image: "/projects/biometric-integration.png"
    },
    {
      slug: "zebrafish-dynamics",
      title: "Zebrafish Multiscale Dynamics",
      description: "Implemented the Iterative Coarse Graining algorithm to uncover multiscale spatial structure across larval zebrafish brain regions.",
      image: null
    },
    {
      slug: "sarcastic-headlines",
      title: "Sarcastic Headline Generator",
      description: "Explored whether character-level RNNs can learn sarcasm using The Onion dataset with RNN, LSTM, and GRU architectures.",
      image: null
    }
  ],

  interests: {
    title: "My Interests",
    items: [
      {
        title: "Brain-Computer Interfaces",
        description: "Example",
        icon: "brain"
      },
      {
        title: "Science of Learning",
        description: "Example",
        icon: "beaker"
      },
      {
        title: "Computational Neuroscience",
        description: "Example",
        icon: "chip"
      }
    ]
  },

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