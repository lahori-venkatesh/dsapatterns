import React, { useState } from 'react';
import { ArrowLeft, Code2, Github, ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface MachineCodingPageProps {
  onBack: () => void;
}

interface MachineCodingProblem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  githubUrl: string;
  features: string[];
  companies: string[];
}

const machineCodingProblems: MachineCodingProblem[] = [
  {
    id: 'parking-lot',
    title: 'Parking Lot System',
    description: 'Design and implement a parking lot system that can park vehicles, unpark them, and display available spots.',
    difficulty: 'Medium',
    duration: '90 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/parkinglot',
    features: [
      'Park vehicles (Car, Bike, Truck)',
      'Unpark vehicles and calculate charges',
      'Display available spots by type',
      'Handle multiple floors',
      'Assign nearest available spot'
    ],
    companies: ['Flipkart', 'Amazon', 'Uber', 'Walmart']
  },
  {
    id: 'splitwise',
    title: 'Splitwise / Expense Sharing',
    description: 'Build an expense sharing application where users can add expenses and split them among groups.',
    difficulty: 'Hard',
    duration: '120 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/splitwise',
    features: [
      'Add users and create groups',
      'Add expenses and split (equal, exact, percentage)',
      'Show balance for each user',
      'Simplify debts',
      'Show who owes whom'
    ],
    companies: ['Flipkart', 'Swiggy', 'PhonePe', 'Razorpay']
  },
  {
    id: 'snake-ladder',
    title: 'Snake and Ladder Game',
    description: 'Implement the classic Snake and Ladder board game with multiple players.',
    difficulty: 'Easy',
    duration: '60 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/snakeandladdergame',
    features: [
      'Create board with snakes and ladders',
      'Support multiple players',
      'Roll dice functionality',
      'Move players based on dice',
      'Determine winner',
      'Display game state'
    ],
    companies: ['Flipkart', 'Amazon', 'Atlassian']
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    description: 'Design a Tic-Tac-Toe game that supports multiple board sizes and players.',
    difficulty: 'Easy',
    duration: '45 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/tictactoegame',
    features: [
      'Support NxN board size',
      'Two player game',
      'Check for winner after each move',
      'Validate moves',
      'Handle draw condition',
      'Restart game'
    ],
    companies: ['Amazon', 'Uber', 'Dream11']
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    description: 'Build a system to manage library operations including books, members, and lending.',
    difficulty: 'Medium',
    duration: '90 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/librarymanagementsystem',
    features: [
      'Add/remove books and members',
      'Issue books to members',
      'Return books and calculate fine',
      'Search books by title/author',
      'Check availability',
      'Handle reservations'
    ],
    companies: ['Flipkart', 'Amazon', 'Walmart', 'BookMyShow']
  },
  {
    id: 'vending-machine',
    title: 'Vending Machine',
    description: 'Design a vending machine that accepts coins and dispenses products.',
    difficulty: 'Medium',
    duration: '75 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/vendingmachine',
    features: [
      'Add products with price and quantity',
      'Accept coins/notes',
      'Dispense selected product',
      'Return change',
      'Handle insufficient funds',
      'Restock products'
    ],
    companies: ['Flipkart', 'Amazon', 'Atlassian']
  },
  {
    id: 'atm',
    title: 'ATM System',
    description: 'Implement an ATM system with basic banking operations.',
    difficulty: 'Medium',
    duration: '90 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/atm',
    features: [
      'Check balance',
      'Withdraw cash',
      'Deposit cash',
      'Transfer money',
      'PIN validation',
      'Transaction history'
    ],
    companies: ['Amazon', 'Walmart', 'PhonePe', 'Razorpay']
  },
  {
    id: 'movie-ticket',
    title: 'Movie Ticket Booking',
    description: 'Build a movie ticket booking system with seat selection.',
    difficulty: 'Hard',
    duration: '120 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/movieticketbookingsystem',
    features: [
      'Add movies and shows',
      'Display available seats',
      'Book seats',
      'Cancel booking with refund',
      'Handle concurrent bookings',
      'Payment processing'
    ],
    companies: ['BookMyShow', 'Flipkart', 'Swiggy', 'Uber']
  },
  {
    id: 'elevator',
    title: 'Elevator System',
    description: 'Design an elevator control system for a multi-floor building.',
    difficulty: 'Hard',
    duration: '120 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/elevatorsystem',
    features: [
      'Multiple elevators',
      'Request elevator from floor',
      'Optimal elevator selection',
      'Handle direction (up/down)',
      'Process multiple requests',
      'Emergency handling'
    ],
    companies: ['Amazon', 'Uber', 'Atlassian', 'Dream11']
  },
  {
    id: 'chess',
    title: 'Chess Game',
    description: 'Implement a chess game with all piece movements and rules.',
    difficulty: 'Hard',
    duration: '150 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/chessgame',
    features: [
      'All chess pieces with valid moves',
      'Check and checkmate detection',
      'Castling, en passant',
      'Pawn promotion',
      'Move validation',
      'Game state management'
    ],
    companies: ['Flipkart', 'Amazon', 'Dream11']
  },
  {
    id: 'car-rental',
    title: 'Car Rental System',
    description: 'Build a car rental system to manage vehicle rentals and returns.',
    difficulty: 'Medium',
    duration: '90 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/carrental',
    features: [
      'Add/remove vehicles',
      'Search available cars',
      'Book car for dates',
      'Return car and calculate cost',
      'Handle damages',
      'Customer management'
    ],
    companies: ['Uber', 'Swiggy', 'Walmart']
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    description: 'Design a hotel management system for room bookings and guest management.',
    difficulty: 'Hard',
    duration: '120 mins',
    githubUrl: 'https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/hotelmanagementsystem',
    features: [
      'Room inventory management',
      'Book rooms for dates',
      'Check-in and check-out',
      'Room service requests',
      'Billing and payment',
      'Guest history'
    ],
    companies: ['Flipkart', 'Amazon', 'BookMyShow']
  }
];

const guideContent = `
# 🚀 Complete Machine Coding Round Preparation Guide

## 🎯 What is Machine Coding Round?

Machine Coding is a **hands-on coding interview** where you build a **working application** from scratch in **90-120 minutes**. Unlike DSA rounds, here you demonstrate your **software engineering skills**.

### Key Characteristics:
- ⏱️ **Duration**: 90-120 minutes
- 💻 **Format**: Live coding on your machine or shared screen
- 🎯 **Goal**: Build a functional application with clean code
- 📝 **Evaluation**: Code quality, design patterns, working demo
- 🛠️ **Tools**: Any IDE, any programming language (usually Java/Python/JavaScript)

---

## 🧭 How to Approach Machine Coding Problems

### **Phase 1: Understanding Requirements (5-10 minutes)**

#### Ask Clarifying Questions

1. **"What are the core features I MUST implement?"**
2. **"Should I handle authentication/authorization?"** (Usually NO)
3. **"Do you need a database or in-memory storage is fine?"**
4. **"Should I write test cases?"**
5. **"Can I use any external libraries?"**
6. **"Should I implement a UI or CLI is fine?"**

---

### **Phase 2: Design (10-15 minutes)**

#### Step 1: Identify Core Entities
Example for **Parking Lot**:
- ParkingLot
- Floor
- ParkingSpot
- Vehicle (Car, Bike, Truck)
- Ticket

#### Step 2: Define Relationships
- ParkingLot HAS multiple Floors
- Floor HAS multiple ParkingSpots
- ParkingSpot CAN have one Vehicle
- Ticket is issued when Vehicle enters

#### Step 3: Identify Key Operations
- parkVehicle()
- unparkVehicle()
- getAvailableSpots()
- calculateFee()

---

### **Phase 3: Implementation (50-70 minutes)**

#### Best Practices:

**1. Start with Models/Entities**
\`\`\`java
class Vehicle {
    String vehicleNumber;
    VehicleType type;
}

class ParkingSpot {
    int spotId;
    VehicleType type;
    boolean isAvailable;
}
\`\`\`

**2. Implement Core Logic**
- Focus on main functionality first
- Use clean, readable code
- Follow SOLID principles

**3. Use Design Patterns**
- **Singleton**: For ParkingLot (one instance)
- **Factory**: For creating vehicles
- **Strategy**: For different payment methods

**4. Handle Edge Cases**
- Null checks
- Full parking lot
- Invalid inputs

---

### **Phase 4: Testing & Demo (15-20 minutes)**

#### Create a Driver Class
\`\`\`java
public class Main {
    public static void main(String[] args) {
        // Test Case 1: Park a car
        // Test Case 2: Park when full
        // Test Case 3: Unpark and calculate fee
    }
}
\`\`\`

#### Demo Flow:
1. Show the working application
2. Explain your design decisions
3. Walk through the code structure
4. Demonstrate edge case handling

---

## 🎨 Code Quality Checklist

### ✅ Must-Have:
- [ ] Working functionality (most important!)
- [ ] Clean, readable code
- [ ] Proper naming conventions
- [ ] Separation of concerns (don't put everything in one class)
- [ ] Basic error handling

### 🌟 Good-to-Have:
- [ ] Design patterns used appropriately
- [ ] SOLID principles followed
- [ ] Comments for complex logic
- [ ] Edge cases handled
- [ ] Extensible design

### ⚠️ Avoid:
- ❌ Hardcoded values (use constants)
- ❌ God classes (classes doing too much)
- ❌ Copy-paste code
- ❌ Poor naming (x, temp, data)
- ❌ No separation between logic and data

---

## 🚫 Common Mistakes to Avoid

### 1. Overengineering
❌ **Don't**: Try to implement every design pattern
✅ **Do**: Keep it simple and functional

### 2. Spending Too Much Time on Design
❌ **Don't**: Spend 45 minutes designing on paper
✅ **Do**: Quick 10-15 min design, then start coding

### 3. Not Testing During Implementation
❌ **Don't**: Code for 90 minutes without testing
✅ **Do**: Test core functionality as you build

### 4. Ignoring Edge Cases
❌ **Don't**: Assume happy path only
✅ **Do**: Handle null, empty, invalid inputs

### 5. No Demo at the End
❌ **Don't**: Just say "it should work"
✅ **Do**: Actually run and demonstrate it working

---

## ⏰ Time Management Strategy

**Total Time: 90-120 minutes**

| Phase | Time | Activities |
|-------|------|-----------|
| **Understanding** | 5-10 mins | Read problem, ask questions, clarify scope |
| **Design** | 10-15 mins | Identify entities, relationships, operations |
| **Implementation** | 50-70 mins | Code models, services, main logic |
| **Testing & Demo** | 15-20 mins | Test, fix bugs, prepare demo |
| **Buffer** | 10 mins | Handle unexpected issues |

---

## 💡 Pro Tips

### Before the Interview:
- ✅ Practice 5-10 problems end-to-end
- ✅ Have a template project setup ready
- ✅ Know your favorite language/framework well
- ✅ Set up IDE shortcuts

### During the Interview:
- ✅ Think aloud - communicate your approach
- ✅ Prioritize working code over perfect code
- ✅ Ask for hints if completely stuck
- ✅ Stay calm if you make mistakes

### What Interviewers Look For:
1. **Problem-solving approach** - Do you break down problems well?
2. **Code organization** - Is your code structured and maintainable?
3. **Design thinking** - Do you consider extensibility?
4. **Communication** - Can you explain your decisions?
5. **Execution** - Can you deliver a working solution in time?

---

## 🎓 How to Practice

### Week 1-2: Fundamentals
- Learn OOP concepts thoroughly
- Understand basic design patterns (Singleton, Factory, Strategy)
- Practice writing clean code

### Week 3-4: Easy Problems
- Tic-Tac-Toe
- Snake and Ladder
- Vending Machine

### Week 5-6: Medium Problems
- Parking Lot
- Library Management
- ATM System

### Week 7-8: Hard Problems
- Splitwise
- Movie Ticket Booking
- Elevator System

### Practice Approach:
1. **Set a timer** (90 minutes)
2. **No googling** during the timer
3. **Build from scratch** - don't look at solutions
4. **Review solutions** after attempting
5. **Refactor** your code comparing with best practices

---

## 📚 Recommended Resources

### GitHub Repositories:
- **Awesome Low-Level Design** - Complete solutions in Java/Python
- Practice problems with detailed explanations
- Real interview questions from top companies

### Key Focus Areas:
- Object-Oriented Design
- Design Patterns
- SOLID Principles
- Code Organization
- Clean Code Practices

---

## 🎯 Final Checklist Before Interview

- [ ] IDE setup with favorite shortcuts
- [ ] Know your language/framework inside out
- [ ] Practiced 5+ problems end-to-end
- [ ] Can explain design patterns clearly
- [ ] Confident with object modeling
- [ ] Ready to think aloud during coding
- [ ] Prepared questions to ask interviewer

**Remember**: Machine coding tests your ability to build real software. Focus on writing clean, working code that demonstrates good engineering practices. You've got this! 💪
`;

export const MachineCodingPage: React.FC<MachineCodingPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'problems'>('guide');
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  const toggleProblem = (problemId: string) => {
    setExpandedProblem(expandedProblem === problemId ? null : problemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Interview Mastery</span>
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center space-x-3">
              <Code2 className="w-10 h-10 text-purple-400" />
              <span>Machine Coding Round</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Master machine coding interviews with comprehensive guide and practice problems
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'guide'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Complete Guide
            </button>
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'problems'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Github className="w-5 h-5 inline mr-2" />
              Practice Problems ({machineCodingProblems.length})
            </button>
          </div>

          {/* Guide Tab */}
          {activeTab === 'guide' && (
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="prose prose-invert max-w-none">
                {guideContent.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={idx} className="text-3xl font-bold text-white mb-6 mt-8">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-2xl font-bold text-purple-400 mb-4 mt-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-bold text-pink-400 mb-3 mt-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h4 key={idx} className="text-lg font-semibold text-gray-200 mb-2 mt-3">
                        {paragraph.replace('#### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.includes('```')) {
                    const code = paragraph.replace(/```\w*\n?/g, '');
                    return (
                      <pre key={idx} className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
                        <code className="text-gray-300 text-sm">{code}</code>
                      </pre>
                    );
                  }
                  if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
                    return (
                      <p key={idx} className="text-gray-300 ml-4 mb-2">
                        {paragraph}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('| ')) {
                    return (
                      <div key={idx} className="overflow-x-auto mb-4">
                        <table className="min-w-full border border-gray-700">
                          <tbody>
                            {paragraph.split('\n').map((row, rowIdx) => {
                              if (row.includes('---')) return null;
                              const cells = row.split('|').filter(cell => cell.trim());
                              return (
                                <tr key={rowIdx} className={rowIdx === 0 ? 'bg-gray-800' : 'bg-gray-900/50'}>
                                  {cells.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="border border-gray-700 px-4 py-2 text-gray-300">
                                      {cell.trim()}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Problems Tab */}
          {activeTab === 'problems' && (
            <>
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <Github className="w-8 h-8" />
                  <span>Practice Problems with GitHub Solutions</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Practice these commonly asked machine coding problems. Each problem includes detailed requirements, features to implement, and complete working solutions on GitHub. Set a timer and build from scratch!
                </p>
              </div>

              <div className="grid gap-4">
                {machineCodingProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleProblem(problem.id)}
                      className="w-full p-6 text-left flex items-start justify-between group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                            {problem.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.difficulty === 'Easy'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : problem.difficulty === 'Medium'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {problem.difficulty}
                          </span>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{problem.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 mb-3">{problem.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {problem.companies.map((company) => (
                            <span
                              key={company}
                              className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded border border-purple-500/30"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedProblem === problem.id ? (
                          <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        )}
                      </div>
                    </button>

                    {expandedProblem === problem.id && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-700/50 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Features to Implement:</h4>
                            <ul className="space-y-2">
                              {problem.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-300">
                                  <span className="text-purple-400 mt-1">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-3">
                            <a
                              href={problem.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                            >
                              <Github className="w-5 h-5" />
                              View Solution on GitHub
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>

                          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                            <p className="text-purple-200 text-sm">
                              <strong>💡 Pro Tip:</strong> Try implementing this yourself first! Set a timer for {problem.duration}, build your solution, then compare with the GitHub implementation to learn best practices.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
