export const projectsData = {
  title: "My Projects",
  description: "Here's some stuff I've been working on - a mix of my favorite class projects and research, and personal projects in signal analysis, computational neuroscience, ML, and more!",

  projects: [
    {
      title: "Comparing Supervised Learning Algorithms",
      description: "A comparison of various supervised learning algorithms on different datasets to evaluate their performance and applicability.",
      abstract: "This project involved implementing and comparing multiple supervised learning algorithms including decision trees, random forests, support vector machines, and neural networks. Performance metrics such as accuracy, precision, recall, and F1-score were used to evaluate each algorithm across diverse datasets with varying characteristics. The analysis provided insights into the strengths and weaknesses of each approach and their suitability for different problem domains.",
      tags: ["Machine Learning", "Python", "scikit-learn", "Classification", "Model Comparison"],
      links: []
    },
    {
      title: "Biometric Integration for Biobehavioral Phenotyping in Early Childhood",
      description: "Integrated multimodal biometric data to characterize behavioral patterns and developmental trajectories in young children.",
      abstract: "This research project focused on developing a comprehensive framework for biobehavioral phenotyping in early childhood by integrating multiple biometric data streams including heart rate variability, electrodermal activity, and movement patterns. The goal was to identify distinct behavioral phenotypes and their associations with developmental outcomes. Advanced signal processing and machine learning techniques were employed to extract meaningful features and create predictive models that could inform early intervention strategies.",
      tags: ["Biometrics", "Signal Processing", "Childhood Development", "Data Integration", "Python"],
      links: []
    },
    {
      title: "Zebrafish Multiscale Dynamics Analysis",
      description: "Translated mathematical formulations from a neuroscience paper into a working implementation of the Iterative Coarse Graining (ICG) algorithm. Applied the method to larval zebrafish neural activity data to uncover multiscale spatial structure across brain regions.",
      abstract: "This computational neuroscience project involved implementing the Iterative Coarse Graining (ICG) algorithm from recent literature to analyze neural dynamics at multiple spatial scales. Working with calcium imaging data from larval zebrafish, the analysis revealed hierarchical organization of neural activity patterns across different brain regions. The implementation required careful translation of mathematical concepts into efficient Python code, validation against published results, and adaptation to handle large-scale neural recordings. The findings contribute to understanding how neural computations are distributed across spatial scales in the developing brain.",
      tags: ["Python", "Multiscale Analysis", "Computational Neuroscience"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/zebrafishProject/tree/main" }
      ]
    },
    {
      title: "EEG-based Attention Analysis",
      description: "Designed and conducted EEG experiments to examine attentional fluctuations during task performance. Preprocessed EEG data with bandpass filtering and epoching, applied frequency domain analysis, and identified attention-related brainwave patterns.",
      abstract: "This project investigated the neural correlates of attention through EEG recordings during cognitive tasks. The experimental design included carefully controlled attention-demanding tasks while recording brain activity from multiple scalp locations. Signal processing pipelines were developed to remove artifacts, perform time-frequency analysis, and extract features related to attentional states. Machine learning models were trained to classify attention levels from EEG features, achieving significant accuracy and revealing the importance of specific frequency bands and brain regions in attentional control. The findings have implications for brain-computer interfaces and understanding attention deficits.",
      tags: ["Python", "Signal Processing", "EEG", "Experimental Design", "BCI"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/cogs_189_project" },
        { text: "Presentation", href: "/projects/cogs189_final_project.pdf" }
      ]
    },
    {
      title: "Sarcastic Headline Generator",
      description: "An exploration of whether character-level RNNs can learn sarcasm using The Onion dataset. Developed multiple neural network models (RNN, LSTM, GRU) to generate snarky headlines, investigating machine learning's ability to understand and produce sarcastic text.",
      abstract: "This natural language processing project tackled the challenging problem of generating sarcastic text using recurrent neural networks. Using a dataset of satirical headlines from The Onion, multiple architectures (vanilla RNN, LSTM, and GRU) were implemented and compared for their ability to capture the linguistic patterns of sarcasm. The project explored character-level modeling, which allowed the networks to learn both vocabulary and writing style simultaneously. Extensive hyperparameter tuning and architecture experiments revealed insights into what linguistic features neural networks capture when learning humor and sarcasm. The generated headlines demonstrated varying degrees of coherence and humor, highlighting both the potential and limitations of current deep learning approaches for creative text generation.",
      tags: ["Python", "RNN", "Natural Language Processing", "Sequence Modeling"],
      links: [
        { text: "Code", href: "https://github.com/seemarida/cogs185_final_project" },
        { text: "Report PDF", href: "/projects/cogs_185_final_report.pdf" }
      ]
    }
  ]
};