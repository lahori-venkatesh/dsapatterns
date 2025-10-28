export interface SystemDesignBlog {
  id: string;
  title: string;
  description: string;
  content: string;
  readTime: number;
  category: string;
  tags: string[];
}

export const systemDesignBlogs: SystemDesignBlog[] = [
  {
    id: 'client-server',
    title: 'Client-Server Architecture',
    description: 'Understanding the foundation of web applications and distributed systems',
    category: 'Fundamentals',
    tags: ['Architecture', 'Basics', 'Web Development'],
    readTime: 15,
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
`
  },
  {
    id: 'ip-address',
    title: 'IP Address Explained',
    description: 'Understanding how computers are identified and communicate on networks',
    category: 'Networking',
    tags: ['Networking', 'Internet', 'IPv4', 'IPv6'],
    readTime: 15,
    content: `# IP Address (Internet Protocol Address)

## What is an IP Address?

An **IP Address** is a unique numerical label assigned to each device connected to a computer network. It's like a postal address for computers!

### 🏠 Real-World Analogy

Think of IP addresses like **home addresses**:
- Your house address: **"123 Main Street, City, ZIP"**
- Your computer's address: **"192.168.1.10"**

Just as mail needs your address to reach you, data packets need IP addresses to reach the right device.

## Types of IP Addresses

### 1. **IPv4 (Internet Protocol version 4)**

Most common format: **192.168.1.1**

**Structure:**
- 4 numbers separated by dots
- Each number: 0-255 (8 bits each)
- Total: 32 bits
- **Range**: 0.0.0.0 to 255.255.255.255
- **Total addresses**: ~4.3 billion

**Example:**
\`\`\`
142.250.185.46  (google.com)
172.217.14.206  (youtube.com)
13.107.42.14    (microsoft.com)
\`\`\`

### 2. **IPv6 (Internet Protocol version 6)**

Newer format: **2001:0db8:85a3:0000:0000:8a2e:0370:7334**

**Structure:**
- 8 groups separated by colons
- Each group: hexadecimal (0-9, a-f)
- Total: 128 bits
- **Total addresses**: 340 undecillion (practically unlimited!)

**Example:**
\`\`\`
2607:f8b0:4004:c07::66  (google.com IPv6)
\`\`\`

## IP Address Classes

### IPv4 Classes

\`\`\`
Class A: 0.0.0.0 to 127.255.255.255
  - Large networks (millions of hosts)
  - Example: 10.0.0.0

Class B: 128.0.0.0 to 191.255.255.255
  - Medium networks (thousands of hosts)
  - Example: 172.16.0.0

Class C: 192.0.0.0 to 223.255.255.255
  - Small networks (254 hosts)
  - Example: 192.168.1.0

Class D: 224.0.0.0 to 239.255.255.255
  - Multicast groups

Class E: 240.0.0.0 to 255.255.255.255
  - Reserved for future use
\`\`\`

## Public vs Private IP Addresses

### **Public IP Address** 🌍
- Globally unique
- Visible on the internet
- Assigned by ISP
- Required for internet communication

**Example:** 203.0.113.45

### **Private IP Address** 🏠
- Used within local networks
- NOT visible on internet
- Reusable across different networks
- Free to use

**Private IP Ranges:**
\`\`\`
10.0.0.0 to 10.255.255.255      (Class A)
172.16.0.0 to 172.31.255.255    (Class B)
192.168.0.0 to 192.168.255.255  (Class C)
\`\`\`

### Network Example

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
(Private IPs)
\`\`\`

## Static vs Dynamic IP

### **Static IP Address** 📌
- Permanent, doesn't change
- Manually configured
- More expensive
- Use cases: Servers, websites, email servers

### **Dynamic IP Address** 🔄
- Changes periodically
- Automatically assigned (DHCP)
- Most home users have this
- More secure (harder to track)

## Special IP Addresses

\`\`\`
127.0.0.1 (localhost)
  - Refers to your own computer
  - Used for testing
  - "Talk to yourself"

0.0.0.0
  - "Any IP address" or "all interfaces"
  - Used in server configurations

255.255.255.255
  - Broadcast address
  - Send to all devices on network

192.168.1.1
  - Common router/gateway address
\`\`\`

## How IP Addresses Work

### Example: Visiting a Website

\`\`\`
1. You type: www.google.com in browser

2. DNS lookup converts domain to IP
   www.google.com → 142.250.185.46

3. Your computer (192.168.1.10) sends request:
   FROM: 192.168.1.10 (your private IP)
   TO: 142.250.185.46 (Google's public IP)

4. Router performs NAT:
   FROM: 203.0.113.5 (your public IP)
   TO: 142.250.185.46

5. Google's server responds:
   FROM: 142.250.185.46
   TO: 203.0.113.5

6. Router forwards to your device:
   TO: 192.168.1.10

7. Browser displays Google homepage
\`\`\`

## Subnet Mask

Divides IP address into network and host portions.

\`\`\`
IP Address:    192.168.1.10
Subnet Mask:   255.255.255.0

Network Part:  192.168.1.    (identifies the network)
Host Part:            .10    (identifies the device)
\`\`\`

## CIDR Notation

Shorter way to write subnet masks:

\`\`\`
192.168.1.0/24

/24 means first 24 bits are network portion
Equivalent to: 255.255.255.0
Usable hosts: 254 (2^8 - 2)
\`\`\`

## Finding Your IP Address

### On Mac/Linux:
\`\`\`bash
# Public IP
curl ifconfig.me

# Private IP
ifconfig | grep "inet "
ip addr show
\`\`\`

### On Windows:
\`\`\`bash
# Public IP (browser)
Visit: https://www.whatismyip.com

# Private IP (command)
ipconfig
\`\`\`

### In Code:
\`\`\`javascript
// Get client IP in Node.js
app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress;

  res.json({ ip });
});
\`\`\`

## Real-World Examples

### **Web Hosting**
\`\`\`
example.com → 192.0.2.1 (static public IP)
Visitors always reach same server
\`\`\`

### **Home Network**
\`\`\`
ISP assigns: 203.0.113.45 (dynamic public IP)
Your devices use: 192.168.1.x (private IPs)
\`\`\`

### **Cloud Servers**
\`\`\`
AWS EC2 instance: 54.23.45.67 (elastic/static IP)
Multiple services can share same IP with different ports
\`\`\`

## Security Considerations

⚠️ **Your IP Address Can Reveal:**
- Approximate geographic location
- Internet Service Provider
- Device type (sometimes)

🛡️ **Protection:**
- Use VPN to hide real IP
- Firewall to block unwanted connections
- Don't expose private IPs publicly

---

💡 **Key Takeaway**: IP addresses are like phone numbers for computers - they enable devices to find and communicate with each other across networks!
`
  },
  {
    id: 'dns',
    title: 'DNS - The Internet\'s Phonebook',
    description: 'How domain names are converted to IP addresses',
    category: 'Networking',
    tags: ['DNS', 'Networking', 'Internet', 'Domain Names'],
    readTime: 20,
    content: `# DNS (Domain Name System)

## What is DNS?

**DNS** is like the internet's phonebook. It translates human-readable domain names (like **google.com**) into IP addresses (like **142.250.185.46**) that computers use to communicate.

### 📞 Real-World Analogy

Think of DNS as a **phone book**:
- You know: "Pizza Hut" (domain name)
- Phone book tells you: "555-1234" (IP address)
- You dial the number to call

Without DNS, you'd have to remember: "142.250.185.46" instead of "google.com"!

## Why DNS is Needed

\`\`\`
Human-Friendly:  www.netflix.com  ✅
Computer-Friendly: 52.84.150.19    🤖

DNS bridges the gap!
\`\`\`

## How DNS Works

### Step-by-Step Flow

\`\`\`
1. You type: www.google.com in browser

2. Browser checks its cache:
   - Have I visited google.com recently?
   - If YES → Use cached IP
   - If NO → Continue to step 3

3. Check OS cache:
   - Operating system has DNS cache too
   - If found → Return IP
   - If NOT → Continue

4. Query DNS Resolver (usually your ISP):
   Your computer → "What's the IP for google.com?"

5. DNS Resolver checks its cache:
   - If found → Return IP
   - If NOT → Start DNS hierarchy lookup

6. Root DNS Server:
   Resolver → "Where is .com?"
   Root → "Ask TLD server at X.X.X.X"

7. TLD (Top-Level Domain) Server:
   Resolver → "Where is google.com?"
   TLD → "Ask authoritative server at Y.Y.Y.Y"

8. Authoritative DNS Server:
   Resolver → "What's IP for google.com?"
   Auth → "It's 142.250.185.46"

9. Response flows back:
   Auth → Resolver → Your Computer → Browser

10. Browser connects to 142.250.185.46
\`\`\`

## DNS Hierarchy

\`\`\`
Root DNS
    │
    ├── .com TLD
    │     ├── google.com (Authoritative)
    │     ├── amazon.com (Authoritative)
    │     └── facebook.com (Authoritative)
    │
    ├── .org TLD
    │     ├── wikipedia.org
    │     └── mozilla.org
    │
    └── .net TLD
          ├── speedtest.net
          └── sourceforge.net
\`\`\`

## DNS Record Types

### 1. **A Record** (Address Record)
Maps domain name to IPv4 address

\`\`\`
google.com.  A  142.250.185.46
\`\`\`

### 2. **AAAA Record**
Maps domain name to IPv6 address

\`\`\`
google.com.  AAAA  2607:f8b0:4004:c07::66
\`\`\`

### 3. **CNAME Record** (Canonical Name)
Alias pointing to another domain

\`\`\`
www.example.com.  CNAME  example.com.
blog.example.com. CNAME  example.com.
\`\`\`

### 4. **MX Record** (Mail Exchange)
Specifies mail servers for domain

\`\`\`
example.com.  MX  10 mail.example.com.
\`\`\`

### 5. **TXT Record**
Stores text information (verification, SPF, DKIM)

\`\`\`
example.com.  TXT  "v=spf1 include:_spf.google.com ~all"
\`\`\`

### 6. **NS Record** (Name Server)
Specifies authoritative DNS servers

\`\`\`
example.com.  NS  ns1.example.com.
example.com.  NS  ns2.example.com.
\`\`\`

## DNS Query Types

### 1. **Recursive Query** 🔄
DNS resolver does all the work

\`\`\`
Client: "Give me IP for google.com"
Resolver: "OK, let me find it for you"
[Resolver queries Root, TLD, Authoritative]
Resolver: "Here's the IP: 142.250.185.46"
\`\`\`

### 2. **Iterative Query** 🔀
Client does the work

\`\`\`
Client → Root: "Where's google.com?"
Root: "Ask TLD at X.X.X.X"

Client → TLD: "Where's google.com?"
TLD: "Ask Auth at Y.Y.Y.Y"

Client → Auth: "Where's google.com?"
Auth: "It's 142.250.185.46"
\`\`\`

## DNS Caching

Caching speeds up DNS lookups!

\`\`\`
Browser Cache: 60 seconds - 10 minutes
OS Cache: 1 minute - several hours
DNS Resolver Cache: Hours to days
\`\`\`

**TTL (Time To Live)**: How long to cache DNS record

\`\`\`
google.com.  300  A  142.250.185.46
             ↑
             TTL (5 minutes)
\`\`\`

## DNS Configuration

### Check DNS Records

\`\`\`bash
# Check A record
dig google.com A

# Check AAAA record (IPv6)
dig google.com AAAA

# Check MX records
dig google.com MX

# Detailed trace
dig +trace google.com

# Use specific DNS server
dig @8.8.8.8 google.com
\`\`\`

### Common DNS Servers

\`\`\`
Google Public DNS:
  8.8.8.8
  8.8.4.4

Cloudflare DNS:
  1.1.1.1
  1.0.0.1

Quad9:
  9.9.9.9

OpenDNS:
  208.67.222.222
  208.67.220.220
\`\`\`

## DNS in Code

### Node.js DNS Lookup

\`\`\`javascript
const dns = require('dns');

// Basic lookup
dns.lookup('google.com', (err, address, family) => {
  console.log('IP address:', address);  // 142.250.185.46
  console.log('IP version:', family);   // 4 (IPv4)
});

// Get all addresses
dns.resolve4('google.com', (err, addresses) => {
  console.log('All IPs:', addresses);
  // ['142.250.185.46', '142.250.185.78', ...]
});

// Reverse DNS (IP to domain)
dns.reverse('142.250.185.46', (err, hostnames) => {
  console.log('Hostnames:', hostnames);
  // ['lga25s64-in-f14.1e100.net']
});
\`\`\`

### Set Custom DNS in Application

\`\`\`javascript
const dns = require('dns');

// Use Cloudflare DNS
dns.setServers(['1.1.1.1', '1.0.0.1']);

// Then all DNS queries use Cloudflare
\`\`\`

## DNS Propagation

When you change DNS records, it takes time to propagate globally.

\`\`\`
Change DNS record:
  example.com → New IP: 203.0.113.5

Propagation Time: 0 minutes to 48 hours
  (typically 1-2 hours)

Why the delay?
  - Caching at multiple levels
  - TTL values
  - Different DNS servers update at different times
\`\`\`

## DNS Security

### **DNS Spoofing / Cache Poisoning** ⚠️
Attacker tricks DNS server to cache fake IP

\`\`\`
Attack:
  Real: bank.com → 203.0.113.10
  Fake: bank.com → 198.51.100.20 (attacker's server)

User visits "bank.com" → Sent to fake site!
\`\`\`

**Protection:**
- DNSSEC (DNS Security Extensions)
- Use trusted DNS servers
- HTTPS to verify server identity

### **DNSSEC**
Adds digital signatures to DNS records

\`\`\`
Client: "What's IP for secure.com?"
DNS: "203.0.113.15" + Digital Signature
Client: Verifies signature ✅
\`\`\`

### **DNS over HTTPS (DoH)**
Encrypts DNS queries

\`\`\`
Normal DNS: Plain text (ISP can see)
  You → ISP → "Looking up example.com"

DoH: Encrypted
  You → ISP → [encrypted data]
  ISP: 🤷 "Can't tell what they're looking up"
\`\`\`

## DNS Load Balancing

Use DNS to distribute traffic!

\`\`\`
example.com:
  - A 203.0.113.10  (Server 1)
  - A 203.0.113.20  (Server 2)
  - A 203.0.113.30  (Server 3)

DNS returns IPs in rotation (Round Robin)
Different users connect to different servers
\`\`\`

## Real-World Examples

### **Content Delivery (CDN)**

\`\`\`
User in USA queries netflix.com:
  → DNS returns IP of USA server

User in Japan queries netflix.com:
  → DNS returns IP of Japan server

Same domain, different IPs based on location!
\`\`\`

### **Failover**

\`\`\`
example.com:
  Primary: 203.0.113.10
  Backup:  203.0.113.20

If primary fails:
  DNS health check detects failure
  DNS starts returning backup IP
  Traffic automatically routed to backup
\`\`\`

---

💡 **Key Takeaway**: DNS is the internet's address book - it translates memorable domain names into IP addresses that computers use, making the web user-friendly!
`
  }
];
