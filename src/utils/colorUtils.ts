// Utility functions for working with colors in the site

// Types for color categories
export type TagColorOptions = {
  bg: string;  
  hover: string;
  text: string;
}

export type ActiveTagColorOptions = {
  bg: string;
  text: string;
  hover: string;
}

export type LinkColorOptions = {
  default: string;
  hover: string;
}

// Get color scheme for tags based on tag name
export function getTagColor(tag: string): TagColorOptions {
  // Available color pairs (background, hover, text color)
  const colorPairs = [
    { bg: 'bg-light-pink', hover: 'hover:bg-soft-blue', text: 'text-gray-700 hover:text-white' },
    { bg: 'bg-tag-green', hover: 'hover:bg-tag-green-hover', text: 'text-gray-700 hover:text-white' },
    { bg: 'bg-tag-yellow', hover: 'hover:bg-tag-yellow-hover', text: 'text-gray-700 hover:text-white' },
    { bg: 'bg-tag-orange', hover: 'hover:bg-tag-orange-hover', text: 'text-gray-700 hover:text-white' },
    { bg: 'bg-tag-purple', hover: 'hover:bg-tag-purple-hover', text: 'text-gray-700 hover:text-white' },
    { bg: 'bg-tag-teal', hover: 'hover:bg-tag-teal-hover', text: 'text-gray-700 hover:text-white' },
  ];

  // Simple hash function to consistently map a string to a number
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = ((hash << 5) - hash) + tag.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }

  // Get absolute value and mod by number of colors
  const colorIndex = Math.abs(hash) % colorPairs.length;
  return colorPairs[colorIndex];
}

// For active/selected tags
export function getActiveTagColor(tag: string): ActiveTagColorOptions {
  const { hover } = getTagColor(tag);
  // Extract the color name without the 'hover:bg-' prefix
  const bgClass = hover.replace('hover:bg-', 'bg-');
  return { bg: bgClass, text: 'text-white', hover: hover };
}

// Standard link colors for consistency
export const linkColors: Record<string, LinkColorOptions> = {
  primary: {
    default: 'text-gray-800',
    hover: 'hover:text-soft-blue'
  },
  secondary: {
    default: 'text-gray-600',
    hover: 'hover:text-muted-rose'
  },
  navigation: {
    default: 'text-gray-700',
    hover: 'hover:text-soft-blue'
  },
  footer: {
    default: 'text-gray-500',
    hover: 'hover:text-light-pink'
  },
  inline: {
    default: 'text-gray-700 underline decoration-gray-300',
    hover: 'hover:text-muted-rose hover:decoration-muted-rose'
  }
}