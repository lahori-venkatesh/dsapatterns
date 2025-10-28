import { LanguageProblem } from '../../types';

export const projectsMastery = {
  id: 'projects-mastery',
  language: 'Projects' as const,
  name: 'Project Building',
  icon: 'Code',
  description: 'Learn to build real-world projects: Full-stack apps, APIs, microservices, and portfolio projects',
  color: 'from-violet-500 to-purple-600',
  totalProblems: 50,
  completedProblems: 0,
  problems: [
    {
      id: 'proj-rest-api',
      title: 'Build a RESTful API',
      difficulty: 'Medium' as const,
      description: 'Create a complete REST API with CRUD operations, authentication, and database integration',
      answer: `Key Components:
1. Framework: Express.js/Spring Boot/Django
2. Database: PostgreSQL/MongoDB
3. Authentication: JWT/OAuth
4. Features: CRUD operations, pagination, filtering, sorting
5. Best Practices: Error handling, validation, logging, rate limiting

Example Structure:
- POST /api/users - Create user
- GET /api/users/:id - Get user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

Include: API documentation (Swagger), testing (Jest/Postman), environment configs`,
      topics: ['REST API', 'Backend', 'Node.js', 'Express'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/rest-api' }
      ],
      estimatedTime: 60,
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-todo-app',
      title: 'Full-Stack Todo Application',
      difficulty: 'Easy' as const,
      description: 'Build a complete todo app with React frontend and Node.js backend',
      answer: `Features:
1. Frontend: React with hooks, state management
2. Backend: Node.js + Express + MongoDB
3. Features: Add/Edit/Delete todos, mark complete, filter by status
4. Styling: Tailwind CSS/Material-UI
5. Deployment: Vercel (frontend) + Heroku (backend)

Tech Stack:
- React + Context API/Redux
- Express.js
- MongoDB/PostgreSQL
- JWT authentication
- Responsive design`,
      topics: ['Full-Stack', 'React', 'Node.js', 'MongoDB'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/todo-app' }
      ],
      estimatedTime: 40,
      companies: ['Startups', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-ecommerce',
      title: 'E-Commerce Platform',
      difficulty: 'Hard' as const,
      description: 'Build a complete e-commerce platform with payment integration',
      answer: `Core Features:
1. User authentication and profiles
2. Product catalog with search/filter
3. Shopping cart and wishlist
4. Order management
5. Payment integration (Stripe/Razorpay)
6. Admin dashboard
7. Reviews and ratings

Tech Stack:
- Frontend: React/Next.js
- Backend: Node.js/Django
- Database: PostgreSQL
- Payment: Stripe API
- File Storage: AWS S3/Cloudinary
- Email: SendGrid

Advanced: Recommendation system, analytics, inventory management`,
      topics: ['Full-Stack', 'E-Commerce', 'Payment Integration', 'Complex Systems'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/ecommerce' }
      ],
      estimatedTime: 120,
      companies: ['Amazon', 'Flipkart', 'Shopify'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-social-media',
      title: 'Social Media Application',
      difficulty: 'Hard' as const,
      description: 'Create a social media platform with posts, likes, comments, and real-time features',
      answer: `Features:
1. User profiles and authentication
2. Post creation (text, images, videos)
3. Like, comment, share functionality
4. Follow/Unfollow users
5. Real-time notifications (WebSockets)
6. News feed algorithm
7. Direct messaging
8. Image upload and optimization

Tech Stack:
- Frontend: React/Next.js
- Backend: Node.js + Socket.io
- Database: MongoDB/PostgreSQL
- Real-time: WebSockets
- Cloud Storage: AWS S3
- CDN: CloudFront`,
      topics: ['Full-Stack', 'Real-time', 'WebSockets', 'Social Media'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/social-media' }
      ],
      estimatedTime: 150,
      companies: ['Facebook', 'Instagram', 'Twitter'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-chat-app',
      title: 'Real-Time Chat Application',
      difficulty: 'Medium' as const,
      description: 'Build a chat app with real-time messaging using WebSockets',
      answer: `Features:
1. User authentication
2. One-on-one chat
3. Group chat rooms
4. Real-time messaging (Socket.io)
5. Typing indicators
6. Read receipts
7. File sharing
8. Message history

Tech Stack:
- Frontend: React
- Backend: Node.js + Socket.io
- Database: MongoDB
- Real-time: WebSockets
- File Storage: AWS S3

Advanced: Video/Voice calls (WebRTC), message encryption`,
      topics: ['Real-time', 'WebSockets', 'Chat', 'Node.js'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/chat-application' }
      ],
      estimatedTime: 80,
      companies: ['Slack', 'Discord', 'WhatsApp'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-blog-cms',
      title: 'Blog CMS Platform',
      difficulty: 'Medium' as const,
      description: 'Create a content management system for blogging with rich text editor',
      answer: `Features:
1. Rich text editor (TinyMCE/Quill)
2. Post creation, editing, publishing
3. Categories and tags
4. Comments system
5. User roles (Admin, Author, Reader)
6. SEO optimization
7. Analytics dashboard
8. Markdown support

Tech Stack:
- Frontend: React/Next.js
- Backend: Node.js/Strapi
- Database: PostgreSQL
- Editor: Draft.js/Quill
- SEO: Next.js SEO
- Analytics: Google Analytics

Deploy: Vercel + Supabase`,
      topics: ['CMS', 'Blog', 'Full-Stack', 'Content Management'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/cms' }
      ],
      estimatedTime: 70,
      companies: ['Medium', 'Ghost', 'WordPress'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-portfolio',
      title: 'Personal Portfolio Website',
      difficulty: 'Easy' as const,
      description: 'Build a professional portfolio website to showcase your projects',
      answer: `Sections:
1. Hero section with introduction
2. About me
3. Skills and technologies
4. Projects showcase
5. Work experience
6. Contact form
7. Blog (optional)
8. Resume download

Tech Stack:
- React/Next.js
- Tailwind CSS/Framer Motion
- Contact Form: EmailJS
- Animations: Framer Motion
- Hosting: Vercel/Netlify

Best Practices:
- Responsive design
- Fast loading
- SEO optimized
- Accessible
- Clean, professional design`,
      topics: ['Portfolio', 'Frontend', 'React', 'Web Design'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/portfolio' }
      ],
      estimatedTime: 30,
      companies: ['Freelance', 'Startups'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-weather-app',
      title: 'Weather Dashboard',
      difficulty: 'Easy' as const,
      description: 'Build a weather application using external weather API',
      answer: `Features:
1. Search by city
2. Current weather display
3. 7-day forecast
4. Geolocation support
5. Temperature unit toggle
6. Weather icons and animations
7. Favorite locations

Tech Stack:
- React/Vue.js
- Weather API: OpenWeatherMap
- Styling: Tailwind CSS
- Charts: Chart.js
- Geolocation API

Best Practices:
- Error handling
- Loading states
- Caching API responses
- Rate limiting
- Responsive design`,
      topics: ['API Integration', 'React', 'Frontend', 'Weather'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/weather-app' }
      ],
      estimatedTime: 25,
      companies: ['Google', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-task-manager',
      title: 'Team Task Management System',
      difficulty: 'Hard' as const,
      description: 'Build a comprehensive task management system like Trello/Asana',
      answer: `Features:
1. User authentication and teams
2. Project/Board creation
3. Task cards with drag-and-drop
4. Kanban board view
5. Task assignment and due dates
6. Comments and attachments
7. Real-time collaboration
8. Notifications
9. Sprint planning
10. Reports and analytics

Tech Stack:
- Frontend: React + React Beautiful DnD
- Backend: Node.js + Express
- Database: PostgreSQL
- Real-time: Socket.io
- File Storage: AWS S3
- Authentication: JWT

Advanced: Time tracking, Gantt charts, API webhooks`,
      topics: ['Project Management', 'Full-Stack', 'Collaboration', 'Real-time'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/project-management' }
      ],
      estimatedTime: 140,
      companies: ['Atlassian', 'Asana', 'Monday.com'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'proj-url-shortener',
      title: 'URL Shortener Service',
      difficulty: 'Medium' as const,
      description: 'Build a URL shortening service like bit.ly with analytics',
      answer: `Features:
1. Shorten long URLs
2. Custom short URLs (optional)
3. QR code generation
4. Click analytics
5. Expiration dates
6. User accounts
7. URL management dashboard
8. API for developers

Tech Stack:
- Backend: Node.js/Python
- Database: MongoDB/Redis
- Cache: Redis
- QR: QR code library
- Analytics: Track clicks, location, devices

Algorithm:
- Base62 encoding for short URLs
- Hash function for uniqueness
- Database indexing for fast lookups

Deploy: Heroku/AWS`,
      topics: ['Backend', 'System Design', 'Analytics', 'URL Shortener'],
      platformLinks: [
        { platform: 'GitHub' as const, url: 'https://github.com/topics/url-shortener' }
      ],
      estimatedTime: 50,
      companies: ['Bitly', 'Google', 'Twitter'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ] as LanguageProblem[]
};
