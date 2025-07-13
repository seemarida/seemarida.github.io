# Data Files Documentation

This directory contains structured data files that power the website content. Editing these files is the primary way to update site content.

## File Structure

### siteConfig.ts

Global site configuration settings.

```javascript
{
  name: string,            // Site owner's name
  title: string,           // Default page title
  description: string,     // Default meta description
  author: string,          // Author name
  institution: string,     // Institution or affiliation
  socialLinks: {           // Social media links
    github: string,        // GitHub URL
    twitter: string,       // Twitter URL
    linkedin: string,      // LinkedIn URL
    googleScholar: string  // Google Scholar URL
  },
  quote: {                 // Quote in footer
    text: string,          // Quote text
    author: string         // Quote author
  }
}
```

### navigation.ts

Site navigation menu items.

```javascript
[
  {
    href: string,          // URL path
    text: string           // Navigation link text
  },
  // Additional menu items...
]
```

### homeContent.ts

Content for the home page.

```javascript
{
  hero: {
    title: string,         // Main heading
    subtitle: string,      // Subheading
    quote: {
      text: string,        // Quote text
      author: string       // Quote author
    },
    ctaButtons: [
      {
        text: string,      // Button text
        href: string,      // Button link
        type: string       // "primary" or "secondary"
      },
      // Additional buttons...
    ]
  },
  
  interests: {
    title: string,         // Section title
    items: [
      {
        title: string,     // Interest title
        description: string, // Description
        icon: string       // Icon name from icon library
      },
      // Additional interests...
    ]
  },
  
  researchExperience: {
    title: string,         // Section title
    description: string,   // Description of research experience
    labName: string,       // Name of the research lab
    position: string,      // Position title
    period: string         // Time period of involvement
  }
}
```

## Adding New Data Files

When creating new data files, follow these steps:

1. Create a new file in this directory with a descriptive name
2. Export a well-structured object or array
3. Import the data in the relevant component or page
4. Update this README to document the new data structure

## Best Practices

- Keep all user-facing content in data files
- Use semantic naming for properties
- Document complex data structures
- Maintain consistent formatting
- Use JSDoc comments for complex properties