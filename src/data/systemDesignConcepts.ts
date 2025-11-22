import { Server, Globe, Network, Shield, Gauge, Lock, Box, Database, Scale, Users, Cloud, HardDrive, Copy, PackageSearch, Signal, Webhook, Grid3x3, MessageSquare, AlertCircle, Key, Zap, RefreshCw, GitBranch, Layers } from 'lucide-react';

export interface SystemConcept {
  id: string;
  number: number;
  title: string;
  icon: any;
  color: string;
  description: string;
  keyPoints: string[];
  realWorld: string;
  content: string;
}

export const systemDesignConcepts: SystemConcept[] = [
  {
    id: 'client-server',
    number: 1,
    title: 'Client-Server Architecture',
    icon: Server,
    color: 'from-blue-500 to-cyan-600',
    description: 'The fundamental model where clients request services and servers provide them',
    keyPoints: [
      'Clients make requests, servers respond',
      'Separation of concerns',
      'Centralized data management',
      'Scalable architecture'
    ],
    realWorld: 'Like a restaurant: customers (clients) order from waiters who get food from the kitchen (server)',
    content: `# Client-Server Architecture

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

**Client Code:**
\`\`\`javascript
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
  }
}
\`\`\`

**Server Code:**
\`\`\`javascript
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.users.findOne({ email });
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY);
  res.json({ token, user: { id: user.id, email: user.email } });
});
\`\`\`

## Architecture Patterns

### Two-Tier Architecture
\`\`\`
[Client] <----> [Server + Database]
\`\`\`

### Three-Tier Architecture ✅ (Most Common)
\`\`\`
[Presentation] <----> [Business Logic] <----> [Data Layer]
\`\`\`

### N-Tier Architecture
\`\`\`
[Client] -> [Load Balancer] -> [App Server] -> [Cache] -> [Database]
\`\`\`

## Advantages

✅ **Centralized Control**: Server manages all data and logic
✅ **Security**: Sensitive logic on server, not exposed
✅ **Scalability**: Can add more servers to handle load
✅ **Maintenance**: Update server without updating clients

## Real-World Examples

- **Gmail**: Browser (client) displays emails from Google servers
- **Netflix**: App (client) streams video from Netflix servers
- **Banking**: Mobile app (client) manages accounts on bank servers`
  },
  {
    id: 'ip-address',
    number: 2,
    title: 'IP Address',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
    description: 'Unique numerical label identifying each device on a network',
    keyPoints: [
      'IPv4: 192.168.1.1 (4.3 billion addresses)',
      'IPv6: 340 undecillion addresses',
      'Public IP: Internet-facing',
      'Private IP: Local network only'
    ],
    realWorld: 'Like a home address for your computer - mail needs an address to reach you, data needs an IP',
    content: `# IP Address

## What is an IP Address?

An **IP Address** is a unique numerical label assigned to each device connected to a network.

### 🏠 Real-World Analogy

- Your house: **"123 Main Street, City, ZIP"**
- Your computer: **"192.168.1.10"**

Just as mail needs your address, data packets need IP addresses!

## Types of IP Addresses

### IPv4 (Most Common)
\`\`\`
Format: 192.168.1.1
Structure: 4 numbers (0-255)
Total: ~4.3 billion addresses
Example: 142.250.185.46 (google.com)
\`\`\`

### IPv6 (Future)
\`\`\`
Format: 2001:0db8:85a3::8a2e:0370:7334
Structure: 8 hexadecimal groups
Total: 340 undecillion addresses!
Example: 2607:f8b0:4004:c07::66
\`\`\`

## Public vs Private IP

### Public IP 🌍
- Globally unique
- Visible on internet
- Assigned by ISP
- Example: 203.0.113.45

### Private IP 🏠
- Used in local networks
- NOT visible on internet
- Reusable across networks
- Ranges:
  - 10.0.0.0 to 10.255.255.255
  - 172.16.0.0 to 172.31.255.255
  - 192.168.0.0 to 192.168.255.255

## Network Example

\`\`\`
Home Network:
┌─────────────────────────────────┐
│ Router (Public IP: 203.0.113.5) │
└─────────────┬───────────────────┘
              │
    ┌─────────┼──────────┐
    │         │          │
  Laptop    Phone     Smart TV
192.168.1.10  .11       .12
\`\`\`

## Static vs Dynamic IP

### Static IP 📌
- Permanent, doesn't change
- Manually configured
- Use: Servers, websites

### Dynamic IP 🔄
- Changes periodically
- Auto-assigned (DHCP)
- Use: Home internet, mobile devices

## Special IP Addresses

\`\`\`
127.0.0.1 (localhost)
  → Your own computer

0.0.0.0
  → "Any IP address"

255.255.255.255
  → Broadcast to all devices

192.168.1.1
  → Common router address
\`\`\`

## How It Works

\`\`\`
1. You type: www.google.com
2. DNS converts: google.com → 142.250.185.46
3. Your computer sends request to 142.250.185.46
4. Google's server responds
5. Browser displays page
\`\`\`

## In Code

\`\`\`javascript
// Get client IP in Node.js
app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress;
  res.json({ ip });
});
\`\`\`

## Security

⚠️ **IP Address Can Reveal:**
- Geographic location
- Internet provider
- Device type

🛡️ **Protection:**
- Use VPN to hide real IP
- Firewall to block connections
- Don't expose private IPs`
  },
  {
    id: 'dns',
    number: 3,
    title: 'DNS (Domain Name System)',
    icon: Network,
    color: 'from-purple-500 to-pink-600',
    description: 'The internet\'s phonebook converting domain names to IP addresses',
    keyPoints: [
      'Translates google.com → 142.250.185.46',
      'Hierarchical lookup system',
      'Caching for speed',
      'Record types: A, AAAA, CNAME, MX'
    ],
    realWorld: 'Like a phonebook: you know "Pizza Hut", phonebook tells you "555-1234"',
    content: `# DNS (Domain Name System)

## What is DNS?

**DNS** translates human-readable domain names (google.com) into IP addresses (142.250.185.46) that computers use.

### 📞 Real-World Analogy

Think of DNS as a **phonebook**:
- You know: "Pizza Hut" (domain name)
- Phonebook tells you: "555-1234" (IP address)

Without DNS, you'd need to remember "142.250.185.46" instead of "google.com"!

## How DNS Works

\`\`\`
1. You type: www.google.com
2. Browser checks cache
3. Query DNS Resolver (your ISP)
4. Root DNS: "Ask .com TLD server"
5. TLD DNS: "Ask google.com nameserver"
6. Authoritative DNS: "IP is 142.250.185.46"
7. Response flows back to browser
8. Browser connects to IP
\`\`\`

## DNS Hierarchy

\`\`\`
Root DNS
    │
    ├── .com TLD
    │     ├── google.com
    │     ├── amazon.com
    │     └── facebook.com
    │
    ├── .org TLD
    │     └── wikipedia.org
    │
    └── .net TLD
\`\`\`

## DNS Record Types

### A Record
Maps domain to IPv4 address
\`\`\`
google.com. A 142.250.185.46
\`\`\`

### AAAA Record
Maps domain to IPv6 address
\`\`\`
google.com. AAAA 2607:f8b0:4004:c07::66
\`\`\`

### CNAME Record
Alias pointing to another domain
\`\`\`
www.example.com. CNAME example.com.
\`\`\`

### MX Record
Specifies mail servers
\`\`\`
example.com. MX 10 mail.example.com.
\`\`\`

## DNS Caching

\`\`\`
Browser Cache: 60 sec - 10 min
OS Cache: 1 min - hours
DNS Resolver Cache: hours - days
\`\`\`

**TTL (Time To Live)** = How long to cache
\`\`\`
google.com. 300 A 142.250.185.46
           (5 minutes)
\`\`\`

## Common DNS Servers

\`\`\`
Google: 8.8.8.8, 8.8.4.4
Cloudflare: 1.1.1.1, 1.0.0.1
Quad9: 9.9.9.9
OpenDNS: 208.67.222.222
\`\`\`

## DNS in Code

\`\`\`javascript
const dns = require('dns');

// Lookup IP address
dns.lookup('google.com', (err, address) => {
  console.log('IP:', address); // 142.250.185.46
});

// Get all addresses
dns.resolve4('google.com', (err, addresses) => {
  console.log('All IPs:', addresses);
});

// Reverse DNS (IP to domain)
dns.reverse('142.250.185.46', (err, hostnames) => {
  console.log('Hostnames:', hostnames);
});
\`\`\`

## DNS Security

### DNS Spoofing ⚠️
Attacker tricks DNS to cache fake IP
\`\`\`
Real: bank.com → 203.0.113.10
Fake: bank.com → 198.51.100.20 (attacker)
\`\`\`

**Protection:**
- DNSSEC (DNS Security Extensions)
- Use trusted DNS servers
- HTTPS to verify server

### DNS over HTTPS (DoH)
Encrypts DNS queries from ISP snooping
\`\`\`
Normal DNS: ISP can see all lookups
DoH: Encrypted, ISP can't see
\`\`\`

## DNS Load Balancing

\`\`\`
example.com:
  - A 203.0.113.10 (Server 1)
  - A 203.0.113.20 (Server 2)
  - A 203.0.113.30 (Server 3)

DNS returns IPs in rotation
Different users → different servers
\`\`\`

## Real-World Examples

### CDN (Content Delivery)
\`\`\`
US user queries netflix.com
  → DNS returns US server IP

Japan user queries netflix.com
  → DNS returns Japan server IP
\`\`\`

### Failover
\`\`\`
Primary server fails
  → DNS health check detects
  → DNS returns backup server IP
  → Traffic automatically rerouted
\`\`\``
  },
  {
    id: 'proxy-reverse-proxy',
    number: 4,
    title: 'Proxy & Reverse Proxy',
    icon: Shield,
    color: 'from-orange-500 to-red-600',
    description: 'Intermediary servers that handle requests between clients and servers',
    keyPoints: [
      'Forward Proxy: Client-side intermediary',
      'Reverse Proxy: Server-side intermediary',
      'Security, caching, load balancing',
      'Examples: Nginx, HAProxy, Cloudflare'
    ],
    realWorld: 'Forward proxy is like using a friend to buy tickets for you. Reverse proxy is like a receptionist directing visitors to offices',
    content: `# Proxy & Reverse Proxy

## Forward Proxy (Client-Side)

Sits between client and internet.

\`\`\`
[Client] → [Forward Proxy] → [Internet] → [Server]
\`\`\`

**Use Cases:**
- Hide client IP (VPN)
- Bypass geo-restrictions
- Content filtering
- Caching

**Example:**
\`\`\`
Your computer → Corporate Proxy → Blocked Site ❌
Your computer → VPN → Website ✅
\`\`\`

## Reverse Proxy (Server-Side)

Sits in front of servers.

\`\`\`
[Client] → [Reverse Proxy] → [Backend Servers]
\`\`\`

**Use Cases:**
- Load balancing
- SSL termination
- Caching static content
- Security (hide backend)
- Compression

**Nginx Config:**
\`\`\`nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }

  location /api {
    proxy_pass http://api-server:8080;
  }
}
\`\`\`

## Benefits

**Forward Proxy:**
✅ Client anonymity
✅ Access control
✅ Bandwidth savings

**Reverse Proxy:**
✅ Load balancing
✅ Security layer
✅ SSL offloading
✅ Caching`
  },
  {
    id: 'latency-throughput',
    number: 5,
    title: 'Latency & Throughput',
    icon: Gauge,
    color: 'from-yellow-500 to-orange-600',
    description: 'Time delay and data transfer rate in systems',
    keyPoints: [
      'Latency: Time for single request (ms)',
      'Throughput: Requests per second',
      'Trade-offs between both',
      'Optimize via caching, CDN, indexing'
    ],
    realWorld: 'Highway analogy: Latency = travel time, Throughput = cars per hour that can pass',
    content: `# Latency & Throughput

## Latency

Time between request and response.

**Examples:**
\`\`\`
Memory access: 100 nanoseconds
SSD read: 0.1ms
HDD read: 10ms
Network (same datacenter): 1ms
Network (cross-continent): 200ms
\`\`\`

## Throughput

Amount of work done per time unit.

**Examples:**
\`\`\`
Web server: 10,000 requests/second
Database: 5,000 queries/second
Network: 1 Gbps
\`\`\`

## Reducing Latency

### 1. Caching
\`\`\`javascript
const cache = new Map();

async function getData(key) {
  if (cache.has(key)) return cache.get(key); // 1ms

  const data = await db.query(key); // 50ms
  cache.set(key, data);
  return data;
}
\`\`\`

### 2. CDN
\`\`\`
User in USA → USA CDN (10ms)
vs
User in USA → Europe Server (200ms)
\`\`\`

### 3. Database Indexing
\`\`\`sql
-- Without index: 500ms
SELECT * FROM users WHERE email = 'user@example.com';

-- With index: 5ms
CREATE INDEX idx_email ON users(email);
\`\`\`

## Increasing Throughput

### 1. Horizontal Scaling
\`\`\`
1 server: 1,000 RPS
10 servers: 10,000 RPS
\`\`\`

### 2. Connection Pooling
\`\`\`javascript
const pool = new Pool({ max: 20 });
// Reuse connections instead of creating new ones
\`\`\`

### 3. Async Processing
\`\`\`javascript
// Fast response
queue.add(heavyTask);
return { status: 'processing' }; // 10ms
\`\`\``
  },
  {
    id: 'http-https',
    number: 6,
    title: 'HTTP/HTTPS',
    icon: Lock,
    color: 'from-green-500 to-teal-600',
    description: 'Protocols for web communication, secure and unsecure',
    keyPoints: [
      'HTTP: Unencrypted communication',
      'HTTPS: HTTP + SSL/TLS encryption',
      'Methods: GET, POST, PUT, DELETE',
      'Status codes: 2xx, 3xx, 4xx, 5xx'
    ],
    realWorld: 'HTTP is like a postcard (anyone can read). HTTPS is a sealed envelope',
    content: `# HTTP/HTTPS

## HTTP Methods

\`\`\`
GET    - Retrieve data
POST   - Create data
PUT    - Update data
DELETE - Remove data
PATCH  - Partial update
\`\`\`

## Status Codes

\`\`\`
2xx Success
  200 OK
  201 Created
  204 No Content

3xx Redirection
  301 Moved Permanently
  302 Found (Temporary)

4xx Client Error
  400 Bad Request
  401 Unauthorized
  403 Forbidden
  404 Not Found

5xx Server Error
  500 Internal Server Error
  502 Bad Gateway
  503 Service Unavailable
\`\`\`

## HTTPS

HTTP + SSL/TLS encryption

**Why HTTPS:**
\`\`\`
HTTP: password=secret123 ← Anyone can see!
HTTPS: xK9$mP@wR7... ← Encrypted!
\`\`\`

### SSL Certificate
\`\`\`
Certificate contains:
- Domain name
- Company info
- Public key
- Expiration date
\`\`\`

## Example Request
\`\`\`javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({ name: 'John' })
});
\`\`\`

## HTTP/2 vs HTTP/3

**HTTP/1.1:** One request per connection
**HTTP/2:** Multiple requests simultaneously
**HTTP/3:** Uses QUIC, faster on poor networks`
  },
  {
    id: 'apis',
    number: 7,
    title: 'APIs',
    icon: Box,
    color: 'from-indigo-500 to-purple-600',
    description: 'Interfaces allowing software to communicate',
    keyPoints: [
      'Contract between applications',
      'Request → Process → Response',
      'REST, GraphQL, SOAP types',
      'Authentication & rate limiting'
    ],
    realWorld: 'Like a restaurant menu: shows what you can order and how',
    content: `# APIs

## What is an API?

Set of rules for software communication.

\`\`\`
[Your App] → Request → [API] → [Database]
[Your App] ← Response ← [API] ← [Data]
\`\`\`

## REST API Example

\`\`\`javascript
// Get users
GET /api/users

// Get specific user
GET /api/users/123

// Create user
POST /api/users
Body: { name: "John", email: "john@example.com" }

// Update user
PUT /api/users/123

// Delete user
DELETE /api/users/123
\`\`\`

## Creating an API

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users');
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = await db.insert(req.body);
  res.status(201).json(user);
});

app.listen(3000);
\`\`\`

## Authentication

\`\`\`javascript
// API Key
headers: { 'X-API-Key': 'your-key' }

// Bearer Token
headers: { 'Authorization': 'Bearer token123' }
\`\`\`

## Best Practices

✅ Versioning: /api/v1/users
✅ Proper status codes
✅ Error handling
✅ Rate limiting
✅ Documentation`
  },
  {
    id: 'rest-api',
    number: 8,
    title: 'REST API',
    icon: Network,
    color: 'from-blue-500 to-cyan-600',
    description: 'Architectural style using HTTP for APIs',
    keyPoints: [
      'Resource-based URLs',
      'HTTP methods for CRUD',
      'Stateless communication',
      'JSON responses'
    ],
    realWorld: 'Like a library: each book has an ID, you can borrow (GET), return (POST)',
    content: `# REST API

## REST Principles

### 1. Resource-Based URLs
\`\`\`
/users          - All users
/users/123      - Specific user
/users/123/posts - User's posts
\`\`\`

### 2. HTTP Methods
\`\`\`
GET    - Read
POST   - Create
PUT    - Update
DELETE - Remove
\`\`\`

### 3. Stateless
Each request is independent

### 4. Standard Responses
\`\`\`json
{
  "id": 123,
  "name": "John",
  "email": "john@example.com"
}
\`\`\`

## Full Example

\`\`\`javascript
// Get all
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get one
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// Create
app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// Update
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  Object.assign(user, req.body);
  res.json(user);
});

// Delete
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.status(204).send();
});
\`\`\`

## Query Parameters

\`\`\`
GET /api/users?role=admin&sort=name&page=2
\`\`\`

## Best Practices

✅ Use nouns, not verbs
✅ Plural names
✅ Nesting for relationships
✅ Consistent format`
  },
  {
    id: 'graphql',
    number: 9,
    title: 'GraphQL',
    icon: GitBranch,
    color: 'from-pink-500 to-rose-600',
    description: 'Query language for APIs with flexible data fetching',
    keyPoints: [
      'Request exactly what you need',
      'Single endpoint for all queries',
      'Strongly typed schema',
      'No over-fetching or under-fetching'
    ],
    realWorld: 'Like ordering à la carte: pick exactly what you want vs fixed menu (REST)',
    content: `# GraphQL

## What is GraphQL?

Query language where clients request exact data needed.

## GraphQL Query

\`\`\`graphql
query {
  user(id: "123") {
    name
    email
    posts {
      title
      comments {
        text
      }
    }
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "data": {
    "user": {
      "name": "John",
      "email": "john@example.com",
      "posts": [
        {
          "title": "Hello World",
          "comments": [{ "text": "Great!" }]
        }
      ]
    }
  }
}
\`\`\`

## GraphQL vs REST

**REST:**
\`\`\`
GET /users/123
GET /users/123/posts
GET /posts/456/comments
(3 requests, over-fetching data)
\`\`\`

**GraphQL:**
\`\`\`
POST /graphql
(1 request, exact data)
\`\`\`

## Mutations (Updates)

\`\`\`graphql
mutation {
  createUser(name: "John", email: "john@example.com") {
    id
    name
  }
}
\`\`\`

## Schema Definition

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User
}

type Query {
  user(id: ID!): User
  posts: [Post]
}

type Mutation {
  createUser(name: String!, email: String!): User
}
\`\`\`

## Server Implementation

\`\`\`javascript
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }
\`;

const resolvers = {
  Query: {
    user: (parent, args) => {
      return users.find(u => u.id === args.id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
\`\`\`

## Advantages

✅ Request exact data
✅ Single endpoint
✅ Strongly typed
✅ Great tooling

## Disadvantages

❌ More complex
❌ Caching harder
❌ Learning curve`
  },
  {
    id: 'database',
    number: 10,
    title: 'Database Fundamentals',
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    description: 'Structured storage for persistent data',
    keyPoints: [
      'Persistent data storage',
      'ACID properties',
      'Schemas and tables',
      'Primary and foreign keys'
    ],
    realWorld: 'Like a filing cabinet: organized drawers (tables) with labeled folders (rows)',
    content: `# Database Fundamentals

## What is a Database?

Organized collection of structured data.

## ACID Properties

### Atomicity
All or nothing - transaction succeeds completely or fails completely

\`\`\`sql
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Both succeed or both fail
\`\`\`

### Consistency
Data remains valid after transactions

### Isolation
Concurrent transactions don't interfere

### Durability
Committed data persists even after crashes

## Database Schema

\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

## CRUD Operations

\`\`\`sql
-- Create
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');

-- Read
SELECT * FROM users WHERE id = 1;

-- Update
UPDATE users SET name = 'Jane' WHERE id = 1;

-- Delete
DELETE FROM users WHERE id = 1;
\`\`\`

## Relationships

### One-to-Many
\`\`\`
One user → Many posts
users.id → posts.user_id
\`\`\`

### Many-to-Many
\`\`\`
Students ↔ Courses
students ↔ enrollments ↔ courses
\`\`\`

## Indexes

\`\`\`sql
CREATE INDEX idx_email ON users(email);
-- Speeds up: SELECT * FROM users WHERE email = '...'
\`\`\`

## Transactions

\`\`\`sql
BEGIN;
  -- Multiple operations
  UPDATE ...
  INSERT ...
COMMIT; -- or ROLLBACK on error
\`\`\``
  },
  {
    id: 'sql-nosql',
    number: 11,
    title: 'SQL vs NoSQL',
    icon: Database,
    color: 'from-emerald-500 to-green-600',
    description: 'Relational vs non-relational database models',
    keyPoints: [
      'SQL: Structured, relations, ACID',
      'NoSQL: Flexible schema, scalable',
      'SQL for complex queries',
      'NoSQL for high throughput'
    ],
    realWorld: 'SQL is like Excel with strict columns. NoSQL is like a notebook with free-form notes',
    content: `# SQL vs NoSQL

## SQL (Relational)

**Examples:** MySQL, PostgreSQL, Oracle

**Structure:**
\`\`\`sql
users table:
| id | name  | email           |
|----|-------|-----------------|
| 1  | John  | john@email.com  |
| 2  | Jane  | jane@email.com  |

posts table:
| id | user_id | title        |
|----|---------|--------------|
| 1  | 1       | Hello World  |
\`\`\`

**When to Use:**
- Complex relationships
- ACID compliance needed
- Complex queries (JOINs)
- Data integrity critical

## NoSQL (Non-Relational)

**Types:**

### Document (MongoDB)
\`\`\`json
{
  "_id": "123",
  "name": "John",
  "email": "john@email.com",
  "posts": [
    { "title": "Hello", "content": "..." }
  ]
}
\`\`\`

### Key-Value (Redis)
\`\`\`
user:123 → { "name": "John", "email": "..." }
\`\`\`

### Column-Family (Cassandra)
\`\`\`
Row key | Column1 | Column2 | Column3
\`\`\`

### Graph (Neo4j)
\`\`\`
(User)-[:FOLLOWS]->(User)
(User)-[:POSTED]->(Post)
\`\`\`

**When to Use:**
- Flexible schema
- Horizontal scaling
- High throughput
- Simple queries

## Comparison

| Feature | SQL | NoSQL |
|---------|-----|-------|
| Schema | Fixed | Flexible |
| Scaling | Vertical | Horizontal |
| ACID | Yes | Eventually consistent |
| Queries | Complex JOINs | Simple lookups |
| Use Case | Banking, ERP | Social media, IoT |

## Example: E-commerce

**SQL:**
\`\`\`
tables: users, products, orders, order_items
Complex joins for reports
\`\`\`

**NoSQL:**
\`\`\`
Embedded documents:
{
  order: { user: {...}, items: [...] }
}
Fast reads, denormalized
\`\`\``
  },
  {
    id: 'vertical-scaling',
    number: 12,
    title: 'Vertical Scaling',
    icon: Scale,
    color: 'from-violet-500 to-purple-600',
    description: 'Adding more power to existing server',
    keyPoints: [
      'Add CPU, RAM, disk to server',
      'Simpler than horizontal',
      'Physical limits exist',
      'Downtime for upgrades'
    ],
    realWorld: 'Like upgrading your laptop: add more RAM, bigger SSD',
    content: `# Vertical Scaling (Scale Up)

## What is Vertical Scaling?

Adding more resources to existing server.

\`\`\`
Before: 4 CPU, 8GB RAM
After:  16 CPU, 64GB RAM
\`\`\`

## Advantages

✅ **Simpler:** No code changes needed
✅ **No complexity:** Single server
✅ **Data consistency:** One database
✅ **Lower licensing costs:** One server license

## Disadvantages

❌ **Physical limits:** Can't add infinite resources
❌ **Expensive:** High-end hardware costly
❌ **Single point of failure:** Server down = app down
❌ **Downtime:** Need to stop server to upgrade

## When to Use

- Small to medium applications
- Vertical limits not reached
- Simplicity preferred
- Budget for expensive hardware

## Example

\`\`\`
// No code changes needed!

// Before: Server handles 1,000 RPS
// Upgrade: 4→16 CPU, 8→64GB RAM
// After: Server handles 4,000 RPS
\`\`\`

## Real-World Scenario

**Startup Phase:**
\`\`\`
Start: $50/month VPS (2 CPU, 4GB)
Growth: Upgrade to $200/month (8 CPU, 32GB)
\`\`\`

**But eventually...**
You hit limits and need horizontal scaling!`
  },
  {
    id: 'horizontal-scaling',
    number: 13,
    title: 'Horizontal Scaling',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    description: 'Adding more servers to handle load',
    keyPoints: [
      'Add more servers/instances',
      'Near infinite scalability',
      'Load balancer distributes traffic',
      'More complex architecture'
    ],
    realWorld: 'Like adding more checkout counters at a store',
    content: `# Horizontal Scaling (Scale Out)

## What is Horizontal Scaling?

Adding more servers instead of upgrading one.

\`\`\`
Before: 1 server
After:  10 servers with load balancer
\`\`\`

## Architecture

\`\`\`
         [Load Balancer]
              |
    ┌─────────┼─────────┐
    ▼         ▼         ▼
[Server 1][Server 2][Server 3]
    |         |         |
    └─────────┴─────────┘
         [Database]
\`\`\`

## Advantages

✅ **Nearly infinite scaling:** Add servers as needed
✅ **No downtime:** Add servers without stopping
✅ **Fault tolerance:** One fails, others continue
✅ **Cost-effective:** Use cheaper commodity hardware

## Disadvantages

❌ **Complex:** Need load balancer, session management
❌ **Data consistency:** Distributed data challenges
❌ **More maintenance:** More servers to manage
❌ **Network latency:** Communication between servers

## Implementation

\`\`\`javascript
// Session storage challenge
// ❌ Won't work across servers:
app.use(session({ store: new MemoryStore() }));

// ✅ Use shared session store:
app.use(session({
  store: new RedisStore({ client: redisClient })
}));
\`\`\`

## Load Balancing Strategies

\`\`\`
Round Robin: Server 1 → 2 → 3 → 1 → 2...
Least Connections: Send to server with fewest connections
IP Hash: Same client → same server
\`\`\`

## Real-World Example

**Netflix:**
\`\`\`
Thousands of servers worldwide
Add/remove based on demand
Traffic spikes? Add more servers!
\`\`\`

## When to Use

- High traffic applications
- Need fault tolerance
- Predictable load patterns
- Budget for infrastructure`
  },
  {
    id: 'load-balancer',
    number: 14,
    title: 'Load Balancer',
    icon: Scale,
    color: 'from-amber-500 to-orange-600',
    description: 'Distributes traffic across multiple servers',
    keyPoints: [
      'Distributes requests evenly',
      'Health checks for servers',
      'Algorithms: Round robin, least connections',
      'Examples: Nginx, HAProxy, AWS ELB'
    ],
    realWorld: 'Like a traffic cop directing cars to different lanes',
    content: `# Load Balancer

## What is a Load Balancer?

Distributes incoming traffic across multiple servers.

\`\`\`
     [Clients]
         |
   [Load Balancer]
         |
    ┌────┼────┐
    ▼    ▼    ▼
  [S1] [S2] [S3]
\`\`\`

## Load Balancing Algorithms

### 1. Round Robin
\`\`\`
Request 1 → Server 1
Request 2 → Server 2
Request 3 → Server 3
Request 4 → Server 1 (repeat)
\`\`\`

### 2. Least Connections
Send to server with fewest active connections

### 3. IP Hash
Same client IP → same server

### 4. Weighted Round Robin
More powerful servers get more requests

## Health Checks

\`\`\`
Load Balancer pings: GET /health
Server responds: 200 OK

If server fails health check:
→ Remove from pool
→ Stop sending traffic
→ Retry after delay
\`\`\`

## Nginx Configuration

\`\`\`nginx
upstream backend {
  server 192.168.1.10:3000;
  server 192.168.1.11:3000;
  server 192.168.1.12:3000;
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
  }
}
\`\`\`

## Types

### Layer 4 (Transport)
- Routes based on IP/Port
- Fast, simple
- No content inspection

### Layer 7 (Application)
- Routes based on HTTP content
- Path-based routing
- Can modify headers

## Benefits

✅ High availability
✅ Scalability
✅ Health monitoring
✅ SSL termination

## Cloud Load Balancers

- AWS: Elastic Load Balancer (ELB)
- Google Cloud: Cloud Load Balancing
- Azure: Azure Load Balancer`
  },
  {
    id: 'database-indexing',
    number: 15,
    title: 'Database Indexing',
    icon: PackageSearch,
    color: 'from-teal-500 to-cyan-600',
    description: 'Data structure for faster database queries',
    keyPoints: [
      'Speeds up SELECT queries',
      'Slows down INSERT/UPDATE',
      'B-Tree most common',
      'Index frequently queried columns'
    ],
    realWorld: 'Like a book index: find topics quickly instead of reading entire book',
    content: `# Database Indexing

## What is an Index?

Data structure that improves query speed.

## Without Index

\`\`\`sql
SELECT * FROM users WHERE email = 'john@example.com';
-- Scans ALL rows (slow) O(n)
\`\`\`

## With Index

\`\`\`sql
CREATE INDEX idx_email ON users(email);

SELECT * FROM users WHERE email = 'john@example.com';
-- Uses index (fast) O(log n)
\`\`\`

## Speed Comparison

\`\`\`
Table: 1 million rows

Without index: 500ms (full scan)
With index: 5ms (index lookup)

100x faster!
\`\`\`

## Types of Indexes

### Single Column
\`\`\`sql
CREATE INDEX idx_email ON users(email);
\`\`\`

### Composite (Multiple Columns)
\`\`\`sql
CREATE INDEX idx_name_age ON users(name, age);
-- Good for: WHERE name = '...' AND age = ...
\`\`\`

### Unique Index
\`\`\`sql
CREATE UNIQUE INDEX idx_email ON users(email);
-- Ensures no duplicates
\`\`\`

## How Indexes Work

B-Tree structure:
\`\`\`
            [M]
         /       \\
      [E]         [T]
     /  \\        /  \\
   [A]  [K]    [P]  [Z]
\`\`\`

Binary search: O(log n) instead of O(n)

## Trade-offs

**Pros:**
✅ Faster SELECT queries
✅ Faster WHERE, JOIN, ORDER BY

**Cons:**
❌ Slower INSERT/UPDATE/DELETE
❌ Uses disk space
❌ Maintenance overhead

## When to Index

✅ **Index:**
- Columns in WHERE clause
- JOIN columns
- ORDER BY columns
- Foreign keys

❌ **Don't Index:**
- Small tables
- Columns with few unique values
- Frequently updated columns

## Example

\`\`\`sql
-- Slow query
SELECT * FROM orders
WHERE customer_id = 123
ORDER BY created_at DESC;

-- Add indexes
CREATE INDEX idx_customer ON orders(customer_id);
CREATE INDEX idx_created ON orders(created_at);

-- Now fast!
\`\`\`

## Checking Index Usage

\`\`\`sql
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
-- Shows if index is used
\`\`\``
  },
  {
    id: 'replication',
    number: 16,
    title: 'Database Replication',
    icon: Copy,
    color: 'from-rose-500 to-pink-600',
    description: 'Copying data across multiple database servers',
    keyPoints: [
      'Master-Slave pattern',
      'Improved read performance',
      'Data redundancy',
      'Failover capability'
    ],
    realWorld: 'Like photocopying important documents and storing in different locations',
    content: `# Database Replication

## What is Replication?

Copying data from one database to others.

\`\`\`
    [Master DB]
    (Writes)
        |
    ┌───┴───┐
    ▼       ▼
[Slave 1][Slave 2]
 (Reads)  (Reads)
\`\`\`

## Master-Slave Replication

### Master (Primary)
- Handles all WRITES
- Sends changes to slaves

### Slaves (Replicas)
- Handle READS
- Receive updates from master

## Benefits

✅ **Read scaling:** Distribute reads across slaves
✅ **High availability:** Slave becomes master if master fails
✅ **Backup:** Always have copy
✅ **Analytics:** Run heavy queries on slave

## Implementation

\`\`\`javascript
const masterDB = createConnection({
  host: 'master.db.com',
  readonly: false
});

const slaveDB = createConnection({
  host: 'slave.db.com',
  readonly: true
});

// Writes go to master
function createUser(data) {
  return masterDB.query('INSERT INTO users ...', data);
}

// Reads from slave
function getUsers() {
  return slaveDB.query('SELECT * FROM users');
}
\`\`\`

## Replication Lag

\`\`\`
Master: Write at t=0
Slave: Receives at t=100ms

User writes → reads immediately
→ Might not see their data yet! (lag)
\`\`\`

**Solutions:**
- Read from master after write
- Wait for replication
- Show "pending" status

## Types

### Synchronous
Master waits for slave confirmation
- Slower writes
- Guaranteed consistency

### Asynchronous
Master doesn't wait
- Faster writes
- Eventual consistency

## Multi-Master Replication

\`\`\`
[Master 1] ←→ [Master 2]
(Both accept writes)
\`\`\`

**Pros:** No single point of failure
**Cons:** Conflict resolution needed

## Real-World Use

**Instagram:**
\`\`\`
1 master (writes)
50+ read replicas worldwide
Users read from nearest replica
\`\`\``
  },
  {
    id: 'sharding',
    number: 17,
    title: 'Database Sharding',
    icon: Grid3x3,
    color: 'from-indigo-500 to-blue-600',
    description: 'Splitting database across multiple servers',
    keyPoints: [
      'Horizontal partitioning',
      'Each shard has subset of data',
      'Improves scalability',
      'Complex to implement'
    ],
    realWorld: 'Like splitting a phone book: A-M in one book, N-Z in another',
    content: `# Database Sharding

## What is Sharding?

Splitting database horizontally across multiple servers.

\`\`\`
Users Table (10M rows)
        |
    ┌───┴───┬───┐
    ▼       ▼   ▼
Shard 1  Shard 2  Shard 3
(0-3M)   (3M-7M)  (7M-10M)
\`\`\`

## Sharding Strategies

### 1. Range-Based
\`\`\`
Shard 1: user_id 1-1000000
Shard 2: user_id 1000001-2000000
Shard 3: user_id 2000001-3000000
\`\`\`

### 2. Hash-Based
\`\`\`
shard = hash(user_id) % num_shards

user_id 123 → hash → 42 → shard 2
user_id 456 → hash → 17 → shard 1
\`\`\`

### 3. Geographic
\`\`\`
US users → US shard
EU users → EU shard
Asia users → Asia shard
\`\`\`

## Implementation

\`\`\`javascript
function getShardForUser(userId) {
  const shardNum = userId % 3; // 3 shards
  return shards[shardNum];
}

function getUser(userId) {
  const shard = getShardForUser(userId);
  return shard.query('SELECT * FROM users WHERE id = ?', userId);
}

function createUser(userData) {
  const userId = generateId();
  const shard = getShardForUser(userId);
  return shard.query('INSERT INTO users ...', userData);
}
\`\`\`

## Advantages

✅ **Horizontal scaling:** Add more shards
✅ **Improved performance:** Smaller datasets per shard
✅ **Geographic distribution:** Data closer to users

## Challenges

❌ **Complex queries:** JOINs across shards
❌ **Rebalancing:** Moving data between shards
❌ **Single point of failure:** Need replication too
❌ **Transactions:** Hard across shards

## Cross-Shard Queries

\`\`\`sql
-- Easy (single shard)
SELECT * FROM users WHERE id = 123;

-- Hard (all shards)
SELECT COUNT(*) FROM users;
-- Must query all shards and aggregate
\`\`\`

## Sharding + Replication

\`\`\`
Shard 1 [Master]
  ├─ [Slave 1]
  └─ [Slave 2]

Shard 2 [Master]
  ├─ [Slave 1]
  └─ [Slave 2]
\`\`\`

## When to Use

- Database too large for one server
- Write traffic too high
- Need geographic distribution

## Example: Instagram

\`\`\`
Sharded by user_id
Billions of rows
Thousands of shards
\`\`\``
  },
  {
    id: 'caching',
    number: 18,
    title: 'Caching',
    icon: Zap,
    color: 'from-yellow-500 to-amber-600',
    description: 'Storing frequently accessed data in fast storage',
    keyPoints: [
      'Stores data in fast memory',
      'Reduces database load',
      'Types: Client, CDN, Application, Database',
      'Eviction policies: LRU, LFU, FIFO'
    ],
    realWorld: 'Like keeping frequently used items on your desk instead of closet',
    content: `# Caching

## What is Caching?

Storing frequently accessed data in fast memory.

\`\`\`
Request → Check Cache → Cache Hit? Return
                      → Cache Miss? Fetch from DB → Store in cache
\`\`\`

## Why Cache?

\`\`\`
Database query: 50ms
Cache lookup: 1ms

50x faster!
\`\`\`

## Cache Levels

### 1. Client-Side
\`\`\`javascript
localStorage.setItem('user', JSON.stringify(user));
\`\`\`

### 2. CDN
Static files cached near users

### 3. Application (Redis/Memcached)
\`\`\`javascript
const cached = await redis.get('user:123');
if (cached) return JSON.parse(cached);

const user = await db.query('SELECT * FROM users WHERE id = 123');
await redis.set('user:123', JSON.stringify(user), 'EX', 3600);
\`\`\`

### 4. Database
Query result caching

## Caching Strategies

### 1. Cache-Aside (Lazy Loading)
\`\`\`javascript
async function getUser(id) {
  // Try cache first
  let user = await cache.get(\`user:\${id}\`);
  if (user) return user;

  // Not in cache, fetch from DB
  user = await db.query('SELECT * FROM users WHERE id = ?', id);

  // Store in cache
  await cache.set(\`user:\${id}\`, user, 3600);
  return user;
}
\`\`\`

### 2. Write-Through
Write to cache and DB simultaneously
\`\`\`javascript
async function updateUser(id, data) {
  await db.query('UPDATE users SET ? WHERE id = ?', data, id);
  await cache.set(\`user:\${id}\`, data, 3600);
}
\`\`\`

### 3. Write-Behind
Write to cache, async write to DB

## Cache Eviction

### LRU (Least Recently Used)
Remove items not accessed recently

### LFU (Least Frequently Used)
Remove items accessed least often

### TTL (Time To Live)
\`\`\`javascript
cache.set('key', 'value', 3600); // Expires in 1 hour
\`\`\`

## Cache Invalidation

\`\`\`javascript
// User updated
await db.query('UPDATE users SET name = ? WHERE id = ?', name, id);

// Invalidate cache
await cache.del(\`user:\${id}\`);
\`\`\`

## Cache Stampede

Problem: Cache expires, many requests hit DB simultaneously

**Solution: Lock**
\`\`\`javascript
async function getUser(id) {
  const cached = await cache.get(\`user:\${id}\`);
  if (cached) return cached;

  // Acquire lock
  const lock = await cache.set(\`lock:user:\${id}\`, '1', 'NX', 'EX', 10);
  if (!lock) {
    // Someone else is fetching, wait
    await sleep(100);
    return getUser(id);
  }

  const user = await db.query(...);
  await cache.set(\`user:\${id}\`, user, 3600);
  await cache.del(\`lock:user:\${id}\`);
  return user;
}
\`\`\`

## Redis Example

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

// Set with expiration
await client.set('session:123', 'data', 'EX', 3600);

// Get
const data = await client.get('session:123');

// Delete
await client.del('session:123');

// Increment counter
await client.incr('page:views');
\`\`\``
  },
  {
    id: 'cdn',
    number: 19,
    title: 'CDN (Content Delivery Network)',
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
    description: 'Distributed servers delivering content from locations near users',
    keyPoints: [
      'Caches static content globally',
      'Reduces latency',
      'Reduces server load',
      'Examples: Cloudflare, AWS CloudFront'
    ],
    realWorld: 'Like having mini-stores in every city instead of one central warehouse',
    content: `# CDN (Content Delivery Network)

## What is a CDN?

Network of servers worldwide caching content close to users.

\`\`\`
Without CDN:
User in Japan → US Server (200ms)

With CDN:
User in Japan → Japan CDN (10ms)
\`\`\`

## How CDN Works

\`\`\`
1. User requests image.jpg
2. Request goes to nearest CDN server
3. CDN has it cached? → Return (fast)
4. CDN doesn't have it? → Fetch from origin → Cache → Return
5. Next user? → Already cached (instant)
\`\`\`

## Architecture

\`\`\`
       [Origin Server]
              |
     [CDN Network]
    /     |      \\
[US]   [EU]   [Asia]
  |      |       |
Users  Users   Users
\`\`\`

## What to Cache

✅ **Static Files:**
- Images, CSS, JavaScript
- Videos, PDFs
- Fonts, icons

❌ **Don't Cache:**
- Dynamic content (user-specific)
- Sensitive data
- Real-time data

## Setup Example

\`\`\`html
<!-- Before: From your server -->
<img src="https://myserver.com/logo.png">

<!-- After: From CDN -->
<img src="https://cdn.example.com/logo.png">
\`\`\`

## CloudFront (AWS) Setup

\`\`\`javascript
// S3 bucket with static files
aws s3 sync ./public s3://my-bucket/

// CloudFront distribution
Origin: my-bucket.s3.amazonaws.com
URL: d123abc.cloudfront.net

// Use in app
<img src="https://d123abc.cloudfront.net/logo.png">
\`\`\`

## Cache Control

\`\`\`javascript
// Server sets cache headers
app.get('/logo.png', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31536000'); // 1 year
  res.sendFile('logo.png');
});
\`\`\`

## Benefits

✅ **Faster:** Content served from nearby
✅ **Scalable:** CDN handles traffic
✅ **Reliable:** Multiple locations
✅ **Cheaper:** Reduced bandwidth costs

## Cache Invalidation

\`\`\`
Problem: Update file, but CDN has old version

Solutions:
1. Wait for TTL expiration
2. Purge CDN cache (instant)
3. Version files: logo-v2.png
4. Query string: logo.png?v=2
\`\`\`

## Real-World Examples

**Netflix:** Videos cached worldwide
**Facebook:** Images/videos on CDN
**GitHub:** Static assets via CDN`
  },
  {
    id: 'cap-theorem',
    number: 20,
    title: 'CAP Theorem',
    icon: AlertCircle,
    color: 'from-red-500 to-rose-600',
    description: 'Trade-offs in distributed systems: Consistency, Availability, Partition Tolerance',
    keyPoints: [
      'Can only guarantee 2 of 3',
      'Consistency: Same data everywhere',
      'Availability: Always responds',
      'Partition Tolerance: Works despite network issues'
    ],
    realWorld: 'Like a triangle: can only pick two sides',
    content: `# CAP Theorem

## What is CAP?

In distributed systems, you can only guarantee 2 of 3:

### C - Consistency
All nodes see same data at same time

### A - Availability
System always responds (even if data is stale)

### P - Partition Tolerance
System works despite network failures

## The Trade-off

\`\`\`
You MUST choose Partition Tolerance (networks fail)

So you choose between:
CP (Consistency + Partition Tolerance)
AP (Availability + Partition Tolerance)
\`\`\`

## CP Systems

**Prioritize Consistency over Availability**

\`\`\`
Network partition occurs
→ Some nodes become unavailable
→ Ensures data consistency
→ Sacrifices availability
\`\`\`

**Examples:**
- MongoDB (with strong consistency)
- HBase
- Redis (with replication)

**Use Case:** Banking (consistency critical)

## AP Systems

**Prioritize Availability over Consistency**

\`\`\`
Network partition occurs
→ All nodes remain available
→ May serve stale data
→ Eventually consistent
\`\`\`

**Examples:**
- Cassandra
- DynamoDB
- CouchDB

**Use Case:** Social media (availability > consistency)

## Example Scenario

### Banking (CP)
\`\`\`
Transfer $100: Account A → Account B

During network partition:
→ Block transfer to ensure consistency
→ Better to be unavailable than inconsistent
\`\`\`

### Social Media (AP)
\`\`\`
Like a post

During network partition:
→ Allow like, sync later
→ Better to show stale likes than be down
\`\`\`

## Real-World Trade-offs

**Amazon Shopping Cart (AP):**
\`\`\`
Add item to cart
→ Might show on some servers, not others
→ Eventually syncs
→ Better than cart being unavailable
\`\`\`

**ATM Withdrawal (CP):**
\`\`\`
Withdraw cash
→ Must check balance consistently
→ ATM goes offline if can't verify
→ Better than overdraft
\`\`\`

## Visual

\`\`\`
        Consistency
           /\\
          /  \\
         /    \\
        /  CA  \\
       /        \\
      /          \\
     /____________\\
Partition      Availability
Tolerance

Pick 2!
\`\`\``
  },
  {
    id: 'message-queues',
    number: 21,
    title: 'Message Queues',
    icon: MessageSquare,
    color: 'from-purple-500 to-indigo-600',
    description: 'Asynchronous communication between services',
    keyPoints: [
      'Decouple services',
      'Asynchronous processing',
      'Retry on failure',
      'Examples: RabbitMQ, Kafka, SQS'
    ],
    realWorld: 'Like a mailbox: leave messages for pickup later',
    content: `# Message Queues

## What is a Message Queue?

System for asynchronous communication between services.

\`\`\`
[Producer] → [Queue] → [Consumer]
 (Sender)              (Processor)
\`\`\`

## Why Use Queues?

### Synchronous (Without Queue)
\`\`\`javascript
// User waits for email to send (slow)
async function signup(user) {
  await createUser(user); // Fast
  await sendEmail(user);  // Slow (3 seconds)
  return { success: true };
}
// User waits 3+ seconds
\`\`\`

### Asynchronous (With Queue)
\`\`\`javascript
// User gets instant response
async function signup(user) {
  await createUser(user);
  await queue.add('send-email', { user }); // Instant
  return { success: true };
}
// User waits 0.1 seconds

// Worker processes separately
worker.process('send-email', async (job) => {
  await sendEmail(job.data.user);
});
\`\`\`

## Use Cases

✅ **Email sending**
✅ **Image/video processing**
✅ **Report generation**
✅ **Notifications**
✅ **Batch jobs**

## Message Queue Pattern

\`\`\`
[API Server]
     ↓
  [Queue]
     ↓
[Worker 1]
[Worker 2]
[Worker 3]
(Process jobs in parallel)
\`\`\`

## RabbitMQ Example

\`\`\`javascript
// Producer
const channel = await connection.createChannel();
await channel.assertQueue('emails');
channel.sendToQueue('emails', Buffer.from(JSON.stringify({
  to: 'user@example.com',
  subject: 'Welcome'
})));

// Consumer
channel.consume('emails', async (msg) => {
  const data = JSON.parse(msg.content);
  await sendEmail(data);
  channel.ack(msg); // Acknowledge processed
});
\`\`\`

## Bull (Node.js)

\`\`\`javascript
const Queue = require('bull');
const emailQueue = new Queue('email', 'redis://localhost');

// Add job
await emailQueue.add({
  to: 'user@example.com',
  subject: 'Welcome'
});

// Process job
emailQueue.process(async (job) => {
  await sendEmail(job.data);
});
\`\`\`

## Features

### 1. Retry on Failure
\`\`\`javascript
emailQueue.add(data, {
  attempts: 3,
  backoff: {
    type: 'exponential',
    delay: 2000
  }
});
\`\`\`

### 2. Priority
\`\`\`javascript
queue.add(data, { priority: 1 }); // High priority
queue.add(data, { priority: 10 }); // Low priority
\`\`\`

### 3. Delayed Jobs
\`\`\`javascript
queue.add(data, { delay: 60000 }); // Process in 1 minute
\`\`\`

## Benefits

✅ **Decoupling:** Services independent
✅ **Scalability:** Add more workers
✅ **Reliability:** Retry failures
✅ **Performance:** Non-blocking

## Real-World Examples

**Uber:** Trip requests in queue
**YouTube:** Video processing queue
**E-commerce:** Order processing queue`
  },
  {
    id: 'websockets',
    number: 22,
    title: 'WebSockets',
    icon: Signal,
    color: 'from-green-500 to-emerald-600',
    description: 'Real-time bidirectional communication',
    keyPoints: [
      'Full-duplex communication',
      'Persistent connection',
      'Real-time updates',
      'Use cases: Chat, live feeds, gaming'
    ],
    realWorld: 'Like a phone call: both sides can talk anytime vs sending letters back and forth',
    content: `# WebSockets

## What are WebSockets?

Protocol for real-time, bidirectional communication.

## HTTP vs WebSocket

### HTTP (Request-Response)
\`\`\`
Client: "Give me data" →
                        ← Server: "Here's data"
Client: "Give me data" →
                        ← Server: "Here's data"
\`\`\`

### WebSocket (Persistent)
\`\`\`
Client ←→ Server
(Both can send anytime)
\`\`\`

## Use Cases

✅ **Chat applications**
✅ **Live notifications**
✅ **Real-time dashboards**
✅ **Multiplayer games**
✅ **Stock tickers**
✅ **Collaborative editing**

## How WebSockets Work

\`\`\`
1. HTTP Upgrade Request
   GET /chat HTTP/1.1
   Upgrade: websocket

2. Server Accepts
   HTTP/1.1 101 Switching Protocols
   Upgrade: websocket

3. WebSocket Connection Established
   (Persistent, bidirectional)
\`\`\`

## Server Implementation

\`\`\`javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Receive message
  ws.on('message', (message) => {
    console.log('Received:', message);

    // Send to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Send message
  ws.send('Welcome to chat!');
});
\`\`\`

## Client Implementation

\`\`\`javascript
const ws = new WebSocket('ws://localhost:8080');

// Connection opened
ws.onopen = () => {
  console.log('Connected');
  ws.send('Hello Server!');
};

// Receive message
ws.onmessage = (event) => {
  console.log('Message:', event.data);
};

// Connection closed
ws.onclose = () => {
  console.log('Disconnected');
};

// Send message
document.querySelector('#send').onclick = () => {
  ws.send(messageInput.value);
};
\`\`\`

## Chat Example

\`\`\`javascript
// Server
wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    const data = JSON.parse(msg);

    // Broadcast to all
    wss.clients.forEach(client => {
      client.send(JSON.stringify({
        user: data.user,
        text: data.text,
        time: new Date()
      }));
    });
  });
});

// Client
ws.send(JSON.stringify({
  user: 'John',
  text: 'Hello everyone!'
}));
\`\`\`

## Socket.IO (Library)

Easier than raw WebSockets, with fallbacks.

\`\`\`javascript
// Server
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast
  });
});

// Client
const socket = io('http://localhost:3000');

socket.emit('chat message', 'Hello!');

socket.on('chat message', (msg) => {
  console.log(msg);
});
\`\`\`

## Benefits

✅ **Real-time:** Instant updates
✅ **Efficient:** No polling overhead
✅ **Bidirectional:** Server can push
✅ **Low latency:** Persistent connection

## When NOT to Use

❌ **RESTful APIs:** Use HTTP
❌ **Static content:** Use CDN
❌ **One-way updates:** Use Server-Sent Events (SSE)`
  },
  {
    id: 'microservices',
    number: 23,
    title: 'Microservices',
    icon: Layers,
    color: 'from-blue-500 to-purple-600',
    description: 'Architecture splitting app into small, independent services',
    keyPoints: [
      'Small, focused services',
      'Independent deployment',
      'Different tech stacks possible',
      'Communication via APIs'
    ],
    realWorld: 'Like specialized shops: bakery, butcher, grocery vs one superstore',
    content: `# Microservices

## Monolith vs Microservices

### Monolith
\`\`\`
┌─────────────────────┐
│                     │
│  Auth + Users +     │
│  Products + Orders  │
│  (One codebase)     │
│                     │
└─────────────────────┘
\`\`\`

### Microservices
\`\`\`
┌────────┐ ┌─────────┐ ┌──────────┐
│  Auth  │ │  Users  │ │ Products │
└────────┘ └─────────┘ └──────────┘
┌────────┐ ┌─────────┐
│ Orders │ │ Payment │
└────────┘ └─────────┘
\`\`\`

## Microservices Architecture

\`\`\`
[API Gateway]
      |
   ┌──┴──┬──────┬────────┐
   ▼     ▼      ▼        ▼
[Auth][User][Product][Order]
   |     |      |        |
   └─────┴──────┴────────┘
      [Message Queue]
           |
      [Database]
\`\`\`

## Characteristics

✅ **Single Responsibility:** One service, one job
✅ **Independent:** Deploy separately
✅ **Decentralized:** Each has own database
✅ **Technology Agnostic:** Use different languages

## Example: E-commerce

\`\`\`
Auth Service (Node.js)
  - Login, Register, JWT

User Service (Python)
  - Profile, Preferences

Product Service (Go)
  - Catalog, Search

Order Service (Node.js)
  - Cart, Checkout

Payment Service (Java)
  - Stripe, PayPal
\`\`\`

## Communication

### Synchronous (HTTP/REST)
\`\`\`javascript
// Order service calls Product service
const product = await fetch('http://product-service/api/products/123');
\`\`\`

### Asynchronous (Message Queue)
\`\`\`javascript
// Order placed → Emit event
queue.publish('order.created', { orderId: 123 });

// Other services listen
queue.subscribe('order.created', (order) => {
  // Payment service processes payment
  // Inventory service updates stock
  // Email service sends confirmation
});
\`\`\`

## API Gateway

Single entry point for clients.

\`\`\`
[Mobile App]
[Web App]     → [API Gateway] → [Auth Service]
[Desktop App]                 → [User Service]
                              → [Product Service]
\`\`\`

## Advantages

✅ **Scalability:** Scale services independently
✅ **Flexibility:** Different technologies
✅ **Fault Isolation:** One service fails, others work
✅ **Team Autonomy:** Teams own services

## Disadvantages

❌ **Complexity:** More moving parts
❌ **Network Latency:** Services call each other
❌ **Data Consistency:** Distributed transactions
❌ **Testing:** Integration testing harder

## When to Use

- Large, complex applications
- Multiple teams
- Different scaling needs
- Rapid development

## When NOT to Use

- Small applications
- Simple requirements
- Small team
- Starting out (start monolith)

## Real-World Examples

**Netflix:** 700+ microservices
**Uber:** Microservices for trips, payments, users
**Amazon:** Each page is multiple services`
  },
  {
    id: 'rate-limiting',
    number: 24,
    title: 'Rate Limiting',
    icon: Gauge,
    color: 'from-red-500 to-orange-600',
    description: 'Controlling number of requests a user can make',
    keyPoints: [
      'Prevent abuse and overload',
      'Token bucket algorithm',
      'Per user or IP limits',
      'Return 429 Too Many Requests'
    ],
    realWorld: 'Like a bouncer: only allow X people per hour',
    content: `# Rate Limiting

## What is Rate Limiting?

Controlling how many requests a user can make in a time period.

\`\`\`
User: 100 requests/minute allowed

Request 1-100: ✅ Allowed
Request 101: ❌ 429 Too Many Requests
\`\`\`

## Why Rate Limit?

✅ **Prevent abuse:** Stop spammers/bots
✅ **Fair usage:** Ensure fair access
✅ **Protect servers:** Avoid overload
✅ **Cost control:** Limit API usage

## Algorithms

### 1. Fixed Window
\`\`\`
0-60s: 100 requests allowed
60-120s: Reset, 100 more allowed
\`\`\`

**Problem:** Burst at boundary
\`\`\`
59s: 100 requests
60s: 100 requests
= 200 requests in 2 seconds!
\`\`\`

### 2. Sliding Window
\`\`\`
Rolling 60-second window
Any 60s period: max 100 requests
\`\`\`

### 3. Token Bucket
\`\`\`
Bucket holds 100 tokens
Each request consumes 1 token
Tokens refill at rate (e.g., 10/second)
\`\`\`

## Implementation

### Express.js
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);
\`\`\`

### Redis (Distributed)
\`\`\`javascript
async function checkRateLimit(userId) {
  const key = \`rate:\${userId}\`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, 60); // 60 seconds
  }

  if (current > 100) {
    throw new Error('Rate limit exceeded');
  }
}

app.get('/api/data', async (req, res) => {
  try {
    await checkRateLimit(req.user.id);
    // Process request
  } catch (err) {
    res.status(429).json({ error: 'Too many requests' });
  }
});
\`\`\`

## Response Headers

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640000000
\`\`\`

## Strategies

### Per User
\`\`\`
User ID 123: 100 req/min
User ID 456: 100 req/min
\`\`\`

### Per IP
\`\`\`
IP 1.2.3.4: 100 req/min
\`\`\`

### Per API Key
\`\`\`
Free tier: 100 req/hour
Pro tier: 10,000 req/hour
\`\`\`

### Per Endpoint
\`\`\`
/api/search: 10 req/min (expensive)
/api/users: 100 req/min (cheap)
\`\`\`

## Real-World Examples

**Twitter API:** 300 tweets/3 hours
**GitHub API:** 5,000 requests/hour
**Stripe API:** 100 req/second`
  },
  {
    id: 'api-gateway',
    number: 25,
    title: 'API Gateway',
    icon: Key,
    color: 'from-indigo-500 to-purple-600',
    description: 'Single entry point for all client requests',
    keyPoints: [
      'Single entry point',
      'Request routing',
      'Authentication & authorization',
      'Rate limiting, logging'
    ],
    realWorld: 'Like a hotel reception: single point directing you to services',
    content: `# API Gateway

## What is an API Gateway?

Single entry point that routes requests to microservices.

\`\`\`
[Clients]
    |
[API Gateway]
    |
┌───┴───┬─────────┬────────┐
▼       ▼         ▼        ▼
[Auth][User][Product][Order]
\`\`\`

## Without API Gateway

\`\`\`
Mobile App needs:
  - http://auth.service.com/login
  - http://user.service.com/profile
  - http://product.service.com/search

(Client knows all services)
\`\`\`

## With API Gateway

\`\`\`
Mobile App calls:
  - https://api.example.com/login
  - https://api.example.com/profile
  - https://api.example.com/search

Gateway routes internally
\`\`\`

## Responsibilities

### 1. Routing
\`\`\`
/api/auth/*     → Auth Service
/api/users/*    → User Service
/api/products/* → Product Service
\`\`\`

### 2. Authentication
\`\`\`
Check JWT token before routing
\`\`\`

### 3. Rate Limiting
\`\`\`
Enforce limits per user/IP
\`\`\`

### 4. Load Balancing
\`\`\`
Distribute to multiple instances
\`\`\`

### 5. Caching
\`\`\`
Cache frequent requests
\`\`\`

### 6. Logging & Monitoring
\`\`\`
Log all requests centrally
\`\`\`

## Implementation

### Express.js
\`\`\`javascript
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Auth middleware
app.use(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Rate limiting
app.use(rateLimit({ windowMs: 60000, max: 100 }));

// Route to services
app.use('/api/auth', createProxyMiddleware({
  target: 'http://auth-service:3001',
  changeOrigin: true
}));

app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3002',
  changeOrigin: true
}));

app.use('/api/products', createProxyMiddleware({
  target: 'http://product-service:3003',
  changeOrigin: true
}));

app.listen(8080);
\`\`\`

### Kong (Popular Gateway)
\`\`\`yaml
services:
  - name: user-service
    url: http://user-service:3000
    routes:
      - paths: [/api/users]
    plugins:
      - name: rate-limiting
        config:
          minute: 100
      - name: jwt
\`\`\`

## Benefits

✅ **Simplified client:** One endpoint
✅ **Security:** Central auth/rate limiting
✅ **Flexibility:** Change services without client changes
✅ **Monitoring:** Central logging

## Disadvantages

❌ **Single point of failure:** Gateway down = all down
❌ **Bottleneck:** All traffic goes through
❌ **Complexity:** Another layer to manage

## Popular Tools

- Kong
- AWS API Gateway
- Azure API Management
- Google Cloud Endpoints
- Express Gateway`
  },
  {
    id: 'webhooks',
    number: 26,
    title: 'Webhooks',
    icon: Webhook,
    color: 'from-green-500 to-teal-600',
    description: 'HTTP callbacks for event-driven notifications',
    keyPoints: [
      'Server-to-server notifications',
      'Event-driven',
      'No polling needed',
      'Examples: Stripe, GitHub, Slack'
    ],
    realWorld: 'Like a doorbell: rings when someone arrives instead of checking door constantly',
    content: `# Webhooks

## What are Webhooks?

HTTP callbacks that notify your server when events occur.

## Polling vs Webhooks

### Polling (Old Way)
\`\`\`
Every 10 seconds:
  Client: "Any new data?" →
                          ← Server: "No"
  Client: "Any new data?" →
                          ← Server: "No"
  Client: "Any new data?" →
                          ← Server: "Yes! Here's data"

(Wasteful, inefficient)
\`\`\`

### Webhooks (Better)
\`\`\`
Client: "Call me at https://myapp.com/webhook when event happens"

(Later, when event occurs)

Server: POST https://myapp.com/webhook
        Body: { event: 'payment_success', ... }

(Efficient, real-time)
\`\`\`

## How Webhooks Work

\`\`\`
1. Register webhook URL
   POST https://api.stripe.com/webhooks
   { url: "https://myapp.com/webhook" }

2. Event occurs (e.g., payment)

3. Stripe sends POST request
   POST https://myapp.com/webhook
   {
     event: "payment_success",
     amount: 1000,
     customer: "cus_123"
   }

4. Your server processes event
\`\`\`

## Implementation

### Receiving Webhooks
\`\`\`javascript
app.post('/webhook/stripe', async (req, res) => {
  const event = req.body;

  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data);
      break;

    case 'payment_intent.failed':
      await handlePaymentFailure(event.data);
      break;
  }

  // Always respond quickly
  res.status(200).send('Received');

  // Process asynchronously
  await queue.add('process-webhook', event);
});
\`\`\`

### Sending Webhooks
\`\`\`javascript
async function sendWebhook(url, event) {
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
  } catch (err) {
    // Retry logic
    await retryWebhook(url, event);
  }
}

// When event occurs
await sendWebhook(user.webhookUrl, {
  event: 'order.created',
  data: { orderId: 123, amount: 100 }
});
\`\`\`

## Security

### 1. Verify Signature
\`\`\`javascript
const crypto = require('crypto');

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const payload = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }

  // Process webhook
});
\`\`\`

### 2. Use HTTPS
Only accept webhooks over HTTPS

### 3. Validate Payload
Check expected fields exist

## Best Practices

### For Receivers
✅ Respond quickly (200 OK)
✅ Process asynchronously
✅ Handle duplicates (idempotency)
✅ Verify signatures

### For Senders
✅ Retry on failure (with backoff)
✅ Include signature
✅ Timeout after reasonable time
✅ Allow webhook URL configuration

## Retry Logic

\`\`\`javascript
async function sendWithRetry(url, data, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        timeout: 5000
      });
      return; // Success
    } catch (err) {
      if (i === retries - 1) throw err;
      await sleep(Math.pow(2, i) * 1000); // Exponential backoff
    }
  }
}
\`\`\`

## Real-World Examples

**Stripe:** Payment events
**GitHub:** Push, PR, issues
**Slack:** Message events
**Twilio:** SMS delivery status
**Shopify:** Order creation`
  },
  {
    id: 'idempotency',
    number: 27,
    title: 'Idempotency',
    icon: RefreshCw,
    color: 'from-cyan-500 to-blue-600',
    description: 'Operations that produce same result when repeated',
    keyPoints: [
      'Safe to retry',
      'Same result every time',
      'Critical for payments',
      'Use idempotency keys'
    ],
    realWorld: 'Like a light switch: pressing ON when already ON does nothing',
    content: `# Idempotency

## What is Idempotency?

An operation that produces the same result no matter how many times you execute it.

## Examples

### Idempotent (Safe) ✅
\`\`\`
GET /users/123
  → Always returns same user

PUT /users/123 { name: "John" }
  → Always sets name to "John"

DELETE /users/123
  → First time: deletes user
  → Second time: user already deleted (same result)
\`\`\`

### NOT Idempotent ❌
\`\`\`
POST /users { name: "John" }
  → Creates new user each time!
  → Result: Multiple duplicate users

POST /payments { amount: 100 }
  → Charges $100 each time!
  → Result: Customer charged multiple times
\`\`\`

## Why It Matters

### Network Failure Scenario
\`\`\`
1. Client: "Charge $100"
2. Server: Charges card, sends response
3. Network fails, client doesn't receive response
4. Client retries: "Charge $100" (thinks it failed)
5. Server: Charges AGAIN!
6. Result: Customer charged $200! ❌
\`\`\`

## Solution: Idempotency Keys

\`\`\`javascript
// Client generates unique key
const idempotencyKey = uuidv4();

// First request
fetch('/api/payments', {
  method: 'POST',
  headers: {
    'Idempotency-Key': idempotencyKey
  },
  body: JSON.stringify({ amount: 100 })
});

// Retry with SAME key
fetch('/api/payments', {
  method: 'POST',
  headers: {
    'Idempotency-Key': idempotencyKey // Same key!
  },
  body: JSON.stringify({ amount: 100 })
});

// Server: "Already processed this key, return cached result"
// Result: Customer charged only once ✅
\`\`\`

## Server Implementation

\`\`\`javascript
const processedKeys = new Map(); // In production, use Redis

app.post('/api/payments', async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];

  // Check if already processed
  if (processedKeys.has(idempotencyKey)) {
    return res.json(processedKeys.get(idempotencyKey));
  }

  // Process payment
  const result = await stripe.charges.create({
    amount: req.body.amount,
    currency: 'usd'
  });

  // Store result
  processedKeys.set(idempotencyKey, result);

  res.json(result);
});
\`\`\`

## Redis Implementation

\`\`\`javascript
app.post('/api/payments', async (req, res) => {
  const key = req.headers['idempotency-key'];
  const cacheKey = \`idempotency:\${key}\`;

  // Check cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  // Process
  const result = await processPayment(req.body);

  // Cache for 24 hours
  await redis.set(cacheKey, JSON.stringify(result), 'EX', 86400);

  res.json(result);
});
\`\`\`

## HTTP Methods

**Idempotent:**
- GET (read)
- PUT (set value)
- DELETE (remove)

**NOT Idempotent:**
- POST (create new)

## Making POST Idempotent

\`\`\`javascript
// NOT idempotent
POST /users
Body: { name: "John" }
→ Creates new user each time

// Idempotent with key
POST /users
Headers: { "Idempotency-Key": "abc123" }
Body: { name: "John" }
→ Creates user once, returns same user on retry
\`\`\`

## Database Operations

### Not Idempotent
\`\`\`sql
UPDATE accounts SET balance = balance + 100 WHERE id = 1;
-- Run twice = +200 ❌
\`\`\`

### Idempotent
\`\`\`sql
UPDATE accounts SET balance = 1000 WHERE id = 1;
-- Run multiple times = 1000 ✅
\`\`\`

## Real-World Examples

**Stripe:** Idempotency keys for payments
**AWS:** Idempotent PUT operations
**Kubernetes:** Declarative config (idempotent)

## Best Practices

✅ Use idempotency keys for critical operations
✅ Store keys for 24 hours minimum
✅ Return same response for duplicate keys
✅ Use UUIDs for keys`
  },
  {
    id: 'blob-storage',
    number: 28,
    title: 'Blob Storage',
    icon: HardDrive,
    color: 'from-orange-500 to-red-600',
    description: 'Object storage for large unstructured data',
    keyPoints: [
      'Store images, videos, files',
      'Highly scalable',
      'Cheaper than databases',
      'Examples: S3, Azure Blob, GCS'
    ],
    realWorld: 'Like a warehouse for boxes: each box (blob) has a unique address',
    content: `# Blob Storage

## What is Blob Storage?

Object storage for unstructured data (files, images, videos).

**Blob** = Binary Large Object

## Use Cases

✅ **Images and videos**
✅ **User uploads**
✅ **Backups**
✅ **Static website hosting**
✅ **Log files**
✅ **Data archives**

## Database vs Blob Storage

### ❌ Don't Store in Database
\`\`\`sql
-- Bad: Storing files in DB
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  profile_image BLOB -- DON'T DO THIS!
);

Problems:
- Slow queries
- Large database size
- Expensive
- Hard to cache
\`\`\`

### ✅ Use Blob Storage
\`\`\`sql
-- Good: Store URL only
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  profile_image_url VARCHAR(255) -- URL to S3/Blob
);
\`\`\`

\`\`\`
Actual file stored in:
https://mybucket.s3.amazonaws.com/users/123/profile.jpg
\`\`\`

## AWS S3 Example

### Upload File
\`\`\`javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

async function uploadFile(file) {
  const params = {
    Bucket: 'my-bucket',
    Key: \`users/\${userId}/\${file.name}\`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read' // or 'private'
  };

  const result = await s3.upload(params).promise();

  return result.Location; // URL to file
  // https://my-bucket.s3.amazonaws.com/users/123/avatar.jpg
}
\`\`\`

### Download/Access File
\`\`\`javascript
// Public: Direct URL
<img src="https://my-bucket.s3.amazonaws.com/users/123/avatar.jpg">

// Private: Signed URL (temporary)
const url = s3.getSignedUrl('getObject', {
  Bucket: 'my-bucket',
  Key: 'users/123/private-doc.pdf',
  Expires: 3600 // 1 hour
});
// https://...?AWSAccessKeyId=...&Expires=...&Signature=...
\`\`\`

### Delete File
\`\`\`javascript
await s3.deleteObject({
  Bucket: 'my-bucket',
  Key: 'users/123/avatar.jpg'
}).promise();
\`\`\`

## Express Upload Example

\`\`\`javascript
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  // Upload to S3
  const url = await uploadToS3(file);

  // Save URL to database
  await db.query('UPDATE users SET avatar = ? WHERE id = ?', [url, userId]);

  res.json({ url });
});
\`\`\`

## Storage Classes (S3)

### Standard
- Frequent access
- Most expensive
- Fastest

### Infrequent Access (IA)
- Access occasionally
- Cheaper
- Retrieval fee

### Glacier
- Archive, rarely accessed
- Cheapest
- Slow retrieval (hours)

## Benefits

✅ **Scalability:** Unlimited storage
✅ **Durability:** 99.999999999% (11 nines)
✅ **Cost-effective:** Pay for what you use
✅ **CDN integration:** Fast global delivery
✅ **Versioning:** Keep file history

## Security

### 1. Private by Default
\`\`\`javascript
// Upload private
ACL: 'private'

// Access via signed URLs
const url = s3.getSignedUrl(...);
\`\`\`

### 2. Bucket Policies
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket/public/*"
  }]
}
\`\`\`

### 3. CORS
\`\`\`json
{
  "AllowedOrigins": ["https://myapp.com"],
  "AllowedMethods": ["GET", "PUT", "POST"],
  "AllowedHeaders": ["*"]
}
\`\`\`

## Popular Services

- **AWS S3:** Most popular
- **Google Cloud Storage (GCS)**
- **Azure Blob Storage**
- **Cloudflare R2:** No egress fees`
  },
  {
    id: 'consistency-patterns',
    number: 29,
    title: 'Consistency Patterns',
    icon: RefreshCw,
    color: 'from-purple-500 to-pink-600',
    description: 'How data stays synchronized across distributed systems',
    keyPoints: [
      'Strong consistency: Immediate sync',
      'Eventual consistency: Syncs later',
      'Trade-off: Consistency vs Availability',
      'Choose based on use case'
    ],
    realWorld: 'Strong = bank balance (exact). Eventual = social media likes (approximate is OK)',
    content: `# Consistency Patterns

## What is Consistency?

How quickly data synchronizes across distributed systems.

## Strong Consistency

All nodes see same data immediately.

\`\`\`
Write to Node 1 → Immediately visible on Node 2
\`\`\`

**Example:**
\`\`\`
1. Update balance: $1000 → $900
2. All replicas see $900 immediately
3. Read from any node: $900
\`\`\`

**Pros:**
✅ Always accurate
✅ Simple reasoning

**Cons:**
❌ Slower writes
❌ Lower availability

**Use Cases:**
- Banking
- Financial transactions
- Inventory management

## Eventual Consistency

Nodes sync eventually, not immediately.

\`\`\`
Write to Node 1 → Node 2 updates later (milliseconds to seconds)
\`\`\`

**Example:**
\`\`\`
1. Like a post on Node 1
2. Node 2 shows old count (for a moment)
3. Eventually syncs
4. All nodes show correct count
\`\`\`

**Pros:**
✅ Fast writes
✅ High availability
✅ Better scalability

**Cons:**
❌ Temporary inconsistency
❌ Complex handling

**Use Cases:**
- Social media (likes, views)
- DNS
- Caching

## Consistency Levels

### 1. Strong Consistency
\`\`\`
Write → Wait for all replicas → Confirm
Read → Always latest data
\`\`\`

### 2. Eventual Consistency
\`\`\`
Write → Async replication
Read → Might be stale temporarily
\`\`\`

### 3. Read-Your-Writes
\`\`\`
Write → Confirm
User reads → Sees their own write
Other users → Might see old data temporarily
\`\`\`

## Implementation

### Strong Consistency
\`\`\`javascript
// All replicas must confirm
async function updateUser(id, data) {
  const promises = replicas.map(replica =>
    replica.update(id, data)
  );

  await Promise.all(promises); // Wait for ALL
  return { success: true };
}
\`\`\`

### Eventual Consistency
\`\`\`javascript
// Primary writes, replicas sync async
async function updateUser(id, data) {
  await primary.update(id, data);

  // Async replication
  replicas.forEach(replica =>
    replica.update(id, data).catch(err => retry(err))
  );

  return { success: true }; // Don't wait
}
\`\`\`

### Read-Your-Writes
\`\`\`javascript
async function updatePost(userId, postId, data) {
  await db.update(postId, data);

  // Store version
  await cache.set(\`user:\${userId}:version\`, Date.now());
}

async function getPost(userId, postId) {
  const userVersion = await cache.get(\`user:\${userId}:version\`);

  // Read from primary if user recently wrote
  if (userVersion && Date.now() - userVersion < 5000) {
    return primary.get(postId);
  }

  // Otherwise read from replica
  return replica.get(postId);
}
\`\`\`

## Quorum

Require majority agreement for reads/writes.

\`\`\`
3 nodes:
Write to 2 nodes (majority) → Confirm
Read from 2 nodes → Use latest
\`\`\`

## Real-World Examples

**Amazon DynamoDB:**
- Configurable consistency
- Strong or eventual

**Cassandra:**
- Tunable consistency
- ONE, QUORUM, ALL

**MongoDB:**
- Read concern
- Write concern

## Choosing Consistency

| Use Case | Pattern |
|----------|---------|
| Banking | Strong |
| Social media | Eventual |
| E-commerce stock | Strong |
| View counts | Eventual |
| User profile | Read-your-writes |`
  },
  {
    id: 'denormalization',
    number: 30,
    title: 'Denormalization',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    description: 'Duplicating data to improve read performance',
    keyPoints: [
      'Opposite of normalization',
      'Trade write complexity for read speed',
      'Reduce JOINs',
      'Common in NoSQL and caching'
    ],
    realWorld: 'Like keeping a copy of your house key at work: convenient but must update both if changed',
    content: `# Denormalization

## What is Denormalization?

Intentionally duplicating data to improve read performance.

## Normalized vs Denormalized

### Normalized (Traditional)
\`\`\`sql
users:
| id | name  |
|----|-------|
| 1  | John  |

posts:
| id | user_id | title        |
|----|---------|--------------|
| 1  | 1       | Hello World  |

-- Need JOIN to get author name
SELECT posts.*, users.name
FROM posts
JOIN users ON posts.user_id = users.id;
\`\`\`

### Denormalized
\`\`\`sql
posts:
| id | title       | author_id | author_name |
|----|-------------|-----------|-------------|
| 1  | Hello World | 1         | John        |

-- No JOIN needed!
SELECT * FROM posts;
\`\`\`

## When to Denormalize

✅ **High read traffic:** Reads >> Writes
✅ **Slow JOINs:** Complex multi-table queries
✅ **Scalability:** Easier to shard
✅ **Caching:** Easier to cache complete objects

## Pros and Cons

**Pros:**
✅ Faster reads (no JOINs)
✅ Simpler queries
✅ Better scalability

**Cons:**
❌ Data duplication
❌ Harder to update
❌ Inconsistency risk
❌ More storage

## NoSQL Denormalization

### MongoDB Example
\`\`\`javascript
// Normalized (multiple collections)
{
  _id: 1,
  title: "Hello World",
  author_id: 123
}

// Need separate query for author
db.users.findOne({ _id: 123 })

// Denormalized (embedded)
{
  _id: 1,
  title: "Hello World",
  author: {
    id: 123,
    name: "John",
    email: "john@example.com"
  }
}

// One query gets everything!
\`\`\`

## Update Challenges

### Problem
\`\`\`javascript
// User changes name
user.name = "Jane"

// Must update:
// 1. users collection
// 2. All posts by this user
// 3. All comments by this user
// 4. All messages by this user

// Lots of updates! ❌
\`\`\`

### Solution 1: Accept Inconsistency
\`\`\`
Old posts might show old name (OK for some apps)
\`\`\`

### Solution 2: Background Job
\`\`\`javascript
// Update user
await db.users.update({ name: "Jane" });

// Queue background job
queue.add('update-denormalized-data', { userId: 123 });

// Job updates all denormalized data
\`\`\`

### Solution 3: Don't Denormalize Changing Data
\`\`\`javascript
// Denormalize rarely-changing data only
{
  post: "...",
  author_name: "John", // Changes rarely
  created_at: "..." // Never changes
}

// Don't denormalize frequently-changing data
{
  post: "...",
  author_id: 123, // Keep ID, fetch current follower count
}
\`\`\`

## Caching as Denormalization

\`\`\`javascript
// Cache denormalized data
async function getPost(id) {
  const cached = await redis.get(\`post:\${id}:full\`);
  if (cached) return cached;

  // Fetch from DB with JOINs
  const post = await db.query(\`
    SELECT posts.*, users.name as author_name,
           COUNT(comments.id) as comment_count
    FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN comments ON comments.post_id = posts.id
    WHERE posts.id = ?
  \`, id);

  // Cache denormalized result
  await redis.set(\`post:\${id}:full\`, post, 'EX', 3600);
  return post;
}
\`\`\`

## Real-World Examples

**Reddit:**
- Post has comment_count (denormalized)
- Faster than counting every time

**Twitter:**
- Tweet has like_count, retweet_count
- Updated asynchronously

**YouTube:**
- Video has view_count
- Eventual consistency OK

## Best Practices

✅ Denormalize read-heavy data
✅ Denormalize rarely-changing data
✅ Use background jobs for updates
✅ Accept eventual consistency
✅ Cache denormalized results

## When NOT to Denormalize

❌ Financial data (consistency critical)
❌ Frequently changing data
❌ Small datasets (JOINs are fast)
❌ Complex update logic`
  }
];
