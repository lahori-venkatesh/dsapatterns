import { LanguageProblem } from '../../types';

export const databaseMastery = {
  id: 'database-mastery',
  language: 'Database' as const,
  name: 'Database & DBMS',
  icon: 'Database',
  description: 'Master SQL, NoSQL, database design, normalization, transactions, indexing, and DBMS concepts',
  color: 'from-cyan-500 to-blue-600',
  totalProblems: 100,
  completedProblems: 0,
  problems: [
    {
      id: 'db-what-is-database',
      title: 'What is a Database?',
      difficulty: 'Easy' as const,
      description: 'Explain what a database is and its importance in applications',
      answer: 'A database is an organized collection of structured data stored electronically in a computer system. It allows efficient storage, retrieval, modification, and deletion of data. Databases are crucial for applications as they provide: 1) Data persistence, 2) Concurrent access by multiple users, 3) Data integrity and consistency, 4) Efficient data retrieval through queries, 5) Security and access control, 6) Backup and recovery mechanisms.',
      topics: ['Fundamentals', 'Database Basics'],
      platformLinks: [],
      estimatedTime: 5,
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-sql-vs-nosql',
      title: 'SQL vs NoSQL Databases',
      difficulty: 'Easy' as const,
      description: 'Compare and contrast SQL and NoSQL databases with use cases',
      answer: 'SQL Databases: Structured, table-based, ACID compliant, uses structured query language, fixed schema, vertically scalable. Examples: MySQL, PostgreSQL. Best for: Complex queries, transactions, structured data.\n\nNoSQL Databases: Flexible schema, horizontally scalable, BASE model, various types (document, key-value, graph, column-family). Examples: MongoDB, Redis, Cassandra. Best for: Large volumes of data, rapid development, distributed systems, unstructured data.',
      topics: ['Database Types', 'SQL', 'NoSQL'],
      platformLinks: [],
      estimatedTime: 10,
      companies: ['Amazon', 'Netflix', 'Uber'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-acid-properties',
      title: 'ACID Properties',
      difficulty: 'Easy' as const,
      description: 'Explain ACID properties in database transactions',
      answer: 'ACID stands for:\n\nAtomicity: All operations in a transaction succeed or all fail (all-or-nothing)\nConsistency: Database moves from one valid state to another\nIsolation: Concurrent transactions don\'t interfere with each other\nDurability: Committed transactions are permanently saved\n\nExample: In a bank transfer, money must be debited from one account and credited to another atomically. If any step fails, the entire transaction rolls back.',
      topics: ['Transactions', 'ACID', 'Database Properties'],
      platformLinks: [],
      estimatedTime: 8,
      companies: ['Goldman', 'JPMorgan', 'PayPal'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-normalization',
      title: 'Database Normalization',
      difficulty: 'Medium' as const,
      description: 'Explain normalization and its different forms (1NF, 2NF, 3NF, BCNF)',
      answer: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity.\n\n1NF: Eliminate repeating groups, each cell contains atomic values\n2NF: Meet 1NF + remove partial dependencies (non-key attributes must depend on entire primary key)\n3NF: Meet 2NF + remove transitive dependencies (non-key attributes depend only on primary key)\nBCNF: Stricter version of 3NF, every determinant must be a candidate key\n\nBenefits: Reduces redundancy, prevents anomalies, improves data integrity\nTradeoffs: May require more joins, which can impact query performance',
      topics: ['Normalization', 'Database Design', 'Schema Design'],
      platformLinks: [],
      estimatedTime: 15,
      companies: ['Microsoft', 'Oracle', 'Salesforce'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-primary-foreign-keys',
      title: 'Primary Keys and Foreign Keys',
      difficulty: 'Easy' as const,
      description: 'Explain primary keys, foreign keys, and their relationship',
      answer: 'Primary Key: Uniquely identifies each record in a table. Cannot be NULL, must be unique.\n\nForeign Key: A field that references the primary key in another table, establishing relationships between tables.\n\nExample:\nStudents table: student_id (PK)\nEnrollments table: enrollment_id (PK), student_id (FK)\n\nThe foreign key ensures referential integrity - you cannot enroll a student that doesn\'t exist in the Students table.',
      topics: ['Keys', 'Constraints', 'Relationships'],
      platformLinks: [],
      estimatedTime: 7,
      companies: ['Amazon', 'Google', 'Adobe'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-indexing',
      title: 'Database Indexing',
      difficulty: 'Medium' as const,
      description: 'Explain indexing, types of indexes, and their impact on performance',
      answer: 'An index is a data structure that improves query speed at the cost of additional storage and slower writes.\n\nTypes:\n- B-Tree Index: Default, good for range queries\n- Hash Index: Fast equality lookups\n- Bitmap Index: Good for low-cardinality columns\n- Full-Text Index: For text search\n\nPros: Faster SELECT queries, efficient sorting\nCons: Slower INSERT/UPDATE/DELETE, additional storage\n\nBest Practices:\n- Index columns used in WHERE, JOIN, ORDER BY\n- Avoid over-indexing\n- Use composite indexes for multiple columns',
      topics: ['Indexing', 'Performance', 'Query Optimization'],
      platformLinks: [],
      estimatedTime: 12,
      companies: ['Google', 'Facebook', 'LinkedIn'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-joins',
      title: 'SQL Joins',
      difficulty: 'Medium' as const,
      description: 'Explain different types of SQL joins with examples',
      answer: 'INNER JOIN: Returns matching records from both tables\nLEFT JOIN: Returns all from left + matching from right\nRIGHT JOIN: Returns all from right + matching from left\nFULL OUTER JOIN: Returns all records from both tables\nCROSS JOIN: Cartesian product of both tables\n\nExample:\nSELECT * FROM Orders o\nINNER JOIN Customers c ON o.customer_id = c.id\n\nThis returns only orders that have matching customers.',
      topics: ['SQL', 'Joins', 'Queries'],
      platformLinks: [],
      estimatedTime: 10,
      companies: ['Amazon', 'Microsoft', 'Uber'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-transactions',
      title: 'Database Transactions',
      difficulty: 'Medium' as const,
      description: 'Explain transactions, isolation levels, and concurrency control',
      answer: 'A transaction is a unit of work that must be completed fully or not at all.\n\nIsolation Levels:\n1. Read Uncommitted: Dirty reads possible\n2. Read Committed: Prevents dirty reads\n3. Repeatable Read: Prevents dirty & non-repeatable reads\n4. Serializable: Full isolation, slowest\n\nConcurrency Problems:\n- Dirty Read: Reading uncommitted data\n- Non-repeatable Read: Same query returns different results\n- Phantom Read: New rows appear in range query\n\nLocking: Pessimistic (locks) vs Optimistic (versioning)',
      topics: ['Transactions', 'Concurrency', 'Isolation'],
      platformLinks: [],
      estimatedTime: 15,
      companies: ['Oracle', 'Goldman', 'Visa'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-sharding',
      title: 'Database Sharding',
      difficulty: 'Hard' as const,
      description: 'Explain database sharding, strategies, and challenges',
      answer: 'Sharding is horizontal partitioning where data is distributed across multiple databases.\n\nSharding Strategies:\n1. Range-based: Partition by range (e.g., user_id 1-1000, 1001-2000)\n2. Hash-based: Use hash function on key\n3. Geographic: Partition by location\n4. Directory-based: Lookup table for routing\n\nBenefits: Horizontal scalability, improved performance\nChallenges: Complex queries across shards, resharding, maintaining consistency\n\nUsed by: Instagram, Facebook, Twitter for massive scale',
      topics: ['Sharding', 'Scaling', 'Distributed Systems'],
      platformLinks: [],
      estimatedTime: 20,
      companies: ['Facebook', 'Twitter', 'Instagram'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-cap-theorem',
      title: 'CAP Theorem',
      difficulty: 'Hard' as const,
      description: 'Explain CAP theorem and its implications for distributed databases',
      answer: 'CAP Theorem states that a distributed database can only guarantee 2 of 3:\n\nConsistency: All nodes see the same data\nAvailability: Every request gets a response\nPartition Tolerance: System works despite network failures\n\nExamples:\n- CP Systems: MongoDB, HBase (consistent but may be unavailable)\n- AP Systems: Cassandra, DynamoDB (available but eventually consistent)\n- CA Systems: Traditional RDBMS (not partition tolerant)\n\nIn practice, partition tolerance is required, so choice is between CP or AP based on use case.',
      topics: ['CAP Theorem', 'Distributed Systems', 'NoSQL'],
      platformLinks: [],
      estimatedTime: 15,
      companies: ['Amazon', 'Netflix', 'LinkedIn'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'db-replication',
      title: 'Database Replication',
      difficulty: 'Medium' as const,
      description: 'Explain database replication strategies',
      answer: 'Replication is copying data from one database to another for redundancy and availability.\n\nTypes:\n1. Master-Slave: One master (writes), multiple slaves (reads)\n2. Master-Master: Multiple masters (both reads/writes)\n3. Synchronous: Wait for all replicas to confirm\n4. Asynchronous: Don\'t wait, eventual consistency\n\nBenefits: High availability, load balancing, disaster recovery\nChallenges: Replication lag, conflict resolution, consistency',
      topics: ['Replication', 'High Availability', 'Scaling'],
      platformLinks: [],
      estimatedTime: 12,
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ] as LanguageProblem[]
};
