export const projectsData = {
  title: "My Projects",
  description: "Here's some stuff I've been working on - a mix of my favorite class projects and personal work in computational neuroscience, ML, and more.",

  projects: [
    // {
    //   title: "Larval Zebrafish Neural Activity Analysis",
    //   description: "Analyzed neural activity datasets in larval zebrafish to investigate processing patterns across brain regions. Performed data wrangling, PCA, and k-means clustering using Python to classify and visualize brain activity patterns.",
    //   tags: ["Python", "pandas", "scikit-learn", "matplotlib", "numpy", "PCA", "k-means"],
    //   links: [
    //     { text: "Code", href: "#" },
    //     { text: "Report", href: "#" }
    //   ]
    // },
    {
      title: "Zebrafish Multiscale Dynamics Analysis",
      description: "Translated mathematical formulations from a neuroscience paper into a working implementation of the Iterative Coarse Graining (ICG) algorithm. Applied the method to larval zebrafish neural activity data to uncover multiscale spatial structure across brain regions.",
      tags: ["Python", "Multiscale Analysis", "Computational Neuroscience"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/zebrafishProject/tree/main" }
      ]
    },
    {
      title: "EEG-based Attention Analysis",
      description: "Designed and conducted EEG experiments to examine attentional fluctuations during task performance. Preprocessed EEG data with bandpass filtering and epoching, applied frequency domain analysis, and identified attention-related brainwave patterns.",
      tags: ["Python", "Signal Processing", "EEG", "Experimental Design", "BCI"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/cogs_189_project" },
        { text: "Presentation", href: "/projects/cogs189_final_project.pdf" }
      ]
    },
    // {
    //   title: "Anticipatory Activity in Songbird Vocal Motor Nucleus",
    //   description: "Analyzed spiking activity in a vocal motor nucleus of songbirds to investigate anticipatory patterns during song production. Compared firing rates pre- and post-song onset using time-locked spike data and statistical visualizations.",
    //   tags: ["Python", "Spike Train Analysis", "Neuroscience", "Statistical Analysis"],
    //   links: [
    //     { text: "Code", href: "#" },
    //     { text: "Analysis Report", href: "#" }
    //   ]
    // },
    {
      title: "Sarcastic Headline Generator",
      description: "An exploration of whether character-level RNNs can learn sarcasm using The Onion dataset. Developed multiple neural network models (RNN, LSTM, GRU) to generate snarky headlines, investigating machine learning's ability to understand and produce sarcastic text.",
      tags: ["Python", "RNN", "Natural Language Processing", "Sequence Modeling"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/cogs185_final_project" },
        { text: "Report PDF", href: "/projects/cogs_185_final_report.pdf" }
      ]
    }
  ]
};