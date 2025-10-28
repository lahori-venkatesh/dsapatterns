# Development Interview Preparation - Modular Structure

This directory contains a modular, maintainable structure for the Full Stack Web Development interview preparation content.

## Directory Structure

```
src/data/development/
├── README.md                    # This file
├── index.ts                     # Main export file (aggregates all problems)
├── html5.ts                     # HTML5 problems
├── css3.ts                      # CSS3 problems
├── javascript.ts                # JavaScript problems
├── typescript.ts                # TypeScript problems
├── react.ts                     # React.js problems
├── nodejs.ts                    # Node.js problems
├── database.ts                  # Database problems
├── security.ts                  # Security problems
├── systemDesign.ts              # System Design problems
├── nextjs.ts                    # Next.js problems
├── stateManagement.ts           # State Management problems
├── tailwind.ts                  # Tailwind CSS problems
├── api.ts                       # API problems
├── testing.ts                   # Testing problems
├── devops.ts                    # DevOps problems
├── performance.ts               # Performance problems
├── expressjs.ts                 # Express.js problems
├── springBoot.ts                # Spring Boot problems
├── python.ts                    # Python (Flask/FastAPI) problems
├── vite.ts                      # Vite problems
├── webpack.ts                   # Webpack problems
├── websockets.ts                # WebSockets & Socket.io problems
├── networking.ts                # Networking & CDN problems
├── dbms.ts                      # DBMS problems
├── os.ts                        # Operating System problems
└── computerNetworks.ts          # Computer Networks problems
```

## Benefits of This Structure

### 1. **Maintainability**
- Each topic is in its own file (manageable size: 200-500 lines)
- Easy to find and edit specific content
- No more scrolling through 10,000+ lines

### 2. **Scalability**
- Add new topics by creating a new file
- No need to modify the monolithic file
- Clear separation of concerns

### 3. **Team Collaboration**
- Multiple developers can work on different topics simultaneously
- Reduced merge conflicts
- Clear ownership per topic

### 4. **Performance**
- Better IDE performance (smaller files load faster)
- Faster syntax checking and linting
- Improved Git diff readability

## How to Add a New Topic

### Step 1: Create a New File
Create a new file in `src/data/development/` following the naming convention:

```typescript
// src/data/development/myNewTopic.ts
import { Problem } from '../../types';

export const myNewTopicProblems: Problem[] = [
  {
    id: 'unique-problem-id',
    title: 'Problem Title',
    difficulty: 'Easy' as any, // or 'Medium', 'Hard'
    category: 'My New Topic',
    description: 'Brief description of the problem',
    answer: `# Problem Title

## Section 1
Content here...

## Section 2
\`\`\`javascript
// Code example
\`\`\`

## Best Practices
✅ Practice 1
✅ Practice 2
`,
    topics: ['Topic1', 'Topic2', 'Topic3'],
    estimatedTime: 30,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];
```

### Step 2: Export from Index
Add the import and export in `src/data/development/index.ts`:

```typescript
import { myNewTopicProblems } from './myNewTopic';

export const allDevelopmentProblems: Problem[] = [
  // ... existing problems
  ...myNewTopicProblems
];
```

### Step 3: Update Total Count
Update the `totalProblems` count in `src/data/languages/development.ts` if adding new problems.

## File Structure Template

Each topic file should follow this structure:

```typescript
import { Problem } from '../../types';

export const [topic]Problems: Problem[] = [
  {
    id: 'unique-id',                    // Unique identifier
    title: 'Display Title',              // Shown in UI
    difficulty: 'Easy' | 'Medium' | 'Hard',
    category: 'Category Name',           // Groups related problems
    description: 'Short description',    // Preview text
    answer: `# Full Content...`,         // Markdown content
    topics: ['Tag1', 'Tag2'],           // Search tags
    estimatedTime: 25,                   // Minutes
    platformLinks: [],                   // LeetCode, etc.
    userStatus: {                        // User progress
      completed: false,
      attempted: false,
      lastAttempted: null,
      timeSpent: 0
    }
  }
];
```

## Content Guidelines

### Markdown Formatting
- Use `#` for main titles
- Use `##` for sections
- Use code blocks with language specification
- Use ✅ for best practices
- Use ❌ for anti-patterns

### Code Examples
Always include practical, working code examples:

```typescript
// Good example with comments
const example = () => {
  // Explanation of what this does
  return 'result';
};
```

### Sections to Include
1. **Introduction** - What is this topic?
2. **Core Concepts** - Main ideas
3. **Practical Examples** - Real-world code
4. **Best Practices** - What to do
5. **Common Pitfalls** - What to avoid

## Migration from Old Structure

The original `development.ts` file was 10,260 lines. It has been refactored into:
- 1 main file (`development.ts`) - 14 lines
- 1 index file (`index.ts`) - 60 lines
- 26 topic files - average 200-400 lines each

This makes the codebase much more maintainable and developer-friendly.

## Testing

After making changes, always run:

```bash
npm run build
```

This ensures all imports are correct and TypeScript compiles successfully.

## Contributing

When adding content:
1. Follow the existing patterns
2. Keep files focused on a single topic
3. Include practical examples
4. Add comprehensive explanations
5. Test the build before committing
