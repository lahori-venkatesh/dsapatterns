import { Problem } from '../../types';

export const html5Problems: Problem[] = [
  {
    id: 'html-basics-1',
    title: 'What is HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Fundamental understanding of HTML',
    answer: `**HTML** = HyperText Markup Language — the standard language for structuring web content.

**Key Points:**
- Markup language (not programming) — defines structure, not logic
- Uses tags like \`<div>\`, \`<p>\`, \`<h1>\` to define elements
- HTML = skeleton, CSS = skin, JavaScript = muscles

**Example:**
\`\`\`html
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
</html>
\`\`\``,
    topics: ['HTML', 'Basics'],
    estimatedTime: 3
  },
  {
    id: 'html-basics-2',
    title: 'Element vs Tag?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML terminology',
    answer: `**Tag** = The markup syntax: \`<p>\`, \`</p>\`
**Element** = Complete structure: \`<p>Content</p>\`

\`\`\`html
<p>Hello</p>
 ↑    ↑   ↑
 │    │   └── Closing tag
 │    └────── Content
 └─────────── Opening tag
 
 └──────────────────────┘
      Complete Element
\`\`\`

**Self-closing elements:** \`<img />\`, \`<br />\`, \`<input />\``,
    topics: ['HTML', 'Terminology'],
    estimatedTime: 2
  },
  {
    id: 'html-doctype',
    title: 'What is DOCTYPE?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'DOCTYPE declaration',
    answer: `**DOCTYPE** tells browser which HTML version to use.

\`\`\`html
<!DOCTYPE html>  <!-- HTML5 - simple! -->
\`\`\`

**Why it matters:**
- Without it → **Quirks Mode** (inconsistent rendering)
- With it → **Standards Mode** (proper rendering)

**Rules:**
- Must be first line
- Case-insensitive (uppercase convention)
- Not an HTML tag — it's an instruction`,
    topics: ['HTML', 'DOCTYPE'],
    estimatedTime: 2
  },
  {
    id: 'html-semantic',
    title: 'What are Semantic Tags?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Semantic HTML',
    answer: `**Semantic tags** describe their content's meaning, not just appearance.

**❌ Non-semantic:**
\`\`\`html
<div id="header"><div class="nav">...</div></div>
\`\`\`

**✅ Semantic:**
\`\`\`html
<header><nav>...</nav></header>
\`\`\`

**Common Semantic Tags:**
| Tag | Purpose |
|-----|---------|
| \`<header>\` | Page/section header |
| \`<nav>\` | Navigation |
| \`<main>\` | Main content (one per page) |
| \`<article>\` | Self-contained content |
| \`<section>\` | Thematic grouping |
| \`<aside>\` | Sidebar/related content |
| \`<footer>\` | Page/section footer |

**Benefits:** SEO ↑, Accessibility ↑, Readability ↑`,
    topics: ['HTML', 'Semantic', 'SEO', 'Accessibility'],
    estimatedTime: 5
  },
  {
    id: 'html-inline-block',
    title: 'Inline vs Block Elements?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Element display types',
    answer: `| Feature | Block | Inline |
|---------|-------|--------|
| Width | Full container | Content only |
| New line | Yes | No |
| Width/Height | ✅ Can set | ❌ Cannot set |
| Examples | \`div, p, h1, section\` | \`span, a, strong, img\` |

\`\`\`html
<!-- Block: stacks vertically -->
<div>Block 1</div>
<div>Block 2</div>

<!-- Inline: flows horizontally -->
<span>Inline 1</span><span>Inline 2</span>
\`\`\`

**inline-block:** Best of both — flows inline but accepts width/height.

\`\`\`css
span { display: inline-block; width: 100px; }
\`\`\``,
    topics: ['HTML', 'CSS', 'Layout'],
    estimatedTime: 4
  },
  {
    id: 'html-attributes',
    title: 'What are HTML Attributes?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML attributes',
    answer: `**Attributes** provide extra info about elements. Format: \`name="value"\`

\`\`\`html
<a href="https://google.com" target="_blank" title="Google">Link</a>
   └─────────────────────────────────────────────────────────┘
                         Attributes
\`\`\`

**Global Attributes** (work on any element):
\`id, class, style, title, hidden, data-*, contenteditable\`

**Boolean Attributes** (no value needed):
\`\`\`html
<input disabled required checked readonly>
\`\`\`

**Custom Data Attributes:**
\`\`\`html
<div data-user-id="123" data-role="admin">
<script>element.dataset.userId // "123"</script>
\`\`\``,
    topics: ['HTML', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-id-class',
    title: 'ID vs Class?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'id vs class attributes',
    answer: `| Feature | ID | Class |
|---------|-----|-------|
| Uniqueness | One per page | Reusable |
| CSS Selector | \`#id\` | \`.class\` |
| Specificity | 100 | 10 |
| Multiple | ❌ One per element | ✅ Multiple allowed |

\`\`\`html
<div id="header" class="container dark-theme large">
\`\`\`

\`\`\`css
#header { }      /* ID - higher specificity */
.container { }   /* Class - lower specificity */
\`\`\`

**Best Practice:**
- **ID** → JavaScript targeting, anchor links
- **Class** → Styling, reusable components`,
    topics: ['HTML', 'CSS', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-forms',
    title: 'Explain HTML Forms',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML forms',
    answer: `**Forms** collect user input and send to server.

\`\`\`html
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
\`\`\`

**GET vs POST:**
- **GET:** Data in URL — searches, filters
- **POST:** Data in body — sensitive data, large payloads

**Input Types:**
\`text, password, email, number, tel, date, checkbox, radio, file, range, color\`

**Validation Attributes:**
\`required, minlength, maxlength, min, max, pattern, disabled, readonly\``,
    topics: ['HTML', 'Forms', 'Validation'],
    estimatedTime: 6
  },
  {
    id: 'html-links',
    title: 'Types of Links in HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML links',
    answer: `\`\`\`html
<!-- External -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

<!-- Internal -->
<a href="/about">About</a>

<!-- Anchor (same page) -->
<a href="#section">Jump</a>
<div id="section">Target</div>

<!-- Email & Phone -->
<a href="mailto:hi@example.com?subject=Hello">Email</a>
<a href="tel:+1234567890">Call</a>

<!-- Download -->
<a href="/file.pdf" download>Download</a>
\`\`\`

**⚠️ Security:** Always use \`rel="noopener noreferrer"\` with \`target="_blank"\`

**Accessibility:** Use descriptive text, not "click here"`,
    topics: ['HTML', 'Links', 'Navigation'],
    estimatedTime: 4
  },
  {
    id: 'html-images',
    title: 'How to Add Images?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML images',
    answer: `\`\`\`html
<img src="photo.jpg" alt="Beach sunset" width="500" height="300" loading="lazy">
\`\`\`

**Required:** \`src\`, \`alt\` (accessibility!)

**Responsive Images:**
\`\`\`html
<img srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 300px, 600px"
     src="medium.jpg" alt="Responsive">
\`\`\`

**Multiple Formats:**
\`\`\`html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback">
</picture>
\`\`\`

**With Caption:**
\`\`\`html
<figure>
  <img src="chart.jpg" alt="Sales chart">
  <figcaption>Q4 Sales Growth</figcaption>
</figure>
\`\`\`

**Formats:** JPEG (photos), PNG (transparency), WebP (modern), SVG (vectors)`,
    topics: ['HTML', 'Images', 'Performance'],
    estimatedTime: 5
  },
  {
    id: 'html-lists',
    title: 'Types of Lists?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML lists',
    answer: `**3 Types:**

\`\`\`html
<!-- Ordered (numbered) -->
<ol type="1" start="1">
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Unordered (bullets) -->
<ul>
  <li>Item</li>
  <li>Item</li>
</ul>

<!-- Description (term + definition) -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
\`\`\`

**OL Types:** \`1, A, a, I, i\`

**Nested Lists:**
\`\`\`html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
\`\`\`

**CSS:** \`list-style-type: none | disc | circle | square\``,
    topics: ['HTML', 'Lists'],
    estimatedTime: 4
  }
];