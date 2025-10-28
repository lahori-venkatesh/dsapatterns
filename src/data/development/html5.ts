import { Problem } from '../../types';

export const html5Problems: Problem[] = [
  {
    id: 'html5-semantic-tags',
    title: 'HTML5 Semantic Tags - Complete Guide',
    difficulty: 'Easy' as any,
    category: 'HTML5',
    description: 'Master semantic HTML tags, their purpose, and best practices',
    answer: `# HTML5 Semantic Tags

## What are Semantic Tags?

Semantic HTML uses meaningful tags that describe the content they contain, making code more readable for developers and machines (search engines, screen readers).

## Core Semantic Tags

### Document Structure
\`\`\`html
<header>    <!-- Site/section header -->
<nav>       <!-- Navigation links -->
<main>      <!-- Main content (only one per page) -->
<article>   <!-- Self-contained content (blog post, news article) -->
<section>   <!-- Thematic grouping of content -->
<aside>     <!-- Sidebar, related content -->
<footer>    <!-- Site/section footer -->
\`\`\`

### Content Semantics
\`\`\`html
<figure>    <!-- Image with caption -->
  <img src="chart.png" alt="Sales chart">
  <figcaption>Q4 Sales Report</figcaption>
</figure>

<time datetime="2024-03-15">March 15, 2024</time>
<mark>Highlighted text</mark>
<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>
\`\`\`

## Benefits

1. **SEO**: Search engines better understand page structure
2. **Accessibility**: Screen readers navigate more effectively
3. **Maintainability**: Code is self-documenting
4. **Future-proof**: Works with new devices/technologies

## Example Structure
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Post</title>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <time datetime="2024-03-15">March 15, 2024</time>
      <p>Content...</p>
    </article>

    <aside>
      <h3>Related Posts</h3>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 My Blog</p>
  </footer>
</body>
</html>
\`\`\`

## Anti-patterns
❌ Don't use \`<div>\` for everything
❌ Don't use \`<header>\` inside \`<header>\`
✅ Use semantic tags for structure
✅ Use \`<div>\` only for styling/layout`,
    topics: ['HTML5', 'Semantic HTML', 'Web Standards', 'Accessibility'],
    estimatedTime: 20,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html5-forms-validation',
    title: 'HTML5 Forms & Validation',
    difficulty: 'Easy' as any,
    category: 'HTML5',
    description: 'Master HTML5 form elements and built-in validation',
    answer: `# HTML5 Forms & Validation

## Form Input Types

\`\`\`html
<input type="text">        <!-- Plain text -->
<input type="email">       <!-- Email validation -->
<input type="password">    <!-- Password (hidden) -->
<input type="number">      <!-- Numeric input -->
<input type="tel">         <!-- Telephone -->
<input type="url">         <!-- URL validation -->
<input type="date">        <!-- Date picker -->
<input type="time">        <!-- Time picker -->
<input type="color">       <!-- Color picker -->
<input type="range">       <!-- Slider -->
<input type="file">        <!-- File upload -->
<input type="search">      <!-- Search box -->
\`\`\`

## Validation Attributes

\`\`\`html
<form>
  <!-- Required field -->
  <input type="text" required>

  <!-- Min/Max length -->
  <input type="text" minlength="3" maxlength="20">

  <!-- Min/Max value (numbers) -->
  <input type="number" min="1" max="100">

  <!-- Pattern matching -->
  <input type="text" pattern="[A-Za-z]{3,}">

  <!-- Custom validation message -->
  <input type="email" required
         title="Please enter a valid email">
</form>
\`\`\`

## Complete Form Example

\`\`\`html
<form id="registrationForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"
         required minlength="3" maxlength="20"
         pattern="[a-zA-Z0-9]+"
         placeholder="Enter username">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="age">Age:</label>
  <input type="number" id="age" name="age"
         min="18" max="120" required>

  <label for="website">Website:</label>
  <input type="url" id="website" name="website">

  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">

  <button type="submit">Submit</button>
</form>
\`\`\`

## JavaScript Validation API

\`\`\`javascript
const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check validity
  if (form.checkValidity()) {
    console.log('Form is valid!');
    // Submit form
  } else {
    // Show validation errors
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      if (!input.validity.valid) {
        console.log(\`\${input.name}: \${input.validationMessage}\`);
      }
    });
  }
});

// Custom validation
const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', () => {
  if (usernameInput.value.includes(' ')) {
    usernameInput.setCustomValidity('Username cannot contain spaces');
  } else {
    usernameInput.setCustomValidity('');
  }
});
\`\`\`

## Best Practices

✅ Use appropriate input types for better UX
✅ Provide clear labels and placeholders
✅ Use client-side validation for UX
✅ Always validate on server-side for security
✅ Show helpful error messages
✅ Use autocomplete attributes
✅ Make forms accessible (labels, ARIA)`,
    topics: ['HTML5', 'Forms', 'Validation', 'User Input'],
    estimatedTime: 25,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html5-apis',
    title: 'HTML5 APIs - Storage, Geolocation, Canvas',
    difficulty: 'Medium' as any,
    category: 'HTML5',
    description: 'Explore HTML5 JavaScript APIs for modern web applications',
    answer: `# HTML5 APIs

## Local Storage & Session Storage

\`\`\`javascript
// Local Storage (persists after browser close)
localStorage.setItem('username', 'John');
localStorage.getItem('username');  // 'John'
localStorage.removeItem('username');
localStorage.clear();

// Session Storage (cleared when tab closes)
sessionStorage.setItem('token', 'abc123');
sessionStorage.getItem('token');

// Store objects
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem('user'));

// Listen for storage changes
window.addEventListener('storage', (e) => {
  console.log(\`Key \${e.key} changed from \${e.oldValue} to \${e.newValue}\`);
});
\`\`\`

## Geolocation API

\`\`\`javascript
if ('geolocation' in navigator) {
  // Get current position
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
      console.log('Accuracy:', position.coords.accuracy);
    },
    (error) => {
      console.error('Error:', error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );

  // Watch position (continuous tracking)
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      console.log('New position:', position.coords);
    }
  );

  // Stop watching
  navigator.geolocation.clearWatch(watchId);
}
\`\`\`

## Canvas API

\`\`\`html
<canvas id="myCanvas" width="400" height="400"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

// Draw circle
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Draw line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 50, 50);

// Draw image
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 200, 200);
};
img.src = 'image.jpg';
</script>
\`\`\`

## Drag and Drop API

\`\`\`html
<div id="drag1" draggable="true">Drag me</div>
<div id="dropZone">Drop here</div>

<script>
const draggable = document.getElementById('drag1');
const dropZone = document.getElementById('dropZone');

draggable.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.background = 'lightblue';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(data);
  dropZone.appendChild(element);
  dropZone.style.background = '';
});
</script>
\`\`\`

## File API

\`\`\`javascript
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];

  // Read as text
  const reader = new FileReader();
  reader.onload = (event) => {
    console.log('File content:', event.target.result);
  };
  reader.readAsText(file);

  // Read as data URL (for images)
  const imageReader = new FileReader();
  imageReader.onload = (event) => {
    const img = document.createElement('img');
    img.src = event.target.result;
    document.body.appendChild(img);
  };
  imageReader.readAsDataURL(file);
});
\`\`\`

## Best Practices

✅ Check browser support before using APIs
✅ Handle errors gracefully
✅ Respect user privacy (geolocation)
✅ Use localStorage wisely (5-10MB limit)
✅ Clean up resources (canvas, watchers)
✅ Provide fallbacks for older browsers`,
    topics: ['HTML5', 'APIs', 'LocalStorage', 'Geolocation', 'Canvas'],
    estimatedTime: 35,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];
