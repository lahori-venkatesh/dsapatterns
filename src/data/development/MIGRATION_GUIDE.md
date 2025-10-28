# Migration Guide: Refactoring Development.ts

## What Changed?

The monolithic `development.ts` file (10,260+ lines) has been refactored into a modular structure:

**Before:**
```
src/data/languages/development.ts (10,260 lines)
```

**After:**
```
src/data/languages/development.ts (14 lines)
src/data/development/
  ├── index.ts (60 lines)
  ├── html5.ts (350 lines)
  ├── css3.ts (200 lines)
  ├── javascript.ts (300 lines)
  └── ... (26 topic files)
```

## Current Status

✅ **Completed:**
- Directory structure created
- Index file with proper imports/exports
- Main development.ts updated to use modular structure
- README.md with documentation
- Example files (html5.ts with full content)
- Stub files for all topics
- Project builds successfully

⏳ **To Do:**
- Populate remaining topic files with content from original file

## How to Populate Content

### Option 1: Manual Copy (Recommended for Quality)

1. Open the backup of original `development.ts`
2. Find the section for your topic (e.g., "Express.js")
3. Copy the problem object
4. Paste into the appropriate file (e.g., `expressjs.ts`)
5. Test with `npm run build`

### Option 2: Automated Script

A Python script to extract content:

```python
# extract_content.py
import re

def extract_problems_by_category(filename, category):
    with open(filename, 'r') as f:
        content = f.read()

    # Find all problems for the category
    pattern = rf'\{{[^}}]*category:\s*["\']{ category}["\'][^}}]*\}}'
    matches = re.findall(pattern, content, re.DOTALL)

    return matches

# Usage
problems = extract_problems_by_category('development.ts.backup', 'Express.js')
for problem in problems:
    print(problem)
```

## File Mapping

Here's which original content goes into which new file:

| New File | Categories to Extract |
|----------|----------------------|
| html5.ts | HTML5 |
| css3.ts | CSS3 |
| javascript.ts | JavaScript |
| typescript.ts | TypeScript |
| react.ts | React.js |
| nodejs.ts | Node.js |
| database.ts | Databases |
| security.ts | Security |
| systemDesign.ts | System Design |
| nextjs.ts | Next.js |
| stateManagement.ts | State Management |
| tailwind.ts | Tailwind CSS |
| api.ts | APIs |
| testing.ts | Testing |
| devops.ts | DevOps |
| performance.ts | Performance |
| expressjs.ts | Express.js |
| springBoot.ts | Spring Boot |
| python.ts | Python |
| vite.ts | Vite |
| webpack.ts | Webpack |
| websockets.ts | WebSockets |
| networking.ts | Networking |
| dbms.ts | DBMS |
| os.ts | Operating System |
| computerNetworks.ts | Computer Networks |

## Verification Checklist

After populating a file, verify:

- [ ] File exports array named correctly (e.g., `expressjsProblems`)
- [ ] All problem IDs are unique
- [ ] Categories match the file's purpose
- [ ] Markdown is properly escaped in template literals
- [ ] Build passes: `npm run build`
- [ ] Content displays correctly in the app

## Example: Populating Express.js

1. **Locate content in original file** (lines ~6784-6971)
2. **Copy the problem object**
3. **Paste into expressjs.ts**:

```typescript
import { Problem } from '../../types';

export const expressjsProblems: Problem[] = [
  {
    id: 'expressjs-middleware',
    title: 'Express.js Middleware Pattern',
    difficulty: 'Medium' as any,
    category: 'Express.js',
    description: 'Understanding middleware, routing, and error handling',
    answer: `# Express.js Middleware Pattern

[Full content here...]
`,
    topics: ['Express.js', 'Middleware', 'REST API'],
    estimatedTime: 35,
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];
```

4. **Test**: `npm run build`

## Benefits of New Structure

### For Developers
- **Easy to find**: Each topic in its own file
- **Fast navigation**: No scrolling through thousands of lines
- **Better IDE performance**: Smaller files = faster syntax checking
- **Clear ownership**: Easy to assign specific topics to team members

### For Maintenance
- **Reduced conflicts**: Changes to different topics won't conflict
- **Easier reviews**: PRs are focused on specific topics
- **Better diffs**: Git shows exactly what changed
- **Scalable**: Easy to add new topics

### For Performance
- **Better tree-shaking**: Unused topics can be eliminated
- **Lazy loading**: Topics can be loaded on demand
- **Faster builds**: Parallel processing of smaller files

## Troubleshooting

### Build Fails
```bash
npm run build
```

Common issues:
- Missing import in `index.ts`
- Typo in export name
- Missing closing bracket

### Content Not Showing
1. Check `index.ts` includes your file
2. Verify export name matches import
3. Check problem ID is unique
4. Verify category matches

### TypeScript Errors
- Ensure `difficulty` has `as any`
- Check all required fields are present
- Verify template literal syntax

## Next Steps

1. **Backup original file**:
   ```bash
   cp src/data/languages/development.ts src/data/languages/development.ts.backup
   ```

2. **Populate topic files one by one**
   - Start with most important topics
   - Test each file individually
   - Commit after each successful topic

3. **Verify in application**
   - Run `npm run dev`
   - Navigate to Full Stack section
   - Check all topics display correctly

4. **Clean up**
   - Remove backup file
   - Update documentation
   - Create PR for review

## Questions?

Refer to:
- `README.md` - General documentation
- `html5.ts` - Example of completed file
- `index.ts` - How files are aggregated
