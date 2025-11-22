import { Problem } from '../../types';

export const html5Problems: Problem[] = [
  {
    id: 'html-basics-1',
    title: 'What is HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Fundamental understanding of HTML',
    answer: `
      <h3>The Blueprint of the Web</h3>
      <p><strong>HTML (HyperText Markup Language)</strong> is the standard language for creating the structure of web pages. It defines the layout, while CSS adds style and JavaScript adds logic.</p>

      <h4>Visual Analogy: The Human Body</h4>
      <ul>
        <li>💀 <strong>HTML:</strong> The Skeleton (Structure)</li>
        <li>🎨 <strong>CSS:</strong> The Skin (Appearance)</li>
        <li>🧠 <strong>JavaScript:</strong> The Brain (Functionality)</li>
      </ul>

      <h4>Basic Structure</h4>
      <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;Content goes here.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
    `,
    topics: ['HTML', 'Basics'],
    estimatedTime: 3
  },
  {
    id: 'html-basics-2',
    title: 'Element vs Tag?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML terminology',
    answer: `
      <h3>The Technical Difference</h3>
      <p>Interviewers ask this to test your precision.</p>
      
      <ul>
        <li><strong>Tag:</strong> The syntax brackets (e.g., <code>&lt;p&gt;</code>).</li>
        <li><strong>Element:</strong> The whole package (Start tag + Content + End tag).</li>
      </ul>

      <h4>Visual Breakdown</h4>
      <pre style="font-family: monospace; white-space: pre;">
   Opening Tag       Content        Closing Tag
      ⬇️                ⬇️               ⬇️
    &lt;h1&gt;         Hello World         &lt;/h1&gt;
    ╰───────────────┬───────────────╯
                    ⬇️
              HTML Element
      </pre>

      <p><strong>Note:</strong> "Void Elements" like <code>&lt;img /&gt;</code> or <code>&lt;input /&gt;</code> have no closing tag.</p>
    `,
    topics: ['HTML', 'Terminology'],
    estimatedTime: 2
  },
  {
    id: 'html-doctype',
    title: 'What is DOCTYPE?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'DOCTYPE declaration',
    answer: `
      <h3>The Document ID Card</h3>
      <p>The <code>&lt;!DOCTYPE&gt;</code> declaration tells the browser which version of HTML the page uses. It must be the <strong>very first line</strong> of code.</p>

      <h4>Why is it required?</h4>
      <p>It controls the browser's rendering mode:</p>
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
        <tr>
          <th style="padding: 8px;">Mode</th>
          <th style="padding: 8px;">Effect</th>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Standards Mode</strong></td>
          <td style="padding: 8px;">Browser renders strictly according to modern HTML5 specs (Correct).</td>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Quirks Mode</strong></td>
          <td style="padding: 8px;">Browser mimics old bugs to support ancient websites (Avoid this).</td>
        </tr>
      </table>
    `,
    topics: ['HTML', 'DOCTYPE'],
    estimatedTime: 2
  },
  {
    id: 'html-semantic',
    title: 'What are Semantic Tags?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Semantic HTML',
    answer: `
      <h3>Meaning Over Appearance</h3>
      <p><strong>Semantic HTML</strong> uses tags that describe the <em>meaning</em> of the content, not just how it looks.</p>
      
      <ul>
        <li>❌ <strong>Non-Semantic:</strong> <code>&lt;div&gt;</code> (Generic container)</li>
        <li>✅ <strong>Semantic:</strong> <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> (Specific meaning)</li>
      </ul>

      <h4>Visual Layout Structure</h4>
      <pre style="font-family: monospace; white-space: pre; background: #f4f4f4; padding: 10px;">
 _____________________________
|           &lt;header&gt;          |
|_____________________________|
|       |                     |
| &lt;nav&gt; |      &lt;main&gt;         |
|       |                     |
|_______|_____________________|
|           &lt;footer&gt;          |
|_____________________________|
      </pre>

      <h4>Benefits</h4>
      <ol>
        <li><strong>SEO:</strong> Search engines understand your page better.</li>
        <li><strong>Accessibility:</strong> Screen readers can navigate easily.</li>
      </ol>
    `,
    topics: ['HTML', 'Semantic', 'SEO', 'Accessibility'],
    estimatedTime: 5
  },
  {
    id: 'html-inline-block',
    title: 'Inline vs Block Elements?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'Element display types',
    answer: `
      <h3>Display Behaviors</h3>
      <p>Every HTML element has a default display type. The two most common are:</p>

      <h4>1. Block-Level Elements</h4>
      <p>Always start on a new line and take up the full width (100%).</p>
      <ul>
        <li>Examples: <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code></li>
      </ul>
      <div style="border: 1px solid #333; padding: 5px; margin-bottom: 5px;">Block Element 1</div>
      <div style="border: 1px solid #333; padding: 5px;">Block Element 2</div>

      <h4>2. Inline Elements</h4>
      <p>Do not start on a new line and only take as much width as necessary.</p>
      <ul>
        <li>Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code></li>
      </ul>
      <div style="border: 1px dashed #ccc; padding: 10px;">
        <span style="border: 1px solid #333; padding: 2px;">Inline 1</span>
        <span style="border: 1px solid #333; padding: 2px;">Inline 2</span>
      </div>
    `,
    topics: ['HTML', 'CSS', 'Layout'],
    estimatedTime: 4
  },
  {
    id: 'html-attributes',
    title: 'What are HTML Attributes?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML attributes',
    answer: `
      <h3>Configuring Elements</h3>
      <p>Attributes provide extra information about elements. They always go in the <strong>Opening Tag</strong>.</p>

      <h4>Syntax</h4>
      <pre style="background: #eee; padding: 5px;">&lt;tagname name="value"&gt;Content&lt;/tagname&gt;</pre>

      <h4>Common Types</h4>
      <ul>
        <li><strong>Global Attributes:</strong> Used on any tag (e.g., <code>class</code>, <code>id</code>, <code>style</code>, <code>title</code>).</li>
        <li><strong>Boolean Attributes:</strong> True if present, false if missing (e.g., <code>checked</code>, <code>disabled</code>, <code>required</code>).</li>
        <li><strong>Data Attributes:</strong> specific to your application (e.g., <code>data-user-id="123"</code>).</li>
      </ul>
    `,
    topics: ['HTML', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-id-class',
    title: 'ID vs Class?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'id vs class attributes',
    answer: `
      <h3>ID (#) vs Class (.)</h3>
      
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <tr>
          <th style="padding: 5px;">Feature</th>
          <th style="padding: 5px;">ID</th>
          <th style="padding: 5px;">Class</th>
        </tr>
        <tr>
          <td style="padding: 5px;"><strong>Uniqueness</strong></td>
          <td style="padding: 5px;">Unique (1 per page)</td>
          <td style="padding: 5px;">Reusable (Many per page)</td>
        </tr>
        <tr>
          <td style="padding: 5px;"><strong>Usage</strong></td>
          <td style="padding: 5px;">JavaScript Hooks, Anchor Links</td>
          <td style="padding: 5px;">Styling (CSS)</td>
        </tr>
      </table>

      <h4>Visual Metaphor</h4>
      <ul>
        <li><strong>ID</strong> is like a <strong>Student ID</strong>: Only one student has it.</li>
        <li><strong>Class</strong> is like a <strong>Uniform</strong>: Many students can wear the same uniform.</li>
      </ul>
    `,
    topics: ['HTML', 'CSS', 'Attributes'],
    estimatedTime: 4
  },
  {
    id: 'html-forms',
    title: 'Explain HTML Forms',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML forms',
    answer: `
      <h3>Collecting User Data</h3>
      <p>The <code>&lt;form&gt;</code> element collects user input and sends it to a server.</p>

      <h4>GET vs POST</h4>
      <ul>
        <li><strong>GET:</strong> Appends data to the URL. Use for Search/Filtering. <br><em>(Example: google.com/search?q=cats)</em></li>
        <li><strong>POST:</strong> Sends data in the body. Use for Passwords/Sensitive data. <br><em>(Secure and invisible in URL)</em></li>
      </ul>

      <h4>Key Input Types</h4>
      <pre style="background: #eee; padding: 5px;">
&lt;input type="text"&gt;      (Standard text)
&lt;input type="password"&gt;  (Hidden chars)
&lt;input type="radio"&gt;     (Select one)
&lt;input type="checkbox"&gt;  (Select multiple)
      </pre>
    `,
    topics: ['HTML', 'Forms', 'Validation'],
    estimatedTime: 6
  },
  {
    id: 'html-links',
    title: 'Types of Links in HTML?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML links',
    answer: `
      <h3>The Anchor Tag</h3>
      <p>Links are created using the <code>&lt;a&gt;</code> tag.</p>

      <h4>1. External Link (New Tab)</h4>
      <p>Always use <code>rel="noopener noreferrer"</code> for security when opening new tabs.</p>
      <pre>&lt;a href="https://google.com" target="_blank" rel="noopener noreferrer"&gt;Google&lt;/a&gt;</pre>

      <h4>2. Internal Link</h4>
      <pre>&lt;a href="/contact"&gt;Contact Us&lt;/a&gt;</pre>

      <h4>3. Jump Link (Anchor)</h4>
      <pre>&lt;a href="#footer"&gt;Jump to Bottom&lt;/a&gt;</pre>

      <h4>4. Special Protocols</h4>
      <ul>
        <li><strong>Email:</strong> <code>mailto:user@example.com</code></li>
        <li><strong>Phone:</strong> <code>tel:+1234567890</code></li>
      </ul>
    `,
    topics: ['HTML', 'Links', 'Navigation'],
    estimatedTime: 4
  },
  {
    id: 'html-images',
    title: 'How to Add Images?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML images',
    answer: `
      <h3>The Image Tag</h3>
      <p>The <code>&lt;img&gt;</code> tag is used to embed images.</p>

      <h4>Key Attributes</h4>
      <ul>
        <li><strong>src:</strong> The path to the image.</li>
        <li><strong>alt:</strong> Alternate text. <strong>Required</strong> for accessibility (screen readers) and SEO.</li>
        <li><strong>loading="lazy":</strong> Defers loading until the user scrolls near the image (Performance booster).</li>
      </ul>

      <h4>Example</h4>
      <pre style="background: #eee; padding: 5px;">&lt;img src="cat.jpg" alt="A cute cat" width="300" height="200" /&gt;</pre>
    `,
    topics: ['HTML', 'Images', 'Performance'],
    estimatedTime: 5
  },
  {
    id: 'html-lists',
    title: 'Types of Lists?',
    difficulty: 'Easy',
    category: 'HTML',
    description: 'HTML lists',
    answer: `
      <h3>Organizing Content</h3>

      <h4>1. Unordered List (&lt;ul&gt;)</h4>
      <p>Bullet points. Used when order doesn't matter.</p>
      <pre>
&lt;ul&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
&lt;/ul&gt;</pre>

      <h4>2. Ordered List (&lt;ol&gt;)</h4>
      <p>Numbered (1, 2, 3). Used for steps or rankings.</p>
      <pre>
&lt;ol&gt;
  &lt;li&gt;Step One&lt;/li&gt;
  &lt;li&gt;Step Two&lt;/li&gt;
&lt;/ol&gt;</pre>

      <h4>3. Description List (&lt;dl&gt;)</h4>
      <p>Terms and Definitions.</p>
      <pre>
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Standard Markup Language&lt;/dd&gt;
&lt;/dl&gt;</pre>
    `,
    topics: ['HTML', 'Lists'],
    estimatedTime: 4
  }
];