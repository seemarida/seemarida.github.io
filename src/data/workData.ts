export interface Resource {
  type: 'poster' | 'paper' | 'slides' | 'photos' | 'demo' | 'code' | 'video' | 'other';
  label: string;
  href: string;
  thumbnail?: string;
}

export interface Project {
  slug: string;
  label: string;
  title: string;
  category: 'wearables' | 'computational';
  date: string;
  description: string;
  thumbnail?: string;
  resources: Resource[];
}

export const projects: Project[] = [
  {
    slug: 'children-movement',
    label: "children's movement in classrooms",
    title: 'Movement Behavior in Children using Wearable Biosensors in the Classroom',
    category: 'wearables',
    date: 'September 2025 – Present',
    description: 'Using wearable biosensors to track movement patterns in 4-6 year olds across a 7-week summer camp, capturing physiological signals during real classroom activities to understand how movement reflects internal and biobehavioral states.',
    thumbnail: '/emotibit.jpeg',
    resources: [
      {
        type: 'photos',
        label: 'sensor diagram (vendor)',
        href: '/emotibit.jpeg',
        thumbnail: '/emotibit.jpeg'
      },
      {
        type: 'photos',
        label: 'thesis_photo.png',
        href: '/thesis_photo.png',
        thumbnail: '/thesis_photo.png'
      }
    ]
  },
  {
    slug: 'ppg-skin-tones',
    label: 'ppg accuracy across skin tones',
    title: 'PPG Signal Accuracy Across Skin Tones',
    category: 'wearables',
    date: 'January 2026 – Present',
    description: 'Investigating whether wearable biosensors work equally well across skin tones, and what that means for the future of inclusive biosensing.',
    resources: []
  },
  {
    slug: 'biosignal-pipeline',
    label: 'biosignal cleaning pipeline',
    title: 'Motion Artifact Removal Pipeline',
    category: 'wearables',
    date: 'September 2025 – Present',
    description: 'Real-world biosensor data is messy. I built a pipeline to make it usable.',
    thumbnail: '/biosignal-pipeline.png',
    resources: [
      {
        type: 'photos',
        label: 'biosignal-pipeline.png',
        href: '/biosignal-pipeline.png',
        thumbnail: '/biosignal-pipeline.png'
      }
    ]
  },
  {
    slug: 'eeg-attention',
    label: 'detecting attention with eeg',
    title: 'EEG-based Attention Classification',
    category: 'computational',
    date: 'January 2025 – March 2025',
    description: 'What does attention look like in EEG, and can you build a classifier around it? Exploring whether the Pomodoro technique\'s fixed schedule works for everyone, or if we can detect when someone is truly in flow.',
    thumbnail: '/attention.png',
    resources: [
      {
        type: 'slides',
        label: 'presentation.pdf',
        href: '/projects/cogs189_final_project.pdf'
      },
      {
        type: 'code',
        label: 'code',
        href: 'https://github.com/seemarida/cogs_189_project'
      },
      {
        type: 'photos',
        label: 'experiment.png',
        href: '/experiment.png',
        thumbnail: '/experiment.png'
      },
      {
        type: 'photos',
        label: 'freq.png',
        href: '/freq.png',
        thumbnail: '/freq.png'
      },
      {
        type: 'photos',
        label: 'channels.png',
        href: '/channels.png',
        thumbnail: '/channels.png'
      }
    ]
  },
  {
    slug: 'clip-illusions',
    label: 'optical illusions in clip',
    title: 'Optical Illusions in CLIP',
    category: 'computational',
    date: 'September 2025 – December 2025',
    description: 'We bias our perception without realizing it. I ran experiments to see if CLIP does the same thing, testing whether vision models experience bistable perception like humans do.',
    thumbnail: '/optical-illusions-clip.png',
    resources: [
      {
        type: 'code',
        label: 'code',
        href: 'https://github.com/seemarida/COGS118B_FinalProject_Team21'
      }
    ]
  },
  {
    slug: 'rnn-sarcasm',
    label: 'can an rnn learn sarcasm',
    title: 'Sarcastic Headline Generator',
    category: 'computational',
    date: 'September 2024 – December 2024',
    description: 'Can a character-level RNN learn sarcasm? I trained three architectures on The Onion to find out, comparing vanilla RNN, LSTM, and GRU performance on context-dependent irony.',
    resources: [
      {
        type: 'paper',
        label: 'report.pdf',
        href: '/projects/cogs_185_final_report.pdf'
      },
      {
        type: 'code',
        label: 'code',
        href: 'https://github.com/seemarida/cogs185_final_project'
      }
    ]
  },
  {
    slug: 'icg-neural-correlations',
    label: 'coarse-graining neural correlations',
    title: 'Iterative Coarse-Graining of Neural Correlations',
    category: 'computational',
    date: 'March 2023 – 2025',
    description: 'Understanding multiscale neural structure by implementing the ICG algorithm from Munn et al. (2024). How do neurons look uncorrelated individually but coordinated as populations?',
    resources: [
      {
        type: 'code',
        label: 'code',
        href: 'https://github.com/seemarida/zebrafishProject'
      }
    ]
  }
];
