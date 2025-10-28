import { LanguageMastery } from '../../types';

export const developmentMastery: LanguageMastery = {
  id: 'development-mastery',
  language: 'Full Stack' as any,
  name: 'Full Stack Web Development Interview Preparation',
  icon: 'Code',
  description: 'Complete Full Stack interview preparation: Frontend, Backend, DevOps, Security, Testing & System Design',
  color: 'from-emerald-500 to-teal-600',
  totalProblems: 159,
  completedProblems: 0,
  problems: [
    // ========================================
    // 1. HTML5 (MUST)
    // ========================================
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
❌ Don't use semantic tags just for styling
✅ Use semantic tags for structure, CSS for styling`,
      topics: ['HTML5', 'Semantic HTML', 'SEO', 'Accessibility'],
      estimatedTime: 20,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'html5-forms-accessibility',
      title: 'HTML5 Forms & Accessibility (a11y)',
      difficulty: 'Medium' as any,
      category: 'HTML5',
      description: 'Form elements, validation, ARIA attributes, and accessibility best practices',
      answer: `# HTML5 Forms & Accessibility

## HTML5 Form Elements

### Input Types
\`\`\`html
<input type="text" placeholder="Name">
<input type="email" required>           <!-- Built-in validation -->
<input type="tel" pattern="[0-9]{10}">  <!-- Phone with regex -->
<input type="number" min="1" max="100">
<input type="date">
<input type="color">
<input type="range" min="0" max="100">
<input type="search">
<input type="url">
\`\`\`

### Form Validation
\`\`\`html
<form novalidate>  <!-- Custom validation -->
  <input type="email" required
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
         title="Enter valid email">

  <input type="password"
         minlength="8"
         maxlength="20">
</form>
\`\`\`

## Accessibility (a11y)

### Label Association
\`\`\`html
<!-- Method 1: Explicit -->
<label for="username">Username</label>
<input id="username" type="text">

<!-- Method 2: Implicit -->
<label>
  Username
  <input type="text">
</label>
\`\`\`

### ARIA Attributes
\`\`\`html
<!-- Required fields -->
<input type="text" aria-required="true">

<!-- Error handling -->
<input type="email"
       aria-invalid="true"
       aria-describedby="email-error">
<span id="email-error" role="alert">Invalid email</span>

<!-- Loading states -->
<button aria-busy="true" aria-live="polite">
  Loading...
</button>

<!-- Hidden content -->
<div aria-hidden="true">Decorative content</div>
\`\`\`

### Form Accessibility Checklist
✅ Every input has a \`<label>\`
✅ Use \`fieldset\` and \`legend\` for radio/checkbox groups
✅ Provide error messages with \`aria-describedby\`
✅ Use \`autocomplete\` attributes (name, email, address)
✅ Ensure focus order is logical (tabindex)
✅ Don't rely on color alone for validation

## Example Accessible Form
\`\`\`html
<form aria-labelledby="form-title">
  <h2 id="form-title">Sign Up</h2>

  <div>
    <label for="name">Name <span aria-label="required">*</span></label>
    <input id="name"
           type="text"
           required
           aria-required="true"
           autocomplete="name">
  </div>

  <fieldset>
    <legend>Gender</legend>
    <label><input type="radio" name="gender" value="m"> Male</label>
    <label><input type="radio" name="gender" value="f"> Female</label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
\`\`\`

## Testing Accessibility
- Use **Lighthouse** (Chrome DevTools)
- **WAVE** browser extension
- **axe DevTools**
- Screen readers: **NVDA** (Windows), **VoiceOver** (Mac)`,
      topics: ['HTML5', 'Forms', 'Accessibility', 'ARIA', 'Validation'],
      estimatedTime: 25,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'html5-seo',
      title: 'HTML5 SEO Best Practices',
      difficulty: 'Medium' as any,
      category: 'HTML5',
      description: 'Meta tags, Open Graph, structured data, and SEO optimization',
      answer: `# HTML5 SEO Best Practices

## Essential Meta Tags

\`\`\`html
<head>
  <!-- Character encoding (must be first) -->
  <meta charset="UTF-8">

  <!-- Viewport for responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Page title (50-60 characters) -->
  <title>Full Stack Developer Guide | Learn Web Development</title>

  <!-- Meta description (150-160 characters) -->
  <meta name="description"
        content="Complete guide to becoming a full stack developer. Learn HTML, CSS, JavaScript, React, Node.js, and more.">

  <!-- Keywords (less important now) -->
  <meta name="keywords" content="web development, full stack, react, node">

  <!-- Author -->
  <meta name="author" content="Your Name">

  <!-- Robots -->
  <meta name="robots" content="index, follow">

  <!-- Canonical URL (avoid duplicate content) -->
  <link rel="canonical" href="https://example.com/page">
</head>
\`\`\`

## Open Graph (Social Media)

\`\`\`html
<!-- Facebook, LinkedIn -->
<meta property="og:title" content="Full Stack Developer Guide">
<meta property="og:description" content="Learn web development from scratch">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Dev Guide">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourusername">
<meta name="twitter:title" content="Full Stack Developer Guide">
<meta name="twitter:description" content="Learn web development">
<meta name="twitter:image" content="https://example.com/image.jpg">
\`\`\`

## Structured Data (Schema.org)

\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Web Development",
  "description": "Complete full stack course",
  "provider": {
    "@type": "Organization",
    "name": "Dev Academy"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
\`\`\`

## Semantic HTML for SEO

\`\`\`html
<!-- Heading hierarchy (H1 → H6) -->
<h1>Main Page Title</h1>      <!-- Only ONE H1 per page -->
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Image alt text -->
<img src="web-dev.jpg" alt="Full stack web development diagram">

<!-- Descriptive link text -->
❌ <a href="/guide">Click here</a>
✅ <a href="/guide">Read the full stack guide</a>
\`\`\`

## Performance for SEO

\`\`\`html
<!-- Preload critical resources -->
<link rel="preload" href="font.woff2" as="font" crossorigin>

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Async/defer scripts -->
<script src="analytics.js" async></script>
<script src="app.js" defer></script>

<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="Description">
\`\`\`

## Mobile-First

\`\`\`html
<!-- Responsive images -->
<picture>
  <source srcset="image-mobile.jpg" media="(max-width: 768px)">
  <source srcset="image-tablet.jpg" media="(max-width: 1024px)">
  <img src="image-desktop.jpg" alt="Responsive image">
</picture>
\`\`\`

## SEO Checklist
✅ Unique \`<title>\` and meta description per page
✅ Single H1 per page with keywords
✅ Alt text for all images
✅ Semantic HTML structure
✅ Fast loading (< 3 seconds)
✅ Mobile-friendly (responsive design)
✅ HTTPS enabled
✅ XML sitemap
✅ robots.txt file
✅ Structured data where applicable`,
      topics: ['HTML5', 'SEO', 'Meta Tags', 'Open Graph', 'Performance'],
      estimatedTime: 25,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 2. CSS3 (MUST)
    // ========================================
    {
      id: 'css3-box-model',
      title: 'CSS3 Box Model Deep Dive',
      difficulty: 'Easy' as any,
      category: 'CSS3',
      description: 'Understanding content-box, border-box, margin, padding, and box-sizing',
      answer: `# CSS3 Box Model

## Box Model Components

Every HTML element is a rectangular box with:

\`\`\`
┌─────────────────────────────────────┐
│           MARGIN (transparent)       │
│  ┌──────────────────────────────┐  │
│  │    BORDER                     │  │
│  │  ┌───────────────────────┐   │  │
│  │  │    PADDING            │   │  │
│  │  │  ┌────────────────┐  │   │  │
│  │  │  │   CONTENT      │  │   │  │
│  │  │  │   width x      │  │   │  │
│  │  │  │   height       │  │   │  │
│  │  │  └────────────────┘  │   │  │
│  │  └───────────────────────┘   │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
\`\`\`

## Box Sizing

### content-box (default)
\`\`\`css
.box {
  box-sizing: content-box; /* default */
  width: 300px;
  padding: 20px;
  border: 5px solid black;

  /* Total width = 300 + 20*2 + 5*2 = 350px */
}
\`\`\`

### border-box (recommended)
\`\`\`css
* {
  box-sizing: border-box; /* Best practice */
}

.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;

  /* Total width = 300px (includes padding & border) */
  /* Content width = 300 - 40 - 10 = 250px */
}
\`\`\`

## Margin & Padding

\`\`\`css
/* Shorthand */
margin: 10px;                    /* all sides */
margin: 10px 20px;              /* vertical | horizontal */
margin: 10px 20px 30px;         /* top | horizontal | bottom */
margin: 10px 20px 30px 40px;    /* top | right | bottom | left (clockwise) */

/* Individual sides */
margin-top: 10px;
padding-left: 20px;

/* Auto centering */
.center {
  width: 80%;
  margin: 0 auto; /* horizontal centering */
}
\`\`\`

## Margin Collapse

\`\`\`css
/* Vertical margins collapse */
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* Space between = 30px (not 50px!) */

/* Prevent collapse */
.parent {
  overflow: hidden; /* or */
  padding: 1px; /* or */
  border: 1px solid transparent;
}
\`\`\`

## Negative Margins

\`\`\`css
.overlap {
  margin-top: -20px; /* Pull element up */
  margin-left: -10px; /* Pull element left */
}
\`\`\`

## Practical Examples

\`\`\`css
/* Card component */
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Full-width with padding */
.container {
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
}
\`\`\`

## Common Pitfalls
❌ Forgetting box-sizing: border-box
❌ Not accounting for margin collapse
❌ Using margin for inner spacing (use padding)
✅ Set box-sizing globally
✅ Use padding for internal space
✅ Use margin for external space`,
      topics: ['CSS3', 'Box Model', 'Layout'],
      estimatedTime: 20,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'css3-flexbox',
      title: 'CSS3 Flexbox Complete Guide',
      difficulty: 'Medium' as any,
      category: 'CSS3',
      description: 'Master Flexbox layout: flex container, flex items, alignment, and responsive design',
      answer: `# CSS3 Flexbox

## Flex Container Properties

\`\`\`css
.container {
  display: flex; /* or inline-flex */

  /* Direction */
  flex-direction: row;            /* default: →→→ */
  flex-direction: row-reverse;    /* ←←← */
  flex-direction: column;         /* ↓↓↓ */
  flex-direction: column-reverse; /* ↑↑↑ */

  /* Wrapping */
  flex-wrap: nowrap;   /* default: single line */
  flex-wrap: wrap;     /* multi-line */
  flex-wrap: wrap-reverse;

  /* Shorthand */
  flex-flow: row wrap; /* direction + wrap */

  /* Main axis alignment (horizontal by default) */
  justify-content: flex-start;    /* ├───  */
  justify-content: flex-end;      /* ───┤  */
  justify-content: center;        /* ──── */
  justify-content: space-between; /* ├─ ─ ─┤ */
  justify-content: space-around;  /* ─ ─ ─ ─ */
  justify-content: space-evenly;  /* ─ ─ ─ ─ */

  /* Cross axis alignment (vertical by default) */
  align-items: stretch;     /* default: ╫╫╫ */
  align-items: flex-start;  /* ─── (top) */
  align-items: flex-end;    /* ___ (bottom) */
  align-items: center;      /* === (middle) */
  align-items: baseline;    /* text baseline */

  /* Multi-line cross axis */
  align-content: flex-start;
  align-content: space-between;

  /* Gap (modern) */
  gap: 20px;           /* row and column gap */
  row-gap: 10px;
  column-gap: 20px;
}
\`\`\`

## Flex Item Properties

\`\`\`css
.item {
  /* Growth factor (distribute extra space) */
  flex-grow: 0;   /* default: don't grow */
  flex-grow: 1;   /* grow equally */
  flex-grow: 2;   /* grow twice as much */

  /* Shrink factor (when space is tight) */
  flex-shrink: 1; /* default: can shrink */
  flex-shrink: 0; /* never shrink */

  /* Base size before growing/shrinking */
  flex-basis: auto;   /* default */
  flex-basis: 200px;  /* fixed starting width */
  flex-basis: 50%;    /* percentage */

  /* Shorthand: grow | shrink | basis */
  flex: 0 1 auto;     /* default */
  flex: 1;            /* flex: 1 1 0% (common) */
  flex: 0 0 200px;    /* fixed 200px, no grow/shrink */
  flex: 1 0 0%;       /* grow but don't shrink */

  /* Override container's align-items */
  align-self: flex-start;
  align-self: center;

  /* Order (default: 0) */
  order: -1; /* appear first */
  order: 1;  /* appear last */
}
\`\`\`

## Common Patterns

### Horizontal Centering
\`\`\`css
.center-h {
  display: flex;
  justify-content: center;
}
\`\`\`

### Vertical Centering
\`\`\`css
.center-v {
  display: flex;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

### Perfect Centering
\`\`\`css
.center-both {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

### Equal-Width Columns
\`\`\`css
.container { display: flex; }
.item { flex: 1; } /* All items same width */
\`\`\`

### Responsive Navigation
\`\`\`css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}
\`\`\`

### Sticky Footer
\`\`\`css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main { flex: 1; } /* Main content grows */
footer { flex-shrink: 0; }
\`\`\`

### Card Grid with Auto-fit
\`\`\`css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* min 300px, grow to fill */
}
\`\`\`

## Real-World Examples

\`\`\`css
/* Header with logo and nav */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo { flex: 0 0 auto; }
.nav {
  display: flex;
  gap: 2rem;
}

/* Form layout */
.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  flex: 1;
}

.submit-btn {
  flex: 0 0 auto;
  align-self: flex-end;
}
\`\`\`

## Debugging Tips
- Use browser DevTools "Flexbox" overlay
- Add borders to visualize items
- Check for min-width/max-width conflicts`,
      topics: ['CSS3', 'Flexbox', 'Layout', 'Responsive'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'css3-grid',
      title: 'CSS3 Grid Layout System',
      difficulty: 'Medium' as any,
      category: 'CSS3',
      description: 'Master CSS Grid: template areas, auto-fit, minmax, responsive grids',
      answer: `# CSS3 Grid Layout

## Grid Container Basics

\`\`\`css
.container {
  display: grid; /* or inline-grid */

  /* Define columns */
  grid-template-columns: 200px 200px 200px;
  grid-template-columns: 1fr 1fr 1fr; /* fractional units */
  grid-template-columns: repeat(3, 1fr); /* repeat() */
  grid-template-columns: 200px 1fr 2fr; /* mixed */

  /* Define rows */
  grid-template-rows: 100px auto 100px;

  /* Gap */
  gap: 20px;           /* row & column */
  row-gap: 10px;
  column-gap: 20px;

  /* Alignment */
  justify-items: start | center | end | stretch;
  align-items: start | center | end | stretch;
  justify-content: start | center | end | space-between | space-around;
  align-content: start | center | end | space-between;
}
\`\`\`

## Grid Template Areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

## Grid Item Placement

\`\`\`css
.item {
  /* Span columns */
  grid-column: 1 / 3;        /* start / end */
  grid-column: span 2;       /* span 2 columns */
  grid-column: 1 / -1;       /* full width */

  /* Span rows */
  grid-row: 1 / 3;
  grid-row: span 2;

  /* Shorthand */
  grid-area: 1 / 1 / 3 / 3;  /* row-start / col-start / row-end / col-end */

  /* Self-alignment */
  justify-self: center;
  align-self: center;
}
\`\`\`

## Responsive Grid Patterns

### Auto-fit with minmax
\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
/* Automatically fits as many 250px columns as possible */
\`\`\`

### Auto-fill vs Auto-fit
\`\`\`css
/* auto-fill: Creates empty columns if space available */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: Collapses empty columns, items stretch */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`

### Responsive Dashboard
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.widget {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
}

.widget.large {
  grid-column: span 2; /* Take 2 columns */
}

@media (max-width: 768px) {
  .widget.large {
    grid-column: span 1; /* Single column on mobile */
  }
}
\`\`\`

## Common Layouts

### Holy Grail Layout
\`\`\`css
.holy-grail {
  display: grid;
  grid-template:
    "header header header" auto
    "nav main aside" 1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
  min-height: 100vh;
}
\`\`\`

### Masonry-like Layout
\`\`\`css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 10px; /* Small row height */
  gap: 10px;
}

.item {
  grid-row: span var(--row-span); /* Set dynamically */
}
\`\`\`

### Image Gallery
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`

### 12-Column Grid System
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.col-6 { grid-column: span 6; }
.col-4 { grid-column: span 4; }
.col-3 { grid-column: span 3; }

@media (max-width: 768px) {
  .col-6, .col-4, .col-3 {
    grid-column: span 12; /* Full width on mobile */
  }
}
\`\`\`

## Advanced Techniques

### Named Lines
\`\`\`css
.grid {
  grid-template-columns:
    [sidebar-start] 200px
    [sidebar-end content-start] 1fr
    [content-end];
}

.sidebar { grid-column: sidebar-start / sidebar-end; }
\`\`\`

### Nested Grids
\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
\`\`\`

### Implicit Grid
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto); /* Auto-created rows */
  grid-auto-flow: dense; /* Fill gaps */
}
\`\`\`

## Grid vs Flexbox

**Use Grid when:**
- Two-dimensional layouts (rows AND columns)
- Content needs precise placement
- Layouts with areas/regions

**Use Flexbox when:**
- One-dimensional layouts (row OR column)
- Content size determines layout
- Alignment-focused layouts

## Debugging
- Use Firefox Grid Inspector (best tool)
- Chrome DevTools Grid overlay
- Add: \`outline: 1px solid red;\``,
      topics: ['CSS3', 'Grid', 'Layout', 'Responsive'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'css3-responsive-animations',
      title: 'CSS3 Responsive Design, Animations & Variables',
      difficulty: 'Medium' as any,
      category: 'CSS3',
      description: 'Media queries, animations, transitions, transforms, and CSS custom properties',
      answer: `# CSS3 Responsive, Animations & Variables

## Responsive Design

### Media Queries
\`\`\`css
/* Mobile-first approach (recommended) */
.container { width: 100%; }

@media (min-width: 640px) {  /* sm */
  .container { max-width: 640px; }
}

@media (min-width: 768px) {  /* md */
  .container { max-width: 768px; }
}

@media (min-width: 1024px) { /* lg */
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) { /* xl */
  .container { max-width: 1280px; }
}

/* Desktop-first (older approach) */
.sidebar { width: 300px; }

@media (max-width: 768px) {
  .sidebar { width: 100%; }
}
\`\`\`

### Responsive Units
\`\`\`css
/* Viewport units */
.hero { height: 100vh; }      /* viewport height */
.full { width: 100vw; }       /* viewport width */
.text { font-size: 5vmin; }   /* min(vw, vh) */

/* Relative units */
.box {
  width: 50%;           /* parent width */
  padding: 2rem;        /* root font-size */
  margin: 1em;          /* element font-size */
}

/* Clamp for responsive sizing */
.text {
  font-size: clamp(1rem, 2vw + 1rem, 3rem);
  /* min: 1rem, preferred: 2vw + 1rem, max: 3rem */
}
\`\`\`

### Container Queries (Modern)
\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Animations

### Transitions (Simple)
\`\`\`css
.button {
  background: blue;
  transition: all 0.3s ease;
  /* property | duration | timing-function | delay */
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* Individual properties */
.card {
  transition-property: opacity, transform;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease-in, ease-out;
  transition-delay: 0s, 0.1s;
}
\`\`\`

### Keyframe Animations
\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeIn 0.5s ease-out forwards;
  /* name | duration | timing | fill-mode */
}

/* Advanced animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bouncy {
  animation: bounce 2s infinite;
}

/* Multiple animations */
.multi {
  animation:
    fadeIn 1s ease-out,
    slideIn 0.5s ease-in;
}
\`\`\`

### Timing Functions
\`\`\`css
.ease { transition-timing-function: ease; }        /* slow-fast-slow */
.linear { transition-timing-function: linear; }    /* constant speed */
.ease-in { transition-timing-function: ease-in; }  /* slow-fast */
.ease-out { transition-timing-function: ease-out; } /* fast-slow */

/* Custom bezier */
.custom {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Steps (discrete) */
.steps {
  animation: typewriter 4s steps(40) infinite;
}
\`\`\`

## Transforms

\`\`\`css
/* 2D Transforms */
.box {
  transform: translateX(50px);
  transform: translateY(20px);
  transform: translate(50px, 20px);

  transform: scale(1.5);           /* uniform */
  transform: scale(1.5, 0.8);      /* x, y */

  transform: rotate(45deg);
  transform: skew(10deg, 5deg);
}

/* 3D Transforms */
.card {
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: translateZ(100px);

  /* Perspective for 3D */
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Combined transforms (order matters!) */
.complex {
  transform: translate(50px, 100px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.pivot {
  transform-origin: top left;  /* rotation pivot */
  transform: rotate(45deg);
}
\`\`\`

## CSS Variables (Custom Properties)

\`\`\`css
:root {
  /* Colors */
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --bg-color: #ffffff;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;

  /* Typography */
  --font-size-base: 16px;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}

/* Usage */
.button {
  background: var(--primary-color);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);

  /* Fallback value */
  color: var(--text-color, black);
}

/* Dark mode with variables */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #f9fafb;
    --bg-color: #111827;
  }
}

/* Dynamic variables with JavaScript */
.element {
  --dynamic-value: 50px;
  width: var(--dynamic-value);
}
\`\`\`

\`\`\`javascript
// Update CSS variable from JS
document.documentElement.style.setProperty('--primary-color', '#ff0000');
\`\`\`

## Performance Best Practices

\`\`\`css
/* ✅ Performant (GPU-accelerated) */
.fast {
  transform: translateX(100px);
  opacity: 0.5;
  will-change: transform; /* Hint to browser */
}

/* ❌ Avoid (triggers layout/paint) */
.slow {
  width: 100px;
  height: 100px;
  top: 100px;
  left: 100px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

## Real-World Examples

\`\`\`css
/* Loading spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}

/* Skeleton loader */
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Hover card effect */
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
\`\`\``,
      topics: ['CSS3', 'Responsive', 'Animations', 'Transitions', 'CSS Variables'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 3. JavaScript ES6+ (MUST) - Continuing...
    // ========================================
    {
      id: 'js-scope-closures',
      title: 'JavaScript Scope, Closures & Hoisting',
      difficulty: 'Medium' as any,
      category: 'JavaScript',
      description: 'Understanding scope chain, closure patterns, hoisting, and execution context',
      answer: `# JavaScript Scope & Closures

## Scope Types

### Global Scope
\`\`\`javascript
var globalVar = 'I am global';
let globalLet = 'Also global';

function test() {
  console.log(globalVar); // Accessible
}
\`\`\`

### Function Scope
\`\`\`javascript
function outer() {
  var functionScoped = 'Only inside function';

  if (true) {
    var stillFunctionScoped = 'var ignores blocks';
  }

  console.log(stillFunctionScoped); // ✅ Works
}

console.log(functionScoped); // ❌ ReferenceError
\`\`\`

### Block Scope (let/const)
\`\`\`javascript
{
  let blockScoped = 'Only in this block';
  const alsoBlock = 'Cannot reassign';
}

console.log(blockScoped); // ❌ ReferenceError

if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // ❌ ReferenceError
\`\`\`

## Hoisting

### Variable Hoisting
\`\`\`javascript
console.log(x); // undefined (not ReferenceError)
var x = 5;

// Actually interpreted as:
var x;           // Declaration hoisted
console.log(x);  // undefined
x = 5;           // Assignment stays

// let/const are NOT hoisted (Temporal Dead Zone)
console.log(y); // ❌ ReferenceError
let y = 10;
\`\`\`

### Function Hoisting
\`\`\`javascript
// Function declarations are hoisted
sayHi(); // ✅ Works
function sayHi() {
  console.log('Hi');
}

// Function expressions are NOT hoisted
sayBye(); // ❌ TypeError: sayBye is not a function
var sayBye = function() {
  console.log('Bye');
};
\`\`\`

## Closures

A closure is a function that has access to its outer function's variables even after the outer function has returned.

### Basic Closure
\`\`\`javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// 'count' is preserved in closure
\`\`\`

### Practical Closure Patterns

#### 1. Data Privacy
\`\`\`javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);    // 1500
account.withdraw(200);   // 1300
console.log(account.balance); // undefined (private!)
\`\`\`

#### 2. Function Factory
\`\`\`javascript
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
\`\`\`

#### 3. Event Handlers
\`\`\`javascript
function setupButtons() {
  for (let i = 0; i < 5; i++) {
    const button = document.createElement('button');
    button.textContent = \`Button \${i}\`;

    button.addEventListener('click', function() {
      console.log(\`Button \${i} clicked\`); // 'i' captured in closure
    });

    document.body.appendChild(button);
  }
}

// ❌ Common mistake with var:
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Always prints 5 (no closure!)
  }, 1000);
}

// ✅ Fix with let (block scope):
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2, 3, 4
  }, 1000);
}
\`\`\`

#### 4. Memoization
\`\`\`javascript
function memoize(fn) {
  const cache = {}; // Cached in closure

  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log('From cache');
      return cache[key];
    }

    console.log('Computing...');
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveFunction = memoize((n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
});

expensiveFunction(1000); // Computing... result
expensiveFunction(1000); // From cache
\`\`\`

#### 5. Module Pattern
\`\`\`javascript
const calculator = (function() {
  let result = 0; // Private

  return {
    add(n) {
      result += n;
      return this;
    },
    subtract(n) {
      result -= n;
      return this;
    },
    multiply(n) {
      result *= n;
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return this;
    }
  };
})();

calculator.add(5).multiply(2).subtract(3).getResult(); // 7
\`\`\`

## Scope Chain

\`\`\`javascript
const global = 'global';

function outer() {
  const outerVar = 'outer';

  function inner() {
    const innerVar = 'inner';

    console.log(innerVar);  // inner scope
    console.log(outerVar);  // outer scope (via scope chain)
    console.log(global);    // global scope (via scope chain)
  }

  inner();
}

outer();
\`\`\`

## Lexical Scope

\`\`\`javascript
function init() {
  let name = 'Mozilla';

  function displayName() {
    console.log(name); // 'name' from parent scope
  }

  displayName();
}

// Scope determined at WRITE time, not runtime
\`\`\`

## Common Pitfalls

### 1. Unintended Globals
\`\`\`javascript
function oops() {
  x = 10; // ❌ Creates global variable (no var/let/const)
}
oops();
console.log(x); // 10 (global!)

// Fix:
'use strict';
function better() {
  x = 10; // ❌ ReferenceError in strict mode
}
\`\`\`

### 2. Loop Closure Issue
\`\`\`javascript
// Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Prints: 3, 3, 3

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Prints: 0, 1, 2

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Prints: 0, 1, 2
\`\`\`

## Interview Questions

**Q: What will this print?**
\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Answer: 3, 3, 3 (var is function-scoped, not block-scoped)
\`\`\`

**Q: Explain closure memory leak**
\`\`\`javascript
function createClosure() {
  const bigArray = new Array(1000000).fill('data');

  return function() {
    console.log('Closure');
    // bigArray stays in memory even if not used!
  };
}

const fn = createClosure();
// bigArray is never garbage collected
\`\`\``,
      topics: ['JavaScript', 'Scope', 'Closures', 'Hoisting'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-promises-async',
      title: 'JavaScript Promises & Async/Await',
      difficulty: 'Medium' as any,
      category: 'JavaScript',
      description: 'Master asynchronous JavaScript: Promises, async/await, error handling, Promise methods',
      answer: `# JavaScript Promises & Async/Await

## Promises Basics

\`\`\`javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation succeeded!');
  } else {
    reject('Operation failed!');
  }
});

// Consuming a Promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
\`\`\`

## Promise States
- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed
- **Settled**: Either fulfilled or rejected

## Promise Methods

\`\`\`javascript
// Promise.all - Wait for all (fails if any fails)
const p1 = fetch('/api/users');
const p2 = fetch('/api/posts');
const p3 = fetch('/api/comments');

Promise.all([p1, p2, p3])
  .then(([users, posts, comments]) => {
    console.log('All succeeded');
  })
  .catch(error => {
    console.log('One failed:', error);
  });

// Promise.allSettled - Wait for all (never fails)
Promise.allSettled([p1, p2, p3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Failed:', result.reason);
      }
    });
  });

// Promise.race - First to settle wins
Promise.race([p1, p2, p3])
  .then(result => console.log('First:', result));

// Promise.any - First to succeed wins
Promise.any([p1, p2, p3])
  .then(result => console.log('First success:', result))
  .catch(error => console.log('All failed'));
\`\`\`

## Async/Await

\`\`\`javascript
// Basic async function
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user;
}

// Error handling with try/catch
async function fetchUserSafe(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}

// Parallel execution
async function fetchMultiple() {
  // ❌ Sequential (slow)
  const user = await fetch('/api/user');
  const posts = await fetch('/api/posts');
  const comments = await fetch('/api/comments');

  // ✅ Parallel (fast)
  const [userRes, postsRes, commentsRes] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);

  return {
    user: await userRes.json(),
    posts: await postsRes.json(),
    comments: await commentsRes.json()
  };
}
\`\`\`

## Real-World Patterns

\`\`\`javascript
// Retry logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${retries}\`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Timeout wrapper
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

// Usage
await withTimeout(fetch('/api/slow'), 5000);

// Sequential processing
async function processItems(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }
  return results;
}

// Parallel processing with limit
async function processInBatches(items, batchSize = 5) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(item => processItem(item))
    );
    results.push(...batchResults);
  }
  return results;
}
\`\`\`

## Common Mistakes

\`\`\`javascript
// ❌ Forgetting await
async function bad() {
  const data = fetch('/api/data'); // Returns Promise, not data!
  console.log(data); // Promise object
}

// ✅ Using await
async function good() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data); // Actual data
}

// ❌ Mixing .then() with async/await
async function mixed() {
  const user = await fetch('/api/user')
    .then(res => res.json()); // Confusing!
}

// ✅ Use one style
async function clean() {
  const response = await fetch('/api/user');
  const user = await response.json();
}

// ❌ Not handling rejections
async function unhandled() {
  await fetch('/api/data'); // May throw
}

// ✅ Handle errors
async function handled() {
  try {
    await fetch('/api/data');
  } catch (error) {
    console.error(error);
  }
}
\`\`\``,
      topics: ['JavaScript', 'Promises', 'Async/Await', 'Error Handling'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-modules-es6',
      title: 'JavaScript ES6 Modules & Modern Features',
      difficulty: 'Medium' as any,
      category: 'JavaScript',
      description: 'ES6 modules, import/export, destructuring, spread operator, template literals, arrow functions',
      answer: `# JavaScript ES6 Modules & Features

## ES6 Modules

\`\`\`javascript
// Named exports (multiple per file)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class Calculator { }

// Import named exports
import { PI, add, Calculator } from './math.js';

// Import with alias
import { PI as pi, add as sum } from './math.js';

// Import all
import * as math from './math.js';
console.log(math.PI, math.add(1, 2));

// Default export (one per file)
export default function multiply(a, b) {
  return a * b;
}

// Import default
import multiply from './math.js';

// Mix default and named
export default class User { }
export const userTypes = ['admin', 'user'];

import User, { userTypes } from './user.js';

// Re-exporting
export { add, subtract } from './math.js';
export * from './utils.js';
\`\`\`

## Destructuring

\`\`\`javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Skipping elements
const [a, , c] = [1, 2, 3];

// Default values
const [x = 0, y = 0] = [1];
console.log(x, y); // 1, 0

// Object destructuring
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = user;

// Rename
const { name: userName, age: userAge } = user;

// Default values
const { name, country = 'USA' } = user;

// Nested destructuring
const data = {
  user: { name: 'John', address: { city: 'NYC' } }
};
const { user: { name, address: { city } } } = data;

// Function parameters
function greet({ name, age = 0 }) {
  console.log(\`\${name} is \${age} years old\`);
}
greet({ name: 'John', age: 30 });
\`\`\`

## Spread & Rest Operators

\`\`\`javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Copy array
const copy = [...arr1];

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Override properties
const updated = { ...user, age: 31 };

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Rest in destructuring
const { name, ...otherProps } = user;
\`\`\`

## Template Literals

\`\`\`javascript
// Basic interpolation
const name = 'John';
const greeting = \`Hello, \${name}!\`;

// Multiline strings
const html = \`
  <div>
    <h1>\${title}</h1>
    <p>\${content}</p>
  </div>
\`;

// Expressions
const total = \`Total: \${price * quantity}\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const message = highlight\`Hello \${name}, you have \${count} messages\`;
\`\`\`

## Arrow Functions

\`\`\`javascript
// Basic syntax
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = n => n * 2;

// No parameters
const getRandom = () => Math.random();

// Block body
const process = (data) => {
  const result = data * 2;
  return result + 1;
};

// Implicit return object (use parentheses)
const createUser = (name, age) => ({ name, age });

// Lexical 'this' binding
class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++; // 'this' refers to Timer instance
    }, 1000);
  }
}
\`\`\`

## Other ES6+ Features

\`\`\`javascript
// let & const
let mutable = 1;
const immutable = 2;

// Default parameters
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

// Enhanced object literals
const name = 'John';
const age = 30;
const user = {
  name,        // Shorthand property
  age,
  greet() {    // Method shorthand
    console.log('Hi');
  },
  ['key' + 1]: 'value'  // Computed property names
};

// Optional chaining
const city = user?.address?.city;

// Nullish coalescing
const value = data ?? 'default';

// Array methods
const numbers = [1, 2, 3, 4, 5];
numbers.map(n => n * 2);
numbers.filter(n => n > 2);
numbers.find(n => n === 3);
numbers.reduce((sum, n) => sum + n, 0);

// String methods
'hello'.includes('ell');
'hello'.startsWith('hel');
'hello'.endsWith('lo');
'  hello  '.trim();

// Object methods
Object.keys(user);
Object.values(user);
Object.entries(user);
Object.assign({}, user);
\`\`\``,
      topics: ['JavaScript', 'ES6', 'Modules', 'Destructuring', 'Arrow Functions'],
      estimatedTime: 25,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 4. TypeScript (MUST)
    // ========================================
    {
      id: 'typescript-basics',
      title: 'TypeScript Fundamentals: Types, Interfaces & Type System',
      difficulty: 'Medium' as any,
      category: 'TypeScript',
      description: 'Master TypeScript basics: primitive types, interfaces, type aliases, union types, type assertions',
      answer: `# TypeScript Fundamentals

## Basic Types

\`\`\`typescript
// Primitive types
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b', 'c'];

// Tuples (fixed-length arrays)
let tuple: [string, number] = ['John', 30];

// Any (avoid when possible)
let anything: any = 'string';
anything = 123;

// Unknown (safer than any)
let value: unknown = 'string';
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}

// Never (functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

// Void (no return value)
function log(message: string): void {
  console.log(message);
}
\`\`\`

## Interfaces

\`\`\`typescript
// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
};

// Optional properties
interface Product {
  id: number;
  name: string;
  description?: string;  // Optional
}

// Readonly properties
interface Config {
  readonly apiKey: string;
  readonly baseUrl: string;
}

// Method signatures
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Index signatures
interface StringMap {
  [key: string]: string;
}

// Extending interfaces
interface Employee extends User {
  department: string;
  salary: number;
}

// Multiple inheritance
interface Manager extends Employee, Calculator {
  teamSize: number;
}
\`\`\`

## Type Aliases

\`\`\`typescript
// Basic type alias
type ID = string | number;
type Status = 'pending' | 'approved' | 'rejected';

// Object type
type Point = {
  x: number;
  y: number;
};

// Function type
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;

// Union types
type Result = Success | Failure;
type Success = { status: 'success'; data: any };
type Failure = { status: 'error'; error: string };

// Intersection types
type Admin = User & { role: 'admin' };
\`\`\`

## Type vs Interface

\`\`\`typescript
// Interfaces can be reopened (declaration merging)
interface Window {
  customProperty: string;
}

// Types cannot be reopened
// type Window = { ... } // Error!

// Use interfaces for object shapes
interface User {
  name: string;
}

// Use types for unions, primitives, tuples
type Status = 'active' | 'inactive';
type Coordinates = [number, number];
\`\`\`

## Union & Intersection Types

\`\`\`typescript
// Union types (OR)
type StringOrNumber = string | number;

function format(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Intersection types (AND)
type Person = { name: string };
type Employee = { employeeId: number };
type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: 'John',
  employeeId: 123
};
\`\`\`

## Type Assertions

\`\`\`typescript
// As syntax (preferred)
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'Hello';

// Angle bracket syntax (not in JSX)
const input2 = <HTMLInputElement>document.getElementById('input');

// Non-null assertion
const element = document.getElementById('app')!; // Tell TS it's not null

// Const assertion
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} as const; // Makes all properties readonly
\`\`\`

## Literal Types

\`\`\`typescript
// String literals
type Direction = 'north' | 'south' | 'east' | 'west';

function move(direction: Direction) {
  console.log(\`Moving \${direction}\`);
}

move('north'); // ✅
move('up');    // ❌ Error

// Numeric literals
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean literals
type Yes = true;
type No = false;
\`\`\`

## Function Types

\`\`\`typescript
// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || 'Hello'}, \${name}!\`;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Function overloads
function process(value: string): string;
function process(value: number): number;
function process(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value * 2;
}
\`\`\``,
      topics: ['TypeScript', 'Types', 'Interfaces', 'Type System'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'typescript-advanced',
      title: 'TypeScript Advanced: Generics, Utility Types & Type Narrowing',
      difficulty: 'Hard' as any,
      category: 'TypeScript',
      description: 'Master advanced TypeScript: generics, utility types, type guards, conditional types',
      answer: `# TypeScript Advanced Features

## Generics

\`\`\`typescript
// Generic function
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello');
identity(123); // Type inferred

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: 'hello' };
const numberBox: Box<number> = { value: 123 };

// Generic constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength('hello'); // ✅
logLength([1, 2, 3]); // ✅
logLength(123); // ❌ Error

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Generic classes
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T {
    return this.data[index];
  }
}

const userStore = new DataStore<User>();
\`\`\`

## Utility Types

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - Make all properties optional
type PartialUser = Partial<User>;
const update: PartialUser = { name: 'John' };

// Required - Make all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - Make all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - Select specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - Exclude specific properties
type UserWithoutEmail = Omit<User, 'email'>;

// Record - Create object type with keys and value type
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
const roles: UserRoles = {
  john: 'admin',
  jane: 'user'
};

// Exclude - Exclude types from union
type Status = 'pending' | 'approved' | 'rejected';
type ActiveStatus = Exclude<Status, 'rejected'>;

// Extract - Extract types from union
type ErrorStatus = Extract<Status, 'rejected'>;

// NonNullable - Remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;

// ReturnType - Get function return type
function getUser() {
  return { id: 1, name: 'John' };
}
type UserReturn = ReturnType<typeof getUser>;

// Parameters - Get function parameter types
type GetUserParams = Parameters<typeof getUser>;

// Awaited - Get type from Promise
type UserPromise = Promise<User>;
type UserData = Awaited<UserPromise>;
\`\`\`

## Type Guards & Narrowing

\`\`\`typescript
// typeof guard
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// instanceof guard
class Dog {
  bark() { console.log('Woof!'); }
}
class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

// Custom type guard
interface User {
  type: 'user';
  name: string;
}
interface Admin {
  type: 'admin';
  name: string;
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return user.type === 'admin';
}

function greet(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(\`Admin: \${user.permissions.length} permissions\`);
  } else {
    console.log(\`User: \${user.name}\`);
  }
}

// Discriminated unions
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.size ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}
\`\`\`

## Conditional Types

\`\`\`typescript
// Basic conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Infer keyword
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: 'John' };
}

type UserType = GetReturnType<typeof getUser>;

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]
\`\`\`

## Mapped Types

\`\`\`typescript
// Basic mapped type
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface User {
  name: string;
  age: number;
}

type NullableUser = Nullable<User>;
// { name: string | null; age: number | null }

// Add readonly modifier
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

// Remove optional modifier
type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Remap keys
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number }
\`\`\`

## Template Literal Types

\`\`\`typescript
// String manipulation
type Greeting = 'hello' | 'hi';
type Name = 'world' | 'typescript';
type Message = \`\${Greeting} \${Name}\`;
// "hello world" | "hello typescript" | "hi world" | "hi typescript"

// Event names
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>; // "onClick"

// CSS properties
type CSSProperty = 'margin' | 'padding';
type CSSValue = \`\${CSSProperty}-\${'top' | 'bottom' | 'left' | 'right'}\`;
// "margin-top" | "margin-bottom" | ...
\`\`\``,
      topics: ['TypeScript', 'Generics', 'Utility Types', 'Type Narrowing', 'Advanced'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 5. React.js (MUST)
    // ========================================
    {
      id: 'react-hooks-fundamentals',
      title: 'React Hooks: useState, useEffect, useContext & Custom Hooks',
      difficulty: 'Medium' as any,
      category: 'React.js',
      description: 'Master React Hooks: state management, side effects, context API, and building custom hooks',
      answer: `# React Hooks Fundamentals

## useState Hook

\`\`\`jsx
import { useState } from 'react';

// Basic usage
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment (functional)</button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
}

// Object state
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateName = (name) => {
    setUser(prev => ({ ...prev, name })); // Spread to preserve other properties
  };
}

// Lazy initialization (expensive computation)
function ExpensiveComponent() {
  const [data, setData] = useState(() => {
    return expensiveComputation(); // Only runs once
  });
}
\`\`\`

## useEffect Hook

\`\`\`jsx
import { useEffect, useState } from 'react';

// Basic side effect (runs after every render)
function Component() {
  useEffect(() => {
    console.log('Component rendered');
  });
}

// Effect with dependencies (runs when deps change)
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Only re-run when userId changes
}

// Effect with cleanup
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);
}

// Multiple effects for separation of concerns
function Dashboard() {
  useEffect(() => {
    // Effect 1: Analytics
    trackPageView();
  }, []);

  useEffect(() => {
    // Effect 2: Data fetching
    fetchData();
  }, []);
}

// Effect execution order
// 1. Component renders
// 2. useEffect runs
// 3. Cleanup from previous effect (if any)
// 4. New effect runs
\`\`\`

## useContext Hook

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();
const UserContext = createContext();

// Provider component
function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Dashboard />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

// Consume context
function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className={theme}>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

// Custom hook to simplify context usage
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
\`\`\`

## Custom Hooks

\`\`\`jsx
// useFetch - Data fetching hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true; // Cleanup
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function Users() {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}

// useLocalStorage - Persist state
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// useDebounce - Debounce value changes
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchInput() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      searchAPI(debouncedSearch);
    }
  }, [debouncedSearch]);

  return <input value={search} onChange={e => setSearch(e.target.value)} />;
}

// useWindowSize - Track window dimensions
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
\`\`\`

## Rules of Hooks

1. **Only call hooks at the top level** (not in loops, conditions, or nested functions)
2. **Only call hooks from React functions** (components or custom hooks)
3. **Custom hooks must start with "use"**

\`\`\`jsx
// ❌ Wrong
function Component({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // Error!
  }
}

// ✅ Correct
function Component({ condition }) {
  const [state, setState] = useState(0);

  if (condition) {
    // Use state here
  }
}
\`\`\``,
      topics: ['React', 'Hooks', 'useState', 'useEffect', 'useContext', 'Custom Hooks'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'react-performance',
      title: 'React Performance: memo, useMemo, useCallback & Optimization',
      difficulty: 'Hard' as any,
      category: 'React.js',
      description: 'Master React performance optimization techniques and best practices',
      answer: `# React Performance Optimization

## React.memo

\`\`\`jsx
import { memo } from 'react';

// Without memo - re-renders on every parent render
function ExpensiveComponent({ data }) {
  console.log('Rendering...');
  return <div>{/* Complex rendering */}</div>;
}

// With memo - only re-renders when props change
const OptimizedComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering...');
  return <div>{/* Complex rendering */}</div>;
});

// Custom comparison function
const CustomMemo = memo(
  function Component({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true to skip re-render
    return prevProps.user.id === nextProps.user.id;
  }
);
\`\`\`

## useMemo Hook

\`\`\`jsx
import { useMemo, useState } from 'react';

function ProductList({ products, filter }) {
  // ❌ Expensive calculation on every render
  const filteredProducts = products.filter(p => p.category === filter);

  // ✅ Memoized - only recalculates when dependencies change
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => p.category === filter);
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

// Complex calculations
function Analytics({ data }) {
  const statistics = useMemo(() => {
    return {
      total: data.reduce((sum, item) => sum + item.value, 0),
      average: data.reduce((sum, item) => sum + item.value, 0) / data.length,
      max: Math.max(...data.map(item => item.value))
    };
  }, [data]);

  return <div>{/* Display statistics */}</div>;
}
\`\`\`

## useCallback Hook

\`\`\`jsx
import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ New function on every render
  const handleClick = () => {
    setCount(count + 1);
  };

  // ✅ Memoized function
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // No dependencies - never changes

  const addItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Count: {count}</button>
      <ExpensiveChild onAdd={addItem} />
    </div>
  );
}

const ExpensiveChild = memo(({ onAdd }) => {
  console.log('Child rendered');
  return <button onClick={() => onAdd('new')}>Add Item</button>;
});
\`\`\`

## useCallback vs useMemo

\`\`\`jsx
// useCallback returns memoized function
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useMemo returns memoized value
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Equivalent:
const memoizedCallback = useMemo(() => {
  return () => doSomething(a, b);
}, [a, b]);
\`\`\`

## Code Splitting & Lazy Loading

\`\`\`jsx
import { lazy, Suspense } from 'react';

// Lazy load component
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}

// Route-based code splitting
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

## Virtualization (Large Lists)

\`\`\`jsx
import { FixedSizeList } from 'react-window';

function LargeList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}
\`\`\`

## Performance Best Practices

\`\`\`jsx
// 1. Avoid inline objects/arrays in props
// ❌ Bad
<Component style={{ margin: 10 }} items={[1, 2, 3]} />

// ✅ Good
const style = { margin: 10 };
const items = [1, 2, 3];
<Component style={style} items={items} />

// 2. Use key prop correctly
// ❌ Bad
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ Good
{items.map(item => <div key={item.id}>{item.name}</div>)}

// 3. Lift state up only when needed
// Keep state as local as possible

// 4. Use production build
// npm run build

// 5. Avoid anonymous functions in renders
// ❌ Bad
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Good
const handleClickWrapped = useCallback(() => handleClick(id), [id]);
<button onClick={handleClickWrapped}>Click</button>

// 6. Batch state updates (React 18 automatic)
setCount(c => c + 1);
setName('John');
setAge(30);
// All batched into single re-render
\`\`\`

## React DevTools Profiler

\`\`\`jsx
import { Profiler } from 'react';

function onRenderCallback(
  id, // Component id
  phase, // "mount" or "update"
  actualDuration, // Time spent rendering
  baseDuration, // Estimated time without memoization
  startTime,
  commitTime,
  interactions
) {
  console.log({ id, phase, actualDuration });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}
\`\`\``,
      topics: ['React', 'Performance', 'memo', 'useMemo', 'useCallback', 'Optimization'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 6. Node.js + Express (MUST)
    // ========================================
    {
      id: 'nodejs-express-fundamentals',
      title: 'Node.js + Express: Middleware, Routing & Error Handling',
      difficulty: 'Medium' as any,
      category: 'Node.js',
      description: 'Master Node.js backend development with Express framework',
      answer: `# Node.js + Express Fundamentals

## Express Setup

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Routing

\`\`\`javascript
// Basic routes
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, ...req.body });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});

// Route parameters
app.get('/users/:id/posts/:postId', (req, res) => {
  const { id, postId } = req.params;
  res.json({ userId: id, postId });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, page, limit } = req.query;
  res.json({ query: q, page, limit });
});

// Router module
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

app.use('/api/users', userRouter);
\`\`\`

## Middleware

\`\`\`javascript
// Application-level middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to next middleware
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// Error-handling middleware (4 parameters!)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Built-in middleware
app.use(express.static('public')); // Serve static files
app.use(express.json({ limit: '10mb' }));

// Third-party middleware
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());
app.use(helmet()); // Security headers
app.use(morgan('combined')); // Logging

// Custom authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Use auth middleware
app.get('/protected', authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Multiple middleware
app.get('/users/:id',
  authenticate,
  authorize('admin'),
  getUserById
);
\`\`\`

## Error Handling

\`\`\`javascript
// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  res.json(user);
}));

// Global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    // Production
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      console.error('ERROR:', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      });
    }
  }
});

// 404 handler
app.all('*', (req, res, next) => {
  next(new AppError(\`Cannot find \${req.originalUrl}\`, 404));
});
\`\`\`

## Request/Response

\`\`\`javascript
// Request object
app.get('/example', (req, res) => {
  console.log(req.params);      // URL parameters
  console.log(req.query);       // Query string
  console.log(req.body);        // Request body
  console.log(req.headers);     // Headers
  console.log(req.cookies);     // Cookies
  console.log(req.method);      // HTTP method
  console.log(req.url);         // URL
  console.log(req.ip);          // Client IP
});

// Response methods
res.json({ data: [] });              // Send JSON
res.send('Hello');                   // Send response
res.status(404).send('Not found');   // Set status
res.redirect('/login');              // Redirect
res.download('/path/to/file.pdf');   // Download file
res.sendFile('/path/to/file.html');  // Send file
res.cookie('name', 'value', { maxAge: 900000 });
res.clearCookie('name');

// Response chaining
res.status(201)
   .set('Content-Type', 'application/json')
   .json({ created: true });
\`\`\`

## Validation & Sanitization

\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/users',
  // Validation middleware
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).trim(),
  body('age').isInt({ min: 18 }),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process valid data
    res.json({ message: 'User created' });
  }
);
\`\`\`

## Best Practices

\`\`\`javascript
// 1. Environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// 2. Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// 3. Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// 4. Compression
const compression = require('compression');
app.use(compression());

// 5. Request size limit
app.use(express.json({ limit: '10kb' }));
\`\`\``,
      topics: ['Node.js', 'Express', 'Middleware', 'Routing', 'Error Handling'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 7. Databases (MUST)
    // ========================================
    {
      id: 'databases-sql-nosql',
      title: 'Databases: PostgreSQL, MongoDB, Redis & ORMs',
      difficulty: 'Hard' as any,
      category: 'Databases',
      description: 'Master SQL and NoSQL databases, indexing, transactions, and ORMs',
      answer: `# Databases: SQL & NoSQL

## PostgreSQL (Relational)

\`\`\`sql
-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Foreign keys
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- JOINS
SELECT u.name, p.title
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- Transactions (ACID)
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- or ROLLBACK

-- Window functions
SELECT
  name,
  salary,
  RANK() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- Common Table Expressions (CTE)
WITH high_earners AS (
  SELECT * FROM employees WHERE salary > 100000
)
SELECT * FROM high_earners;
\`\`\`

## MongoDB (NoSQL)

\`\`\`javascript
// Insert
db.users.insertOne({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  tags: ['developer', 'javascript']
});

db.users.insertMany([
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
]);

// Find
db.users.find({ age: { $gte: 25 } });
db.users.findOne({ email: 'john@example.com' });

// Update
db.users.updateOne(
  { _id: ObjectId('...') },
  { $set: { age: 31 } }
);

db.users.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
);

// Delete
db.users.deleteOne({ _id: ObjectId('...') });
db.users.deleteMany({ age: { $lt: 18 } });

// Aggregation pipeline
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: {
    _id: '$department',
    avgAge: { $avg: '$age' },
    count: { $sum: 1 }
  }},
  { $sort: { avgAge: -1 } }
]);

// Indexing
db.users.createIndex({ email: 1 }); // Ascending
db.users.createIndex({ name: 1, age: -1 }); // Compound
db.users.createIndex({ tags: 1 }); // Array field

// Populate (references)
// User schema
{
  name: 'John',
  posts: [ObjectId('...'), ObjectId('...')]
}

// Query with populate
db.users.aggregate([
  { $lookup: {
    from: 'posts',
    localField: 'posts',
    foreignField: '_id',
    as: 'postDetails'
  }}
]);
\`\`\`

## Redis (In-Memory Cache)

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

// String operations
await client.set('key', 'value');
await client.get('key');
await client.setEx('session:123', 3600, 'data'); // Expires in 1 hour

// Hash operations (objects)
await client.hSet('user:1', {
  name: 'John',
  email: 'john@example.com'
});
await client.hGetAll('user:1');

// Lists (arrays)
await client.lPush('queue', 'task1');
await client.lPush('queue', 'task2');
await client.rPop('queue'); // Pop from right

// Sets (unique values)
await client.sAdd('tags', 'javascript', 'nodejs', 'react');
await client.sMembers('tags');

// Sorted sets (leaderboard)
await client.zAdd('scores', [
  { score: 100, value: 'player1' },
  { score: 150, value: 'player2' }
]);
await client.zRange('scores', 0, -1); // Get all

// Pub/Sub
const subscriber = client.duplicate();
await subscriber.subscribe('notifications', (message) => {
  console.log('Received:', message);
});

await client.publish('notifications', 'New user signed up');

// Caching pattern
async function getUser(id) {
  // Check cache first
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  // Fetch from database
  const user = await db.users.findById(id);

  // Store in cache
  await redis.setEx(\`user:\${id}\`, 3600, JSON.stringify(user));

  return user;
}
\`\`\`

## Prisma ORM

\`\`\`typescript
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}

// Usage
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create
const user = await prisma.user.create({
  data: {
    email: 'john@example.com',
    name: 'John',
    posts: {
      create: [
        { title: 'First Post', content: 'Content' }
      ]
    }
  }
});

// Find with relations
const users = await prisma.user.findMany({
  include: {
    posts: true
  }
});

// Update
await prisma.user.update({
  where: { id: 1 },
  data: { name: 'John Doe' }
});

// Transactions
await prisma.$transaction([
  prisma.user.create({ data: { name: 'Alice' } }),
  prisma.post.create({ data: { title: 'Post' } })
]);
\`\`\`

## Database Best Practices

\`\`\`sql
-- 1. Indexing strategy
-- Index foreign keys
-- Index columns used in WHERE, ORDER BY, JOIN

-- 2. Query optimization
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';

-- 3. Avoid N+1 queries
-- ❌ Bad: Fetching posts in loop
users.forEach(user => {
  const posts = await db.posts.find({ userId: user.id });
});

-- ✅ Good: Single query with JOIN
SELECT u.*, p.*
FROM users u
LEFT JOIN posts p ON u.id = p.user_id;

-- 4. Connection pooling
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

-- 5. Prepared statements (prevent SQL injection)
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);
\`\`\``,
      topics: ['Databases', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL', 'ORM'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 8. Authentication & Security (MUST)
    // ========================================
    {
      id: 'auth-security',
      title: 'Authentication, Authorization & Web Security',
      difficulty: 'Hard' as any,
      category: 'Security',
      description: 'Master JWT, OAuth2, security best practices, and common vulnerabilities',
      answer: `# Authentication & Security

## JWT (JSON Web Tokens)

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generate JWT
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// Verify JWT
function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

// Auth middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Refresh tokens
function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
}

// Usage
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  // Store refresh token in httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.json({ accessToken });
});
\`\`\`

## Password Hashing

\`\`\`javascript
const bcrypt = require('bcryptjs');

// Hash password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// Verify password
async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

// Usage in registration
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Validate password strength
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password too short' });
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  res.status(201).json({ user: { id: user.id, email: user.email } });
});
\`\`\`

## OAuth 2.0

\`\`\`javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  // Find or create user
  let user = await User.findOne({ googleId: profile.id });

  if (!user) {
    user = await User.create({
      googleId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName
    });
  }

  done(null, user);
}));

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(\`/dashboard?token=\${token}\`);
  }
);
\`\`\`

## CORS (Cross-Origin Resource Sharing)

\`\`\`javascript
const cors = require('cors');

// Simple CORS
app.use(cors());

// Configured CORS
app.use(cors({
  origin: ['https://example.com', 'https://app.example.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Manual CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});
\`\`\`

## CSRF Protection

\`\`\`javascript
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/submit', csrfProtection, (req, res) => {
  // CSRF token automatically verified
  res.json({ success: true });
});
\`\`\`

## XSS Prevention

\`\`\`javascript
// 1. Escape user input
const escapeHtml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// 2. Content Security Policy
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", 'https://fonts.googleapis.com'],
    imgSrc: ["'self'", 'data:', 'https:'],
  }
}));

// 3. Sanitize user input
const DOMPurify = require('isomorphic-dompurify');

const clean = DOMPurify.sanitize(dirty);
\`\`\`

## SQL Injection Prevention

\`\`\`javascript
// ❌ Vulnerable
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// ✅ Parameterized queries
const query = 'SELECT * FROM users WHERE email = $1';
await pool.query(query, [email]);

// ✅ ORM (Prisma, TypeORM)
await prisma.user.findOne({ where: { email } });
\`\`\`

## Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

// General rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

// Stricter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 attempts per 15 minutes
  skipSuccessfulRequests: true
});

app.use('/auth/login', authLimiter);
\`\`\`

## Security Headers

\`\`\`javascript
const helmet = require('helmet');

app.use(helmet());

// Equivalent to:
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
\`\`\`

## Security Checklist

✅ Use HTTPS everywhere
✅ Hash passwords with bcrypt
✅ Validate and sanitize all inputs
✅ Use parameterized queries
✅ Implement CSRF protection
✅ Set secure HTTP headers
✅ Implement rate limiting
✅ Use JWT with short expiration
✅ Store secrets in environment variables
✅ Keep dependencies updated
✅ Implement proper logging
✅ Use secure session cookies (httpOnly, secure, sameSite)`,
      topics: ['Security', 'Authentication', 'JWT', 'OAuth2', 'CORS', 'XSS', 'CSRF'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 9. System Design (MUST)
    // ========================================
    {
      id: 'system-design',
      title: 'System Design: Scalability, Caching, Load Balancing & CDNs',
      difficulty: 'Hard' as any,
      category: 'System Design',
      description: 'Master system design principles for scalable applications',
      answer: `# System Design Fundamentals

## Load Balancing

\`\`\`
Client → Load Balancer → [Server 1, Server 2, Server 3]

Algorithms:
1. Round Robin: Distribute requests sequentially
2. Least Connections: Send to server with fewest active connections
3. IP Hash: Same client always goes to same server
4. Weighted: Based on server capacity
\`\`\`

\`\`\`javascript
// Nginx load balancer config
upstream backend {
  least_conn; // Algorithm
  server api1.example.com;
  server api2.example.com;
  server api3.example.com;
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
  }
}
\`\`\`

## Caching Strategies

\`\`\`javascript
// 1. Cache-Aside (Lazy Loading)
async function getData(key) {
  // Check cache
  let data = await cache.get(key);

  if (data) {
    return data;
  }

  // Cache miss - fetch from DB
  data = await db.query(key);

  // Store in cache
  await cache.set(key, data, 3600);

  return data;
}

// 2. Write-Through Cache
async function saveData(key, value) {
  // Write to cache
  await cache.set(key, value);

  // Write to database
  await db.save(key, value);
}

// 3. Write-Behind Cache (Async)
async function saveData(key, value) {
  // Write to cache immediately
  await cache.set(key, value);

  // Queue database write (async)
  queue.push({ key, value });
}

// 4. Cache Invalidation
async function updateData(key, value) {
  // Update database
  await db.update(key, value);

  // Invalidate cache
  await cache.delete(key);
}

// Cache with TTL (Time To Live)
await redis.setEx('user:123', 3600, JSON.stringify(user)); // 1 hour

// Cache stampede prevention
async function getDataSafe(key) {
  const lock = \`lock:\${key}\`;

  // Try to acquire lock
  if (await redis.set(lock, '1', 'NX', 'EX', 10)) {
    // This instance will fetch data
    const data = await db.query(key);
    await cache.set(key, data, 3600);
    await redis.del(lock);
    return data;
  }

  // Wait and try cache again
  await sleep(100);
  return await cache.get(key);
}
\`\`\`

## Database Patterns

\`\`\`
// Database Replication (Master-Slave)
Master DB (writes) → Slave 1, Slave 2, Slave 3 (reads)

// Database Sharding (Horizontal Partitioning)
Users A-M → Shard 1
Users N-Z → Shard 2

function getUserShard(userId) {
  return userId % NUM_SHARDS;
}

// Partitioning strategies:
1. Range-based: 1-1000 → Partition 1, 1001-2000 → Partition 2
2. Hash-based: hash(userId) % partitions
3. Geographic: US → Shard 1, EU → Shard 2
\`\`\`

## CDN (Content Delivery Network)

\`\`\`
User (LA) → CDN Edge Server (LA) → Origin Server (NY)

Benefits:
- Reduced latency
- Reduced bandwidth costs
- Better availability
- DDoS protection

// Cache static assets
https://cdn.example.com/images/logo.png
https://cdn.example.com/js/app.js
https://cdn.example.com/css/styles.css

// Cache-Control headers
res.set('Cache-Control', 'public, max-age=31536000'); // 1 year
res.set('Cache-Control', 'no-cache'); // Revalidate every time
res.set('Cache-Control', 'private'); // Don't cache on CDN
\`\`\`

## Microservices Architecture

\`\`\`
Monolith:
[UI + Auth + Products + Orders + Payments] → Database

Microservices:
[API Gateway] → [Auth Service] → Auth DB
              → [Product Service] → Product DB
              → [Order Service] → Order DB
              → [Payment Service] → Payment DB

Advantages:
✅ Independent deployment
✅ Technology diversity
✅ Scalability
✅ Fault isolation

Challenges:
❌ Distributed system complexity
❌ Data consistency
❌ Network latency
❌ Testing complexity
\`\`\`

## Message Queues

\`\`\`javascript
// RabbitMQ / AWS SQS
const amqp = require('amqplib');

// Producer
async function sendEmail(email) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('emails');
  channel.sendToQueue('emails', Buffer.from(JSON.stringify(email)));
}

// Consumer
async function processEmails() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('emails');
  channel.consume('emails', async (msg) => {
    const email = JSON.parse(msg.content.toString());
    await sendEmailService(email);
    channel.ack(msg);
  });
}

// Benefits:
- Async processing
- Decoupling services
- Retry mechanism
- Load leveling
\`\`\`

## CAP Theorem

\`\`\`
CAP Theorem: You can only choose 2 of 3:
- Consistency: All nodes see same data
- Availability: System always responds
- Partition Tolerance: System works despite network failures

Examples:
- MongoDB: CP (Consistency + Partition Tolerance)
- Cassandra: AP (Availability + Partition Tolerance)
- Traditional RDBMS: CA (Consistency + Availability)

In practice, partition tolerance is required, so choose:
- CP: Banking, financial transactions
- AP: Social media, recommendations
\`\`\`

## Scalability Patterns

\`\`\`
// Vertical Scaling (Scale Up)
- Add more CPU, RAM to single server
- Easier but has limits

// Horizontal Scaling (Scale Out)
- Add more servers
- More complex but unlimited

// Auto-scaling
if (cpuUsage > 80% || requestRate > threshold) {
  addServer();
}

if (cpuUsage < 20% && serverCount > minServers) {
  removeServer();
}

// Database connection pooling
const pool = new Pool({
  max: 20,
  min: 5,
  idleTimeoutMillis: 30000
});

// Request batching
const batchRequests = [];
setTimeout(() => {
  const results = await fetchBatch(batchRequests);
  // Process results
}, 100);
\`\`\`

## Monitoring & Observability

\`\`\`javascript
// Logging
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Metrics
const prometheus = require('prom-client');

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path, res.statusCode)
      .observe(duration);
  });
  next();
});

// Health checks
app.get('/health', async (req, res) => {
  const dbHealthy = await checkDatabase();
  const cacheHealthy = await checkRedis();

  if (dbHealthy && cacheHealthy) {
    res.status(200).json({ status: 'healthy' });
  } else {
    res.status(503).json({ status: 'unhealthy' });
  }
});
\`\`\`

## Real-World Example: URL Shortener

\`\`\`
Requirements:
- Shorten URL: POST /api/shorten
- Redirect: GET /:shortCode
- 100M URLs, 1000 requests/sec

Design:
1. Generate short code (base62 encoding)
2. Store in database with TTL
3. Cache popular URLs in Redis
4. Use CDN for static assets
5. Load balance across multiple servers

Database schema:
urls {
  id: bigint (primary key)
  short_code: varchar(7) (unique, indexed)
  long_url: text
  created_at: timestamp
  expires_at: timestamp
  clicks: int
}

Capacity:
- 62^7 = 3.5 trillion possible short codes
- 100M URLs = 100M * 500 bytes = 50GB storage
- 1000 req/s * 86400 = 86M requests/day

Caching:
- Cache top 20% URLs (80/20 rule)
- TTL: 24 hours
- Eviction: LRU
\`\`\``,
      topics: ['System Design', 'Scalability', 'Load Balancing', 'Caching', 'CDN', 'CAP'],
      estimatedTime: 45,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 10. Next.js (MUST for React jobs)
    // ========================================
    {
      id: 'nextjs-complete',
      title: 'Next.js: SSR, SSG, ISR, API Routes & App Router',
      difficulty: 'Hard' as any,
      category: 'Next.js',
      description: 'Master Next.js for production: rendering strategies, routing, data fetching, and optimization',
      answer: `# Next.js Complete Guide

## Rendering Strategies

\`\`\`jsx
// 1. SSG (Static Site Generation) - Pre-rendered at build time
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();

  return {
    props: { posts },
    revalidate: 60 // ISR: Revalidate every 60 seconds
  };
}

export default function Page({ posts }) {
  return <div>{posts.map(post => <Post key={post.id} {...post} />)}</div>;
}

// 2. SSR (Server-Side Rendering) - Rendered on each request
export async function getServerSideProps(context) {
  const { req, res, query, params } = context;
  const data = await fetch(\`https://api.example.com/user/\${params.id}\`);
  const user = await data.json();

  return {
    props: { user }
  };
}

// 3. ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  return {
    props: { data: await fetchData() },
    revalidate: 10 // Regenerate page every 10 seconds
  };
}

// 4. CSR (Client-Side Rendering) with SWR
import useSWR from 'swr';

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return <div>{data.name}</div>;
}
\`\`\`

## App Router (Next.js 13+)

\`\`\`jsx
// app/page.tsx - Server Component (default)
export default async function HomePage() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // SSG
  });
  const posts = await data.json();

  return <div>{posts.map(post => <Post key={post.id} {...post} />)}</div>;
}

// app/dashboard/page.tsx - Dynamic rendering
export const dynamic = 'force-dynamic'; // SSR
export const revalidate = 60; // ISR

export default async function Dashboard() {
  const data = await fetch('https://api.example.com/stats');
  return <DashboardView data={data} />;
}

// Client Component
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

## Dynamic Routes

\`\`\`jsx
// pages/posts/[id].tsx
export async function getStaticPaths() {
  const posts = await fetchAllPosts();

  return {
    paths: posts.map(post => ({
      params: { id: post.id.toString() }
    })),
    fallback: 'blocking' // or true, false
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(params.id);

  return {
    props: { post },
    revalidate: 60
  };
}

// Catch-all routes: pages/docs/[...slug].tsx
// Matches: /docs/a, /docs/a/b, /docs/a/b/c

// Optional catch-all: pages/docs/[[...slug]].tsx
// Matches: /docs, /docs/a, /docs/a/b
\`\`\`

## API Routes

\`\`\`javascript
// pages/api/users.ts
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await db.users.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = await db.users.create({ data: req.body });
    res.status(201).json(user);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Dynamic API route: pages/api/users/[id].ts
export default async function handler(req, res) {
  const { id } = req.query;
  const user = await db.users.findUnique({ where: { id } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
}

// Middleware
export function middleware(request) {
  const token = request.cookies.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*']
};
\`\`\`

## Data Fetching Patterns

\`\`\`jsx
// Server Component data fetching
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}

// Parallel data fetching
export default async function Page() {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
  ]);

  return <Dashboard users={users} posts={posts} />;
}

// Sequential data fetching
export default async function Page({ params }) {
  const user = await getUser(params.id);
  const posts = await getUserPosts(user.id); // Depends on user

  return <Profile user={user} posts={posts} />;
}
\`\`\`

## Image Optimization

\`\`\`jsx
import Image from 'next/image';

// Optimized image with lazy loading
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority // Load immediately (above fold)
/>

// Responsive image
<Image
  src="/photo.jpg"
  alt="Photo"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
/>

// External images
// next.config.js
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com']
  }
};
\`\`\`

## Performance Optimization

\`\`\`jsx
// Dynamic imports
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR for this component
});

// Font optimization
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

// Script optimization
import Script from 'next/script';

<Script
  src="https://example.com/script.js"
  strategy="lazyOnload" // or afterInteractive, beforeInteractive
/>
\`\`\`

## Environment Variables

\`\`\`bash
# .env.local
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://api.example.com

# Access in code
// Server-side only
process.env.DATABASE_URL

// Client-side (must start with NEXT_PUBLIC_)
process.env.NEXT_PUBLIC_API_URL
\`\`\`

## Configuration

\`\`\`javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true
      }
    ];
  },

  // Rewrites (proxy)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*'
      }
    ];
  },

  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ];
  }
};
\`\`\`

## When to Use What

**SSG (getStaticProps)**:
- Marketing pages, blogs, documentation
- Content doesn't change often
- Best performance

**ISR (revalidate)**:
- E-commerce product pages
- News sites
- Content updates periodically

**SSR (getServerSideProps)**:
- User dashboards
- Personalized content
- Real-time data
- SEO required

**CSR (useEffect/SWR)**:
- Private dashboards
- Real-time updates
- SEO not needed`,
      topics: ['Next.js', 'SSR', 'SSG', 'ISR', 'API Routes', 'App Router'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 11. State Management (MUST)
    // ========================================
    {
      id: 'state-management',
      title: 'State Management: Redux Toolkit, Zustand & Context API',
      difficulty: 'Medium' as any,
      category: 'State Management',
      description: 'Master state management solutions for React applications',
      answer: `# State Management Solutions

## Redux Toolkit (Recommended)

\`\`\`javascript
// store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('/api/users');
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(u => u.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer
  }
});

// App.jsx
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

// Component usage
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser } from './store/userSlice';

function UserList() {
  const { list, loading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addUser({ id: Date.now(), name: 'New User' }));
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <button onClick={handleAdd}>Add User</button>
      {list.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
\`\`\`

## Zustand (Lightweight Alternative)

\`\`\`javascript
import create from 'zustand';
import { persist } from 'zustand/middleware';

// Simple store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// Component usage
function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Advanced: Async actions
const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addUser: (user) => set((state) => ({
    users: [...state.users, user]
  })),

  removeUser: (id) => set((state) => ({
    users: state.users.filter(u => u.id !== id)
  }))
}));

// Persisted store
const usePersistentStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null })
    }),
    {
      name: 'auth-storage' // localStorage key
    }
  )
);

// Slices pattern
const createUserSlice = (set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] }))
});

const createCartSlice = (set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] }))
});

const useStore = create((...args) => ({
  ...createUserSlice(...args),
  ...createCartSlice(...args)
}));
\`\`\`

## Context API + useReducer

\`\`\`jsx
// For simpler state management
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false
  });

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Usage
function LoginButton() {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <button onClick={() => isAuthenticated ? logout() : login({ name: 'John' })}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
}
\`\`\`

## When to Use What

**Redux Toolkit**:
- Large applications
- Complex state logic
- Time-travel debugging needed
- Team familiarity with Redux

**Zustand**:
- Medium to large apps
- Simple API preferred
- Less boilerplate
- Good TypeScript support

**Context API**:
- Small to medium apps
- Simple state sharing
- Theme, auth, i18n
- Avoid prop drilling

**React Query/SWR**:
- Server state management
- Caching and synchronization
- Background updates`,
      topics: ['State Management', 'Redux Toolkit', 'Zustand', 'Context API'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 12. Tailwind CSS (MUST)
    // ========================================
    {
      id: 'tailwind-css',
      title: 'Tailwind CSS: Utility-First, Configuration & Best Practices',
      difficulty: 'Medium' as any,
      category: 'Tailwind CSS',
      description: 'Master Tailwind CSS for rapid UI development',
      answer: `# Tailwind CSS Complete Guide

## Setup & Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          900: '#1e3a8a'
        },
        brand: '#ff6b6b'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      screens: {
        '3xl': '1920px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
\`\`\`

## Utility Classes

\`\`\`jsx
// Layout & Spacing
<div className="container mx-auto px-4">
  <div className="flex justify-between items-center">
    <div className="w-1/2 p-4 m-2">Content</div>
  </div>
</div>

// Typography
<h1 className="text-4xl font-bold text-gray-900 leading-tight">
  Heading
</h1>
<p className="text-base text-gray-600 font-medium">
  Paragraph text
</p>

// Colors
<div className="bg-blue-500 text-white border-2 border-gray-300">
  Colored box
</div>

// Responsive Design
<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  Responsive width
</div>

// Hover & Focus States
<button className="bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:bg-blue-800">
  Interactive Button
</button>

// Dark Mode
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Dark mode support
</div>
\`\`\`

## Common Patterns

\`\`\`jsx
// Card Component
<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
  <img className="w-full h-48 object-cover" src="/image.jpg" alt="Card" />
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      Card description goes here.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag
    </span>
  </div>
</div>

// Navigation Bar
<nav className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold">Logo</a>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
      </div>
    </div>
  </div>
</nav>

// Form
<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="you@example.com"
    />
  </div>
  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
    Submit
  </button>
</form>

// Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded-lg shadow">Item 1</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 2</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 3</div>
</div>
\`\`\`

## Custom Components with @apply

\`\`\`css
/* styles.css */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }

  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500;
  }

  .btn-secondary {
    @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}

/* Usage */
<button className="btn btn-primary">Click Me</button>
\`\`\`

## Responsive Design

\`\`\`jsx
// Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

<div className="
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
  p-2 sm:p-4 md:p-6 lg:p-8
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  gap-4 md:gap-6 lg:gap-8
">
  Responsive content
</div>

// Hide/Show at breakpoints
<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Desktop only</div>
\`\`\`

## JIT (Just-In-Time) Mode

\`\`\`jsx
// Arbitrary values (JIT only)
<div className="w-[137px] h-[344px]">Custom sizes</div>
<div className="bg-[#1da1f2]">Custom color</div>
<div className="grid-cols-[200px_1fr_1fr]">Custom grid</div>

// Dynamic classes (requires safelist)
// tailwind.config.js
module.exports = {
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/
    }
  ]
};
\`\`\`

## Best Practices

\`\`\`jsx
// ✅ Good: Reusable components
const Button = ({ children, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  return (
    <button className={\`\${baseClasses} \${variants[variant]}\`}>
      {children}
    </button>
  );
};

// ✅ Good: Conditional classes with clsx
import clsx from 'clsx';

<div className={clsx(
  'p-4 rounded-lg',
  isActive && 'bg-blue-500 text-white',
  !isActive && 'bg-gray-100 text-gray-700',
  large && 'text-lg'
)}>
  Content
</div>

// ❌ Avoid: Long className strings
<div className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col items-center justify-center">
  Too many classes
</div>

// ✅ Better: Extract to component
const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
    <div className="flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);
\`\`\`

## Production Optimization

\`\`\`bash
# Purge unused styles (automatic in production)
npm run build

# File size: ~3KB gzipped (compared to 400KB+ for full CSS frameworks)
\`\`\``,
      topics: ['Tailwind CSS', 'Utility-First', 'Responsive Design', 'JIT'],
      estimatedTime: 25,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 13. REST APIs & GraphQL
    // ========================================
    {
      id: 'rest-graphql',
      title: 'REST APIs & GraphQL: Design, Best Practices & Implementation',
      difficulty: 'Medium' as any,
      category: 'APIs',
      description: 'Master API design patterns, REST principles, and GraphQL fundamentals',
      answer: `# REST APIs & GraphQL

## REST API Best Practices

\`\`\`javascript
// Resource-based URLs
GET    /api/users           // Get all users
GET    /api/users/:id       // Get user by ID
POST   /api/users           // Create user
PUT    /api/users/:id       // Update user (full)
PATCH  /api/users/:id       // Update user (partial)
DELETE /api/users/:id       // Delete user

// Nested resources
GET    /api/users/:id/posts      // Get user's posts
POST   /api/users/:id/posts      // Create post for user
GET    /api/posts/:id/comments   // Get post's comments

// Query parameters for filtering, sorting, pagination
GET /api/users?role=admin&sort=name&page=2&limit=20

// Response structure
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z"
  }
}

// Error response
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 123 not found",
    "details": {}
  }
}

// Status codes
200 OK              // Success
201 Created         // Resource created
204 No Content      // Success, no response body
400 Bad Request     // Invalid request
401 Unauthorized    // Not authenticated
403 Forbidden       // Not authorized
404 Not Found       // Resource not found
409 Conflict        // Duplicate resource
422 Unprocessable   // Validation error
500 Server Error    // Internal error
503 Unavailable     // Service down
\`\`\`

## Express REST API Example

\`\`\`javascript
const express = require('express');
const router = express.Router();

// GET /api/users?page=1&limit=10&sort=name
router.get('/users', async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'createdAt', order = 'desc' } = req.query;

    const users = await User.find()
      .sort({ [sort]: order === 'desc' ? -1 : 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-password');

    const count = await User.countDocuments();

    res.json({
      success: true,
      data: users,
      meta: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: error.message }
    });
  }
});

// POST /api/users
router.post('/users', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Validation
    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing required fields' }
      });
    }

    // Check duplicate
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        error: { message: 'User already exists' }
      });
    }

    const user = await User.create({ email, name, password });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: error.message }
    });
  }
});

// PATCH /api/users/:id
router.patch('/users/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ownership or admin
    if (req.user.id !== id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: { message: 'Forbidden' }
      });
    }

    const user = await User.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: { message: 'User not found' }
      });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: error.message }
    });
  }
});
\`\`\`

## API Versioning

\`\`\`javascript
// URL versioning (most common)
/api/v1/users
/api/v2/users

// Header versioning
GET /api/users
Headers: Accept: application/vnd.api.v2+json

// Query parameter versioning
GET /api/users?version=2
\`\`\`

## GraphQL Basics

\`\`\`javascript
// Schema definition
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts(limit: Int, offset: Int): [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): Boolean!
  }
\`;

// Resolvers
const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
    posts: async (_, { limit = 10, offset = 0 }) => {
      return await Post.find().limit(limit).skip(offset);
    }
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = await User.create({ name, email });
      return user;
    },
    updateUser: async (_, { id, ...updates }) => {
      return await User.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return true;
    }
  },

  User: {
    posts: async (parent) => {
      return await Post.find({ authorId: parent.id });
    }
  },

  Post: {
    author: async (parent) => {
      return await User.findById(parent.authorId);
    },
    comments: async (parent) => {
      return await Comment.find({ postId: parent.id });
    }
  }
};

// Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = verifyToken(token);
    return { user };
  }
});
\`\`\`

## GraphQL Queries

\`\`\`graphql
# Query with nested data
query GetUser {
  user(id: "1") {
    id
    name
    email
    posts {
      id
      title
      comments {
        id
        text
        author {
          name
        }
      }
    }
  }
}

# Query with variables
query GetPosts($limit: Int!, $offset: Int!) {
  posts(limit: $limit, offset: $offset) {
    id
    title
    author {
      name
    }
  }
}

# Mutation
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}

# Fragments
fragment UserFields on User {
  id
  name
  email
}

query {
  user(id: "1") {
    ...UserFields
    posts {
      title
    }
  }
}
\`\`\`

## REST vs GraphQL

**REST:**
✅ Simple, well-understood
✅ Easy caching (HTTP)
✅ Better for simple resources
❌ Over-fetching/under-fetching
❌ Multiple requests for related data

**GraphQL:**
✅ Single request for complex data
✅ Client specifies exactly what it needs
✅ Strong typing
❌ Caching more complex
❌ Steeper learning curve
❌ Potential for expensive queries`,
      topics: ['REST API', 'GraphQL', 'API Design', 'HTTP', 'Apollo'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 14. Testing (MUST)
    // ========================================
    {
      id: 'testing-complete',
      title: 'Testing: Unit, Integration, E2E & Best Practices',
      difficulty: 'Medium' as any,
      category: 'Testing',
      description: 'Master testing strategies with Jest, React Testing Library, and Cypress',
      answer: `# Complete Testing Guide

## Unit Testing with Jest

\`\`\`javascript
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// math.test.js
import { add, multiply } from './math';

describe('Math functions', () => {
  test('add should sum two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('multiply should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
  });
});

// Async testing
test('fetches user data', async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({
    id: 1,
    name: 'John Doe'
  });
});

// Mocking
jest.mock('./api');
import { fetchUser } from './api';

test('handles API error', async () => {
  fetchUser.mockRejectedValue(new Error('API Error'));

  await expect(fetchUser(1)).rejects.toThrow('API Error');
});
\`\`\`

## React Component Testing

\`\`\`jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
  test('renders with initial count', () => {
    render(<Counter initialCount={0} />);

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<Counter initialCount={0} />);

    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test('decrements count on button click', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);

    const button = screen.getByRole('button', { name: /decrement/i });
    await user.click(button);

    expect(screen.getByText(/count: 4/i)).toBeInTheDocument();
  });
});

// Testing forms
test('submits form with correct data', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'password123');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});

// Testing async components
test('loads and displays user data', async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });
});

// Testing with context
test('uses auth context', () => {
  render(
    <AuthContext.Provider value={{ user: { name: 'John' } }}>
      <Dashboard />
    </AuthContext.Provider>
  );

  expect(screen.getByText(/welcome, john/i)).toBeInTheDocument();
});
\`\`\`

## Integration Testing

\`\`\`javascript
// API integration test
describe('User API', () => {
  beforeAll(async () => {
    await setupTestDatabase();
  });

  afterAll(async () => {
    await teardownTestDatabase();
  });

  afterEach(async () => {
    await clearDatabase();
  });

  test('POST /api/users creates user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com'
      })
      .expect(201);

    expect(response.body.data).toMatchObject({
      name: 'John Doe',
      email: 'john@example.com'
    });

    const user = await User.findById(response.body.data.id);
    expect(user).toBeDefined();
  });

  test('GET /api/users returns paginated users', async () => {
    await User.create([
      { name: 'User 1', email: 'user1@example.com' },
      { name: 'User 2', email: 'user2@example.com' }
    ]);

    const response = await request(app)
      .get('/api/users?page=1&limit=10')
      .expect(200);

    expect(response.body.data).toHaveLength(2);
    expect(response.body.meta.total).toBe(2);
  });
});
\`\`\`

## E2E Testing with Cypress

\`\`\`javascript
// cypress/e2e/login.cy.js
describe('Login flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('successfully logs in', () => {
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('[data-testid="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });

  it('shows error for invalid credentials', () => {
    cy.get('[data-testid="email"]').type('wrong@example.com');
    cy.get('[data-testid="password"]').type('wrongpassword');
    cy.get('[data-testid="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
    cy.url().should('include', '/login');
  });

  it('validates email format', () => {
    cy.get('[data-testid="email"]').type('invalidemail');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('[data-testid="submit"]').click();

    cy.contains('Invalid email').should('be.visible');
  });
});

// Testing with API mocking
describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: {
        data: [
          { id: 1, name: 'User 1' },
          { id: 2, name: 'User 2' }
        ]
      }
    }).as('getUsers');

    cy.visit('/dashboard');
  });

  it('displays users from API', () => {
    cy.wait('@getUsers');
    cy.contains('User 1').should('be.visible');
    cy.contains('User 2').should('be.visible');
  });
});

// Custom commands
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="submit"]').click();
});

// Usage
cy.login('user@example.com', 'password123');
\`\`\`

## Test Coverage

\`\`\`bash
# Run tests with coverage
npm test -- --coverage

# Coverage thresholds in package.json
{
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
\`\`\`

## Testing Best Practices

\`\`\`javascript
// ✅ Good: Test behavior, not implementation
test('shows welcome message after login', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

// ❌ Bad: Testing implementation details
test('sets isLoggedIn state to true', () => {
  const { result } = renderHook(() => useAuth());
  result.current.login();
  expect(result.current.isLoggedIn).toBe(true);
});

// ✅ Good: Use data-testid for stable selectors
<button data-testid="submit-button">Submit</button>

// ✅ Good: Test user-visible output
expect(screen.getByRole('heading', { name: /welcome/i }));

// ✅ Good: Arrange-Act-Assert
test('adds item to cart', () => {
  // Arrange
  render(<Cart />);

  // Act
  userEvent.click(screen.getByText(/add to cart/i));

  // Assert
  expect(screen.getByText(/1 item/i)).toBeInTheDocument();
});
\`\`\`

## Testing Pyramid

\`\`\`
       /\\
      /  \\      E2E Tests (Few, Slow, Expensive)
     /____\\
    /      \\    Integration Tests (Some, Medium)
   /________\\
  /          \\  Unit Tests (Many, Fast, Cheap)
 /____________\\
\`\`\``,
      topics: ['Testing', 'Jest', 'React Testing Library', 'Cypress', 'E2E'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 15. DevOps: Docker, CI/CD, AWS (MUST)
    // ========================================
    {
      id: 'devops-complete',
      title: 'DevOps: Docker, CI/CD, AWS & Deployment',
      difficulty: 'Hard' as any,
      category: 'DevOps',
      description: 'Master containerization, continuous deployment, and cloud infrastructure',
      answer: `# DevOps Complete Guide

## Docker Fundamentals

\`\`\`dockerfile
# Dockerfile for Node.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000

CMD ["node", "dist/server.js"]
\`\`\`

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://cache:6379
    depends_on:
      - db
      - cache
    volumes:
      - ./src:/app/src

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

\`\`\`bash
# Docker commands
docker build -t myapp:latest .
docker run -p 3000:3000 myapp:latest
docker-compose up -d
docker-compose down
docker ps
docker logs <container_id>
docker exec -it <container_id> sh
\`\`\`

## CI/CD with GitHub Actions

\`\`\`yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Run tests
        run: npm test -- --coverage
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
          path: dist/

      - name: Deploy to production
        run: |
          # Deploy script here
          echo "Deploying to production..."

      - name: Notify Slack
        uses: 8398a7/action-slack@v3
        with:
          status: \${{ job.status }}
          text: 'Deployment completed'
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

## AWS Deployment

\`\`\`yaml
# AWS Elastic Beanstalk - .ebextensions/nodecommand.config
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production

# AWS ECS Task Definition
{
  "family": "myapp",
  "containerDefinitions": [
    {
      "name": "app",
      "image": "myapp:latest",
      "memory": 512,
      "cpu": 256,
      "essential": true,
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/myapp",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
\`\`\`

## Infrastructure as Code (Terraform)

\`\`\`hcl
# main.tf
provider "aws" {
  region = "us-east-1"
}

# S3 bucket for static assets
resource "aws_s3_bucket" "static_assets" {
  bucket = "myapp-static-assets"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.static_assets.bucket_regional_domain_name
    origin_id   = "S3-myapp"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-myapp"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }
}

# RDS Database
resource "aws_db_instance" "postgres" {
  identifier           = "myapp-db"
  engine               = "postgres"
  engine_version       = "15.2"
  instance_class       = "db.t3.micro"
  allocated_storage    = 20
  storage_type         = "gp2"
  username             = "postgres"
  password             = var.db_password
  skip_final_snapshot  = true
}
\`\`\`

## Monitoring & Logging

\`\`\`javascript
// Application logging
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Usage
logger.info('User logged in', { userId: 123 });
logger.error('Database connection failed', { error: err.message });

// Health check endpoint
app.get('/health', async (req, res) => {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    diskSpace: await checkDiskSpace()
  };

  const isHealthy = Object.values(checks).every(check => check === true);

  res.status(isHealthy ? 200 : 503).json({
    status: isHealthy ? 'healthy' : 'unhealthy',
    checks,
    timestamp: new Date().toISOString()
  });
});
\`\`\`

## Security Best Practices

\`\`\`dockerfile
# Dockerfile security
FROM node:18-alpine

# Don't run as root
RUN addgroup -g 1001 nodejs && adduser -S nextjs -u 1001

# Copy only necessary files
COPY --chown=nextjs:nodejs package*.json ./
COPY --chown=nextjs:nodejs src ./src

USER nextjs

# Use secrets for sensitive data
RUN --mount=type=secret,id=npmrc,target=/home/nextjs/.npmrc npm ci
\`\`\`

\`\`\`yaml
# GitHub Actions secrets
# Store in repository settings
\${{ secrets.AWS_ACCESS_KEY_ID }}
\${{ secrets.AWS_SECRET_ACCESS_KEY }}
\${{ secrets.DATABASE_URL }}
\`\`\`

## Deployment Strategies

**Blue-Green Deployment**: Two identical environments, switch traffic

**Rolling Deployment**: Gradual update of instances

**Canary Deployment**: Deploy to small subset first

**Feature Flags**: Deploy code, enable features gradually`,
      topics: ['DevOps', 'Docker', 'CI/CD', 'AWS', 'GitHub Actions', 'Deployment'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // 16. Web Performance & Optimization (MUST)
    // ========================================
    {
      id: 'web-performance',
      title: 'Web Performance: Core Web Vitals, Optimization & Best Practices',
      difficulty: 'Hard' as any,
      category: 'Performance',
      description: 'Master performance optimization, Core Web Vitals, and page speed techniques',
      answer: `# Web Performance Optimization

## Core Web Vitals

\`\`\`javascript
// Largest Contentful Paint (LCP) - < 2.5s
// Measures loading performance

// ✅ Optimize LCP
// 1. Preload critical resources
<link rel="preload" as="image" href="/hero.jpg" />

// 2. Optimize images
<img src="/hero.jpg" loading="lazy" decoding="async" />

// 3. Use CDN
<img src="https://cdn.example.com/hero.jpg" />

// First Input Delay (FID) - < 100ms
// Measures interactivity

// ✅ Optimize FID
// 1. Code splitting
const HeavyComponent = React.lazy(() => import('./Heavy'));

// 2. Defer non-critical JavaScript
<script src="analytics.js" defer></script>

// 3. Break up long tasks
async function processLargeArray(array) {
  for (let i = 0; i < array.length; i++) {
    await processItem(array[i]);
    if (i % 100 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0)); // Yield to main thread
    }
  }
}

// Cumulative Layout Shift (CLS) - < 0.1
// Measures visual stability

// ✅ Optimize CLS
// 1. Always set image dimensions
<img src="photo.jpg" width="400" height="300" />

// 2. Reserve space for ads
<div style={{ minHeight: '250px' }}>
  {/* Ad loads here */}
</div>

// 3. Avoid inserting content above existing content
\`\`\`

## Image Optimization

\`\`\`jsx
// Modern formats (WebP, AVIF)
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" />
</picture>

// Responsive images
<img
  srcset="
    image-320.jpg 320w,
    image-640.jpg 640w,
    image-1280.jpg 1280w
  "
  sizes="(max-width: 640px) 100vw, 50vw"
  src="image-640.jpg"
  alt="Responsive image"
/>

// Lazy loading
<img src="image.jpg" loading="lazy" />

// Next.js Image component
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
\`\`\`

## Code Splitting

\`\`\`javascript
// Route-based splitting
const Home = React.lazy(() => import('./Home'));
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

// Component-based splitting
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Analytics() {
  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyChart data={data} />
    </Suspense>
  );
}

// Dynamic imports with webpack magic comments
const module = await import(
  /* webpackChunkName: "my-chunk" */
  /* webpackPrefetch: true */
  './myModule'
);
\`\`\`

## Bundle Optimization

\`\`\`javascript
// Webpack bundle analysis
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};

// Tree shaking
// ✅ Import specific exports
import { debounce } from 'lodash-es';

// ❌ Import everything
import _ from 'lodash';

// Remove unused CSS
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      defaultExtractor: content => content.match(/[\\w-/:]+(?<!:)/g) || []
    })
  ]
};
\`\`\`

## Caching Strategies

\`\`\`javascript
// Service Worker caching
// sw.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// HTTP caching headers
res.set('Cache-Control', 'public, max-age=31536000, immutable'); // Static assets
res.set('Cache-Control', 'no-cache'); // HTML
res.set('Cache-Control', 'private, max-age=300'); // User-specific data

// Browser caching
// Versioned URLs
<script src="/js/app.v1.2.3.js"></script>

// Or hash-based
<script src="/js/app.abc123.js"></script>
\`\`\`

## Resource Hints

\`\`\`html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://api.example.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preload critical resources -->
<link rel="preload" href="/font.woff2" as="font" crossorigin>
<link rel="preload" href="/hero.jpg" as="image">

<!-- Prefetch next page resources -->
<link rel="prefetch" href="/dashboard">

<!-- Prerender next page -->
<link rel="prerender" href="/profile">
\`\`\`

## JavaScript Performance

\`\`\`javascript
// Debouncing
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const handleSearch = debounce((query) => {
  searchAPI(query);
}, 300);

// Throttling
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => {
  updateScrollPosition();
}, 100);

// Virtual scrolling for large lists
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={50}
>
  {Row}
</FixedSizeList>

// Web Workers for heavy computation
const worker = new Worker('worker.js');
worker.postMessage({ data: largeDataset });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};
\`\`\`

## Measuring Performance

\`\`\`javascript
// Performance API
const start = performance.now();
// Do work
const end = performance.now();
console.log(\`Took \${end - start}ms\`);

// Performance Observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(\`\${entry.name}: \${entry.duration}ms\`);
  }
});

observer.observe({ entryTypes: ['measure', 'navigation'] });

// Web Vitals library
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

// Lighthouse CI
// .github/workflows/lighthouse.yml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      https://example.com
      https://example.com/dashboard
    uploadArtifacts: true
\`\`\`

## Performance Checklist

✅ Optimize images (format, size, lazy load)
✅ Minimize JavaScript (code split, tree shake)
✅ Implement caching (HTTP, service worker)
✅ Use CDN for static assets
✅ Enable compression (gzip/brotli)
✅ Minify CSS/JS
✅ Eliminate render-blocking resources
✅ Reduce server response time (< 200ms)
✅ Use resource hints (preload, prefetch)
✅ Optimize fonts (font-display, subset)
✅ Minimize layout shifts (set dimensions)
✅ Defer non-critical JavaScript
✅ Optimize third-party scripts
✅ Monitor Core Web Vitals`,
      topics: ['Performance', 'Core Web Vitals', 'Optimization', 'Caching', 'LCP', 'FID', 'CLS'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Express.js
    // ========================================
    {
      id: 'expressjs-middleware',
      title: 'Express.js Middleware Pattern',
      difficulty: 'Medium' as any,
      category: 'Express.js',
      description: 'Understanding middleware, routing, and error handling in Express.js',
      answer: `# Express.js Middleware Pattern

## What is Middleware?

Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle.

## Basic Middleware Structure

\`\`\`javascript
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Pass control to next middleware
});

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.use('/api', router);
\`\`\`

## Custom Middleware Examples

### Authentication Middleware
\`\`\`javascript
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Usage
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});
\`\`\`

### Request Logger Middleware
\`\`\`javascript
const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.url} - \${res.statusCode} - \${duration}ms\`);
  });

  next();
};

app.use(requestLogger);
\`\`\`

### Rate Limiting Middleware
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);
\`\`\`

## Error Handling Middleware

\`\`\`javascript
// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// Async Error Handler Wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/api/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error('User not found');
  }
  res.json(user);
}));
\`\`\`

## RESTful API Example

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// CRUD Operations
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.post('/api/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.put('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.delete('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
\`\`\`

## Best Practices

✅ Always call \`next()\` or send a response
✅ Use async/await with error handling
✅ Organize routes into separate files
✅ Validate input with middleware (joi, express-validator)
✅ Use helmet for security headers
✅ Enable CORS appropriately
✅ Implement proper logging
✅ Use compression middleware
✅ Handle errors centrally`,
      topics: ['Express.js', 'Middleware', 'REST API', 'Error Handling', 'Backend'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Java Spring Boot
    // ========================================
    {
      id: 'spring-boot-rest-api',
      title: 'Spring Boot REST API with Dependency Injection',
      difficulty: 'Medium' as any,
      category: 'Spring Boot',
      description: 'Building REST APIs with Spring Boot, annotations, and dependency injection',
      answer: `# Spring Boot REST API

## Spring Boot Overview

Spring Boot is a framework that simplifies Spring application development with auto-configuration, embedded servers, and production-ready features.

## Key Annotations

\`\`\`java
@SpringBootApplication  // Combines @Configuration, @EnableAutoConfiguration, @ComponentScan
@RestController        // Combines @Controller + @ResponseBody
@RequestMapping        // Map HTTP requests to handler methods
@GetMapping           // HTTP GET requests
@PostMapping          // HTTP POST requests
@PutMapping           // HTTP PUT requests
@DeleteMapping        // HTTP DELETE requests
@PathVariable         // Extract values from URI path
@RequestBody          // Bind HTTP request body to method parameter
@Service              // Service layer component
@Repository           // Data access layer component
@Autowired            // Dependency injection
@Component            // Generic component
\`\`\`

## Complete REST API Example

### Entity Class
\`\`\`java
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data // Lombok: generates getters, setters, toString, etc.
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    private Integer age;
}
\`\`\`

### Repository Interface
\`\`\`java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(Integer age);
}
\`\`\`

### Service Layer
\`\`\`java
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public User createUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new DuplicateResourceException("Email already exists");
        }
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setAge(userDetails.getAge());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
}
\`\`\`

### REST Controller
\`\`\`java
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User created = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
        @PathVariable Long id,
        @Valid @RequestBody User user
    ) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
\`\`\`

### Exception Handler
\`\`\`java
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(
        ResourceNotFoundException ex
    ) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateResource(
        DuplicateResourceException ex
    ) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.CONFLICT.value(),
            ex.getMessage()
        );
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
}
\`\`\`

## Application Properties

\`\`\`properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
\`\`\`

## Dependency Injection Types

\`\`\`java
// 1. Constructor Injection (Recommended)
@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// 2. Field Injection
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
}

// 3. Setter Injection
@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
\`\`\`

## Testing

\`\`\`java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testGetAllUsers() {
        ResponseEntity<User[]> response = restTemplate.getForEntity(
            "/api/users",
            User[].class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
\`\`\`

## Best Practices

✅ Use constructor injection over field injection
✅ Validate input with @Valid and Bean Validation
✅ Handle exceptions globally with @RestControllerAdvice
✅ Use DTOs to separate API contracts from entities
✅ Implement pagination for large datasets
✅ Use proper HTTP status codes
✅ Document APIs with Swagger/OpenAPI
✅ Implement security with Spring Security`,
      topics: ['Spring Boot', 'Java', 'REST API', 'Dependency Injection', 'Backend'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Python Backend
    // ========================================
    {
      id: 'python-flask-api',
      title: 'Python Flask/FastAPI REST API Development',
      difficulty: 'Medium' as any,
      category: 'Python',
      description: 'Building REST APIs with Flask or FastAPI frameworks',
      answer: `# Python REST API Development

## Flask vs FastAPI

| Feature | Flask | FastAPI |
|---------|-------|---------|
| Speed | Moderate | Very Fast (ASGI) |
| Async Support | Limited | Native |
| Type Hints | Optional | Required |
| Auto Documentation | Manual | Automatic (Swagger) |
| Validation | Manual/Extensions | Built-in (Pydantic) |

## FastAPI Example (Recommended for New Projects)

### Basic Setup
\`\`\`python
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel, EmailStr, validator
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="User API", version="1.0.0")

# Pydantic Models (automatic validation)
class UserBase(BaseModel):
    email: EmailStr
    name: str
    age: Optional[int] = None

    @validator('age')
    def validate_age(cls, v):
        if v is not None and (v < 0 or v > 150):
            raise ValueError('Age must be between 0 and 150')
        return v

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# In-memory database (use real DB in production)
fake_db = []

@app.get("/")
def root():
    return {"message": "Welcome to User API"}

@app.get("/api/users", response_model=List[UserResponse])
def get_all_users(skip: int = 0, limit: int = 10):
    """Get all users with pagination"""
    return fake_db[skip:skip + limit]

@app.get("/api/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int):
    """Get user by ID"""
    user = next((u for u in fake_db if u['id'] == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.post("/api/users", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    """Create a new user"""
    # Check if email exists
    if any(u['email'] == user.email for u in fake_db):
        raise HTTPException(status_code=400, detail="Email already exists")

    user_dict = user.dict()
    user_dict['id'] = len(fake_db) + 1
    user_dict['created_at'] = datetime.now()
    fake_db.append(user_dict)
    return user_dict

@app.put("/api/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, user: UserBase):
    """Update user by ID"""
    existing_user = next((u for u in fake_db if u['id'] == user_id), None)
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")

    existing_user.update(user.dict())
    return existing_user

@app.delete("/api/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: int):
    """Delete user by ID"""
    global fake_db
    user = next((u for u in fake_db if u['id'] == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    fake_db = [u for u in fake_db if u['id'] != user_id]
    return None

# Run with: uvicorn main:app --reload
\`\`\`

## Flask Example

\`\`\`python
from flask import Flask, request, jsonify
from functools import wraps
import jwt
from datetime import datetime, timedelta

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

fake_db = []

# Decorator for authentication
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token is missing'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = data['user_id']
        except:
            return jsonify({'error': 'Token is invalid'}), 401

        return f(current_user, *args, **kwargs)

    return decorated

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(fake_db), 200

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in fake_db if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user), 200

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('name'):
        return jsonify({'error': 'Missing required fields'}), 400

    if any(u['email'] == data['email'] for u in fake_db):
        return jsonify({'error': 'Email already exists'}), 400

    user = {
        'id': len(fake_db) + 1,
        'email': data['email'],
        'name': data['name'],
        'age': data.get('age'),
        'created_at': datetime.now().isoformat()
    }
    fake_db.append(user)
    return jsonify(user), 201

@app.route('/api/users/<int:user_id>', methods=['PUT'])
@token_required
def update_user(current_user, user_id):
    user = next((u for u in fake_db if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    user.update(data)
    return jsonify(user), 200

@app.route('/api/users/<int:user_id>', methods=['DELETE'])
@token_required
def delete_user(current_user, user_id):
    global fake_db
    user = next((u for u in fake_db if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    fake_db = [u for u in fake_db if u['id'] != user_id]
    return '', 204

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

## Database Integration (SQLAlchemy)

\`\`\`python
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Database setup
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/dbname"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    age = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Usage in FastAPI
from fastapi import Depends
from sqlalchemy.orm import Session

@app.get("/api/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()
\`\`\`

## Async Operations (FastAPI)

\`\`\`python
from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/api/external-data")
async def get_external_data():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
        return response.json()
\`\`\`

## Best Practices

✅ Use type hints (especially with FastAPI)
✅ Validate input with Pydantic models
✅ Use environment variables for configuration
✅ Implement proper error handling
✅ Use async/await for I/O operations
✅ Add authentication/authorization
✅ Document APIs (FastAPI auto-generates)
✅ Use database migrations (Alembic)
✅ Write tests (pytest)
✅ Log properly (logging module)`,
      topics: ['Python', 'FastAPI', 'Flask', 'REST API', 'Backend', 'Pydantic'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Vite
    // ========================================
    {
      id: 'vite-modern-build',
      title: 'Vite - Modern Frontend Build Tool',
      difficulty: 'Easy' as any,
      category: 'Vite',
      description: 'Understanding Vite for fast development and optimized production builds',
      answer: `# Vite - Modern Build Tool

## What is Vite?

Vite is a next-generation frontend build tool that provides lightning-fast development and optimized production builds using native ES modules and esbuild.

## Key Features

✅ Instant server start (no bundling in dev)
✅ Lightning-fast HMR (Hot Module Replacement)
✅ Optimized production builds with Rollup
✅ Built-in TypeScript support
✅ CSS pre-processors support
✅ Plugin ecosystem

## Project Setup

\`\`\`bash
# Create new project
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev

# Available templates
# vanilla, vanilla-ts, vue, vue-ts, react, react-ts
# preact, preact-ts, lit, lit-ts, svelte, svelte-ts
\`\`\`

## Vite Configuration

\`\`\`javascript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },

  // Server configuration
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, '')
      }
    }
  },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@mui/material']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0')
  },

  // CSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@/styles/variables.scss";\`
      }
    },
    modules: {
      localsConvention: 'camelCase'
    }
  }
});
\`\`\`

## Environment Variables

\`\`\`bash
# .env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key

# .env.development
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://prod-api.example.com
\`\`\`

\`\`\`typescript
// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
\`\`\`

## Import Features

### Static Assets
\`\`\`typescript
// Image imports
import logo from './logo.png';
<img src={logo} alt="Logo" />

// URL imports
import imageUrl from './image.png?url';

// Inline as base64
import imageData from './image.png?inline';

// Import as string (for SVG)
import svgContent from './icon.svg?raw';
\`\`\`

### Dynamic Imports
\`\`\`typescript
// Code splitting with lazy loading
const UserProfile = lazy(() => import('./components/UserProfile'));

// Dynamic import with variables
const loadModule = async (name: string) => {
  const module = await import(\`./modules/\${name}.ts\`);
  return module;
};

// Glob imports
const modules = import.meta.glob('./modules/*.ts');
const eagerModules = import.meta.glob('./modules/*.ts', { eager: true });
\`\`\`

## Plugins

### Popular Vite Plugins
\`\`\`typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),

    // Bundle analyzer
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),

    // Gzip compression
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),

    // TypeScript checker
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    })
  ]
});
\`\`\`

### Custom Plugin Example
\`\`\`typescript
function myPlugin() {
  return {
    name: 'my-plugin',

    // Transform code
    transform(code: string, id: string) {
      if (id.endsWith('.custom')) {
        return {
          code: transformCode(code),
          map: null
        };
      }
    },

    // Modify HTML
    transformIndexHtml(html: string) {
      return html.replace(
        '</head>',
        '<script>console.log("Injected!")</script></head>'
      );
    }
  };
}
\`\`\`

## Performance Optimization

\`\`\`typescript
// Lazy load routes
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./pages/Dashboard'))
  },
  {
    path: '/profile',
    component: lazy(() => import('./pages/Profile'))
  }
];

// Preload critical resources
<link rel="modulepreload" href="/src/main.tsx" />

// Manual chunk optimization
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
\`\`\`

## Development vs Production

| Aspect | Development | Production |
|--------|-------------|------------|
| Module System | Native ESM | Bundled (Rollup) |
| Speed | Instant | Optimized |
| HMR | Yes | No |
| Minification | No | Yes |
| Tree Shaking | No | Yes |

## Commands

\`\`\`bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run build -- --watch  # Watch mode build
\`\`\`

## Best Practices

✅ Use path aliases for cleaner imports
✅ Leverage dynamic imports for code splitting
✅ Configure proxy for API calls
✅ Use environment variables properly
✅ Optimize chunk size with manual chunks
✅ Enable compression plugins
✅ Use TypeScript for type safety
✅ Implement lazy loading for routes
✅ Use visualizer to analyze bundle size

## Common Issues

**Port already in use:**
\`\`\`bash
# Change port in vite.config.ts or use flag
vite --port 3001
\`\`\`

**CORS issues in development:**
\`\`\`typescript
server: {
  proxy: {
    '/api': 'http://localhost:8080'
  }
}
\`\`\`

**Large chunk warning:**
\`\`\`typescript
build: {
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      manualChunks: { /* ... */ }
    }
  }
}
\`\`\``,
      topics: ['Vite', 'Build Tools', 'Frontend', 'ES Modules', 'Performance'],
      estimatedTime: 30,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Webpack
    // ========================================
    {
      id: 'webpack-bundler',
      title: 'Webpack Module Bundler Configuration',
      difficulty: 'Medium' as any,
      category: 'Webpack',
      description: 'Understanding Webpack configuration, loaders, and plugins',
      answer: `# Webpack Module Bundler

## What is Webpack?

Webpack is a static module bundler that processes your application, builds a dependency graph, and bundles everything into one or more optimized bundles.

## Core Concepts

1. **Entry** - Starting point for bundling
2. **Output** - Where to emit bundles
3. **Loaders** - Transform files (CSS, images, TypeScript)
4. **Plugins** - Perform wider range of tasks
5. **Mode** - Development or production

## Basic Configuration

\`\`\`javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true, // Clean dist folder before build
    publicPath: '/'
  },

  // Development server
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },

  // Source maps for debugging
  devtool: 'source-map',

  // Module rules (loaders)
  module: {
    rules: [
      // JavaScript/TypeScript
      {
        test: /\\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },

      // CSS
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },

      // SCSS/SASS
      {
        test: /\\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      // Images
      {
        test: /\\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      },

      // Fonts
      {
        test: /\\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ]
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },

  // Optimization
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          priority: 10
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single'
  }
};
\`\`\`

## Development vs Production Config

\`\`\`javascript
// webpack.common.js
const common = {
  entry: './src/index.js',
  module: {
    rules: [/* shared rules */]
  },
  plugins: [/* shared plugins */]
};

// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 3000
  }
});

// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  }
});
\`\`\`

## Popular Plugins

\`\`\`javascript
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(),

    // Environment variables
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify('https://api.example.com')
    }),

    // Bundle analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),

    // Gzip compression
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    // Copy files
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/images', to: 'images' }
      ]
    })
  ]
};
\`\`\`

## Code Splitting

\`\`\`javascript
// Dynamic imports
const loadComponent = () => import('./Component');

// React lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// Webpack configuration
optimization: {
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\\\/]node_modules[\\\\/]/,
        name(module) {
          const packageName = module.context.match(
            /[\\\\/]node_modules[\\\\/](.*?)([\\\\/]|$)/
          )[1];
          return \`npm.\${packageName.replace('@', '')}\`;
        }
      }
    }
  }
}
\`\`\`

## Performance Optimization

\`\`\`javascript
module.exports = {
  // Cache for faster rebuilds
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack_cache')
  },

  // Parallel builds
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },

  // Reduce resolve complexity
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },

  // Ignore large dependencies
  externals: {
    lodash: '_',
    moment: 'moment'
  }
};
\`\`\`

## Custom Loaders

\`\`\`javascript
// custom-loader.js
module.exports = function(source) {
  // Transform source code
  const transformed = source.replace(/console\\.log/g, '');
  return transformed;
};

// Usage in webpack.config.js
module: {
  rules: [
    {
      test: /\\.js$/,
      use: [
        {
          loader: path.resolve('custom-loader.js')
        }
      ]
    }
  ]
}
\`\`\`

## Package.json Scripts

\`\`\`json
{
  "scripts": {
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "build:analyze": "webpack --config webpack.prod.js --profile --json > stats.json && webpack-bundle-analyzer stats.json",
    "clean": "rm -rf dist"
  }
}
\`\`\`

## Troubleshooting

**Build too slow:**
- Enable cache
- Use parallel builds
- Reduce resolve complexity
- Use DLL plugin for vendors

**Bundle too large:**
- Use code splitting
- Tree shaking (ES modules)
- Analyze with bundle analyzer
- Use compression plugin
- Lazy load routes/components

## Best Practices

✅ Split development and production configs
✅ Use content hashes for cache busting
✅ Implement code splitting
✅ Enable tree shaking
✅ Use source maps for debugging
✅ Optimize images and assets
✅ Enable gzip compression
✅ Monitor bundle size
✅ Use environment variables
✅ Clean dist before build`,
      topics: ['Webpack', 'Build Tools', 'Bundler', 'Module System', 'Performance'],
      estimatedTime: 35,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // WebSockets & Socket.io
    // ========================================
    {
      id: 'websockets-socketio',
      title: 'WebSockets & Socket.io Real-time Communication',
      difficulty: 'Medium' as any,
      category: 'WebSockets',
      description: 'Implementing real-time bidirectional communication with WebSockets and Socket.io',
      answer: `# WebSockets & Socket.io

## WebSockets vs HTTP

| Feature | HTTP | WebSockets |
|---------|------|------------|
| Direction | Request-Response | Bidirectional |
| Connection | New per request | Persistent |
| Overhead | High (headers) | Low |
| Real-time | Polling required | Native |
| Use Case | Traditional web | Chat, gaming, live updates |

## Native WebSockets

### Client Side (Browser)
\`\`\`javascript
// Create connection
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
  socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

// Listen for errors
socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});

// Connection closed
socket.addEventListener('close', (event) => {
  console.log('Disconnected from WebSocket server');
  console.log('Code:', event.code, 'Reason:', event.reason);
});

// Send message
function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
}

// Close connection
socket.close();
\`\`\`

### Server Side (Node.js with ws library)
\`\`\`javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // Send welcome message
  socket.send('Welcome to WebSocket server!');

  // Handle incoming messages
  socket.on('message', (data) => {
    console.log('Received:', data);

    // Broadcast to all clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  // Handle errors
  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  // Handle disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
\`\`\`

## Socket.io (Recommended for Production)

Socket.io provides additional features like automatic reconnection, rooms, namespaces, and fallback to HTTP polling.

### Server Setup
\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Connection handler
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle custom events
  socket.on('chat-message', (data) => {
    console.log('Message:', data);

    // Broadcast to everyone including sender
    io.emit('chat-message', {
      id: socket.id,
      message: data.message,
      timestamp: Date.now()
    });
  });

  // Send only to sender
  socket.emit('welcome', 'Welcome to the chat!');

  // Broadcast to everyone except sender
  socket.broadcast.emit('user-joined', socket.id);

  // Join room
  socket.on('join-room', (room) => {
    socket.join(room);
    socket.to(room).emit('user-joined-room', socket.id);
  });

  // Send to specific room
  socket.on('room-message', (data) => {
    io.to(data.room).emit('room-message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    io.emit('user-left', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
\`\`\`

### Client Setup (React)
\`\`\`javascript
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
  autoConnect: false
});

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Connect
    socket.connect();

    // Connection events
    socket.on('connect', () => {
      console.log('Connected:', socket.id);
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
      setIsConnected(false);
    });

    // Listen for messages
    socket.on('chat-message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on('welcome', (message) => {
      console.log(message);
    });

    socket.on('user-joined', (userId) => {
      console.log('User joined:', userId);
    });

    // Cleanup
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('chat-message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      socket.emit('chat-message', { message: inputMessage });
      setInputMessage('');
    }
  };

  return (
    <div>
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>

      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.id}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
\`\`\`

## Advanced Features

### Rooms & Namespaces
\`\`\`javascript
// Namespaces (different endpoints)
const chatNamespace = io.of('/chat');
const adminNamespace = io.of('/admin');

chatNamespace.on('connection', (socket) => {
  // Join room
  socket.join('room1');

  // Leave room
  socket.leave('room1');

  // Send to room
  socket.to('room1').emit('message', 'Hello room');

  // Send to all in namespace
  chatNamespace.emit('announcement', 'Server message');

  // Get rooms
  console.log('Rooms:', socket.rooms);
});

// Client side
const chatSocket = io('http://localhost:3001/chat');
\`\`\`

### Authentication
\`\`\`javascript
// Server
const io = new Server(server, {
  cors: { origin: '*' }
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (isValidToken(token)) {
    socket.userId = getUserIdFromToken(token);
    next();
  } else {
    next(new Error('Authentication error'));
  }
});

// Client
const socket = io('http://localhost:3001', {
  auth: {
    token: 'your-jwt-token'
  }
});
\`\`\`

### Acknowledgments
\`\`\`javascript
// Server
socket.on('save-data', (data, callback) => {
  // Save data...
  callback({ status: 'success', id: 123 });
});

// Client
socket.emit('save-data', { name: 'John' }, (response) => {
  console.log('Server response:', response);
});
\`\`\`

## Real-world Use Cases

### 1. Live Chat
\`\`\`javascript
socket.on('typing', (userId) => {
  socket.broadcast.emit('user-typing', userId);
});

socket.on('stop-typing', (userId) => {
  socket.broadcast.emit('user-stop-typing', userId);
});
\`\`\`

### 2. Live Notifications
\`\`\`javascript
// Server
function sendNotification(userId, notification) {
  io.to(userId).emit('notification', notification);
}

// Client
socket.on('notification', (data) => {
  showNotification(data);
});
\`\`\`

### 3. Collaborative Editing
\`\`\`javascript
socket.on('document-change', (change) => {
  socket.broadcast.to(documentId).emit('apply-change', change);
});
\`\`\`

### 4. Live Dashboard
\`\`\`javascript
setInterval(() => {
  const stats = getSystemStats();
  io.emit('stats-update', stats);
}, 5000);
\`\`\`

## Best Practices

✅ Always validate and sanitize incoming data
✅ Use namespaces to separate concerns
✅ Implement authentication for secure connections
✅ Handle connection errors and reconnection
✅ Use rooms for targeted messaging
✅ Implement rate limiting to prevent abuse
✅ Clean up event listeners on disconnect
✅ Use acknowledgments for critical operations
✅ Monitor connection health with heartbeats
✅ Scale with Redis adapter for multiple servers

## Scaling with Redis
\`\`\`javascript
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
});
\`\`\``,
      topics: ['WebSockets', 'Socket.io', 'Real-time', 'Bidirectional', 'Communication'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Networking & CDN
    // ========================================
    {
      id: 'networking-cdn',
      title: 'Networking Fundamentals & CDN Optimization',
      difficulty: 'Medium' as any,
      category: 'Networking',
      description: 'Understanding HTTP, DNS, CDN, and network optimization techniques',
      answer: `# Networking & CDN

## HTTP Protocol

### HTTP Methods
\`\`\`
GET     - Retrieve data (idempotent, cacheable)
POST    - Create resource (not idempotent)
PUT     - Update/Replace resource (idempotent)
PATCH   - Partial update (not idempotent)
DELETE  - Remove resource (idempotent)
HEAD    - Same as GET but without body
OPTIONS - Describe communication options
\`\`\`

### HTTP Status Codes
\`\`\`
1xx - Informational
  100 Continue
  101 Switching Protocols

2xx - Success
  200 OK
  201 Created
  204 No Content

3xx - Redirection
  301 Moved Permanently
  302 Found (Temporary Redirect)
  304 Not Modified (Cache)

4xx - Client Errors
  400 Bad Request
  401 Unauthorized
  403 Forbidden
  404 Not Found
  429 Too Many Requests

5xx - Server Errors
  500 Internal Server Error
  502 Bad Gateway
  503 Service Unavailable
  504 Gateway Timeout
\`\`\`

### HTTP Headers

**Request Headers:**
\`\`\`http
GET /api/users HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer token123
Content-Type: application/json
Cache-Control: no-cache
If-Modified-Since: Wed, 21 Oct 2024 07:28:00 GMT
Origin: https://example.com
\`\`\`

**Response Headers:**
\`\`\`http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234
Cache-Control: public, max-age=3600
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Last-Modified: Wed, 21 Oct 2024 07:28:00 GMT
Access-Control-Allow-Origin: *
Set-Cookie: sessionId=abc123; HttpOnly; Secure
\`\`\`

## HTTP/2 vs HTTP/1.1

| Feature | HTTP/1.1 | HTTP/2 |
|---------|----------|--------|
| Multiplexing | No (6 connections) | Yes (single connection) |
| Header Compression | No | Yes (HPACK) |
| Server Push | No | Yes |
| Binary Protocol | No (text) | Yes |
| Prioritization | No | Yes |

## DNS (Domain Name System)

### DNS Lookup Process
\`\`\`
1. Browser Cache
2. OS Cache
3. Router Cache
4. ISP DNS Server
5. Root DNS Server
6. TLD DNS Server (.com, .org)
7. Authoritative DNS Server
\`\`\`

### DNS Record Types
\`\`\`
A      - IPv4 address (example.com → 192.0.2.1)
AAAA   - IPv6 address
CNAME  - Canonical name (alias)
MX     - Mail exchange
TXT    - Text record (verification, SPF)
NS     - Name server
SOA    - Start of authority
\`\`\`

### DNS Optimization
\`\`\`html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//api.example.com">

<!-- Preconnect (DNS + TCP + TLS) -->
<link rel="preconnect" href="https://cdn.example.com">

<!-- Prefetch resource -->
<link rel="prefetch" href="/next-page.html">

<!-- Preload critical resource -->
<link rel="preload" href="/critical.css" as="style">
\`\`\`

## Content Delivery Network (CDN)

### What is a CDN?

A CDN is a geographically distributed network of servers that caches content closer to users, reducing latency and improving load times.

### Benefits of CDN
✅ Reduced latency (closer to users)
✅ Decreased bandwidth costs
✅ Improved reliability (redundancy)
✅ Enhanced security (DDoS protection)
✅ Better scalability

### Popular CDN Providers
- Cloudflare
- AWS CloudFront
- Akamai
- Fastly
- Google Cloud CDN
- Azure CDN

### CDN Configuration Example

\`\`\`javascript
// Using Cloudflare CDN
// 1. Point DNS to Cloudflare
// 2. Configure caching rules

// Cache-Control headers
app.use((req, res, next) => {
  // Static assets - cache for 1 year
  if (req.url.match(/\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // HTML - cache for 1 hour, revalidate
  else if (req.url.endsWith('.html')) {
    res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  }

  // API responses - no cache
  else if (req.url.startsWith('/api/')) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  }

  next();
});
\`\`\`

### Cache Strategies

**1. Cache-Control Directives**
\`\`\`
public           - Cacheable by any cache
private          - Cacheable only by browser
no-cache         - Must revalidate before use
no-store         - Do not cache at all
max-age=3600     - Cache for 3600 seconds
must-revalidate  - Must revalidate when stale
immutable        - Never revalidate (perfect for versioned assets)
\`\`\`

**2. ETag (Entity Tag)**
\`\`\`http
Response:
ETag: "33a64df5"

Next Request:
If-None-Match: "33a64df5"

Response:
304 Not Modified (use cached version)
\`\`\`

**3. Last-Modified**
\`\`\`http
Response:
Last-Modified: Wed, 21 Oct 2024 07:28:00 GMT

Next Request:
If-Modified-Since: Wed, 21 Oct 2024 07:28:00 GMT

Response:
304 Not Modified
\`\`\`

## Network Optimization Techniques

### 1. Asset Optimization
\`\`\`javascript
// Image optimization
<img
  src="image.jpg"
  srcset="image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1280w.jpg 1280w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 600px,
         1200px"
  loading="lazy"
  alt="Description"
/>

// WebP with fallback
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>
\`\`\`

### 2. Resource Hints
\`\`\`html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//cdn.example.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Prefetch (low priority) -->
<link rel="prefetch" href="/next-page.js">

<!-- Preload (high priority) -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Prerender (Chrome only) -->
<link rel="prerender" href="/next-page.html">
\`\`\`

### 3. Compression
\`\`\`javascript
// Express.js with compression
const compression = require('compression');
app.use(compression());

// Nginx configuration
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
gzip_comp_level 6;

// Brotli (better than gzip)
brotli on;
brotli_types text/plain text/css application/json application/javascript;
\`\`\`

### 4. HTTP/2 Server Push
\`\`\`javascript
// Node.js HTTP/2
const http2 = require('http2');
const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  if (headers[':path'] === '/') {
    // Push critical CSS
    stream.pushStream({ ':path': '/critical.css' }, (err, pushStream) => {
      pushStream.respondWithFile('critical.css');
    });

    stream.respondWithFile('index.html');
  }
});
\`\`\`

### 5. Code Splitting & Lazy Loading
\`\`\`javascript
// React lazy loading
const Dashboard = lazy(() => import('./Dashboard'));

// Dynamic imports
const loadModule = async () => {
  const module = await import('./heavy-module.js');
  module.init();
};

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});
\`\`\`

## Monitoring Network Performance

\`\`\`javascript
// Navigation Timing API
const perfData = window.performance.timing;
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
const connectTime = perfData.responseEnd - perfData.requestStart;
const renderTime = perfData.domComplete - perfData.domLoading;

console.log(\`Page Load Time: \${pageLoadTime}ms\`);

// Resource Timing API
const resources = performance.getEntriesByType('resource');
resources.forEach(resource => {
  console.log(\`\${resource.name}: \${resource.duration}ms\`);
});

// Network Information API
if ('connection' in navigator) {
  const connection = navigator.connection;
  console.log('Effective Type:', connection.effectiveType);
  console.log('Downlink:', connection.downlink, 'Mbps');
  console.log('RTT:', connection.rtt, 'ms');
}
\`\`\`

## Best Practices

✅ Use CDN for static assets
✅ Enable compression (gzip/brotli)
✅ Implement proper caching strategies
✅ Use HTTP/2 or HTTP/3
✅ Optimize images (format, size, lazy load)
✅ Minimize DNS lookups
✅ Use resource hints (preconnect, prefetch)
✅ Enable Keep-Alive connections
✅ Reduce payload size (minify, tree shake)
✅ Monitor performance with real user metrics`,
      topics: ['Networking', 'CDN', 'HTTP', 'DNS', 'Caching', 'Performance'],
      estimatedTime: 40,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // DBMS
    // ========================================
    {
      id: 'dbms-fundamentals',
      title: 'Database Management Systems (DBMS) Fundamentals',
      difficulty: 'Medium' as any,
      category: 'DBMS',
      description: 'Understanding DBMS concepts, normalization, indexing, and transactions',
      answer: `# Database Management Systems (DBMS)

## DBMS vs File System

| Feature | File System | DBMS |
|---------|-------------|------|
| Data Redundancy | High | Low |
| Data Consistency | Difficult | Ensured |
| Data Integrity | No enforcement | Enforced |
| Concurrent Access | Limited | Managed |
| Security | Basic | Advanced |
| Backup/Recovery | Manual | Automated |

## Types of Databases

### 1. Relational (SQL)
- MySQL, PostgreSQL, Oracle, SQL Server
- Structured data with relationships
- ACID properties

### 2. NoSQL
- **Document**: MongoDB, CouchDB
- **Key-Value**: Redis, DynamoDB
- **Column-Family**: Cassandra, HBase
- **Graph**: Neo4j, ArangoDB

## Database Normalization

### Normal Forms

**1NF (First Normal Form)**
- Atomic values (no repeating groups)
- Each column contains single value

\`\`\`sql
-- ❌ Violation
CREATE TABLE students (
  id INT,
  name VARCHAR(100),
  courses VARCHAR(500) -- "Math, Science, English"
);

-- ✅ 1NF Compliant
CREATE TABLE students (
  id INT,
  name VARCHAR(100)
);

CREATE TABLE student_courses (
  student_id INT,
  course VARCHAR(100)
);
\`\`\`

**2NF (Second Normal Form)**
- Must be in 1NF
- No partial dependencies (all non-key attributes depend on entire primary key)

\`\`\`sql
-- ❌ Violation (student_name depends only on student_id)
CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  student_name VARCHAR(100),
  course_name VARCHAR(100),
  PRIMARY KEY (student_id, course_id)
);

-- ✅ 2NF Compliant
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
);

CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
\`\`\`

**3NF (Third Normal Form)**
- Must be in 2NF
- No transitive dependencies

\`\`\`sql
-- ❌ Violation (department_name depends on department_id, not employee_id)
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  department_name VARCHAR(100)
);

-- ✅ 3NF Compliant
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100)
);
\`\`\`

## ACID Properties

**A - Atomicity**
- All or nothing (transaction completes fully or not at all)

**C - Consistency**
- Database remains in valid state before and after transaction

**I - Isolation**
- Concurrent transactions don't interfere with each other

**D - Durability**
- Committed changes persist even after system failure

\`\`\`sql
-- Example: Bank Transfer
BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 100
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE account_id = 2;

COMMIT; -- Both succeed or both fail
\`\`\`

## Indexing

### Types of Indexes

**1. Primary Index**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,  -- Automatically indexed
  email VARCHAR(255)
);
\`\`\`

**2. Unique Index**
\`\`\`sql
CREATE UNIQUE INDEX idx_email ON users(email);
\`\`\`

**3. Composite Index**
\`\`\`sql
CREATE INDEX idx_name_age ON users(last_name, first_name, age);
\`\`\`

**4. Full-Text Index**
\`\`\`sql
CREATE FULLTEXT INDEX idx_content ON articles(content);
SELECT * FROM articles WHERE MATCH(content) AGAINST('database');
\`\`\`

### When to Use Indexes

✅ Use indexes for:
- Primary keys (automatic)
- Foreign keys
- Frequently searched columns
- Columns used in JOIN, WHERE, ORDER BY

❌ Avoid indexes for:
- Small tables
- Columns with low cardinality (few unique values)
- Frequently updated columns
- Wide columns (large data)

### Index Performance

\`\`\`sql
-- Check query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- Create index
CREATE INDEX idx_email ON users(email);

-- Verify improvement
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
\`\`\`

## Transactions & Isolation Levels

### Isolation Levels

**1. READ UNCOMMITTED**
- Lowest isolation, highest performance
- Dirty reads possible

**2. READ COMMITTED** (Most common default)
- Prevents dirty reads
- Non-repeatable reads possible

**3. REPEATABLE READ**
- Prevents dirty and non-repeatable reads
- Phantom reads possible

**4. SERIALIZABLE**
- Highest isolation, lowest performance
- No concurrency issues

\`\`\`sql
-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN TRANSACTION;
  -- Your queries
COMMIT;
\`\`\`

## Database Design Best Practices

### Entity-Relationship Diagram (ERD)

\`\`\`
Users (1) ─────< (M) Orders (M) ─────> (1) Products
  │
  │ (1)
  │
  ↓
  (M)
Addresses
\`\`\`

### Relationships

**One-to-One**
\`\`\`sql
CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE profiles (
  profile_id INT PRIMARY KEY,
  user_id INT UNIQUE,
  bio TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
\`\`\`

**One-to-Many**
\`\`\`sql
CREATE TABLE authors (
  author_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(200),
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(author_id)
);
\`\`\`

**Many-to-Many**
\`\`\`sql
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  title VARCHAR(100)
);

CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  enrollment_date DATE,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
\`\`\`

## Query Optimization

### Optimization Techniques

**1. Use Indexes**
\`\`\`sql
-- Slow without index
SELECT * FROM users WHERE email = 'test@example.com';

-- Fast with index
CREATE INDEX idx_email ON users(email);
\`\`\`

**2. Avoid SELECT ***
\`\`\`sql
-- ❌ Slow
SELECT * FROM users;

-- ✅ Fast
SELECT id, name, email FROM users;
\`\`\`

**3. Use LIMIT**
\`\`\`sql
SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;
\`\`\`

**4. Use JOIN instead of Subqueries**
\`\`\`sql
-- ❌ Slow
SELECT * FROM orders
WHERE user_id IN (SELECT id FROM users WHERE active = 1);

-- ✅ Fast
SELECT o.* FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE u.active = 1;
\`\`\`

**5. Use EXISTS instead of IN**
\`\`\`sql
-- ❌ Slower
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders);

-- ✅ Faster
SELECT * FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
\`\`\`

## Database Sharding

Splitting large database into smaller, faster pieces.

\`\`\`
Horizontal Sharding (by rows):
  Shard 1: users 1-1000
  Shard 2: users 1001-2000
  Shard 3: users 2001-3000

Vertical Sharding (by columns):
  Shard 1: user_id, email, password
  Shard 2: user_id, profile_data, preferences
\`\`\`

## Backup & Recovery

\`\`\`bash
# MySQL Backup
mysqldump -u root -p database_name > backup.sql

# Restore
mysql -u root -p database_name < backup.sql

# PostgreSQL Backup
pg_dump database_name > backup.sql

# Restore
psql database_name < backup.sql
\`\`\`

## Best Practices

✅ Normalize to 3NF (unless performance requires denormalization)
✅ Use appropriate data types
✅ Index frequently queried columns
✅ Use foreign keys for referential integrity
✅ Implement proper backup strategy
✅ Use transactions for multi-step operations
✅ Avoid N+1 query problems
✅ Monitor slow queries
✅ Use connection pooling
✅ Regular database maintenance (vacuum, analyze)`,
      topics: ['DBMS', 'Database', 'Normalization', 'Indexing', 'Transactions', 'SQL'],
      estimatedTime: 45,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Operating System
    // ========================================
    {
      id: 'operating-system-concepts',
      title: 'Operating System Core Concepts',
      difficulty: 'Medium' as any,
      category: 'Operating System',
      description: 'Understanding OS fundamentals: processes, threads, memory, and scheduling',
      answer: `# Operating System Concepts

## What is an Operating System?

An OS is system software that manages hardware resources and provides services for application programs.

## OS Functions

1. **Process Management** - Create, schedule, terminate processes
2. **Memory Management** - Allocate and deallocate memory
3. **File System Management** - Organize and access files
4. **Device Management** - Control hardware devices
5. **Security** - Protect system resources
6. **Networking** - Enable network communication

## Process vs Thread

| Feature | Process | Thread |
|---------|---------|--------|
| Definition | Independent program execution | Lightweight unit within process |
| Memory | Separate address space | Shared address space |
| Communication | IPC (slow) | Direct (fast) |
| Creation | Expensive | Cheap |
| Isolation | High | Low |
| Example | Chrome tab | Chrome tab's rendering thread |

### Process States

\`\`\`
NEW → READY → RUNNING → TERMINATED
        ↑         ↓
        └── WAITING
\`\`\`

**NEW**: Process created
**READY**: Waiting for CPU
**RUNNING**: Executing on CPU
**WAITING**: Waiting for I/O or event
**TERMINATED**: Execution completed

### Process Creation

\`\`\`javascript
// Node.js child process
const { spawn } = require('child_process');

const child = spawn('ls', ['-la']);

child.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});

child.on('close', (code) => {
  console.log(\`Process exited with code \${code}\`);
});
\`\`\`

\`\`\`python
# Python multiprocessing
import multiprocessing

def worker(num):
    print(f'Worker {num}')

if __name__ == '__main__':
    processes = []
    for i in range(5):
        p = multiprocessing.Process(target=worker, args=(i,))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()
\`\`\`

## CPU Scheduling Algorithms

### 1. First-Come, First-Served (FCFS)
- Simple, non-preemptive
- Convoy effect (short processes wait for long ones)

### 2. Shortest Job First (SJF)
- Non-preemptive
- Optimal average waiting time
- Hard to predict execution time

### 3. Round Robin (RR)
- Preemptive FCFS with time quantum
- Fair, good response time
- Context switching overhead

### 4. Priority Scheduling
- Each process has priority
- Can cause starvation
- Solution: Aging (gradually increase priority)

### 5. Multi-Level Queue
- Separate queues for different process types
- Each queue has its own scheduling algorithm

## Memory Management

### Memory Hierarchy
\`\`\`
Registers (fastest, smallest)
    ↓
L1 Cache
    ↓
L2 Cache
    ↓
L3 Cache
    ↓
RAM
    ↓
Disk (slowest, largest)
\`\`\`

### Virtual Memory

Benefits:
- Programs can be larger than physical memory
- Memory isolation between processes
- Efficient memory use

\`\`\`
Virtual Address → MMU → Physical Address
                 (Memory Management Unit)
\`\`\`

### Paging

- Divide memory into fixed-size blocks (pages)
- Page size typically 4KB
- Page table maps virtual to physical addresses

### Page Replacement Algorithms

**1. FIFO (First-In, First-Out)**
- Replace oldest page
- Simple but not optimal

**2. LRU (Least Recently Used)**
- Replace page not used for longest time
- Better performance, more overhead

**3. Optimal**
- Replace page that won't be used for longest time
- Theoretical best, impractical (requires future knowledge)

## Deadlock

### Necessary Conditions (all must be true)

1. **Mutual Exclusion** - Resource can't be shared
2. **Hold and Wait** - Process holds resource while waiting for another
3. **No Preemption** - Resource can't be forcibly taken
4. **Circular Wait** - Circular chain of processes waiting for resources

### Deadlock Prevention

Break at least one condition:

\`\`\`javascript
// Prevent circular wait with resource ordering
class BankAccount {
  constructor(id) {
    this.id = id;
    this.balance = 0;
    this.lock = new Lock();
  }

  transfer(to, amount) {
    // Always lock accounts in order of ID
    const first = this.id < to.id ? this : to;
    const second = this.id < to.id ? to : this;

    first.lock.acquire();
    try {
      second.lock.acquire();
      try {
        this.balance -= amount;
        to.balance += amount;
      } finally {
        second.lock.release();
      }
    } finally {
      first.lock.release();
    }
  }
}
\`\`\`

## Synchronization Primitives

### 1. Mutex (Mutual Exclusion)
\`\`\`javascript
const mutex = new Mutex();

async function criticalSection() {
  await mutex.acquire();
  try {
    // Critical section code
    console.log('Executing critical section');
  } finally {
    mutex.release();
  }
}
\`\`\`

### 2. Semaphore
\`\`\`javascript
class Semaphore {
  constructor(count) {
    this.count = count;
    this.queue = [];
  }

  async acquire() {
    if (this.count > 0) {
      this.count--;
    } else {
      await new Promise(resolve => this.queue.push(resolve));
    }
  }

  release() {
    this.count++;
    if (this.queue.length > 0) {
      const resolve = this.queue.shift();
      resolve();
    }
  }
}

// Usage: Limit concurrent connections
const semaphore = new Semaphore(5); // Max 5 concurrent

async function makeRequest() {
  await semaphore.acquire();
  try {
    // Make request
  } finally {
    semaphore.release();
  }
}
\`\`\`

### 3. Monitor
\`\`\`javascript
class BoundedBuffer {
  constructor(size) {
    this.buffer = [];
    this.size = size;
  }

  async produce(item) {
    while (this.buffer.length >= this.size) {
      await this.waitNotFull();
    }
    this.buffer.push(item);
    this.notifyNotEmpty();
  }

  async consume() {
    while (this.buffer.length === 0) {
      await this.waitNotEmpty();
    }
    const item = this.buffer.shift();
    this.notifyNotFull();
    return item;
  }
}
\`\`\`

## Inter-Process Communication (IPC)

### 1. Pipes
\`\`\`bash
# Shell pipe
ls -la | grep "txt" | wc -l
\`\`\`

### 2. Message Queues
\`\`\`javascript
// Using Bull (Redis-backed queue)
const Queue = require('bull');
const taskQueue = new Queue('tasks');

// Producer
taskQueue.add({ task: 'process-image', imageId: 123 });

// Consumer
taskQueue.process(async (job) => {
  const { task, imageId } = job.data;
  // Process task
});
\`\`\`

### 3. Shared Memory
\`\`\`javascript
// Web Workers with SharedArrayBuffer
const sab = new SharedArrayBuffer(1024);
const view = new Int32Array(sab);

// Main thread
worker.postMessage(sab);

// Worker thread
Atomics.add(view, 0, 1); // Atomic operation
\`\`\`

### 4. Sockets
\`\`\`javascript
// TCP Socket
const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Received:', data.toString());
  });
});

server.listen(8080);
\`\`\`

## File System

### File Operations
\`\`\`javascript
const fs = require('fs').promises;

// Read file
const content = await fs.readFile('file.txt', 'utf-8');

// Write file
await fs.writeFile('file.txt', 'content');

// Append
await fs.appendFile('file.txt', 'more content');

// Delete
await fs.unlink('file.txt');

// Directory operations
await fs.mkdir('dir');
const files = await fs.readdir('dir');
await fs.rmdir('dir');
\`\`\`

### File Allocation Methods

**1. Contiguous Allocation**
- Fast sequential access
- External fragmentation

**2. Linked Allocation**
- No external fragmentation
- Slow random access

**3. Indexed Allocation**
- Direct access
- Extra space for index block

## System Calls

\`\`\`javascript
// Node.js system calls
const os = require('os');

// System info
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());
console.log('Uptime:', os.uptime());

// Process info
console.log('Process ID:', process.pid);
console.log('Memory usage:', process.memoryUsage());
console.log('CPU usage:', process.cpuUsage());
\`\`\`

## Real-world Application

### Process Management in Node.js

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart dead workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  // Worker process
  require('./app.js');
}
\`\`\`

## Best Practices

✅ Use thread pools for better resource management
✅ Avoid busy waiting (use async/await)
✅ Implement proper error handling in processes
✅ Use IPC mechanisms appropriately
✅ Monitor memory usage
✅ Handle signals properly (SIGTERM, SIGINT)
✅ Implement graceful shutdown
✅ Use clustering for multi-core utilization
✅ Profile and optimize critical paths
✅ Understand system limits (ulimit, file descriptors)`,
      topics: ['Operating System', 'Process', 'Thread', 'Memory', 'Scheduling', 'Deadlock'],
      estimatedTime: 45,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },

    // ========================================
    // Computer Networks
    // ========================================
    {
      id: 'computer-networks',
      title: 'Computer Networks - OSI Model & Protocols',
      difficulty: 'Medium' as any,
      category: 'Computer Networks',
      description: 'Understanding network layers, protocols, TCP/IP, and network security',
      answer: `# Computer Networks

## OSI Model (7 Layers)

\`\`\`
7. Application   - HTTP, FTP, SMTP, DNS
6. Presentation  - Encryption, Compression
5. Session       - Session management
4. Transport     - TCP, UDP (end-to-end)
3. Network       - IP, ICMP, Routing
2. Data Link     - MAC, Ethernet, Switches
1. Physical      - Cables, Signals, Hubs
\`\`\`

## TCP/IP Model (4 Layers)

\`\`\`
4. Application   - HTTP, DNS, SMTP, FTP
3. Transport     - TCP, UDP
2. Internet      - IP, ICMP, ARP
1. Network Access - Ethernet, WiFi
\`\`\`

## TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable (ACK, retransmission) | Unreliable |
| Ordering | Ordered delivery | No ordering |
| Speed | Slower (overhead) | Faster |
| Header Size | 20 bytes | 8 bytes |
| Use Cases | Web, Email, File Transfer | Video, Gaming, DNS |

### TCP Three-Way Handshake

\`\`\`
Client                    Server
  │                          │
  │────── SYN (seq=x) ───────→│
  │                          │
  │←─── SYN-ACK (seq=y,───────│
  │      ack=x+1)            │
  │                          │
  │────── ACK (ack=y+1) ─────→│
  │                          │
  │   Connection Established │
\`\`\`

### TCP Connection Termination

\`\`\`
Client                    Server
  │                          │
  │────── FIN ──────────────→│
  │                          │
  │←────── ACK ──────────────│
  │                          │
  │←────── FIN ──────────────│
  │                          │
  │────── ACK ──────────────→│
  │                          │
  │   Connection Closed      │
\`\`\`

## IP Addressing

### IPv4
\`\`\`
Format: 32 bits (4 octets)
Example: 192.168.1.1

Classes:
  Class A: 1.0.0.0 to 126.255.255.255 (16M hosts)
  Class B: 128.0.0.0 to 191.255.255.255 (65K hosts)
  Class C: 192.0.0.0 to 223.255.255.255 (254 hosts)

Private IP ranges:
  10.0.0.0 to 10.255.255.255
  172.16.0.0 to 172.31.255.255
  192.168.0.0 to 192.168.255.255

Special addresses:
  127.0.0.1 - Localhost
  0.0.0.0 - Default route
  255.255.255.255 - Broadcast
\`\`\`

### IPv6
\`\`\`
Format: 128 bits (8 groups of 4 hex digits)
Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
Shortened: 2001:db8:85a3::8a2e:370:7334

Loopback: ::1
\`\`\`

### Subnetting

\`\`\`
IP: 192.168.1.0/24
Subnet Mask: 255.255.255.0
Network: 192.168.1.0
Broadcast: 192.168.1.255
Usable IPs: 192.168.1.1 to 192.168.1.254 (254 hosts)

CIDR Notation:
  /24 = 255.255.255.0 (256 addresses)
  /25 = 255.255.255.128 (128 addresses)
  /26 = 255.255.255.192 (64 addresses)
  /27 = 255.255.255.224 (32 addresses)
\`\`\`

## DNS (Domain Name System)

### DNS Query Process
\`\`\`
1. Browser cache
2. OS cache
3. Router cache
4. ISP DNS resolver
5. Root DNS server
6. TLD DNS server (.com)
7. Authoritative DNS server
8. Return IP address
\`\`\`

### DNS Record Types

\`\`\`javascript
// Example DNS records
const dnsRecords = {
  "A": "192.0.2.1",                    // IPv4 address
  "AAAA": "2001:db8::1",               // IPv6 address
  "CNAME": "alias.example.com",        // Canonical name
  "MX": "mail.example.com",            // Mail exchange
  "TXT": "v=spf1 include:_spf.google.com ~all", // Text
  "NS": "ns1.example.com",             // Name server
  "SOA": "ns1.example.com admin.example.com", // Start of authority
  "PTR": "example.com"                 // Reverse DNS
};

// DNS lookup in Node.js
const dns = require('dns').promises;

async function lookupDomain(domain) {
  const addresses = await dns.resolve4(domain);
  console.log('IPv4 addresses:', addresses);

  const mxRecords = await dns.resolveMx(domain);
  console.log('MX records:', mxRecords);
}
\`\`\`

## HTTP/HTTPS

### HTTP Request
\`\`\`http
GET /api/users HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer token123
Cookie: sessionId=abc123
\`\`\`

### HTTP Response
\`\`\`http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234
Cache-Control: max-age=3600
Set-Cookie: sessionId=xyz789; HttpOnly; Secure

{"users": [...]}
\`\`\`

### HTTPS (TLS/SSL Handshake)

\`\`\`
1. Client Hello (supported ciphers)
2. Server Hello (chosen cipher, certificate)
3. Client verifies certificate
4. Key exchange (establish session key)
5. Encrypted communication begins
\`\`\`

## Network Protocols

### Application Layer

**HTTP (Port 80)**
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(80);
\`\`\`

**HTTPS (Port 443)**
\`\`\`javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Secure Hello');
});

server.listen(443);
\`\`\`

**FTP (Port 21)** - File Transfer Protocol
**SSH (Port 22)** - Secure Shell
**SMTP (Port 25)** - Email sending
**DNS (Port 53)** - Domain name resolution
**DHCP (Port 67/68)** - Dynamic IP assignment

## Network Security

### Common Attacks

**1. DDoS (Distributed Denial of Service)**
\`\`\`
Mitigation:
- Rate limiting
- CDN (Cloudflare)
- Load balancing
- Traffic filtering
\`\`\`

**2. Man-in-the-Middle (MITM)**
\`\`\`
Prevention:
- Use HTTPS (TLS/SSL)
- Certificate pinning
- VPN
- Avoid public WiFi
\`\`\`

**3. DNS Spoofing**
\`\`\`
Prevention:
- DNSSEC
- Use trusted DNS servers
- Monitor DNS changes
\`\`\`

**4. SQL Injection**
\`\`\`javascript
// ❌ Vulnerable
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;

// ✅ Safe (parameterized query)
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);
\`\`\`

### Firewalls

\`\`\`bash
# iptables example (Linux firewall)
# Allow HTTP
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# Allow HTTPS
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Block specific IP
iptables -A INPUT -s 192.168.1.100 -j DROP

# Allow SSH only from specific IP
iptables -A INPUT -p tcp --dport 22 -s 10.0.0.5 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP
\`\`\`

## Network Tools & Commands

\`\`\`bash
# Ping (test connectivity)
ping google.com

# Traceroute (show route to host)
traceroute google.com

# Netstat (network statistics)
netstat -tuln  # Show listening ports

# Nslookup (DNS query)
nslookup example.com

# Dig (DNS lookup)
dig example.com

# Curl (make HTTP request)
curl -X GET https://api.example.com/users

# Telnet (test TCP connection)
telnet example.com 80

# Nmap (network scanner)
nmap -p 80,443 example.com

# Tcpdump (packet analyzer)
tcpdump -i eth0 port 80
\`\`\`

## NAT (Network Address Translation)

\`\`\`
Private Network (192.168.1.0/24)
  │
  ├─ Device 1: 192.168.1.10
  ├─ Device 2: 192.168.1.11
  └─ Device 3: 192.168.1.12
  │
NAT Router (Public IP: 203.0.113.5)
  │
Internet

All devices share one public IP
\`\`\`

## Load Balancing

\`\`\`javascript
// Round Robin load balancing
class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.current = 0;
  }

  getNextServer() {
    const server = this.servers[this.current];
    this.current = (this.current + 1) % this.servers.length;
    return server;
  }
}

const lb = new LoadBalancer([
  'http://server1.com',
  'http://server2.com',
  'http://server3.com'
]);

// Each request goes to next server
const server = lb.getNextServer();
\`\`\`

### Load Balancing Algorithms

1. **Round Robin** - Distribute evenly
2. **Least Connections** - Send to server with fewest connections
3. **IP Hash** - Use client IP to determine server
4. **Weighted** - Servers get traffic based on capacity

## Network Performance

\`\`\`javascript
// Measure network latency
const start = Date.now();

fetch('https://api.example.com/ping')
  .then(() => {
    const latency = Date.now() - start;
    console.log(\`Latency: \${latency}ms\`);
  });

// Bandwidth test
const testSize = 1024 * 1024; // 1MB
const startTime = Date.now();

fetch('https://example.com/testfile')
  .then(response => response.blob())
  .then(blob => {
    const duration = (Date.now() - startTime) / 1000; // seconds
    const bandwidth = (blob.size * 8) / duration / 1000000; // Mbps
    console.log(\`Bandwidth: \${bandwidth.toFixed(2)} Mbps\`);
  });
\`\`\`

## Best Practices

✅ Use HTTPS for all communications
✅ Implement rate limiting
✅ Use VPN for remote access
✅ Keep software/firmware updated
✅ Monitor network traffic
✅ Implement proper firewall rules
✅ Use strong encryption (TLS 1.3)
✅ Validate SSL certificates
✅ Implement DDoS protection
✅ Use secure DNS (DoH, DoT)
✅ Regular security audits
✅ Network segmentation
✅ Principle of least privilege`,
      topics: ['Computer Networks', 'TCP/IP', 'OSI Model', 'DNS', 'HTTP', 'Network Security'],
      estimatedTime: 50,
      platformLinks: [],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ]
};
