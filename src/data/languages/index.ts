import { sqlMastery } from './sql';
import { developmentMastery } from './development';
import { aptitudeMastery } from './aptitude';
import { machineCodingMastery } from './machineCoding';
import { hrInterviewMastery } from './hrInterview';
import { resumeLinkedInMastery } from './resumeLinkedIn';
import { systemDesignTopics } from './systemDesign';
import { databaseMastery } from './database';
import { projectsMastery } from './projects';

const systemDesignMastery = {
  id: 'system-design',
  language: 'System Design' as const,
  name: 'System Design',
  icon: 'Layers',
  description: 'Complete system design guide: HLD, LLD, distributed systems, databases, APIs, and scalability patterns',
  color: 'from-orange-500 to-red-600',
  totalProblems: systemDesignTopics.length,
  completedProblems: 0,
  problems: systemDesignTopics,
  interviewQuestions: [
    {
      id: 'sd-design-url-shortener',
      question: 'Design a URL Shortener like bit.ly',
      answer: `# URL Shortener System Design

## Requirements
### Functional:
- Given a long URL, generate a shorter unique URL
- When users access short URL, redirect to original URL
- URLs should expire after a default timespan
- Users can optionally set custom short links

### Non-Functional:
- High availability (service should always be up)
- Low latency (redirection should be fast)
- Shortened links should not be predictable

## Estimation
- 100 million URLs generated per month
- Read:Write ratio = 100:1 (more reads than writes)
- Storage: 100M URLs * 12 months * 5 years * 500 bytes = 300 GB
- QPS: 100M / (30 days * 24 hrs * 3600 sec) ≈ 40 URLs/sec (write)
- Read QPS: 40 * 100 = 4000 URLs/sec

## API Design
1. POST /api/shorten - Create short URL
   Request: { "longUrl": "https://example.com/very/long/url" }
   Response: { "shortUrl": "https://short.ly/abc123" }

2. GET /{shortCode} - Redirect to original URL
   Response: 301 redirect to long URL

## Database Design
Table: url_mappings
- id: bigint (primary key)
- short_code: varchar(10) (indexed, unique)
- long_url: text
- created_at: timestamp
- expires_at: timestamp
- user_id: bigint (optional)

## High Level Design
1. Client sends long URL
2. API Server generates unique short code
3. Store mapping in Database
4. Return short URL to client
5. When accessing short URL, lookup database and redirect

## Short Code Generation
Use Base62 encoding (a-z, A-Z, 0-9) = 62 characters
- 6 characters = 62^6 ≈ 56 billion URLs
- 7 characters = 62^7 ≈ 3.5 trillion URLs

Method: Hash(longURL) → Take first 6-7 characters

## Scaling
- Cache frequently accessed URLs (Redis)
- Use CDN for faster redirects
- Database sharding by short_code
- Load balancer for API servers`,
      difficulty: 'Medium',
      category: 'System Design',
      topics: ['URL Shortener', 'Scalability', 'Database Design', 'Caching']
    },
    {
      id: 'sd-design-instagram',
      question: 'Design Instagram',
      answer: `# Instagram System Design

## Requirements
### Functional:
- Upload photos/videos
- Follow other users
- View feed (photos from followed users)
- Like and comment on posts
- Search users

### Non-Functional:
- High availability
- Low latency for feed generation
- High consistency for likes/comments
- Handle 500M daily active users

## Estimation
- 500M DAU
- Each user uploads 2 photos/day = 1B photos/day
- Each photo = 2MB → 2TB/day storage
- Total photos to display = 20 photos per feed
- Read:Write = 100:1

## API Design
1. POST /api/upload - Upload photo
2. GET /api/feed - Get user feed
3. POST /api/follow/{userId} - Follow user
4. POST /api/like/{photoId} - Like a photo
5. POST /api/comment/{photoId} - Comment on photo

## Database Design
Users Table:
- user_id, username, email, created_at

Photos Table:
- photo_id, user_id, photo_url, caption, created_at

Follows Table:
- follower_id, followee_id, created_at

Likes Table:
- user_id, photo_id, created_at

## High Level Design
1. Upload Service: Handles photo uploads to object storage (S3)
2. Feed Generation Service: Creates personalized feeds
3. Notification Service: Notifies on likes/comments
4. CDN: Delivers photos quickly
5. Load Balancer: Distributes traffic

## Feed Generation
Two approaches:
1. **Pull Model (Fan-out on read)**: Generate feed when user requests
   - Pros: Less storage, good for celebrities
   - Cons: Slower, higher latency

2. **Push Model (Fan-out on write)**: Pre-generate feed when post created
   - Pros: Faster feed generation
   - Cons: More storage, slow for celebrity posts

**Hybrid**: Push for normal users, pull for celebrities

## Storage
- Photos: S3/Cloud Storage
- Metadata: SQL (users, follows) + NoSQL (photos, likes)
- Cache: Redis for feed and user data

## Scaling
- CDN for photo delivery
- Database sharding by user_id
- Separate read replicas
- Message queue for async processing`,
      difficulty: 'Hard',
      category: 'System Design',
      topics: ['Social Media', 'Feed Generation', 'CDN', 'Scalability', 'Fan-out']
    },
    {
      id: 'sd-design-uber',
      question: 'Design Uber/Ride Sharing System',
      answer: `# Uber System Design

## Requirements
### Functional:
- Riders can request rides
- Drivers can accept/reject rides
- Real-time location tracking
- ETA calculation
- Price calculation
- Payment processing

### Non-Functional:
- High availability
- Low latency (real-time updates)
- Handle millions of concurrent users
- Accurate location tracking

## Estimation
- 50M daily active riders
- 5M daily active drivers
- 20M rides per day
- Location updates every 3 seconds

## API Design
1. POST /api/request-ride - Request a ride
2. POST /api/accept-ride - Driver accepts ride
3. GET /api/location/{rideId} - Get real-time location
4. POST /api/end-ride - Complete ride

## Database Design
Users Table: user_id, name, email, phone, type (rider/driver)
Drivers Table: driver_id, car_details, license, rating
Rides Table: ride_id, rider_id, driver_id, pickup, dropoff, status, price
Locations Table: driver_id, latitude, longitude, timestamp

## High Level Design
Components:
1. **Location Service**: Tracks driver/rider locations
2. **Matching Service**: Matches riders with nearby drivers
3. **Trip Service**: Manages ride lifecycle
4. **Pricing Service**: Calculates dynamic pricing
5. **Notification Service**: Sends real-time updates
6. **Payment Service**: Handles transactions

## Location Tracking
- Use WebSockets for real-time updates
- Drivers send location every 3 seconds
- Store in in-memory database (Redis) for fast access
- Use Geohashing to find nearby drivers

## Matching Algorithm
1. Rider requests ride at location (lat, long)
2. Get geohash of rider location
3. Query nearby drivers using geohash
4. Filter available drivers
5. Sort by distance and rating
6. Send request to top 5 drivers
7. First driver to accept gets the ride

## Geohashing
- Convert lat/long to geohash string
- Nearby locations have similar prefixes
- Easy to find drivers in same area
- Example: "9q8yy" represents area in San Francisco

## Scaling
- Use microservices architecture
- Database sharding by geography
- Cache hot data (active rides, driver locations)
- Use message queues (Kafka) for async processing
- Separate databases for rides and locations`,
      difficulty: 'Hard',
      category: 'System Design',
      topics: ['Real-time', 'Geolocation', 'Matching', 'WebSockets', 'Microservices']
    },
    {
      id: 'sd-design-whatsapp',
      question: 'Design WhatsApp/Messaging System',
      answer: `# WhatsApp System Design

## Requirements
### Functional:
- One-on-one messaging
- Group messaging
- Message delivery confirmation (sent, delivered, read)
- Online/offline status
- Media sharing (images, videos)

### Non-Functional:
- Low latency (real-time messaging)
- High availability
- End-to-end encryption
- Handle 2 billion users

## Estimation
- 2B users
- 60B messages per day
- Each message = 100 bytes
- Storage per day = 60B * 100 bytes = 6 TB/day

## API Design
1. POST /api/send - Send message
2. GET /api/messages - Get message history
3. WebSocket /api/ws - Real-time connection

## Database Design
Users Table: user_id, username, phone, last_seen
Messages Table: message_id, sender_id, receiver_id, content, timestamp, status
Groups Table: group_id, name, created_by, created_at
Group_Members Table: group_id, user_id, joined_at

## High Level Design
1. **Client**: Mobile/Web app
2. **WebSocket Server**: Maintains persistent connections
3. **Message Service**: Routes and stores messages
4. **Notification Service**: Push notifications for offline users
5. **Media Service**: Handles file uploads
6. **Database**: Stores messages and user data

## Real-time Messaging Flow
1. User A sends message to User B
2. Message goes to WebSocket Server
3. If User B is online: Deliver immediately via WebSocket
4. If User B is offline: Store in database, send push notification
5. Send delivery confirmation to User A
6. When User B reads: Send read receipt to User A

## Message Status
- Sent: Single check mark (message sent to server)
- Delivered: Double check mark (message delivered to recipient)
- Read: Blue double check mark (message read by recipient)

## Group Messaging
- Fan-out on write: When message sent to group, create copy for each member
- Use message queues to handle large groups
- Pagination for message history

## Storage
- Recent messages (7 days): In-memory cache (Redis)
- Older messages: Database (Cassandra for high write throughput)
- Media files: Object storage (S3)

## Scaling
- WebSocket servers: Load balanced by user_id
- Database sharding by user_id
- Separate read replicas for message history
- Use CDN for media delivery
- Message queues for async processing`,
      difficulty: 'Hard',
      category: 'System Design',
      topics: ['Real-time', 'WebSockets', 'Messaging', 'High Availability', 'Scaling']
    },
    {
      id: 'sd-design-rate-limiter',
      question: 'Design a Rate Limiter',
      answer: `# Rate Limiter System Design

## Requirements
- Limit number of requests a user can make in a time window
- Should be distributed (work across multiple servers)
- Low latency (should not slow down requests significantly)
- Configurable limits (different limits for different users/APIs)

## Use Cases
- Prevent DDoS attacks
- Reduce costs (limit API calls)
- Prevent server overload
- Fair resource allocation

## Algorithms

### 1. Fixed Window Counter
- Divide time into fixed windows (e.g., 1 minute)
- Count requests in current window
- Reset counter when window expires

Pros: Simple, memory efficient
Cons: Burst at window boundaries

### 2. Sliding Window Log
- Store timestamp of each request
- Remove old timestamps outside window
- Count remaining timestamps

Pros: Accurate
Cons: Memory intensive (stores all timestamps)

### 3. Sliding Window Counter
- Hybrid of fixed window and sliding window
- Uses counters from current and previous window
- Formula: current_count + (prev_count * overlap_percentage)

Pros: Smooth, memory efficient
Cons: Slightly complex

### 4. Token Bucket
- Bucket has fixed capacity of tokens
- Tokens added at fixed rate
- Each request consumes 1 token
- Request rejected if no tokens available

Pros: Handles bursts, smooth
Cons: Need to store token count

### 5. Leaky Bucket
- Requests enter bucket at any rate
- Processed at fixed rate
- Bucket has fixed capacity
- New requests rejected if bucket full

Pros: Smooth output rate
Cons: Doesn't handle bursts well

## Implementation
Use Redis for distributed rate limiting:

\`\`\`python
key = f"rate_limit:{user_id}:{current_minute}"
count = redis.incr(key)
redis.expire(key, 60)  # TTL of 60 seconds

if count > MAX_REQUESTS:
    return "Rate limit exceeded"
return "Request allowed"
\`\`\`

## Storage
- Redis: Fast, in-memory, supports atomic operations
- Key: user_id + timestamp
- Value: request count
- TTL: window duration

## Response
When rate limited, return:
- Status: 429 (Too Many Requests)
- Headers:
  - X-RateLimit-Limit: 100
  - X-RateLimit-Remaining: 0
  - X-RateLimit-Reset: 1638360000

## Scaling
- Use Redis cluster for distribution
- Hash user_id to route to specific Redis node
- Replicate Redis for high availability`,
      difficulty: 'Medium',
      category: 'System Design',
      topics: ['Rate Limiting', 'Redis', 'Algorithms', 'API Design']
    }
  ]
};

export const languageMasteryData = [
  sqlMastery,
  databaseMastery,
  developmentMastery,
  systemDesignMastery,
  projectsMastery,
  aptitudeMastery,
  machineCodingMastery,
  hrInterviewMastery,
  resumeLinkedInMastery
];

export { sqlMastery, databaseMastery, developmentMastery, systemDesignMastery, projectsMastery, aptitudeMastery, machineCodingMastery, hrInterviewMastery, resumeLinkedInMastery };