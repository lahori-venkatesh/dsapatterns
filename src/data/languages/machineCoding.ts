import { LanguageMastery } from '../../types';

export const machineCodingMastery: LanguageMastery = {
  id: 'machine-coding-mastery',
  language: 'Machine Coding',
  name: 'Machine Coding Round',
  icon: 'Code2',
  description: 'Complete guide to ace machine coding rounds with preparation strategies and solved problems',
  color: 'from-purple-500 to-pink-600',
  totalProblems: 1,
  completedProblems: 0,
  problems: [
    {
      id: 'mc-complete-guide',
      title: 'Machine Coding Round - Complete Preparation Guide',
      difficulty: 'Easy',
      description: `
# 🚀 Complete Machine Coding Round Preparation Guide

## 📖 Table of Contents
1. What is Machine Coding Round?
2. How to Approach Machine Coding Problems
3. Common Questions Asked During Interview
4. Time Management Strategy
5. Code Quality & Design Patterns
6. Common Mistakes to Avoid
7. All Machine Coding Problems with Solutions

---

## 🎯 1. What is Machine Coding Round?

Machine Coding is a **hands-on coding interview** where you build a **working application** from scratch in **90-120 minutes**. Unlike DSA rounds, here you demonstrate your **software engineering skills**.

### Key Characteristics:
- ⏱️ **Duration**: 90-120 minutes
- 💻 **Format**: Live coding on your machine or shared screen
- 🎯 **Goal**: Build a functional application with clean code
- 📝 **Evaluation**: Code quality, design patterns, working demo
- 🛠️ **Tools**: Any IDE, any programming language (usually Java/Python/JavaScript)

### Companies that Conduct Machine Coding:
- **Flipkart** (Most common)
- **Amazon**
- **Uber**
- **Swiggy**
- **Walmart**
- **Atlassian**
- **PhonePe**
- **Razorpay**
- **Dream11**
- **BookMyShow**

---

## 🧭 2. How to Approach Machine Coding Problems

### **Phase 1: Understanding Requirements (5-10 minutes)**

#### Step 1: Read the Problem Carefully
- Read the entire problem statement twice
- Highlight key requirements
- Note down constraints and edge cases

#### Step 2: Ask Clarifying Questions
**Always ask these questions:**

1. **"What are the core features I MUST implement?"**
   - Helps you prioritize what's essential

2. **"Should I handle authentication/authorization?"**
   - Usually NO for machine coding

3. **"Do you need a database or in-memory storage is fine?"**
   - Most times in-memory is acceptable

4. **"Should I write test cases?"**
   - Depends on company, but focus on working code first

5. **"Can I use any external libraries?"**
   - Clarify if you can use frameworks like Spring Boot, Express, etc.

6. **"Should I implement a UI or CLI is fine?"**
   - Most companies accept CLI/console applications

7. **"What's more important: working demo or perfect code?"**
   - Usually working demo with decent code wins

#### Step 3: Confirm Scope
List out features and confirm with interviewer:
- ✅ "I'll implement features X, Y, Z"
- ❌ "I won't implement features A, B as they're nice-to-have"

---

### **Phase 2: Design (10-15 minutes)**

#### Step 1: Identify Core Entities
Example for **Parking Lot**:
- ParkingLot
- ParkingSpot
- Vehicle (Car, Bike, Truck)
- Ticket
- Payment

#### Step 2: Draw Class Diagram (on paper or whiteboard)
Example:
  ParkingLot
  - spots
  - tickets
  + parkVehicle()
  + removeVehicle()
       |
       | has many
       v
  ParkingSpot
  - id
  - type
  - isOccupied

#### Step 3: Identify Design Patterns Needed
- **Singleton**: For managers (ParkingLotManager)
- **Factory**: For creating different vehicle types
- **Strategy**: For different pricing strategies
- **Observer**: For notifications

#### Step 4: Define Interfaces First
Write method signatures:
\`\`\`java
interface ParkingStrategy {
    ParkingSpot findSpot(VehicleType type);
}

interface PricingStrategy {
    double calculatePrice(Ticket ticket);
}
\`\`\`

---

### **Phase 3: Implementation (60-80 minutes)**

#### Step 1: Create Basic Structure (10 minutes)
- Create all classes and interfaces
- Add basic fields and constructors
- No logic yet, just skeleton

#### Step 2: Implement Core Functionality (40 minutes)
- Start with simplest feature
- Test it works before moving to next
- Keep running the code frequently

#### Step 3: Add Business Logic (20 minutes)
- Validations
- Error handling
- Edge cases

#### Step 4: Add Features in Priority Order
**Priority 1 (MUST HAVE):**
- Core functionality that makes the system work

**Priority 2 (SHOULD HAVE):**
- Important but not critical features

**Priority 3 (NICE TO HAVE):**
- Additional features if time permits

---

### **Phase 4: Testing & Demo (10-15 minutes)**

#### Step 1: Write Main Method / Test Cases
\`\`\`java
public static void main(String[] args) {
    // Test Case 1: Park a car
    ParkingLot lot = ParkingLot.getInstance();
    Vehicle car = new Car("KA-01-1234");
    Ticket ticket = lot.parkVehicle(car);
    System.out.println("Ticket: " + ticket.getId());

    // Test Case 2: Remove vehicle and pay
    double amount = lot.removeVehicle(ticket.getId());
    System.out.println("Amount: " + amount);
}
\`\`\`

#### Step 2: Test Edge Cases
- Empty parking lot
- Full parking lot
- Invalid inputs
- Null checks

#### Step 3: Prepare for Demo
- Clean up console output
- Add meaningful print statements
- Be ready to explain your code

---

## 💬 3. Common Questions Asked During Interview

### **Before Coding:**

#### Q: "Walk me through your approach"
**Answer:**
- Explain the entities you'll create
- Show the class diagram
- Mention design patterns you'll use
- Confirm scope and timeline

#### Q: "Why did you choose this design?"
**Answer:**
- Explain trade-offs
- Mention extensibility
- Show how it handles requirements

---

### **During Coding:**

#### Q: "How will you handle [new requirement]?"
**Answer:**
- "I can add a new class X that implements interface Y"
- Show extensibility without modifying existing code
- Mention SOLID principles

#### Q: "Can you optimize this?"
**Answer:**
- Mention time/space complexity
- Suggest data structure improvements
- But don't optimize prematurely!

#### Q: "What if multiple users access simultaneously?"
**Answer:**
- Mention thread-safety concerns
- Suggest using synchronized blocks
- Or use concurrent data structures

---

### **After Coding:**

#### Q: "How would you scale this system?"
**Answer:**
- Database instead of in-memory
- Caching layer
- Load balancing
- Microservices architecture

#### Q: "What would you improve if you had more time?"
**Answer:**
- Better error handling
- Logging
- Unit tests
- Configuration management
- Exception hierarchy

#### Q: "Can you add feature X?"
**Answer:**
- If time permits: "Yes, I'll add class Y and method Z"
- If no time: "I can explain the design changes needed"

---

## ⏰ 4. Time Management Strategy

### **The 90-Minute Breakdown:**

  0-10 min:  Requirements & Questions
 10-20 min:  Design & Class Diagram
 20-30 min:  Basic Structure + Skeleton
 30-60 min:  Core Implementation
 60-75 min:  Additional Features
 75-85 min:  Testing & Bug Fixes
 85-90 min:  Demo Preparation

### **Time Management Tips:**

1. **Set Milestones:**
   - ✅ By 30 min: Structure ready
   - ✅ By 60 min: Core working
   - ✅ By 80 min: All features done
   - ✅ By 90 min: Demo ready

2. **Use Timer:**
   - Set alarms at 30, 60, 80 minutes
   - Check progress at each alarm
   - Adjust priorities if behind

3. **Don't Get Stuck:**
   - If stuck for 5+ minutes, move on
   - Come back later if time permits
   - Working partial solution > incomplete perfect solution

4. **Leave Buffer Time:**
   - Always keep 10 minutes for testing
   - Don't code till the last minute
   - Time for unexpected bugs

---

## 🎨 5. Code Quality & Design Patterns

### **SOLID Principles:**

#### **S - Single Responsibility Principle**
❌ **Bad:**
\`\`\`java
class ParkingLot {
    void parkVehicle() { }
    void calculatePrice() { }
    void sendNotification() { }
    void generateReport() { }
}
\`\`\`

✅ **Good:**
\`\`\`java
class ParkingLot {
    void parkVehicle() { }
}
class PricingService {
    double calculatePrice() { }
}
class NotificationService {
    void sendNotification() { }
}
\`\`\`

#### **O - Open/Closed Principle**
✅ Open for extension, closed for modification
\`\`\`java
interface PricingStrategy {
    double calculate(Ticket ticket);
}

class HourlyPricing implements PricingStrategy {
    double calculate(Ticket ticket) { }
}

class FlatRatePricing implements PricingStrategy {
    double calculate(Ticket ticket) { }
}
\`\`\`

---

### **Essential Design Patterns:**

#### **1. Singleton Pattern**
**When to use:** Single instance needed (ParkingLotManager, Database connection)

\`\`\`java
class ParkingLot {
    private static ParkingLot instance;

    private ParkingLot() { }

    public static ParkingLot getInstance() {
        if (instance == null) {
            instance = new ParkingLot();
        }
        return instance;
    }
}
\`\`\`

#### **2. Factory Pattern**
**When to use:** Creating different types of objects

\`\`\`java
class VehicleFactory {
    public static Vehicle createVehicle(VehicleType type, String number) {
        switch(type) {
            case CAR: return new Car(number);
            case BIKE: return new Bike(number);
            case TRUCK: return new Truck(number);
        }
    }
}
\`\`\`

#### **3. Strategy Pattern**
**When to use:** Multiple algorithms/strategies

\`\`\`java
interface ParkingStrategy {
    ParkingSpot findSpot(VehicleType type);
}

class NearestSpotStrategy implements ParkingStrategy { }
class RandomSpotStrategy implements ParkingStrategy { }
\`\`\`

#### **4. Observer Pattern**
**When to use:** Event notifications

\`\`\`java
interface ParkingObserver {
    void onParkingFull();
    void onSpotAvailable();
}

class ParkingLot {
    List<ParkingObserver> observers;
    void notifyObservers() { }
}
\`\`\`

---

### **Clean Code Practices:**

#### **1. Meaningful Names**
❌ Bad: \`ps, v, t\`
✅ Good: \`parkingSpot, vehicle, ticket\`

#### **2. Small Functions**
- Each function does ONE thing
- Max 20-30 lines per function

#### **3. Don't Repeat Yourself (DRY)**
- Extract common code to methods
- Avoid copy-paste

#### **4. Comments Only When Needed**
\`\`\`java
// ❌ Bad: Obvious comment
// This method parks a vehicle
void parkVehicle() { }

// ✅ Good: Explains WHY
// Using synchronized to handle concurrent parking requests
synchronized void parkVehicle() { }
\`\`\`

#### **5. Handle Errors Gracefully**
\`\`\`java
public Ticket parkVehicle(Vehicle vehicle) {
    if (vehicle == null) {
        throw new IllegalArgumentException("Vehicle cannot be null");
    }

    ParkingSpot spot = findAvailableSpot(vehicle.getType());
    if (spot == null) {
        throw new ParkingFullException("No spots available");
    }

    // Park the vehicle
}
\`\`\`

---

## ❌ 6. Common Mistakes to Avoid

### **Mistake 1: Starting to Code Immediately**
❌ Jump into coding without design
✅ Spend 15-20 minutes on design

### **Mistake 2: Over-Engineering**
❌ Implementing features not asked
✅ Focus on requirements only

### **Mistake 3: Not Testing**
❌ Code till last minute, no testing
✅ Test incrementally as you build

### **Mistake 4: Ignoring Edge Cases**
❌ Only happy path scenarios
✅ Handle null, empty, invalid inputs

### **Mistake 5: Poor Variable Names**
❌ \`x, y, temp, data\`
✅ \`availableSpots, currentUser, priceAmount\`

### **Mistake 6: God Class**
❌ One class with 1000 lines
✅ Multiple small classes

### **Mistake 7: No Demo Preparation**
❌ Messy output, no test cases
✅ Clean output, multiple scenarios

### **Mistake 8: Not Communicating**
❌ Silent coding for 90 minutes
✅ Think aloud, explain approach

### **Mistake 9: Perfectionism**
❌ Perfect code that's incomplete
✅ Working code that's good enough

### **Mistake 10: Not Managing Time**
❌ Spending 60 minutes on design
✅ Follow the time breakdown

---

## 📚 7. All Machine Coding Problems with Solutions

I have solved **25+ Machine Coding problems** with complete implementations, available in my GitHub repository.

### **What's Included in GitHub Repo:**

✅ **Complete Working Code** (Java/Python/JavaScript)
✅ **Class Diagrams** for each problem
✅ **Design Pattern Explanations**
✅ **Multiple Test Cases**
✅ **README with Approach**
✅ **Time & Space Complexity Analysis**
✅ **Interview Tips** for each problem

### **Problem Categories:**

#### **🎮 Game Applications (4)**
- Tic Tac Toe Game
- Snake and Ladder
- Chess Game
- Cricket Score Tracker

#### **🏢 System Design Problems (11)**
- Parking Lot System
- Library Management System
- ATM Machine System
- Rate Limiter
- Task Scheduler
- LRU/LFU Cache
- Vending Machine
- File System
- Notification System
- Logger Framework
- Pub-Sub Messaging System

#### **🚀 Real-World Applications (10)**
- Splitwise (Expense Sharing)
- Ride Sharing System (Uber/Ola)
- Food Delivery System (Swiggy/Zomato)
- Movie Ticket Booking (BookMyShow)
- Hotel Booking System
- Meeting Scheduler
- E-Commerce Shopping Cart
- Social Media Feed
- Cab Booking System
- Online Food Ordering

---

## 🎯 Interview Success Checklist

### **Before Interview:**
- [ ] Practiced at least 10 machine coding problems
- [ ] Can complete a problem in 90 minutes
- [ ] Know 4-5 design patterns well
- [ ] Understand SOLID principles
- [ ] Familiar with time management strategy

### **During Interview:**
- [ ] Asked clarifying questions
- [ ] Created class diagram
- [ ] Explained approach before coding
- [ ] Wrote clean, readable code
- [ ] Tested with multiple scenarios
- [ ] Handled edge cases
- [ ] Completed working demo
- [ ] Communicated throughout

### **After Coding:**
- [ ] Showed confident demo
- [ ] Explained design decisions
- [ ] Mentioned improvements possible
- [ ] Answered follow-up questions
- [ ] Discussed scalability

---

## 💡 Pro Tips from Experience

### **Tip 1: Practice with Timer**
Always practice with a 90-minute timer. It changes everything!

### **Tip 2: Start Simple**
Build the simplest version first, then enhance.

### **Tip 3: Use IDE Features**
Auto-complete, refactoring, code generation - use everything!

### **Tip 4: Keep Code Visible**
Organize code so interviewer can follow easily.

### **Tip 5: Print Debug Statements**
Console logs help you and interviewer understand flow.

### **Tip 6: Don't Delete Code**
Comment out instead of deleting - might need it back!

### **Tip 7: Have Template Ready**
Keep boilerplate code ready (exception classes, utils).

### **Tip 8: Practice Typing Speed**
Faster typing = more time for thinking!

### **Tip 9: Learn from Solutions**
After solving, compare with others' approaches.

### **Tip 10: Mock Interviews**
Practice with friends, get feedback!

---

## 🎓 Learning Path (4-6 Weeks)

### **Week 1: Fundamentals**
- Study design patterns (Singleton, Factory, Strategy, Observer)
- Learn SOLID principles
- Practice clean code
- **Problems:** Tic Tac Toe, Vending Machine

### **Week 2: Easy Problems**
- Library Management
- ATM System
- File System
- Shopping Cart
- **Goal:** Complete in 90 minutes with clean code

### **Week 3: Medium Problems**
- Parking Lot System
- Snake and Ladder
- Hotel Booking
- Meeting Scheduler
- **Goal:** Handle complexity, multiple classes

### **Week 4: Hard Problems**
- Splitwise
- Ride Sharing System
- Food Delivery System
- Movie Booking System
- **Goal:** Complex business logic, optimizations

### **Week 5-6: Mock Interviews**
- Timed practice
- New problems
- Get feedback
- Refine approach

---

## 📞 Final Words

Machine Coding is **NOT about DSA** - it's about **software engineering skills**:
- ✅ Writing clean, maintainable code
- ✅ Using design patterns appropriately
- ✅ Building working applications
- ✅ Managing time effectively
- ✅ Communicating clearly

**Remember:** A working solution with good code > Perfect design that's incomplete!

**Most Important:** Practice, practice, practice! The more problems you solve under time constraints, the better you'll become.

---

## 🚀 Ready to Practice?

Click the button below to access **ALL 25+ Machine Coding Problems with Complete Solutions**!

Each problem includes:
- 📝 Problem Statement
- 🎨 Class Diagram
- 💻 Complete Code Solution
- 🧪 Test Cases
- 📊 Complexity Analysis
- 💡 Interview Tips
- 🔄 Alternative Approaches

**Good luck with your Machine Coding preparation!** 🎉
`,
      topics: ['Machine Coding', 'System Design', 'Interview Preparation', 'Design Patterns', 'Clean Code'],
      category: "Guide",
      estimatedTime: 120,
      platformLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com/your-username/machine-coding-problems'
        }
      ],
      companies: ['Flipkart', 'Amazon', 'Uber', 'Swiggy', 'Walmart', 'Atlassian', 'PhonePe', 'Razorpay'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 },
      notesUrl: '/notes/machine-coding/complete-guide.pdf'
    }
  ]
};
