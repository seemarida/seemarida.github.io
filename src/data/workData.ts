export interface Resource {
  type: 'poster' | 'paper' | 'slides' | 'photos' | 'demo' | 'code' | 'video' | 'other';
  label: string;
  href: string;
  thumbnail?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  link?: string;
  thumbnail?: string;
  resources?: Resource[];
}

export interface WorkCategory {
  slug: string;
  name: string;
  projects: Project[];
}

export const workCategories: WorkCategory[] = [
  {
    slug: 'wearables-physiology',
    name: 'wearables and physiology',
    projects: [
      {
        title: 'Movement Behavior in Children using Wearable Biosensors in the Classroom',
        date: 'September 2025 – Present',
        description: 'Using wearable biosensors to track movement patterns in 4-6 year olds across a 7-week summer camp, capturing physiological signals during real classroom activities to understand how movement reflects internal and biobehavioral states.',
        link: '/research/biosensor-movement',
        thumbnail: '/emotibit.jpeg',
        resources: [
          {
            type: 'photos',
            label: 'emotibit.jpeg',
            href: '/emotibit.jpeg',
            thumbnail: '/emotibit.jpeg'
          },
          {
            type: 'demo',
            label: 'biosensor-monitor.html',
            href: '/projects/biosensor-monitor.html'
          }
        ]
      },
      {
        title: 'PPG Signal Accuracy Across Skin Tones',
        date: 'January 2026 – Present',
        description: 'Investigating whether wearable biosensors work equally well across skin tones, and what that means for the future of inclusive biosensing.',
        link: '/research/ppg-skin-tone',
        thumbnail: '/thesis_photo.png',
        resources: [
          {
            type: 'photos',
            label: 'thesis_photo.png',
            href: '/thesis_photo.png',
            thumbnail: '/thesis_photo.png'
          }
        ]
      },
      {
        title: 'Motion Artifact Removal Pipeline',
        date: 'September 2025 – Present',
        description: 'Real-world biosensor data is messy. I built a pipeline to make it usable.',
        link: '/projects/biosignal-pipeline',
        thumbnail: '/biosignal-pipeline.png',
        resources: [
          {
            type: 'demo',
            label: 'biosignal-demo.html',
            href: '/biosignal-demo.html'
          }
        ]
      }
    ]
  },
  {
    slug: 'computational-ml',
    name: 'computational and ml',
    projects: [
      {
        title: 'Optical Illusions in CLIP',
        date: 'September 2025 – December 2025',
        description: 'We bias our perception without realizing it. I ran experiments to see if CLIP does the same thing, testing whether vision models experience bistable perception like humans do.',
        link: '/research/optical-illusions-clip',
        thumbnail: '/optical-illusions-clip.png',
        resources: [
          {
            type: 'paper',
            label: 'cogs_185_final_report.pdf',
            href: '/projects/cogs_185_final_report.pdf'
          },
          {
            type: 'demo',
            label: 'clip_embedding_demo.html',
            href: '/projects/clip_embedding_demo.html'
          },
          {
            type: 'demo',
            label: 'clip_rabbit_duck.html',
            href: '/projects/clip_rabbit_duck.html'
          }
        ]
      },
      {
        title: 'Sarcastic Headline Generator',
        date: 'September 2024 – December 2024',
        description: 'Can a character-level RNN learn sarcasm? I trained three architectures on The Onion to find out, comparing vanilla RNN, LSTM, and GRU performance on context-dependent irony.',
        link: '/research/sarcastic-headlines',
        resources: [
          {
            type: 'demo',
            label: 'sarcasm_demo.html',
            href: '/projects/sarcasm_demo.html'
          }
        ]
      },
      {
        title: 'Iterative Coarse-Graining of Neural Correlations',
        date: 'March 2023 – Present',
        description: 'Understanding multiscale neural structure by implementing the ICG algorithm from Munn et al. (2024). How do neurons look uncorrelated individually but coordinated as populations?',
        link: '/research/icg-neural-correlations',
        resources: []
      },
      {
        title: 'EEG-based Attention Classification',
        date: 'January 2025 – March 2025',
        description: 'What does attention look like in EEG, and can you build a classifier around it? Exploring whether the Pomodoro technique\'s fixed schedule works for everyone, or if we can detect when someone is truly in flow.',
        link: '/research/eeg-attention',
        thumbnail: '/attention.png',
        resources: [
          {
            type: 'paper',
            label: 'cogs189_final_project.pdf',
            href: '/projects/cogs189_final_project.pdf'
          },
          {
            type: 'demo',
            label: 'eeg-channels.html',
            href: '/eeg-channels.html'
          }
        ]
      }
    ]
  }
];
