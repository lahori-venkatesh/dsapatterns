import { LanguageProblem } from '../../types';

export const systemDesignTopics: LanguageProblem[] = [
  {
    id: 'client-server',
    title: '1. Client-Server Architecture',
    description: 'Understanding the foundation of web applications and distributed systems',
    answer: `# Client-Server Architecture

## What is Client-Server?

**Client-Server** is a computing model where tasks are divided between **service providers (servers)** and **service requesters (clients)**.

### 🏢 Real-World Analogy

Think of a **restaurant**:
- **Client** = Customer who orders food
- **Server** = Waiter who takes orders and brings food
- **Kitchen** = Backend server that prepares food
- **Menu** = API documentation

### How It Works

\`\`\`
┌─────────┐                    ┌─────────┐
│ Client  │ ----Request------> │ Server  │
│(Browser)│                    │(Backend)│
│         │ <---Response------ │         │
└─────────┘                    └─────────┘
\`\`\`

## Components

### 1. **Client (Frontend)**
- Web browser, mobile app, desktop app
- Makes requests to server
- Displays UI to users
- Handles user interactions

**Examples:**
- Chrome browser visiting amazon.com
- Netflix app on your phone
- Slack desktop application

### 2. **Server (Backend)**
- Receives requests from clients
- Processes business logic
- Accesses databases
- Returns responses

**Examples:**
- Node.js/Express server
- Django/Flask Python server
- Spring Boot Java server

## Request-Response Flow

\`\`\`
1. User clicks "Login" button (CLIENT)
2. Browser sends POST request with credentials (CLIENT)
3. Server receives request (SERVER)
4. Server validates credentials against database (SERVER)
5. Server generates JWT token (SERVER)
6. Server sends response with token (SERVER)
7. Browser stores token and redirects to dashboard (CLIENT)
\`\`\`

## Example: Login Flow

**Client Code (JavaScript):**
\`\`\`javascript
// Client makes request
async function login(email, password) {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard';
  } else {
    alert('Login failed: ' + data.error);
  }
}
\`\`\`

**Server Code (Node.js):**
\`\`\`javascript
// Server handles request
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate credentials
  const user = await db.users.findOne({ email });
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ userId: user.id }, SECRET_KEY);

  res.json({ token, user: { id: user.id, email: user.email } });
});
\`\`\`

## Architecture Patterns

### 1. **Two-Tier Architecture**
\`\`\`
[Client] <----> [Server + Database]
\`\`\`
Simple but not scalable. Client directly connects to database server.

### 2. **Three-Tier Architecture** ✅ (Most Common)
\`\`\`
[Presentation Layer] <----> [Business Logic Layer] <----> [Data Layer]
     (Client)                    (Application Server)         (Database)
\`\`\`

### 3. **N-Tier Architecture**
\`\`\`
[Client] -> [Load Balancer] -> [Web Server] -> [App Server] -> [Cache] -> [Database]
\`\`\`

## Advantages

✅ **Centralized Control**: Server manages all data and logic
✅ **Security**: Sensitive logic on server, not exposed to client
✅ **Scalability**: Can add more servers to handle load
✅ **Maintenance**: Update server code without updating all clients
✅ **Resource Sharing**: Multiple clients share same server resources

## Disadvantages

❌ **Single Point of Failure**: If server goes down, service stops
❌ **Network Dependency**: Requires internet connection
❌ **Server Overload**: Too many clients can overwhelm server
❌ **Cost**: Maintaining servers is expensive

## Real-World Examples

### **Gmail**
- **Client**: Browser displaying emails
- **Server**: Google servers storing and processing emails

### **Netflix**
- **Client**: App streaming video
- **Server**: Netflix servers delivering video content

### **Banking App**
- **Client**: Mobile app showing balance
- **Server**: Bank servers managing accounts and transactions

---

💡 **Key Takeaway**: Client-Server separates concerns - clients focus on presentation, servers handle logic and data!
`,
    estimatedTime: 15,
    difficulty: 'Easy',
    topics: ['System Design', 'Architecture'],
    platformLinks: [],
    userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
  }
];
