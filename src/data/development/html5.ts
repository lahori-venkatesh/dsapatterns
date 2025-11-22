import { Problem } from '../../types';

export const html5Problems: Problem[] = [
  {
    id: 'html-basics-1',
    title: 'What is HTML and what does it stand for?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Fundamental understanding of HTML',
    answer: `HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages and structure content on the internet.

STANDARD ANSWER:
HTML is the backbone of web development. It uses tags to define different elements like headings, paragraphs, links, images, and more. HTML provides the structure and content of a web page, while CSS handles styling and JavaScript adds interactivity.

INTERVIEW ANSWER:
"HTML stands for HyperText Markup Language. It's a markup language, not a programming language, which means it's used to structure and present content on the web. HTML uses a system of tags (like <div>, <p>, <h1>) to define elements. Each tag tells the browser how to display or structure the content within it.

I think of HTML as the skeleton of a website - it provides the basic structure and content, while CSS is the skin (styling) and JavaScript is the muscles (interactivity)."

ANALOGY:
Think of building a house:
- HTML is the foundation and walls (structure)
- CSS is the paint and decoration (appearance)
- JavaScript is the electricity and plumbing (functionality)

EXAMPLE:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text.</p>
  <a href="https://example.com">Click here</a>
</body>
</html>
\`\`\`

KEY POINTS:
• HTML defines the structure and content
• Uses opening and closing tags
• Case-insensitive but lowercase is convention
• HTML5 is the latest version with new semantic tags`,
    topics: ['HTML', 'Basics', 'Web Development'],
    estimatedTime: 5,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-basics-2',
    title: 'What is the difference between HTML elements and tags?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding HTML terminology',
    answer: `A tag is the actual markup syntax (the code you write), while an element is the complete structure including the opening tag, content, and closing tag.

STANDARD ANSWER:
- Tag: The markup enclosed in angle brackets, like <p> or </p>
- Element: The complete structure from opening tag to closing tag, including the content

INTERVIEW ANSWER:
"A tag is just the marker written in angle brackets - like <p> or <div>. An element is the whole package: the opening tag, the content inside, and the closing tag. So when I write <p>Hello</p>, the <p> and </p> are tags, but the entire thing together is a paragraph element."

ANALOGY:
Think of gift wrapping:
- Tags are like the wrapping paper and ribbon (the markers)
- The element is the complete wrapped gift (tag + content + tag)

EXAMPLE:
\`\`\`html
<!-- This is a TAG -->
<h1>

<!-- This is an ELEMENT -->
<h1>Hello World</h1>

<!-- Breaking it down: -->
<p>               ← Opening tag
  This is text   ← Content
</p>              ← Closing tag
↑
Complete element

<!-- Self-closing tag (also an element) -->
<img src="photo.jpg" alt="Photo" />
<br />
<input type="text" />
\`\`\`

KEY POINTS:
• Tags are the syntax markers (<tag>)
• Elements include tags plus content
• Some elements are self-closing (void elements)
• Elements can be nested inside other elements`,
    topics: ['HTML', 'Terminology', 'Elements'],
    estimatedTime: 5,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-doctype',
    title: 'What is DOCTYPE and why is it important?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding DOCTYPE declaration',
    answer: `DOCTYPE (Document Type Declaration) tells the browser which version of HTML the page is written in. It ensures the browser renders the page correctly.

STANDARD ANSWER:
The DOCTYPE declaration must be the very first line in an HTML document, before the <html> tag. For HTML5, we use <!DOCTYPE html>. Without it, browsers may enter "quirks mode" and render pages inconsistently.

INTERVIEW ANSWER:
"DOCTYPE stands for Document Type Declaration. It's placed at the very top of an HTML document to tell the browser which HTML specification to use when rendering the page. In HTML5, we simply write <!DOCTYPE html>, which is much simpler than older versions.

Without a DOCTYPE, browsers enter 'quirks mode' where they try to be backward compatible with very old websites, which can cause layout and styling issues. With a proper DOCTYPE, browsers use 'standards mode' and render pages according to modern web standards."

ANALOGY:
Think of it like setting your GPS to metric or imperial units:
- DOCTYPE tells the browser "I'm speaking HTML5 language"
- Without it, the browser guesses and might interpret things wrong
- It's like starting a conversation by saying "I'm speaking English" vs assuming

EXAMPLE:
\`\`\`html
<!-- HTML5 DOCTYPE (modern and simple) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Content here</h1>
</body>
</html>

<!-- Old HTML 4.01 DOCTYPE (complex) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML DOCTYPE (also complex) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
\`\`\`

KEY POINTS:
• Must be the first line in HTML document
• HTML5 DOCTYPE is simple: <!DOCTYPE html>
• Case-insensitive but uppercase is convention
• Triggers standards mode in browsers
• Without it, browsers may render inconsistently`,
    topics: ['HTML', 'DOCTYPE', 'Standards'],
    estimatedTime: 5,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-semantic',
    title: 'What are semantic HTML tags and why should we use them?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding semantic HTML',
    answer: `Semantic HTML tags clearly describe their meaning and content to both the browser and developer. They make code more readable and improve SEO and accessibility.

STANDARD ANSWER:
Semantic tags like <header>, <nav>, <article>, <section>, and <footer> describe what the content is, not just how it looks. Unlike generic <div> tags, semantic tags convey meaning about the structure and purpose of content.

INTERVIEW ANSWER:
"Semantic HTML means using tags that clearly describe what they contain. For example, <nav> tells both developers and browsers 'this is navigation', while a <div class='navigation'> just says 'this is a container'.

The benefits are huge: search engines can better understand your content for SEO, screen readers can navigate more effectively for accessibility, and developers can understand code structure at a glance. It's about writing HTML that is self-documenting and meaningful."

ANALOGY:
Imagine organizing a library:
- Non-semantic: Everything in plain boxes labeled "Box 1", "Box 2"
- Semantic: Clearly labeled sections like "Fiction", "Science", "History"

Both store books, but semantic labels make everything easier to find and understand.

EXAMPLE:
\`\`\`html
<!-- NON-SEMANTIC (Bad Practice) -->
<div id="header">
  <div id="nav">
    <div class="link">Home</div>
    <div class="link">About</div>
  </div>
</div>
<div id="main">
  <div class="post">
    <div class="title">Blog Post</div>
    <div class="content">Post content...</div>
  </div>
</div>
<div id="footer">
  <div class="copyright">© 2024</div>
</div>

<!-- SEMANTIC (Best Practice) -->
<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Blog Post</h1>
    <p>Post content...</p>
  </article>
</main>
<footer>
  <p>© 2024</p>
</footer>
\`\`\`

Common Semantic Tags:
\`\`\`html
<header>    <!-- Page or section header -->
<nav>       <!-- Navigation links -->
<main>      <!-- Main content (one per page) -->
<article>   <!-- Self-contained content -->
<section>   <!-- Thematic grouping -->
<aside>     <!-- Side content, sidebars -->
<footer>    <!-- Page or section footer -->
<figure>    <!-- Images with captions -->
<figcaption><!-- Caption for figure -->
<time>      <!-- Date/time -->
<mark>      <!-- Highlighted text -->
\`\`\`

KEY POINTS:
• Improves code readability and maintainability
• Better SEO (search engines understand structure)
• Enhanced accessibility (screen readers)
• Future-proof (works with new devices)
• Use <div> only for styling/layout purposes`,
    topics: ['HTML', 'Semantic', 'Best Practices', 'Accessibility', 'SEO'],
    estimatedTime: 10,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-inline-block',
    title: 'What is the difference between inline and block elements?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding element display types',
    answer: `Block elements take up the full width available and start on a new line, while inline elements only take up as much width as necessary and don't force line breaks.

STANDARD ANSWER:
Block-level elements create a "block" of content that starts on a new line and extends the full width of their container. Inline elements flow within text and only take up necessary space.

INTERVIEW ANSWER:
"Block elements are like paragraphs in a document - they stack vertically and take up the full width available. Examples include <div>, <p>, <h1>, and <section>. You can set width and height on block elements.

Inline elements are like words in a sentence - they flow horizontally within text. Examples include <span>, <a>, <strong>, and <img>. You generally can't set width and height on inline elements (except replaced elements like <img>)."

ANALOGY:
Think of arranging furniture:
- Block elements: Like placing sofas and beds - each takes up a whole row, stacks vertically
- Inline elements: Like placing books on a shelf - they sit next to each other horizontally

EXAMPLE:
\`\`\`html
<!-- BLOCK ELEMENTS -->
<div style="background: lightblue;">
  This div takes full width
</div>
<p style="background: lightgreen;">
  This paragraph also takes full width
</p>
<h1>Heading takes full width too</h1>

Result:
[This div takes full width          ]
[This paragraph also takes full width]
[Heading takes full width too        ]


<!-- INLINE ELEMENTS -->
<p>
  This is <span style="background: yellow;">inline span</span> text with
  <strong>bold</strong> and <a href="#">link</a> elements.
</p>

Result:
This is [inline span] text with [bold] and [link] elements.
          ↑ all on same line


<!-- MIXING BOTH -->
<div style="border: 1px solid black;">
  Block div containing
  <span style="color: red;">inline span</span>
  and more text
</div>
\`\`\`

Common Block Elements:
\`\`\`html
<div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>
<header>, <footer>, <main>, <section>
<article>, <nav>, <form>, <table>
\`\`\`

Common Inline Elements:
\`\`\`html
<span>, <a>, <strong>, <em>, <img>
<input>, <button>, <label>, <code>
<b>, <i>, <small>, <sub>, <sup>
\`\`\`

CSS Display Property:
\`\`\`css
/* Change display type */
div { display: inline; }     /* Block to inline */
span { display: block; }      /* Inline to block */
div { display: inline-block; } /* Hybrid: inline flow with block properties */
\`\`\`

KEY POINTS:
• Block: Full width, starts new line, can set width/height
• Inline: Only necessary width, flows in text, no width/height
• inline-block: Best of both worlds
• Can be changed with CSS display property
• Understanding this is crucial for layout`,
    topics: ['HTML', 'Display', 'Layout', 'CSS'],
    estimatedTime: 10,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-attributes',
    title: 'What are HTML attributes? Explain with examples.',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding HTML attributes',
    answer: `HTML attributes provide additional information about elements. They are written inside the opening tag and consist of a name and value pair (name="value").

STANDARD ANSWER:
Attributes modify the behavior or provide metadata about HTML elements. They are always specified in the opening tag and usually come in name/value pairs like name="value". Some attributes can be used on any element (global attributes), while others are specific to certain elements.

INTERVIEW ANSWER:
"HTML attributes are like adjectives for HTML elements - they provide extra information or modify how the element behaves. They're written inside the opening tag as name='value' pairs.

For example, the <a> tag creates a link, but the href attribute tells it where to link to. The <img> tag displays an image, but the src attribute specifies which image file to show. There are also global attributes like id, class, and style that work on any element."

ANALOGY:
Think of ordering a coffee:
- Element: Coffee (the thing itself)
- Attributes: Size="large", temperature="hot", milk="oat"
- The attributes customize and provide details about the coffee

EXAMPLE:
\`\`\`html
<!-- Basic attribute syntax -->
<tag attribute="value">Content</tag>

<!-- Common attributes in action -->
<a href="https://google.com" target="_blank" title="Visit Google">
  Click here
</a>
<!--
  href: where to link
  target: open in new tab
  title: tooltip text
-->

<img src="photo.jpg" alt="Beach sunset" width="500" height="300" />
<!--
  src: image file location
  alt: description for accessibility
  width/height: dimensions
-->

<input type="email" name="email" placeholder="Enter email" required />
<!--
  type: input type
  name: form field name
  placeholder: hint text
  required: makes field mandatory
-->

<div id="header" class="container main" data-theme="dark">
  Content
</div>
<!--
  id: unique identifier
  class: CSS class names (multiple allowed)
  data-*: custom data attributes
-->
\`\`\`

Global Attributes (work on all elements):
\`\`\`html
<element id="unique-id">           <!-- Unique identifier -->
<element class="class1 class2">    <!-- CSS classes -->
<element style="color: red;">      <!-- Inline styles -->
<element title="Tooltip text">     <!-- Tooltip on hover -->
<element hidden>                   <!-- Hide element -->
<element contenteditable="true">   <!-- Editable content -->
<element draggable="true">         <!-- Can be dragged -->
<element data-user-id="123">       <!-- Custom data -->
\`\`\`

Boolean Attributes (no value needed):
\`\`\`html
<input type="checkbox" checked>    <!-- Checked by default -->
<input type="text" disabled>       <!-- Cannot interact -->
<input type="text" readonly>       <!-- Can see, not edit -->
<button type="submit" autofocus>   <!-- Auto-focused -->
<script src="app.js" async>        <!-- Load asynchronously -->
<details open>                     <!-- Expanded by default -->
\`\`\`

Custom Data Attributes:
\`\`\`html
<div data-user-id="123" data-role="admin" data-status="active">
  User Profile
</div>

<script>
  const div = document.querySelector('div');
  console.log(div.dataset.userId);   // "123"
  console.log(div.dataset.role);     // "admin"
  console.log(div.dataset.status);   // "active"
</script>
\`\`\`

KEY POINTS:
• Attributes provide extra information about elements
• Format: name="value" (use quotes)
• Some attributes are required (src for img, href for a)
• Global attributes work on any element
• Boolean attributes don't need values
• data-* attributes for custom data`,
    topics: ['HTML', 'Attributes', 'Syntax'],
    estimatedTime: 10,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-id-class',
    title: 'What is the difference between id and class attributes?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding id vs class',
    answer: `The id attribute uniquely identifies a single element, while the class attribute can be shared by multiple elements. An element can have only one id but multiple classes.

STANDARD ANSWER:
id is unique - only one element per page should have a specific id value. class is reusable - multiple elements can share the same class. IDs have higher CSS specificity than classes.

INTERVIEW ANSWER:
"The key difference is uniqueness. An id should be unique to one element on the page - like a social security number for that element. A class can be reused across multiple elements - like a group membership.

In CSS, ids are selected with # and have higher specificity than classes which use . selector. You can also have multiple classes on one element but only one id. I typically use ids for JavaScript targeting and classes for styling, though both can be used for either purpose."

ANALOGY:
Think of a classroom:
- id: Student ID number (unique to each student)
- class: Grade level (multiple students can be in 10th grade)

Or think of social media:
- id: Username (unique, only you have it)
- class: Tags/interests (many people can have same interests)

EXAMPLE:
\`\`\`html
<!-- ID - UNIQUE (only once per page) -->
<div id="header">Main Header</div>
<div id="header">Another Header</div> ❌ WRONG! Can't repeat IDs

<button id="submitBtn">Submit</button>  ✅ CORRECT

<!-- CLASS - REUSABLE (multiple times) -->
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>  ✅ CORRECT - Same class multiple times

<!-- MULTIPLE CLASSES on one element -->
<div class="card featured large">Special Card</div>
                ↑      ↑      ↑
           Three classes on one element

<!-- BOTH id and class -->
<div id="main-nav" class="navigation sticky">
  Navigation Menu
</div>
\`\`\`

CSS Styling:
\`\`\`css
/* Target by ID - use # */
#header {
  background: blue;
  font-size: 24px;
}

/* Target by CLASS - use . */
.card {
  border: 1px solid gray;
  padding: 20px;
}

/* Multiple classes */
.card.featured {
  border-color: gold;
}

.card.large {
  padding: 40px;
}
\`\`\`

JavaScript Selection:
\`\`\`javascript
// Get by ID (returns single element)
const header = document.getElementById('header');
const header = document.querySelector('#header');

// Get by CLASS (returns collection)
const cards = document.getElementsByClassName('card');
const cards = document.querySelectorAll('.card');

// Modern way
const element = document.querySelector('#header');      // First matching element
const elements = document.querySelectorAll('.card');    // All matching elements
\`\`\`

CSS Specificity (importance in styling):
\`\`\`css
/* ID has higher specificity than class */
#header { color: blue; }    /* More specific - WINS */
.header { color: red; }     /* Less specific */

/* Specificity hierarchy */
Inline style         1000   <div style="color: red">
ID                   100    #header
Class                10     .header
Element              1      div
\`\`\`

When to use what:
\`\`\`html
<!-- Use ID for: -->
<form id="loginForm">        <!-- JavaScript targeting -->
<section id="about">         <!-- Anchor links (#about) -->
<canvas id="gameCanvas">     <!-- Unique elements -->

<!-- Use CLASS for: -->
<div class="card">          <!-- Styling multiple elements -->
<button class="btn primary"> <!-- Reusable components -->
<p class="text-center">     <!-- Common utilities -->
\`\`\`

KEY POINTS:
• id: Unique, one per page, higher CSS specificity
• class: Reusable, multiple per page, lower specificity
• Element can have one id but multiple classes
• Use # for id, . for class in CSS/JavaScript
• Prefer classes for styling, ids for JavaScript`,
    topics: ['HTML', 'Attributes', 'CSS', 'JavaScript'],
    estimatedTime: 10,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-forms',
    title: 'Explain HTML forms and important form elements.',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding HTML forms',
    answer: `HTML forms are used to collect user input and send it to a server for processing. They contain various input elements like text fields, checkboxes, radio buttons, and submit buttons.

STANDARD ANSWER:
A form is created using the <form> tag and contains input elements. The action attribute specifies where to send the data, and the method attribute specifies how (GET or POST). Forms are essential for login pages, registration, search, and any user input collection.

INTERVIEW ANSWER:
"HTML forms are the primary way to collect user input on web pages. The <form> element acts as a container for various input controls like text boxes, checkboxes, radio buttons, and dropdowns.

When a form is submitted, the data is sent to the server specified in the action attribute using either GET (data in URL) or POST (data in request body) method. Form validation can be done both on the client-side using HTML5 attributes and on the server-side for security.

I always ensure forms are accessible with proper labels, include validation, and handle errors gracefully."

ANALOGY:
Think of a form like a survey or application:
- Form = The survey sheet
- Input fields = The questions/blanks to fill
- Submit button = Handing in the completed survey
- Action attribute = Where the survey goes (processing office)

EXAMPLE:
\`\`\`html
<!-- Complete Form Structure -->
<form action="/submit" method="POST" id="registrationForm">

  <!-- Text Input -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <!-- Email Input -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <!-- Password Input -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required>

  <!-- Radio Buttons (choose one) -->
  <p>Gender:</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>

  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>

  <!-- Checkboxes (choose multiple) -->
  <p>Interests:</p>
  <input type="checkbox" id="coding" name="interests" value="coding">
  <label for="coding">Coding</label>

  <input type="checkbox" id="music" name="interests" value="music">
  <label for="music">Music</label>

  <!-- Dropdown Select -->
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Select...</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="india">India</option>
  </select>

  <!-- Textarea -->
  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio" rows="4" cols="50"></textarea>

  <!-- File Upload -->
  <label for="photo">Upload Photo:</label>
  <input type="file" id="photo" name="photo" accept="image/*">

  <!-- Submit Button -->
  <button type="submit">Register</button>

  <!-- Reset Button -->
  <button type="reset">Clear Form</button>
</form>
\`\`\`

All Input Types:
\`\`\`html
<input type="text">        <!-- Plain text -->
<input type="password">    <!-- Hidden password -->
<input type="email">       <!-- Email with validation -->
<input type="number">      <!-- Numeric input -->
<input type="tel">         <!-- Phone number -->
<input type="url">         <!-- URL with validation -->
<input type="date">        <!-- Date picker -->
<input type="time">        <!-- Time picker -->
<input type="datetime-local"> <!-- Date and time -->
<input type="color">       <!-- Color picker -->
<input type="range">       <!-- Slider -->
<input type="file">        <!-- File upload -->
<input type="search">      <!-- Search box -->
<input type="checkbox">    <!-- Checkbox -->
<input type="radio">       <!-- Radio button -->
<input type="hidden">      <!-- Hidden field -->
<input type="submit">      <!-- Submit button -->
<input type="reset">       <!-- Reset button -->
\`\`\`

Form Attributes:
\`\`\`html
<form action="/submit"        <!-- Where to send data -->
      method="POST"           <!-- GET or POST -->
      enctype="multipart/form-data"  <!-- For file uploads -->
      target="_blank"         <!-- Open in new tab -->
      autocomplete="on"       <!-- Enable autocomplete -->
      novalidate>            <!-- Disable HTML5 validation -->
</form>
\`\`\`

Input Validation Attributes:
\`\`\`html
<input type="text"
       required              <!-- Must be filled -->
       minlength="3"         <!-- Minimum length -->
       maxlength="20"        <!-- Maximum length -->
       pattern="[A-Za-z]+"   <!-- Regex pattern -->
       placeholder="Enter name"  <!-- Hint text -->
       value="Default"       <!-- Default value -->
       disabled              <!-- Cannot interact -->
       readonly>             <!-- Can see, not edit -->

<input type="number"
       min="1"               <!-- Minimum value -->
       max="100"             <!-- Maximum value -->
       step="5">             <!-- Increment step -->
\`\`\`

GET vs POST Methods:
\`\`\`html
<!-- GET - Data in URL (for searches, filters) -->
<form action="/search" method="GET">
  <input type="text" name="query">
  <button type="submit">Search</button>
</form>
<!-- Results in: /search?query=hello -->

<!-- POST - Data in body (for sensitive info, large data) -->
<form action="/login" method="POST">
  <input type="email" name="email">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
<!-- Data sent securely in request body, not in URL -->
\`\`\`

Form Handling with JavaScript:
\`\`\`javascript
const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop default submission

  // Get form data
  const formData = new FormData(form);
  const username = formData.get('username');
  const email = formData.get('email');

  // Or get all data as object
  const data = Object.fromEntries(formData);
  console.log(data);

  // Send to server
  fetch('/submit', {
    method: 'POST',
    body: formData
  });
});
\`\`\`

KEY POINTS:
• Forms collect and submit user input
• Use POST for sensitive data, GET for searches
• Always include labels for accessibility
• Validate both client-side and server-side
• Use appropriate input types for better UX
• name attribute is required for data submission`,
    topics: ['HTML', 'Forms', 'User Input', 'Validation'],
    estimatedTime: 15,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-links',
    title: 'How do you create links in HTML? Explain different types of links.',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding HTML links and anchor tags',
    answer: `Links in HTML are created using the <a> (anchor) tag with the href attribute. There are different types: external links, internal links, anchor links, email links, and phone links.

STANDARD ANSWER:
The <a> tag creates hyperlinks. The href attribute specifies the destination. The target attribute controls where the link opens. Links can point to other pages, sections on the same page, email addresses, or phone numbers.

INTERVIEW ANSWER:
"Links are created with the <a> tag and href attribute. There are several types:

External links go to other websites, internal links navigate within your site, and anchor links jump to specific sections on the same page using # and element IDs. We also have special links for email (mailto:) and phone (tel:) that open default applications.

The target attribute is important - target='_blank' opens in a new tab, which I always pair with rel='noopener noreferrer' for security. I also ensure all links have descriptive text for accessibility rather than generic 'click here' text."

ANALOGY:
Think of links like:
- External links: Directions to another city
- Internal links: Moving between rooms in your house
- Anchor links: Bookmarks to specific pages in a book
- Email/Phone links: Speed dial buttons

EXAMPLE:
\`\`\`html
<!-- 1. EXTERNAL LINK (to another website) -->
<a href="https://google.com">Visit Google</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  Open GitHub in new tab
</a>

<!-- 2. INTERNAL LINK (within same website) -->
<a href="/about">About Us</a>
<a href="/products/item.html">View Product</a>
<a href="../index.html">Back to Home</a>

<!-- 3. ANCHOR LINK (jump to section on same page) -->
<a href="#section1">Go to Section 1</a>
<a href="#contact">Contact Us</a>

<!-- Target section must have matching id -->
<section id="section1">
  <h2>Section 1</h2>
  <p>Content here...</p>
</section>

<div id="contact">
  <h2>Contact</h2>
</div>

<!-- 4. EMAIL LINK (opens email client) -->
<a href="mailto:hello@example.com">Send Email</a>
<a href="mailto:hello@example.com?subject=Inquiry&body=Hello!">
  Email with subject
</a>

<!-- 5. PHONE LINK (opens phone app on mobile) -->
<a href="tel:+1234567890">Call Us</a>
<a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>

<!-- 6. DOWNLOAD LINK -->
<a href="/files/document.pdf" download>Download PDF</a>
<a href="/files/image.jpg" download="my-image.jpg">Download Image</a>

<!-- 7. LINK WITH IMAGE -->
<a href="/products">
  <img src="product.jpg" alt="Product">
</a>
\`\`\`

Link Attributes:
\`\`\`html
<a href="https://example.com"    <!-- Destination URL -->
   target="_blank"                <!-- Where to open -->
   rel="noopener noreferrer"      <!-- Security for _blank -->
   title="Visit Example"          <!-- Tooltip on hover -->
   download                       <!-- Force download -->
   hreflang="en"                  <!-- Language of target -->
   type="application/pdf">        <!-- MIME type -->
  Link Text
</a>
\`\`\`

Target Attribute Values:
\`\`\`html
<a href="page.html" target="_self">     <!-- Same tab (default) -->
<a href="page.html" target="_blank">    <!-- New tab -->
<a href="page.html" target="_parent">   <!-- Parent frame -->
<a href="page.html" target="_top">      <!-- Full window -->
\`\`\`

Styling Link States with CSS:
\`\`\`css
/* Unvisited link */
a:link {
  color: blue;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Mouse over link */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Active/clicked link */
a:active {
  color: orange;
}

/* Remove underline */
a {
  text-decoration: none;
}
\`\`\`

Accessibility Best Practices:
\`\`\`html
<!-- ❌ BAD - Not descriptive -->
<a href="/about">Click here</a>
<a href="/download">Link</a>

<!-- ✅ GOOD - Descriptive text -->
<a href="/about">Learn about our company</a>
<a href="/report.pdf">Download Q4 Financial Report (PDF, 2MB)</a>

<!-- Button vs Link -->
<a href="/page">Go to page</a>        <!-- Navigation -->
<button onclick="doAction()">Save</button>  <!-- Action -->
\`\`\`

Security for External Links:
\`\`\`html
<!-- ALWAYS add rel="noopener noreferrer" with target="_blank" -->
<a href="https://external-site.com"
   target="_blank"
   rel="noopener noreferrer">
  External Site
</a>

<!-- Why? -->
noopener:     Prevents new page from accessing window.opener
noreferrer:   Doesn't send referrer information
\`\`\`

JavaScript Navigation:
\`\`\`javascript
// Programmatic navigation
window.location.href = '/page';

// Open in new tab
window.open('https://google.com', '_blank');

// Prevent default link action
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Link clicked but not followed');
});
\`\`\`

Smooth Scrolling to Anchors:
\`\`\`html
<a href="#section">Scroll to Section</a>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<div id="section" style="margin-top: 1000px;">
  Section Content
</div>
\`\`\`

KEY POINTS:
• Use <a> tag with href attribute
• target="_blank" opens in new tab (add rel security)
• Anchor links use # with element IDs
• mailto: for email, tel: for phone
• Use descriptive link text for accessibility
• Links are inline elements by default`,
    topics: ['HTML', 'Links', 'Navigation', 'Anchor'],
    estimatedTime: 12,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-images',
    title: 'How to add images in HTML? Explain the img tag and its attributes.',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding images in HTML',
    answer: `Images are added using the <img> tag with the src attribute specifying the image source. The alt attribute provides alternative text for accessibility and SEO.

STANDARD ANSWER:
The <img> tag is a self-closing tag that embeds images in web pages. The src attribute is required and specifies the image path. The alt attribute is crucial for accessibility, providing text description when images can't be displayed.

INTERVIEW ANSWER:
"Images in HTML use the <img> tag, which is self-closing. The src attribute points to the image file - it can be a relative path, absolute path, or external URL.

The alt attribute is mandatory for accessibility and SEO - it describes the image for screen readers and shows if the image fails to load. I always include descriptive alt text.

Width and height attributes can be set, but I prefer CSS for responsive images. For better performance, I use appropriate image formats (WebP for modern browsers, with fallbacks) and implement lazy loading for images below the fold."

ANALOGY:
Think of the img tag like a picture frame:
- src: The actual photo you're putting in the frame
- alt: The label on the back describing the photo
- width/height: The frame dimensions
- title: A small note visible when you look closely

EXAMPLE:
\`\`\`html
<!-- Basic Image -->
<img src="photo.jpg" alt="Beach sunset">

<!-- Image with dimensions -->
<img src="photo.jpg" alt="Beach sunset" width="500" height="300">

<!-- External image -->
<img src="https://example.com/image.jpg" alt="Description">

<!-- Relative paths -->
<img src="images/logo.png" alt="Company logo">
<img src="../photos/team.jpg" alt="Our team">
<img src="/assets/banner.jpg" alt="Banner">

<!-- Image with all attributes -->
<img src="photo.jpg"
     alt="Sunset over ocean beach with palm trees"
     width="800"
     height="600"
     title="Taken in Hawaii 2024"
     loading="lazy">
\`\`\`

Image Attributes:
\`\`\`html
<img src="image.jpg"              <!-- Image source (required) -->
     alt="Description"            <!-- Alternative text (required) -->
     width="500"                  <!-- Width in pixels -->
     height="300"                 <!-- Height in pixels -->
     title="Tooltip text"         <!-- Shows on hover -->
     loading="lazy"               <!-- Lazy load (load when visible) -->
     decoding="async"             <!-- Decode image asynchronously -->
     srcset="..."                 <!-- Responsive images -->
     sizes="..."                  <!-- Image sizes for different screens -->
     crossorigin="anonymous">     <!-- CORS settings -->
\`\`\`

Responsive Images with srcset:
\`\`\`html
<!-- Provide multiple image sizes, browser picks best -->
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 1200w"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1200px"
     alt="Responsive image">

<!--
  Browser automatically selects:
  - small.jpg for narrow screens
  - medium.jpg for medium screens
  - large.jpg for large screens
-->
\`\`\`

Picture Element (Multiple Formats):
\`\`\`html
<picture>
  <!-- Modern browsers: WebP format -->
  <source srcset="image.webp" type="image/webp">

  <!-- Fallback: JPEG -->
  <source srcset="image.jpg" type="image/jpeg">

  <!-- Final fallback -->
  <img src="image.jpg" alt="Description">
</picture>

<!-- Different images for different screen sizes -->
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1200px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Responsive design">
</picture>
\`\`\`

Image as Link:
\`\`\`html
<a href="/products">
  <img src="product.jpg" alt="View our products">
</a>
\`\`\`

Figure with Caption:
\`\`\`html
<figure>
  <img src="chart.jpg" alt="Sales growth chart">
  <figcaption>Q4 Sales Performance - 45% increase</figcaption>
</figure>
\`\`\`

Lazy Loading:
\`\`\`html
<!-- Load image only when it enters viewport -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Eager loading (default - loads immediately) -->
<img src="logo.jpg" alt="Logo" loading="eager">
\`\`\`

CSS Styling:
\`\`\`css
/* Make image responsive */
img {
  max-width: 100%;
  height: auto;
}

/* Circular image -->
img {
  border-radius: 50%;
}

/* Image with border and shadow */
img {
  border: 2px solid #ddd;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 5px;
}

/* Object-fit for cropping */
img {
  width: 300px;
  height: 300px;
  object-fit: cover;      /* Crop to fill */
  object-fit: contain;    /* Fit inside without cropping */
  object-position: center top;
}
\`\`\`

Best Practices:
\`\`\`html
<!-- ✅ GOOD -->
<img src="team.jpg"
     alt="Marketing team at 2024 conference"
     width="800"
     height="600"
     loading="lazy">

<!-- ❌ BAD -->
<img src="team.jpg">  <!-- Missing alt -->
<img src="team.jpg" alt="">  <!-- Empty alt for meaningful image -->
<img src="team.jpg" alt="image">  <!-- Non-descriptive alt -->

<!-- Empty alt is OK for decorative images -->
<img src="decoration.png" alt="" role="presentation">
\`\`\`

Image Formats:
\`\`\`
JPEG (.jpg):    Photos, many colors, small size
PNG (.png):     Transparency, logos, sharp graphics
WebP (.webp):   Modern format, smaller than JPEG/PNG
SVG (.svg):     Vector graphics, logos, icons (scalable)
GIF (.gif):     Animations, limited colors
\`\`\`

Error Handling:
\`\`\`html
<img src="image.jpg"
     alt="Beach sunset"
     onerror="this.src='fallback.jpg'">

<script>
const img = document.querySelector('img');
img.addEventListener('error', () => {
  console.log('Image failed to load');
  img.src = 'placeholder.jpg';
});
</script>
\`\`\`

KEY POINTS:
• Use <img> tag with src and alt attributes
• alt text is required for accessibility
• loading="lazy" for better performance
• Use srcset for responsive images
• Optimize images before uploading
• Consider WebP format with fallbacks`,
    topics: ['HTML', 'Images', 'Media', 'Accessibility'],
    estimatedTime: 12,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'html-lists',
    title: 'What are the different types of lists in HTML?',
    difficulty: 'Easy' as any,
    category: 'HTML',
    description: 'Understanding HTML list types',
    answer: `HTML has three types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>). Each serves different purposes for organizing content.

STANDARD ANSWER:
Ordered lists display numbered items, unordered lists show bulleted items, and description lists show term-definition pairs. Lists can be nested and styled with CSS.

INTERVIEW ANSWER:
"HTML provides three list types:

1. Ordered lists (<ol>) display items with numbers or letters - great for steps, rankings, or instructions where order matters.

2. Unordered lists (<ul>) show items with bullets - perfect for features, options, or items where order doesn't matter.

3. Description lists (<dl>) pair terms with definitions - useful for glossaries, FAQs, or metadata.

Lists can be nested, styled with CSS, and are important for semantic HTML and accessibility. Screen readers announce them as lists, helping users navigate content structure."

ANALOGY:
Think of lists like:
- Ordered list: Recipe steps (1. Mix flour, 2. Add eggs, 3. Bake)
- Unordered list: Shopping list (milk, eggs, bread - any order)
- Description list: Dictionary entries (term + definition)

EXAMPLE:
\`\`\`html
<!-- 1. ORDERED LIST (numbered) -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

Result:
1. First item
2. Second item
3. Third item


<!-- 2. UNORDERED LIST (bullets) -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

Result:
• Apple
• Banana
• Orange


<!-- 3. DESCRIPTION LIST (term + definition) -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>

  <dt>JavaScript</dt>
  <dd>Programming language for web interactivity</dd>
</dl>

Result:
HTML
  HyperText Markup Language
CSS
  Cascading Style Sheets
JavaScript
  Programming language for web interactivity
\`\`\`

Ordered List Attributes:
\`\`\`html
<!-- Start from different number -->
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>

<!-- Different number types -->
<ol type="1">  <!-- 1, 2, 3 (default) -->
<ol type="A">  <!-- A, B, C -->
<ol type="a">  <!-- a, b, c -->
<ol type="I">  <!-- I, II, III (Roman) -->
<ol type="i">  <!-- i, ii, iii -->

<!-- Reverse order -->
<ol reversed>
  <li>Third</li>
  <li>Second</li>
  <li>First</li>
</ol>
Result: 3. Third, 2. Second, 1. First

<!-- Specific item value -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li value="10">Item 10</li>
  <li>Item 11</li>
</ol>
\`\`\`

Nested Lists:
\`\`\`html
<!-- Nested list structure -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </li>
</ul>

Result:
• Frontend
  • HTML
  • CSS
  • JavaScript
• Backend
  • Node.js
  • Python
  • Java


<!-- Mixed list types -->
<ol>
  <li>Prepare ingredients
    <ul>
      <li>2 eggs</li>
      <li>1 cup flour</li>
    </ul>
  </li>
  <li>Mix ingredients</li>
  <li>Bake at 350°F</li>
</ol>
\`\`\`

Styling Lists with CSS:
\`\`\`css
/* Change bullet style */
ul {
  list-style-type: disc;      /* • (default) */
  list-style-type: circle;    /* ○ */
  list-style-type: square;    /* ▪ */
  list-style-type: none;      /* No bullets */
}

/* Change number style */
ol {
  list-style-type: decimal;         /* 1, 2, 3 (default) */
  list-style-type: upper-alpha;     /* A, B, C */
  list-style-type: lower-alpha;     /* a, b, c */
  list-style-type: upper-roman;     /* I, II, III */
  list-style-type: lower-roman;     /* i, ii, iii */
}

/* Custom bullet image */
ul {
  list-style-image: url('arrow.png');
}

/* Position bullets */
ul {
  list-style-position: inside;   /* Bullets inside li */
  list-style-position: outside;  /* Bullets outside li (default) */
}

/* Remove default styling */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Style list items */
li {
  padding: 10px;
  margin-bottom: 5px;
  background: #f0f0f0;
  border-left: 3px solid blue;
}
\`\`\`

Practical Examples:
\`\`\`html
<!-- Navigation Menu -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Recipe Instructions -->
<h2>Chocolate Cake Recipe</h2>
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix dry ingredients</li>
  <li>Add wet ingredients</li>
  <li>Pour into pan</li>
  <li>Bake for 30 minutes</li>
</ol>

<!-- Features List -->
<h3>Product Features</h3>
<ul>
  <li>Fast performance</li>
  <li>Easy to use</li>
  <li>24/7 support</li>
  <li>Free updates</li>
</ul>

<!-- FAQ with Description List -->
<h2>FAQ</h2>
<dl>
  <dt>What is your return policy?</dt>
  <dd>We offer 30-day returns with full refund.</dd>

  <dt>Do you ship internationally?</dt>
  <dd>Yes, we ship to over 100 countries.</dd>

  <dt>How can I track my order?</dt>
  <dd>Use the tracking number sent to your email.</dd>
</dl>
\`\`\`

Accessibility:
\`\`\`html
<!-- Good practice: Use semantic lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Screen readers announce:
     "List, 2 items"
     "Item 1"
     "Item 2"
-->
\`\`\`

KEY POINTS:
• Three types: <ol>, <ul>, <dl>
• Use <li> for list items in ol and ul
• Lists can be nested for hierarchical content
• Remove list-style: none for custom styling
• Lists improve accessibility and semantics
• Use appropriate list type for content structure`,
    topics: ['HTML', 'Lists', 'Structure', 'Semantics'],
    estimatedTime: 10,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];
