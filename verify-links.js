// Link and resource verification script
import { projects } from './src/data/workData.ts';
import * as fs from 'fs';
import * as path from 'path';

const errors = [];
const warnings = [];

console.log('Verifying workData.ts resources...\n');

projects.forEach(project => {
  console.log(`Checking project: ${project.slug} (${project.label})`);

  project.resources.forEach(resource => {
    // Skip external URLs (code links)
    if (resource.href.startsWith('http://') || resource.href.startsWith('https://')) {
      console.log(`  ✓ External link: ${resource.href}`);
      return;
    }

    // Check local file paths
    const filePath = path.join('./public', resource.href);
    if (!fs.existsSync(filePath)) {
      errors.push(`  ✗ Missing file: ${resource.href} (project: ${project.slug})`);
    } else {
      console.log(`  ✓ ${resource.href}`);
    }

    // Check thumbnails
    if (resource.thumbnail) {
      const thumbPath = path.join('./public', resource.thumbnail);
      if (!fs.existsSync(thumbPath)) {
        errors.push(`  ✗ Missing thumbnail: ${resource.thumbnail} (project: ${project.slug})`);
      }
    }
  });

  // Check project thumbnail
  if (project.thumbnail) {
    const thumbPath = path.join('./public', project.thumbnail);
    if (!fs.existsSync(thumbPath)) {
      errors.push(`  ✗ Missing project thumbnail: ${project.thumbnail} (project: ${project.slug})`);
    } else {
      console.log(`  ✓ Project thumbnail: ${project.thumbnail}`);
    }
  }

  console.log('');
});

console.log('\n=== VERIFICATION SUMMARY ===\n');

if (errors.length > 0) {
  console.log('ERRORS:');
  errors.forEach(err => console.log(err));
  console.log('');
}

if (warnings.length > 0) {
  console.log('WARNINGS:');
  warnings.forEach(warn => console.log(warn));
  console.log('');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✓ All resources verified successfully!');
} else {
  console.log(`Found ${errors.length} error(s) and ${warnings.length} warning(s)`);
  process.exit(1);
}
