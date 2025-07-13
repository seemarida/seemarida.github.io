# Blog Content

This directory contains all blog posts for the "Thoughts" section of the website. Each post is written in Markdown format with frontmatter for metadata.

## Creating a New Blog Post

1. Create a new `.md` file in this directory with a URL-friendly filename (e.g., `my-new-post.md`)
2. Add the required frontmatter (metadata) at the top of the file
3. Write your post content in Markdown format

## Frontmatter Structure

Every blog post must include frontmatter at the top of the file, enclosed by three dashes (`---`):

```markdown
---
title: "Your Post Title"
description: "A brief description of your post (used in previews and SEO)"
pubDate: 2024-04-25
tags: ["tag1", "tag2", "tag3"]
image: "/images/optional-image.jpg"
featured: false
---

# Your Post Content

Write your post content here using Markdown...
```

### Required Fields

- `title`: The title of your blog post
- `description`: A brief summary (1-2 sentences)
- `pubDate`: Publication date in YYYY-MM-DD format
- `tags`: An array of relevant tags (used for categorization)

### Optional Fields

- `updatedDate`: Date when the post was last updated (YYYY-MM-DD format)
- `image`: Path to a featured image (relative to the public directory)
- `featured`: Boolean flag to mark post as featured (displayed prominently)

## Markdown Features

You can use all standard Markdown features in your posts:

- **Headings** (# H1, ## H2, etc.)
- **Formatting** (*italic*, **bold**, ~~strikethrough~~)
- **Lists** (ordered and unordered)
- **Links** ([text](url))
- **Images** (![alt text](image url))
- **Code blocks** (inline `code` and ```blocked code```)
- **Blockquotes** (> quoted text)
- **Tables**

## Examples

See the existing blog posts in this directory for examples of proper formatting and structure.