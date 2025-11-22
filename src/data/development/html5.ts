import { Problem } from '../../types';

export const html5Problems: Problem[] = [
  {
    id: 'html-basics-1',
    title: 'What is HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Fundamental understanding of HTML',
    answer: `### Definition
**HTML (HyperText Markup Language)** is the standard markup language for creating the structure of web pages. It is not a programming language; it does not contain logic (loops, conditions). It strictly defines the layout.

### Visual Analogy: The Human Body
To understand the role of HTML, compare a website to a human body:

* **HTML:** The Skeleton (Structure & Layout)
* **CSS:** The Skin & Clothing (Appearance & Style)
* **JavaScript:** The Muscles & Brain (Action & Logic)

### Basic Document Structure
Every HTML document follows this tree structure:

\`\`\`text
Document
└── html
    ├── head (Metadata, Title)
    └── body (Visible Content)
        ├── h1 (Heading)
        └── p  (Paragraph)
\`\`\`

### Example Code
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
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
    answer: `### The Difference
Interviewers often ask this to test technical precision.

* **Tag:** The syntax used to start or end an element (the brackets).
* **Element:** The complete component, including tags and content.

### Visual Breakdown

\`\`\`text
      Opening Tag          Content           Closing Tag
     ┌───────────┐      ┌───────────┐       ┌───────────┐
     │           │      │           │       │           │
     │    <h1>   │      │   Title   │       │   </h1>   │
     │           │      │           │       │           │
     └─────┬─────┘      └─────┬─────┘       └─────┬─────┘
           │                  │                   │
           └──────────────────┼───────────────────┘
                              │
                      The HTML Element
\`\`\`

### Void Elements
Some elements do not have a closing tag or content. These are called **Void Elements**.
* Images: \`<img src="image.jpg" />\`
* Line Breaks: \`<br />\`
* Inputs: \`<input type="text" />\``,
    topics: ['HTML', 'Terminology'],
    estimatedTime: 2
  },
  {
    id: 'html-doctype',
    title: 'What is DOCTYPE?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'DOCTYPE declaration',
    answer: `### Purpose
The \`<!DOCTYPE>\` declaration is an instruction to the web browser about what version of HTML the page is written in. It must be the **very first line** of your document.

### The "Mode" Switch
The primary job of DOCTYPE is to switch the browser between two rendering modes:

| Mode | Description | Trigger |
| :--- | :--- | :--- |
| **Standards Mode** | Renders the website using modern HTML5 specifications. | \`<!DOCTYPE html>\` is present. |
| **Quirks Mode** | Emulates behavior of old browsers (IE5) to support legacy sites. Layouts may break. | \`<!DOCTYPE html>\` is missing. |

### Syntax (HTML5)
\`\`\`html
<!DOCTYPE html>
\`\`\`
*Note: It is not case-sensitive, but uppercase is the convention.*`,
    topics: ['HTML', 'DOCTYPE'],
    estimatedTime: 2
  },
  {
    id: 'html-semantic',
    title: 'What are Semantic Tags?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Semantic HTML',
    answer: `### Definition
**Semantic HTML** means using tags that clearly describe their meaning to both the browser and the developer.

* **Non-Semantic:** \`<div>\` and \`<span>\` (Tells us nothing about the content).
* **Semantic:** \`<header>\`, \`<footer>\`, \`<article>\` (Clearly defines the content).

### Visual Layout Guide
Using semantic tags creates a standardized structure that is easy to read.

\`\`\`text
 _________________________________________
|                 <header>                |
|_________________________________________|
|        |                                |
|        |            <main>              |
| <nav>  |                                |
|        |   <section>       <aside>      |
|        |   (Content)      (Sidebar)     |
|________|________________________________|
|                 <footer>                |
|_________________________________________|
\`\`\`

### Key Benefits
1.  **SEO:** Search engines give higher ranking to semantic content.
2.  **Accessibility:** Screen readers use these tags to navigate (e.g., "Skip to Main Content").
3.  **Maintainability:** Easier for other developers to read your code.`,
    topics: ['HTML', 'Semantic', 'SEO', 'Accessibility'],
    estimatedTime: 5
  },
  {
    id: 'html-inline-block',
    title: 'Inline vs Block Elements?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Element display types',
    answer: `### Display Behaviors
Every HTML element has a default display value. The two most common are **Block** and **Inline**.

### 1. Block-Level Elements
* **Behavior:** Always starts on a new line.
* **Dimensions:** Takes up the full width available (100%).
* **Examples:** \`<div>\`, \`<h1>\`, \`<p>\`, \`<section>\`

**Visual Representation:**
\`\`\`text
[Block Element 1 (Width: 100%) _________________]
[Block Element 2 (Width: 100%) _________________]
\`\`\`

### 2. Inline Elements
* **Behavior:** Does not start on a new line; sits next to other elements.
* **Dimensions:** Width is only as wide as the content. \`width\` and \`height\` properties do not work.
* **Examples:** \`<span>\`, \`<a>\`, \`<img>\`, \`<strong>\`

**Visual Representation:**
\`\`\`text
[Inline 1] [Inline 2] [Inline 3]
\`\`\`

### 3. Inline-Block (The Hybrid)
* **Code:** \`display: inline-block;\`
* **Use Case:** Allows elements to sit side-by-side (like inline) but allows you to set custom width/height (like block). Used often for grid layouts or buttons.`,
    topics: ['HTML', 'CSS', 'Layout'],
    estimatedTime: 4
  },
  {
    id: 'html-attributes',
    title: 'What are HTML Attributes?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML attributes',
    answer: `### Definition
Attributes provide additional information about HTML elements. They are always specified in the **opening tag**.

### Anatomy of an Attribute
Attributes usually come in name/value pairs: \`name="value"\`.

\`\`\`html
   Attribute Name    Attribute Value
         ↓                 ↓
<a      href      =  "https://google.com" > Link </a>
\`\`\`

### Attribute Categories

**1. Global Attributes** (Can be used on *any* HTML element)
* \`class\`: Specifies one or more class names for CSS.
* \`id\`: Specifies a unique id for an element.
* \`style\`: Specifies inline CSS styles.
* \`title\`: Extra information (shown as a tooltip).

**2. Boolean Attributes**
These do not require a value. If they are present, the value is true.
* \`<input required>\`
* \`<input disabled>\`
* \`<input checked>\`

**3. Data Attributes**
Used to store custom data private to the page or application.
* Syntax: \`data-*\`
* Example: \`<div data-user-id="12345"></div>\``,
    topics: ['HTML', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-id-class',
    title: 'ID vs Class?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'id vs class attributes',
    answer: `### Comparison Table
The difference between ID and Class is a fundamental CSS/HTML concept.

| Feature | ID (\`#\`) | Class (\`.\`) |
| :--- | :--- | :--- |
| **Quantity** | **Unique** (1 per page) | **Reusable** (Many per page) |
| **Usage** | Specific targeting (Anchors, JS) | Styling groups of elements |
| **CSS Syntax** | \`#header { color: red; }\` | \`.btn { color: blue; }\` |
| **Specificity** | High Priority | Medium Priority |

### Visual Logic

**ID is like a Student ID Number:**
Only ONE student has the ID "12345".
\`<div id="student-12345"></div>\`

**Class is like a Uniform:**
MANY students can wear the same "blue-shirt".
\`<div class="student blue-shirt"></div>\`
\`<div class="student blue-shirt"></div>\`

### Best Practice
* Use **Classes** for styling.
* Use **IDs** sparingly, mostly for JavaScript hooks or anchor links.`,
    topics: ['HTML', 'CSS', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-forms',
    title: 'Explain HTML Forms',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML forms',
    answer: `### Workflow
The \`<form>\` element is a container for different types of input elements used to collect user data and pass it to a server.

\`\`\`text
[ Browser ]  --- (Sends Data) --->  [ Server ]
   Form                               Process
\`\`\`

### Key Attributes
* **action**: The URL where the form data is sent.
* **method**: The HTTP method used (GET or POST).

### GET vs POST Methods

| Method | Data Visibility | Use Case |
| :--- | :--- | :--- |
| **GET** | Visible in URL address bar. | Search forms, Filtering data. |
| **POST** | Hidden inside Request Body. | Login, Passwords, Creating data. |

### Code Example
\`\`\`html
<form action="/login" method="POST">
  <label>Email: <input type="email" name="email" /></label>

  <select name="role">
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>

  <button type="submit">Login</button>
</form>
\`\`\``,
    topics: ['HTML', 'Forms', 'Validation'],
    estimatedTime: 6
  },
  {
    id: 'html-links',
    title: 'Types of Links in HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML links',
    answer: `### The Anchor Tag
Links are defined with the \`<a>\` tag. The \`href\` (Hypertext Reference) attribute specifies the destination.

### 1. External Links
Links that go to a different website.
\`\`\`html
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>
\`\`\`
* **target="_blank":** Opens in a new tab.
* **rel="noopener noreferrer":** **Security Requirement.** Prevents the new page from accessing the window object of the original page.

### 2. Internal Links
Links that go to another page within the same website.
\`\`\`html
<a href="/about-us">About Us</a>
\`\`\`

### 3. Bookmark Anchors
Links that jump to a specific section on the *same* page.

\`\`\`html
<a href="#contact">Go to Contact</a>

<section id="contact">Contact Details...</section>
\`\`\`

### 4. Special Protocols
* **Email:** \`<a href="mailto:user@example.com">Send Mail</a>\`
* **Phone:** \`<a href="tel:+15550000000">Call Us</a>\``,
    topics: ['HTML', 'Links', 'Navigation'],
    estimatedTime: 4
  },
  {
    id: 'html-images',
    title: 'How to Add Images?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML images',
    answer: `### Syntax
Images are defined with the \`<img>\` tag. It is an empty tag (it has no closing tag).

\`\`\`html
<img src="url" alt="text" width="px" height="px">
\`\`\`

### Critical Attributes
1.  **src (Source):** The path to the image file (URL or local path).
2.  **alt (Alternative Text):**
    * **Accessibility:** Screen readers read this text to blind users.
    * **Fallback:** Displays if the image fails to load.
    * **SEO:** Helps search engines understand the image.

### Performance Tip: Lazy Loading
Modern HTML supports native lazy loading. This stops the browser from loading images until the user scrolls near them, speeding up initial page loads.

\`\`\`html
<img src="large-photo.jpg" alt="Nature" loading="lazy">
\`\`\`

### Responsive Images (Picture Tag)
Use the \`<picture>\` tag to serve different image files based on screen size or format support.

\`\`\`html
<picture>
  <source srcset="img.webp" type="image/webp"> <img src="img.jpg" alt="Fallback">           </picture>
\`\`\``,
    topics: ['HTML', 'Images', 'Performance'],
    estimatedTime: 5
  },
  {
    id: 'html-lists',
    title: 'Types of Lists?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML lists',
    answer: `### 1. Unordered List (Bullet Points)
Used when the order of items does not matter.
* **Tag:** \`<ul>\`
* **Item:** \`<li>\`

\`\`\`html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
\`\`\`

### 2. Ordered List (Numbered)
Used when the sequence is important (steps, ranking).
* **Tag:** \`<ol>\`
* **Item:** \`<li>\`

\`\`\`html
<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>
\`\`\`

### 3. Description List (Dictionary Style)
Used for terms and definitions.
* **Tag:** \`<dl>\` (Description List)
* **Term:** \`<dt>\` (Description Term)
* **Definition:** \`<dd>\` (Description Details)

\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
\`\`\``,
    topics: ['HTML', 'Lists'],
    estimatedTime: 4
  }
];