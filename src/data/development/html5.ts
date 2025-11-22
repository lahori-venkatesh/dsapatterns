import { Problem } from '../../types';

export const html5Problems: Problem[] = 
  {
    id: 'html-basics-1',
    title: 'What is HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Fundamental understanding of HTML',
    answer: `HTML = HyperText Markup Language - the standard language for structuring web content.

Key Points:
- Markup language (not programming) - defines structure, not logic
- Uses tags like <div>, <p>, <h1> to define elements
- HTML = skeleton, CSS = skin, JavaScript = muscles

Example:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph.</p>
</body>
</html>`,
    topics: ['HTML', 'Basics'],
    estimatedTime: 3
  },
  {
    id: 'html-basics-2',
    title: 'Element vs Tag?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML terminology',
    answer: `Tag = The markup syntax: <p>, </p>
Element = Complete structure: <p>Content</p>

Breaking it down:

<p>Hello</p>

<p>      = Opening tag
Hello    = Content
</p>     = Closing tag
All together = Complete Element

Self-closing elements: <img />, <br />, <input />`,
    topics: ['HTML', 'Terminology'],
    estimatedTime: 2
  },
  {
    id: 'html-doctype',
    title: 'What is DOCTYPE?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'DOCTYPE declaration',
    answer: `DOCTYPE tells browser which HTML version to use.

<!DOCTYPE html>   (HTML5 - simple!)

Why it matters:
- Without it: Quirks Mode (inconsistent rendering)
- With it: Standards Mode (proper rendering)

Rules:
- Must be first line
- Case-insensitive (uppercase convention)
- Not an HTML tag - it's an instruction`,
    topics: ['HTML', 'DOCTYPE'],
    estimatedTime: 2
  },
  {
    id: 'html-semantic',
    title: 'What are Semantic Tags?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Semantic HTML',
    answer: `Semantic tags describe their content's meaning, not just appearance.

Non-semantic (bad):
<div id="header"><div class="nav">...</div></div>

Semantic (good):
<header><nav>...</nav></header>

Common Semantic Tags:
- <header>   Page/section header
- <nav>      Navigation
- <main>     Main content (one per page)
- <article>  Self-contained content
- <section>  Thematic grouping
- <aside>    Sidebar/related content
- <footer>   Page/section footer

Benefits: Better SEO, Accessibility, Readability`,
    topics: ['HTML', 'Semantic', 'SEO', 'Accessibility'],
    estimatedTime: 5
  },
  {
    id: 'html-inline-block',
    title: 'Inline vs Block Elements?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Element display types',
    answer: `Block Elements:
- Take full container width
- Start on new line
- Can set width/height
- Examples: div, p, h1, section

Inline Elements:
- Take only content width
- Stay on same line
- Cannot set width/height
- Examples: span, a, strong, img

Example:

Block (stacks vertically):
<div>Block 1</div>
<div>Block 2</div>

Inline (flows horizontally):
<span>Inline 1</span><span>Inline 2</span>

inline-block: Best of both - flows inline but accepts width/height.
span { display: inline-block; width: 100px; }`,
    topics: ['HTML', 'CSS', 'Layout'],
    estimatedTime: 4
  },
  {
    id: 'html-attributes',
    title: 'What are HTML Attributes?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML attributes',
    answer: `Attributes provide extra info about elements.
Format: name="value"

Example:
<a href="https://google.com" target="_blank" title="Google">Link</a>
   (href, target, title are attributes)

Global Attributes (work on any element):
id, class, style, title, hidden, data-*, contenteditable

Boolean Attributes (no value needed):
<input disabled required checked readonly>

Custom Data Attributes:
<div data-user-id="123" data-role="admin">
Access in JS: element.dataset.userId returns "123"`,
    topics: ['HTML', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-id-class',
    title: 'ID vs Class?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'id vs class attributes',
    answer: `ID:
- Unique (one per page)
- CSS selector: #id
- Higher specificity (100)
- One per element

Class:
- Reusable (multiple elements)
- CSS selector: .class
- Lower specificity (10)
- Multiple classes per element allowed

Example:
<div id="header" class="container dark-theme large">

CSS:
#header { }      (ID - higher specificity)
.container { }   (Class - lower specificity)

Best Practice:
- ID: JavaScript targeting, anchor links
- Class: Styling, reusable components`,
    topics: ['HTML', 'CSS', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-forms',
    title: 'Explain HTML Forms',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML forms',
    answer: `Forms collect user input and send to server.

Example:
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <select name="country">
    <option value="us">USA</option>
    <option value="uk">UK</option>
  </select>
  
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>

GET vs POST:
- GET: Data in URL (searches, filters)
- POST: Data in body (sensitive data, large payloads)

Input Types:
text, password, email, number, tel, date, checkbox, radio, file, range, color

Validation Attributes:
required, minlength, maxlength, min, max, pattern, disabled, readonly`,
    topics: ['HTML', 'Forms', 'Validation'],
    estimatedTime: 6
  },
  {
    id: 'html-links',
    title: 'Types of Links in HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML links',
    answer: `External Link:
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

Internal Link:
<a href="/about">About</a>

Anchor Link (same page):
<a href="#section">Jump</a>
<div id="section">Target</div>

Email Link:
<a href="mailto:hi@example.com?subject=Hello">Email</a>

Phone Link:
<a href="tel:+1234567890">Call</a>

Download Link:
<a href="/file.pdf" download>Download</a>

Security: Always use rel="noopener noreferrer" with target="_blank"

Accessibility: Use descriptive text, not "click here"`,
    topics: ['HTML', 'Links', 'Navigation'],
    estimatedTime: 4
  },
  {
    id: 'html-images',
    title: 'How to Add Images?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML images',
    answer: `Basic Image:
<img src="photo.jpg" alt="Beach sunset" width="500" height="300" loading="lazy">

Required attributes: src, alt (accessibility!)

Responsive Images:
<img srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 300px, 600px"
     src="medium.jpg" alt="Responsive">

Multiple Formats (with fallback):
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback">
</picture>

Image With Caption:
<figure>
  <img src="chart.jpg" alt="Sales chart">
  <figcaption>Q4 Sales Growth</figcaption>
</figure>

Image Formats:
- JPEG: photos
- PNG: transparency
- WebP: modern, smaller size
- SVG: vectors, scalable`,
    topics: ['HTML', 'Images', 'Performance'],
    estimatedTime: 5
  },
  {
    id: 'html-lists',
    title: 'Types of Lists?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML lists',
    answer: `3 Types of Lists:

1. Ordered List (numbered):
<ol type="1" start="1">
  <li>First</li>
  <li>Second</li>
</ol>
Types: 1, A, a, I, i

2. Unordered List (bullets):
<ul>
  <li>Item</li>
  <li>Item</li>
</ul>

3. Description List (term + definition):
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>

Nested Lists:
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>

CSS Styling:
list-style-type: none | disc | circle | square`,
    topics: ['HTML', 'Lists'],
    estimatedTime: 4
  }
];