import { Problem } from '../../types';

export const css3Problems: Problem[] = [
  {
    id: 'css3-1',
    title: 'What is CSS and how does it work with HTML?',
    difficulty: 'Easy' as any,
    category: 'CSS3',
    description: 'Understanding CSS fundamentals and its role in web development',
    answer: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and styling of HTML documents. It controls how HTML elements are displayed on screen, paper, or other media.

STANDARD ANSWER:
CSS is a stylesheet language that separates content from presentation in web development. It allows developers to control colors, fonts, spacing, layouts, and responsive design across multiple pages from a single stylesheet. CSS works by selecting HTML elements and applying style rules to them through selectors and declarations.

INTERVIEW ANSWER:
"CSS is the styling layer of web development that works hand-in-hand with HTML. While HTML provides the structure and content, CSS handles all the visual presentation. I use CSS to create responsive layouts, implement design systems, and ensure consistent branding across applications. The cascading nature means styles can be inherited and overridden, which is powerful for maintaining large codebases. In my projects, I typically use CSS preprocessors like SASS or modern approaches like CSS-in-JS or Tailwind CSS for better maintainability and developer experience."

ANALOGY:
Think of building a house: HTML is the structure (walls, rooms, doors), while CSS is the interior design (paint colors, furniture placement, decorations). Just as you can change the entire look of a house without rebuilding the structure, CSS lets you redesign a website without changing the HTML content.

EXAMPLE:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 20px;
    }

    .card {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: #333;
      border-bottom: 2px solid #007bff;
      padding-bottom: 10px;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to CSS</h1>
    <p>This demonstrates how CSS styles HTML content.</p>
  </div>
</body>
</html>
\`\`\`

KEY POINTS:
• CSS separates presentation from content for better maintainability
• Styles cascade from parent to child elements
• Multiple CSS files can be linked to a single HTML document
• CSS can be written inline, internal (in style tags), or external (separate .css files)
• Modern CSS includes powerful features like Grid, Flexbox, animations, and variables
• CSS specificity determines which styles apply when rules conflict
• Responsive design uses media queries to adapt layouts to different screen sizes`,
    topics: ['CSS3', 'Fundamentals', 'Web Development'],
    estimatedTime: 15,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'css3-2',
    title: 'Explain the CSS Box Model',
    difficulty: 'Easy' as any,
    category: 'CSS3',
    description: 'Understanding how elements are sized and spaced in CSS',
    answer: `The CSS Box Model is a fundamental concept that describes how every HTML element is rendered as a rectangular box with content, padding, border, and margin.

STANDARD ANSWER:
The CSS Box Model consists of four layers: content (the actual content like text or images), padding (space between content and border), border (surrounds the padding), and margin (space outside the border separating elements). The total width/height of an element is calculated by adding these layers together, though the box-sizing property can change this behavior.

INTERVIEW ANSWER:
"The Box Model is crucial for understanding layout in CSS. Every element is a box with four areas: content, padding, border, and margin. By default, when you set width and height, you're only setting the content area, and padding and border add to the total size. This can be counterintuitive, so I typically use box-sizing: border-box, which includes padding and border in the width/height calculation. This makes responsive design much more predictable. Understanding the Box Model helps me debug spacing issues and create pixel-perfect layouts efficiently."

ANALOGY:
Imagine a picture frame: the photograph is the content, the matting around it is the padding, the frame itself is the border, and the space between frames on a wall is the margin. Just as you need to account for all these layers when hanging pictures, you need to consider all Box Model components when positioning elements.

EXAMPLE:
\`\`\`css
/* Default box model */
.box-default {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  background-color: #e0e0e0;
}
/* Total width = 200 + 20 + 20 + 5 + 5 = 250px */
/* Total height = 100 + 20 + 20 + 5 + 5 = 150px */

/* Border-box model (recommended) */
.box-border-box {
  box-sizing: border-box;
  width: 200px;  /* Total width including padding and border */
  height: 100px; /* Total height including padding and border */
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  background-color: #e0e0e0;
}

/* Apply to all elements (common reset) */
* {
  box-sizing: border-box;
}

/* Visualizing the box model */
.debug-box {
  width: 300px;
  padding: 20px;
  border: 10px solid red;
  margin: 30px;
  background-color: lightblue;
  background-clip: content-box; /* Shows only content area */
}
\`\`\`

KEY POINTS:
• Content area contains the actual content (text, images, etc.)
• Padding creates space inside the element, around the content
• Border wraps around the padding and content
• Margin creates space outside the element, between elements
• box-sizing: border-box makes width/height include padding and border
• Margins can collapse vertically between adjacent elements
• Padding and border affect the background color/image area
• DevTools inspector shows the Box Model visually for debugging`,
    topics: ['CSS3', 'Box Model', 'Layout'],
    estimatedTime: 20,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'css3-3',
    title: 'What is Flexbox and when would you use it?',
    difficulty: 'Easy' as any,
    category: 'CSS3',
    description: 'Master CSS Flexbox for one-dimensional layouts',
    answer: `Flexbox (Flexible Box Layout) is a CSS layout model designed for one-dimensional layouts, allowing elements to flexibly adjust their size and position to fill available space.

STANDARD ANSWER:
Flexbox is a layout module that provides an efficient way to arrange, align, and distribute space among items in a container, even when their size is unknown or dynamic. It works along a single axis (row or column) and is ideal for component-level layouts, navigation bars, card layouts, and centering elements. The parent container becomes a flex container, and child elements become flex items with special properties.

INTERVIEW ANSWER:
"I use Flexbox constantly for component layouts because it solves alignment problems that were difficult with older CSS methods. It's perfect for navigation bars, form layouts, card components, and any situation where I need flexible spacing or alignment along one axis. The main advantages are easy vertical centering, automatic space distribution, and responsive behavior without media queries. I typically use flex-direction for layout orientation, justify-content for main axis alignment, align-items for cross axis alignment, and gap for spacing. When I need two-dimensional layouts, I switch to CSS Grid instead."

ANALOGY:
Think of Flexbox like arranging books on a shelf. You can choose whether books stand in a row or stack vertically, how they're spaced (evenly distributed, packed to one side, or centered), and whether they align at the top, bottom, or middle of the shelf. The shelf automatically adjusts when you add or remove books.

EXAMPLE:
\`\`\`css
/* Basic flex container */
.flex-container {
  display: flex;
  gap: 20px; /* Modern way to add spacing */
}

/* Navigation bar layout */
.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, menu right */
  align-items: center; /* Vertically center items */
  padding: 1rem 2rem;
  background-color: #333;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Card layout with flexible items */
.card-container {
  display: flex;
  flex-wrap: wrap; /* Wrap to next line if needed */
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, base 300px */
  min-width: 0; /* Allow shrinking below content size */
  padding: 1.5rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Perfect centering */
.center-box {
  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center; /* Vertical center */
  min-height: 100vh;
}

/* Column layout with stretching */
.sidebar-layout {
  display: flex;
  gap: 2rem;
}

.sidebar {
  flex: 0 0 250px; /* Don't grow/shrink, fixed 250px */
}

.main-content {
  flex: 1; /* Take remaining space */
}

/* Responsive order control */
.mobile-first {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .mobile-first {
    flex-direction: row;
  }

  .order-1 { order: 1; }
  .order-2 { order: 2; }
}
\`\`\`

KEY POINTS:
• Flexbox works on a single axis (main axis and cross axis)
• display: flex on parent creates flex container
• justify-content controls alignment along main axis
• align-items controls alignment along cross axis
• flex-direction changes main axis (row, column, row-reverse, column-reverse)
• flex property is shorthand for flex-grow, flex-shrink, flex-basis
• gap property adds spacing between flex items (modern browsers)
• flex-wrap allows items to wrap to multiple lines
• order property can change visual order without changing HTML
• Great for: navbars, buttons, forms, cards, toolbars, centering`,
    topics: ['CSS3', 'Flexbox', 'Layout', 'Responsive Design'],
    estimatedTime: 25,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'css3-4',
    title: 'Explain CSS Grid and its use cases',
    difficulty: 'Medium' as any,
    category: 'CSS3',
    description: 'Understanding CSS Grid for complex two-dimensional layouts',
    answer: `CSS Grid is a powerful two-dimensional layout system that allows you to create complex layouts with rows and columns, providing precise control over both axes simultaneously.

STANDARD ANSWER:
CSS Grid Layout is a layout system optimized for two-dimensional layouts, where you need to control both rows and columns. Unlike Flexbox which is one-dimensional, Grid allows you to define a template of rows and columns and place items anywhere in that grid. It's ideal for page layouts, image galleries, dashboard layouts, and any design that requires precise positioning in both dimensions.

INTERVIEW ANSWER:
"I use CSS Grid for page-level layouts and complex component structures where I need control over both rows and columns. Grid is incredibly powerful for creating responsive layouts without extensive media queries. I typically define grid templates using fractional units (fr) which automatically distribute available space. Grid also makes it easy to create overlapping layouts, asymmetric designs, and maintain consistent spacing. For example, I've used Grid to build dashboard layouts where different widgets span different numbers of rows and columns, and magazine-style layouts with complex text wrapping around images. When I need simpler one-dimensional layouts, I use Flexbox instead."

ANALOGY:
Think of CSS Grid like a chess board or spreadsheet. You define rows and columns, creating cells, and then you can place pieces (elements) into specific cells or have them span multiple cells. You can precisely control where each piece goes and how much space it occupies, both horizontally and vertically.

EXAMPLE:
\`\`\`css
/* Basic grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto;
  gap: 20px; /* Space between items */
  padding: 20px;
}

/* Page layout with named areas */
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive dashboard */
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Featured card spanning multiple columns */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.card-featured {
  grid-column: 1 / 3; /* Span columns 1-2 */
  grid-row: 1 / 3; /* Span rows 1-2 */
}

/* Magazine-style layout */
.magazine {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12-column grid */
  gap: 1rem;
}

.article-title {
  grid-column: 1 / -1; /* Full width */
}

.article-content {
  grid-column: 1 / 9; /* 8 columns */
}

.article-sidebar {
  grid-column: 9 / -1; /* Last 4 columns */
}

/* Image gallery with varying sizes */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 10px;
}

.gallery-item-large {
  grid-column: span 2;
  grid-row: span 2;
}

/* Alignment within grid cells */
.centered-grid {
  display: grid;
  place-items: center; /* Center both axes */
}

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: single column */
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
\`\`\`

KEY POINTS:
• Grid is two-dimensional (controls both rows and columns simultaneously)
• grid-template-columns and grid-template-rows define the grid structure
• fr unit distributes available space proportionally
• grid-template-areas provides intuitive named layout regions
• repeat() function simplifies repetitive column/row definitions
• auto-fit and auto-fill create responsive grids without media queries
• Items can span multiple rows/columns with grid-column and grid-row
• gap property adds spacing between grid items
• minmax() creates flexible sizing with constraints
• Great for: page layouts, dashboards, image galleries, card grids, magazine layouts
• Can overlap items by placing multiple items in same cells
• place-items is shorthand for align-items and justify-items`,
    topics: ['CSS3', 'Grid', 'Layout', 'Responsive Design'],
    estimatedTime: 30,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  },
  {
    id: 'css3-5',
    title: 'What is CSS specificity and how does it work?',
    difficulty: 'Medium' as any,
    category: 'CSS3',
    description: 'Understanding how CSS determines which styles to apply',
    answer: `CSS specificity is a set of rules that determines which CSS declaration applies when multiple rules target the same element. It's the mechanism browsers use to resolve conflicts between competing styles.

STANDARD ANSWER:
CSS specificity is calculated based on the types of selectors used. Each selector type has a weight: inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), and elements/pseudo-elements (1). When multiple rules target the same element, the rule with the highest specificity wins. If specificity is equal, the last rule defined takes precedence. The !important flag overrides normal specificity but should be used sparingly.

INTERVIEW ANSWER:
"Understanding specificity is crucial for maintaining CSS codebases and debugging style conflicts. I follow the principle of using the lowest specificity needed to accomplish styling goals, which makes styles easier to override when necessary. I avoid using IDs for styling and minimize !important usage. When debugging style issues, I use browser DevTools to see which rules are being applied and overridden. In component-based frameworks like React, CSS Modules or CSS-in-JS help avoid specificity issues by scoping styles locally. I also use methodologies like BEM to create flat specificity hierarchies that are predictable and maintainable."

ANALOGY:
Think of specificity like a ranking system in a competition. An inline style is like a champion (highest rank), an ID is like a gold medalist, a class is like a silver medalist, and an element selector is like a bronze medalist. When there's a competition (multiple styles for the same property), the highest-ranked rule wins. If two competitors have the same rank, the one who arrived last (later in the code) wins.

EXAMPLE:
\`\`\`css
/* Specificity: 0,0,0,1 (1 element) */
p {
  color: black;
}

/* Specificity: 0,0,1,0 (1 class) */
.text {
  color: blue;
}

/* Specificity: 0,0,1,1 (1 class + 1 element) */
p.text {
  color: green;
}

/* Specificity: 0,1,0,0 (1 ID) */
#content {
  color: red;
}

/* Specificity: 0,1,1,1 (1 ID + 1 class + 1 element) */
#content p.text {
  color: purple;
}

/* Inline style: Specificity 1,0,0,0 */
/* <p style="color: orange;">Highest specificity</p> */

/* !important overrides everything (use carefully!) */
.important-text {
  color: yellow !important;
}

/* Practical examples */

/* Low specificity (good for defaults) */
button {
  padding: 10px 20px;
  background: gray;
  border: none;
  border-radius: 4px;
}

/* Medium specificity (for variations) */
.btn-primary {
  background: blue;
  color: white;
}

.btn-secondary {
  background: transparent;
  border: 2px solid gray;
}

/* Higher specificity (for specific contexts) */
.modal .btn-primary {
  background: darkblue;
  padding: 12px 24px;
}

/* Avoiding specificity wars */
/* Bad - too specific */
div#content .sidebar ul li a.active {
  color: red;
}

/* Good - just enough specificity */
.sidebar-link.active {
  color: red;
}

/* Using :where() to reduce specificity (modern CSS) */
:where(.card) p {
  /* Specificity: 0,0,0,1 (just the p) */
  margin: 1rem 0;
}

/* Specificity debugging */
.debug {
  /* These won't apply if something more specific exists */
  border: 1px solid red !important; /* Last resort debugging */
}

/* BEM methodology for predictable specificity */
.card { } /* Block: 0,0,1,0 */
.card__title { } /* Element: 0,0,1,0 */
.card--featured { } /* Modifier: 0,0,1,0 */
.card__title--large { } /* Element + Modifier: 0,0,1,0 */
\`\`\`

KEY POINTS:
• Specificity calculation: (inline, IDs, classes/attributes/pseudo-classes, elements)
• Inline styles: 1,0,0,0 (highest normal specificity)
• ID selectors: 0,1,0,0
• Class, attribute, pseudo-class selectors: 0,0,1,0
• Element and pseudo-element selectors: 0,0,0,1
• !important overrides specificity but creates maintenance issues
• Later rules override earlier rules when specificity is equal
• Universal selector (*) and combinators (+, >, ~) have no specificity
• :not() doesn't add specificity, but its contents do
• :where() has zero specificity (useful for low-priority defaults)
• Best practice: use classes for styling, avoid IDs
• Keep specificity flat and predictable
• Use methodologies like BEM to manage specificity
• Browser DevTools show computed styles and specificity conflicts`,
    topics: ['CSS3', 'Specificity', 'Selectors', 'Best Practices'],
    estimatedTime: 25,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];

