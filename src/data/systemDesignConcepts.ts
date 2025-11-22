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
  }
];
