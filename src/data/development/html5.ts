import { Problem } from '../../types';

export const html5Problems: Problem[] = [
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

Web Development Trinity:
+------------------+
|      HTML        |  --> Structure (skeleton)
+------------------+
|      CSS         |  --> Styling (skin)
+------------------+
|   JavaScript     |  --> Behavior (muscles)
+------------------+

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

Visual Breakdown:

    <p>Hello World</p>
    |__|         |___|
     |     |       |
     |     |       +-----> Closing Tag
     |     +-------------> Content
     +-------------------> Opening Tag
    
    |___________________|
            |
            +------------> Complete Element


Self-closing Elements (no closing tag needed):

    <img src="photo.jpg" />
    <br />
    <input type="text" />
    <hr />`,
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

Browser Rendering Modes:

+------------------+     +------------------+
|   WITHOUT        |     |   WITH           |
|   DOCTYPE        |     |   DOCTYPE        |
+------------------+     +------------------+
|                  |     |                  |
|   Quirks Mode    |     |  Standards Mode  |
|   (inconsistent) |     |  (proper)        |
|                  |     |                  |
+------------------+     +------------------+
        X                       ✓

Rules:
- Must be first line in document
- Case-insensitive (uppercase convention)
- Not an HTML tag - it's an instruction to browser`,
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

Non-Semantic vs Semantic:

  NON-SEMANTIC (bad)          SEMANTIC (good)
+------------------+      +------------------+
| <div id="header">|      | <header>         |
|   <div class=    |      |   <nav>          |
|    "navigation"> |  VS  |   </nav>         |
|   </div>         |      | </header>        |
| </div>           |      |                  |
+------------------+      +------------------+


Page Structure with Semantic Tags:

+--------------------------------+
|           <header>             |
|   +------------------------+   |
|   |         <nav>          |   |
|   +------------------------+   |
+--------------------------------+
|            <main>              |
|   +----------+ +----------+    |
|   | <article>| | <aside>  |    |
|   |          | |          |    |
|   | <section>| |          |    |
|   |          | |          |    |
|   +----------+ +----------+    |
+--------------------------------+
|           <footer>             |
+--------------------------------+

Common Semantic Tags:
- <header>   Page/section header
- <nav>      Navigation links
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
    answer: `Block vs Inline Comparison:

BLOCK ELEMENTS:
+------------------------------------------+
| <div>Takes full width</div>              |
+------------------------------------------+
+------------------------------------------+
| <p>Each block on new line</p>            |
+------------------------------------------+

- Full container width
- Starts on new line
- Can set width/height
- Examples: div, p, h1, section, header


INLINE ELEMENTS:

+------------------------------------------+
| Text with <span>inline</span> elements   |
| <a>flow</a> <strong>together</strong>    |
+------------------------------------------+

- Only content width
- Stays on same line
- Cannot set width/height
- Examples: span, a, strong, em, img


INLINE-BLOCK (hybrid):

+--------+ +--------+ +--------+
| Box 1  | | Box 2  | | Box 3  |
+--------+ +--------+ +--------+

- Flows inline (horizontal)
- BUT can set width/height
- Best of both worlds

CSS: span { display: inline-block; width: 100px; }`,
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

Anatomy of an Element with Attributes:

<a href="https://google.com" target="_blank" title="Google">Link</a>
 |  |___________________|  |____________|  |___________|  |__|
 |           |                   |              |          |
Tag    Attribute 1          Attribute 2    Attribute 3  Content


Attribute Types:

+------------------+----------------------------------+
| Type             | Examples                         |
+------------------+----------------------------------+
| Global           | id, class, style, title, hidden  |
| (any element)    | data-*, contenteditable          |
+------------------+----------------------------------+
| Boolean          | disabled, required, checked      |
| (no value)       | readonly, autofocus              |
+------------------+----------------------------------+
| Custom Data      | data-user-id="123"               |
|                  | data-role="admin"                |
+------------------+----------------------------------+

Boolean Attributes:
<input disabled required checked readonly>
       (just name, no ="value" needed)

Custom Data Access in JS:
<div data-user-id="123">
element.dataset.userId  -->  "123"`,
    topics: ['HTML', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-id-class',
    title: 'ID vs Class?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'id vs class attributes',
    answer: `ID vs Class Comparison:

+------------------+------------------+
|       ID         |      CLASS       |
+------------------+------------------+
| Unique           | Reusable         |
| (one per page)   | (many elements)  |
+------------------+------------------+
| #id              | .class           |
+------------------+------------------+
| Specificity: 100 | Specificity: 10  |
+------------------+------------------+
| One per element  | Multiple allowed |
+------------------+------------------+


Visual Example:

     ID (unique)              CLASS (shared)
         |                         |
+--------v--------+     +----------v----------+
|  #main-header   |     | .card  .card  .card |
|  (only ONE!)    |     | (many elements OK)  |
+-----------------+     +---------------------+


Usage:
<div id="header" class="container dark-theme large">
         |              |_______|________|
    one ID only         multiple classes OK


CSS Selectors:
#header { }      --> ID (higher priority)
.container { }   --> Class (lower priority)

Best Practice:
- ID    --> JavaScript targeting, anchor links (#section)
- Class --> Styling, reusable components`,
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

Form Flow:

+-------------+      +-------------+      +-------------+
|   User      | ---> |   Form      | ---> |   Server    |
|   Input     |      |   Submit    |      |   Process   |
+-------------+      +-------------+      +-------------+


Form Structure:

+------------------------------------------+
| <form action="/submit" method="POST">    |
|                                          |
|   Label: [__text input__]                |
|                                          |
|   Dropdown: [Select v]                   |
|             | Option 1 |                 |
|             | Option 2 |                 |
|                                          |
|   Message:                               |
|   +----------------------------------+   |
|   |        <textarea>                |   |
|   +----------------------------------+   |
|                                          |
|   [  Submit Button  ]                    |
|                                          |
+------------------------------------------+


GET vs POST:

GET:  /search?query=hello&page=1
      (data visible in URL - for searches)

POST: Data hidden in request body
      (for passwords, sensitive data)


Input Types:
text, password, email, number, tel, date,
checkbox, radio, file, range, color

Validation Attributes:
required, minlength, maxlength, min, max,
pattern, disabled, readonly`,
    topics: ['HTML', 'Forms', 'Validation'],
    estimatedTime: 6
  },
  {
    id: 'html-links',
    title: 'Types of Links in HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML links',
    answer: `Link Types Overview:

+------------------+--------------------------------+
|    Link Type     |           Example              |
+------------------+--------------------------------+
| External         | href="https://google.com"      |
| Internal         | href="/about"                  |
| Anchor           | href="#section"                |
| Email            | href="mailto:hi@example.com"   |
| Phone            | href="tel:+1234567890"         |
| Download         | href="/file.pdf" download      |
+------------------+--------------------------------+


Anchor Links (same page navigation):

+------------------------------------------+
|  <a href="#contact">Go to Contact</a>    |
|                  |                       |
|                  v                       |
|  ... scrolls down to ...                 |
|                  |                       |
|                  v                       |
|  <section id="contact">                  |
|     Contact form here                    |
|  </section>                              |
+------------------------------------------+


External Link Security:

<a href="https://external.com" 
   target="_blank" 
   rel="noopener noreferrer">Link</a>
        |              |
        |              +---> Prevents security risks
        +-------------------> Opens in new tab

Always use rel="noopener noreferrer" with target="_blank"

Accessibility Tip:
X  <a href="/about">Click here</a>
✓  <a href="/about">Learn about our company</a>`,
    topics: ['HTML', 'Links', 'Navigation'],
    estimatedTime: 4
  },
  {
    id: 'html-images',
    title: 'How to Add Images?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML images',
    answer: `Basic Image Syntax:

<img src="photo.jpg" alt="Description" width="500" height="300">
      |              |                  |            |
      |              |                  +------------+---> Dimensions
      |              +---> Alt text (required for accessibility)
      +---> Image source path


Image Loading Strategy:

+------------------+     +------------------+
|  loading="eager" |     |  loading="lazy"  |
+------------------+     +------------------+
|  Loads           |     |  Loads only      |
|  immediately     |     |  when visible    |
|  (default)       |     |  (better perf)   |
+------------------+     +------------------+


Responsive Images:

Small Screen        Medium Screen       Large Screen
+----------+        +-------------+     +----------------+
|  300px   |        |    600px    |     |     1200px     |
| small.jpg|        |  medium.jpg |     |   large.jpg    |
+----------+        +-------------+     +----------------+

<img srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 300px, 600px"
     src="medium.jpg" 
     alt="Responsive image">


Figure with Caption:

+----------------------------------+
|         +----------------+       |
|         |                |       |
|         |     IMAGE      |       |
|         |                |       |
|         +----------------+       |
|         Caption text here        |
+----------------------------------+

<figure>
  <img src="chart.jpg" alt="Sales chart">
  <figcaption>Q4 Sales Growth</figcaption>
</figure>


Image Formats:
- JPEG  --> Photos, lossy compression
- PNG   --> Transparency, lossless
- WebP  --> Modern, smaller file size
- SVG   --> Vectors, infinitely scalable`,
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

1. ORDERED LIST (numbered):

   +-------------------+
   | 1. First item     |
   | 2. Second item    |
   | 3. Third item     |
   +-------------------+

   <ol>
     <li>First item</li>
     <li>Second item</li>
   </ol>

   Type options: 1, A, a, I, i
   <ol type="A"> --> A, B, C...


2. UNORDERED LIST (bullets):

   +-------------------+
   | * Apple           |
   | * Banana          |
   | * Orange          |
   +-------------------+

   <ul>
     <li>Apple</li>
     <li>Banana</li>
   </ul>


3. DESCRIPTION LIST (term + definition):

   +-------------------+
   | HTML              |
   |   HyperText       |
   |   Markup Language |
   |                   |
   | CSS               |
   |   Cascading       |
   |   Style Sheets    |
   +-------------------+

   <dl>
     <dt>HTML</dt>
     <dd>HyperText Markup Language</dd>
   </dl>


NESTED LISTS:

   +------------------------+
   | * Frontend             |
   |   +------------------+ |
   |   | * HTML           | |
   |   | * CSS            | |
   |   | * JavaScript     | |
   |   +------------------+ |
   | * Backend             |
   +------------------------+

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