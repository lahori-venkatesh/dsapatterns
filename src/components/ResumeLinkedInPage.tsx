import React, { useState } from 'react';
import { ArrowLeft, FileText, Linkedin, Download } from 'lucide-react';

interface ResumeLinkedInPageProps {
  onBack: () => void;
}

export const ResumeLinkedInPage: React.FC<ResumeLinkedInPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'linkedin'>('resume');

  const resumeContent = `
# The Ultimate Guide to Resume Building

## Why Your Resume Matters

Your resume is often the first impression you make on potential employers. In today's competitive job market, a well-crafted resume can be the difference between landing an interview and being overlooked.

---

## Essential Resume Sections

### 1. Contact Information
**Must Include:**
- Full Name (larger font, professional)
- Phone Number (active and professional voicemail)
- Email Address (professional - firstname.lastname@email.com)
- LinkedIn Profile URL
- GitHub/Portfolio (for tech roles)
- Location (City, State - no full address needed)

**Avoid:**
- ❌ Unprofessional email addresses (partylover123@email.com)
- ❌ Full home address
- ❌ Photo (unless specifically requested)
- ❌ Age, marital status, or personal details

---

### 2. Professional Summary/Objective
**For Freshers (2-3 lines):**
- Highlight your degree and specialization
- Mention key technical skills
- Express career goals aligned with the role

**Example:**
"Recent Computer Science graduate with strong foundation in Java, Python, and web development. Passionate about building scalable applications and solving complex problems. Seeking software engineering role to apply technical skills and contribute to innovative projects."

**Key Tips:**
- Keep it concise (3-4 lines maximum)
- Tailor it to each job application
- Use keywords from the job description
- Show enthusiasm and value proposition

---

### 3. Education
**Format:**
- Degree Name (B.Tech in Computer Science)
- University/College Name
- Graduation Year (or Expected Graduation)
- CGPA/Percentage (if above 7.0/70%)
- Relevant coursework (optional, for freshers)

**Example:**
**Bachelor of Technology in Computer Science**
XYZ University, Bangalore | 2020 - 2024
CGPA: 8.5/10
Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development

**Tips:**
- List most recent education first
- Include academic achievements and honors
- Mention relevant projects in coursework
- Can include 12th grade for freshers

---

### 4. Technical Skills
**Organize by Category:**

**Programming Languages:** Java, Python, C++, JavaScript
**Web Technologies:** HTML5, CSS3, React.js, Node.js, Express.js
**Databases:** MySQL, MongoDB, PostgreSQL
**Tools & Platforms:** Git, GitHub, VS Code, Docker, AWS
**Concepts:** Data Structures, Algorithms, OOP, REST APIs

**Tips:**
- Only list skills you can discuss confidently
- Order by proficiency (strongest first)
- Include both technical and soft skills
- Be specific (React.js, not just JavaScript frameworks)
- Update regularly as you learn new technologies

---

### 5. Projects (Critical for Freshers!)

**Format Each Project:**

**Project Name** | Technologies Used | GitHub Link
Duration | Team Size (if applicable)

- Brief description of what the project does (1 line)
- Your specific role and contributions (2-3 bullet points)
- Technical implementation details
- Impact/results (users, performance improvements, etc.)

**Example:**

**E-Commerce Shopping Platform** | React, Node.js, MongoDB | [GitHub]
June 2023 - August 2023 | Team of 3

- Developed a full-stack e-commerce application with user authentication, product catalog, and payment integration
- Implemented RESTful APIs using Node.js and Express for handling 50+ endpoints
- Designed responsive UI components with React and Tailwind CSS, improving user experience by 40%
- Integrated Stripe payment gateway and JWT-based authentication for secure transactions

**Tips:**
- List 3-4 strong projects (quality over quantity)
- Use action verbs (Developed, Implemented, Designed, Created)
- Include metrics and impact where possible
- Provide GitHub links for code review
- Show variety in tech stack

---

### 6. Experience (Internships/Work)

**Format:**

**Job Title** | Company Name | Location
Month Year - Month Year

- Achievement/responsibility (quantify when possible)
- Technical skills used
- Impact on team/project
- Learnings and growth

**Example:**

**Software Engineering Intern** | ABC Tech Solutions | Bangalore
May 2023 - July 2023

- Collaborated with senior developers to build and deploy 5 new features for the company's main product
- Reduced API response time by 30% through database query optimization
- Wrote unit tests achieving 85% code coverage using Jest and Pytest
- Participated in daily standups and code reviews following Agile methodology

**Tips:**
- Use STAR method (Situation, Task, Action, Result)
- Start each bullet with strong action verbs
- Quantify achievements (percentages, numbers, time)
- Show progression and learning
- Include freelance/volunteer work if relevant

---

### 7. Achievements & Certifications

**Include:**
- Competitive programming ranks (Codeforces, LeetCode)
- Hackathon wins or participation
- Online certifications (Coursera, Udemy, AWS)
- Academic awards and scholarships
- Open source contributions
- Published papers or articles

**Example:**
- Solved 500+ problems on LeetCode (Top 15% globally)
- Winner of Smart India Hackathon 2023 (developed healthcare monitoring system)
- AWS Certified Cloud Practitioner
- Contributed to 3 open-source projects on GitHub (100+ stars combined)

---

### 8. Extracurricular Activities (Optional)

**Include if relevant:**
- Leadership positions in college clubs
- Organizing technical events
- Mentoring or teaching experience
- Sports or cultural achievements

**Keep it brief** - 2-3 impactful points maximum

---

## Resume Formatting Best Practices

### Visual Design

**Do:**
- ✅ Use clean, professional fonts (Calibri, Arial, Times New Roman)
- ✅ Font size: 10-12pt for body, 14-16pt for name
- ✅ Consistent formatting throughout
- ✅ Adequate white space and margins
- ✅ Use bullet points for readability
- ✅ Bold section headers
- ✅ Keep it to 1 page for freshers (2 pages for experienced)

**Don't:**
- ❌ Use decorative or hard-to-read fonts
- ❌ Use colors excessively (stick to black/dark gray)
- ❌ Cram too much information
- ❌ Use tables or text boxes (ATS may not read them)
- ❌ Include graphics or charts
- ❌ Use headers and footers

---

## ATS Optimization

**What is ATS?**
Applicant Tracking System - software that scans resumes before humans see them.

**How to Pass ATS:**

1. **Use Standard Section Headers**
   - "Work Experience" not "Where I've Worked"
   - "Education" not "Academic Background"

2. **Use Keywords from Job Description**
   - Match exact terminology
   - Include both acronyms and full forms (ML and Machine Learning)

3. **Avoid:**
   - Images and graphics
   - Tables and text boxes
   - Headers and footers
   - Unusual fonts or formatting

4. **File Format:**
   - Save as .docx or .pdf (check job posting preference)
   - Name file professionally: FirstName_LastName_Resume.pdf

---

## Action Verbs to Use

**Instead of "Responsible for":**
- Developed, Created, Built, Designed
- Implemented, Integrated, Configured
- Optimized, Enhanced, Improved
- Collaborated, Coordinated, Led
- Analyzed, Researched, Investigated
- Automated, Streamlined, Simplified
- Achieved, Delivered, Accomplished

---

## Common Mistakes to Avoid

### Content Mistakes:
- ❌ Typos and grammatical errors
- ❌ Lying or exaggerating skills
- ❌ Using first person (I, me, my)
- ❌ Including irrelevant information
- ❌ Vague descriptions without impact
- ❌ Including salary information
- ❌ Negative language about previous employers

### Formatting Mistakes:
- ❌ Inconsistent date formats
- ❌ Mixing bullet point styles
- ❌ Unequal spacing
- ❌ Too many fonts or sizes
- ❌ Poor alignment
- ❌ Overly creative layouts (for tech roles)

---

## Resume Checklist

**Before Submitting:**

- [ ] Contact information is accurate and professional
- [ ] Tailored to the specific job posting
- [ ] No typos or grammatical errors (proofread 3+ times)
- [ ] Consistent formatting throughout
- [ ] Quantified achievements where possible
- [ ] Keywords from job description included
- [ ] 1 page for freshers, max 2 for experienced
- [ ] Saved in correct format (.pdf or .docx)
- [ ] File named professionally
- [ ] All links (LinkedIn, GitHub) are working
- [ ] Reviewed by at least 2 other people
- [ ] ATS-friendly format (no tables, images)

---

## Resume Tips for Different Experience Levels

### For Freshers (0-1 years):

**Focus on:**
- Strong academic projects (3-4 detailed ones)
- Technical skills and certifications
- Internships and volunteer work
- Competitive programming achievements
- Relevant coursework
- College activities and leadership

**Compensate lack of experience with:**
- Personal projects showcasing skills
- Open source contributions
- Freelance work
- Hackathon participation
- Online course completions

---

### For Experienced (1-3 years):

**Focus on:**
- Professional experience (most important)
- Impact and achievements at previous companies
- Technologies used in production
- Team collaboration and leadership
- Project scale and complexity

**De-emphasize:**
- College projects (keep only 1-2 exceptional ones)
- Academic coursework
- Non-relevant college activities

---

## Tailoring Your Resume

**For Each Application:**

1. Read the job description carefully
2. Identify 10-15 key skills/requirements
3. Match your experience to those requirements
4. Use similar terminology and keywords
5. Reorder bullet points to highlight relevant experience
6. Adjust your summary to align with role

**Example:**
If job emphasizes "React development" - ensure React projects are listed first and React skills are prominent.

---

## Resume Review Resources

**Tools to Use:**
- Grammarly (grammar and spelling)
- Jobscan (ATS optimization)
- Resume Worded (AI feedback)
- LinkedIn Resume Assistant
- VMock (automated feedback)

**Get Human Feedback:**
- Career counselors
- Industry professionals
- College seniors in your field
- Online communities (Reddit r/resumes)

---

## Final Tips

### Do:
- ✅ Update regularly (add new skills, projects)
- ✅ Keep multiple versions for different roles
- ✅ Use numbers and metrics everywhere possible
- ✅ Show impact, not just responsibilities
- ✅ Make it easy to skim (recruiters spend 6-7 seconds)
- ✅ Include relevant keywords naturally
- ✅ Be honest and authentic

### Don't:
- ❌ Use one generic resume for all applications
- ❌ List every technology you've touched
- ❌ Write paragraphs (use bullet points)
- ❌ Go over 1 page as a fresher
- ❌ Include references or "References available upon request"
- ❌ Use objective statements that don't add value
- ❌ Forget to update dates and information

---

## Remember

**Your resume is a marketing document, not an autobiography.**

- Highlight what makes you valuable
- Focus on achievements, not duties
- Make it easy for recruiters to say "yes"
- Continuously improve based on feedback
- Customize for each opportunity

**A great resume opens doors. Your skills and personality close the deal in interviews!**

Good luck with your job search!
`;

  const linkedInContent = `
# LinkedIn Profile Optimization Guide

## Why LinkedIn Matters

LinkedIn is the world's largest professional network with 900+ million members. For job seekers, especially in tech:
- 87% of recruiters use LinkedIn to find candidates
- 6 people are hired every minute through LinkedIn
- Your profile is your 24/7 personal brand
- It's often the first thing recruiters check after your resume

---

## The Complete Profile Checklist

### 1. Profile Photo

**The Impact:**
Profiles with photos receive 21x more profile views and 36x more messages.

**Best Practices:**
- ✅ Professional headshot (shoulders up)
- ✅ Clear, high-resolution image (400x400 pixels minimum)
- ✅ Smiling, approachable expression
- ✅ Solid, neutral background
- ✅ Professional attire (appropriate for your industry)
- ✅ Recent photo (within 1-2 years)
- ✅ Good lighting (face clearly visible)

**Avoid:**
- ❌ Group photos or cropped images
- ❌ Sunglasses or hats
- ❌ Selfies or casual photos
- ❌ Filtered or heavily edited images
- ❌ Blurry or low-quality photos
- ❌ Unprofessional backgrounds (parties, bars)

---

### 2. Banner/Background Photo

**Why It Matters:**
The banner is prime real estate - it's the first thing people see.

**Options:**
- City skyline or tech imagery
- Minimalist design with your tagline
- Your work or projects
- Industry-related graphics
- Professional photo from events

**Tools to Create:**
- Canva (free templates)
- Adobe Spark
- Figma
- Size: 1584 x 396 pixels

---

### 3. Headline (Critical!)

**You have 220 characters** - make them count!

**Bad Examples:**
- "Student at XYZ University"
- "Looking for opportunities"
- "Computer Science Graduate"

**Great Examples:**
- "Software Engineer | Java, Python, React | Building Scalable Web Applications | Open to Opportunities"
- "Full Stack Developer | MERN Stack | 500+ LeetCode Problems | Aspiring at FAANG"
- "Frontend Developer | React.js Specialist | UI/UX Enthusiast | Open Source Contributor"

**Formula:**
[Your Role] | [Top Skills/Technologies] | [What You Do/Value Proposition] | [Current Status]

**Tips:**
- Use keywords recruiters search for
- Include your top 3-4 technical skills
- Show what makes you unique
- Add "Open to opportunities" if job hunting
- Update based on your career goals

---

### 4. About/Summary Section

**You have 2,600 characters** - tell your story!

**Structure:**

**Opening (Hook):**
Start with something compelling about who you are.

**Example:**
"I'm a passionate software developer who loves turning complex problems into elegant solutions. With a strong foundation in computer science and hands-on experience in full-stack development, I build applications that make a difference."

**Body (Your Story):**
- Your background and journey
- Technical skills and expertise
- Projects and achievements
- What drives you
- Industries or domains you're interested in

**Closing (Call to Action):**
- What you're looking for
- How to reach you
- Your availability

**Sample About Section:**

"🚀 Software Developer | Java, Python, React | Problem Solver

I'm a recent Computer Science graduate from XYZ University with a passion for building scalable web applications and solving complex algorithmic challenges.

**WHAT I DO:**
I specialize in full-stack development using the MERN stack, with strong expertise in Java and Python. I've built multiple projects from scratch, including an e-commerce platform serving 1000+ users and a real-time chat application.

**TECHNICAL TOOLKIT:**
• Languages: Java, Python, JavaScript, C++
• Frontend: React.js, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express.js, Spring Boot
• Databases: MongoDB, MySQL, PostgreSQL
• Tools: Git, Docker, AWS, VS Code

**ACHIEVEMENTS:**
• Solved 500+ problems on LeetCode (Top 15%)
• Smart India Hackathon 2023 Winner
• Contributed to 3 open-source projects
• AWS Certified Cloud Practitioner

**WHAT I'M LOOKING FOR:**
I'm seeking software engineering opportunities where I can contribute to innovative projects, learn from experienced developers, and grow my technical skills.

**LET'S CONNECT:**
Open to discussing opportunities, collaborating on projects, or just talking tech!
📧 yourname@email.com"

**Writing Tips:**
- Use first person (I, my) - it's more personal
- Break into short paragraphs for readability
- Use emojis sparingly for visual breaks (tech-appropriate ones)
- Include keywords naturally
- Show personality while staying professional
- Make it easy to skim (bullet points help)
- Update regularly with new skills and achievements

---

### 5. Experience Section

**For Each Role:**

**Job Title**
Company Name | Location
Month Year - Month Year (or Present)

**Description:** Write 3-5 bullet points about your responsibilities and achievements.

**Example:**

**Software Engineering Intern**
ABC Tech Solutions | Bangalore
May 2023 - July 2023

• Developed and deployed 5 new features for the company's SaaS platform using React and Node.js
• Optimized database queries, reducing API response time by 30% and improving user experience
• Implemented comprehensive unit tests with Jest, achieving 85% code coverage
• Collaborated with cross-functional team of 8 members in Agile environment
• Conducted code reviews and contributed to technical documentation

**Tips:**
- Use strong action verbs
- Quantify achievements (numbers, percentages)
- Include technologies used
- Show impact and results
- Add media (links to projects, articles, presentations)
- Request recommendations from managers/colleagues

---

### 6. Education Section

**Include:**
- Degree and Major
- University Name
- Years Attended
- GPA (if strong - above 3.5/4.0 or 8.0/10)
- Relevant coursework
- Academic achievements
- Extracurricular activities

**Example:**

**Bachelor of Technology - Computer Science**
XYZ University
2020 - 2024 | GPA: 8.5/10

**Relevant Coursework:** Data Structures & Algorithms, Database Systems, Operating Systems, Web Development, Machine Learning

**Activities:** Technical Club President, Smart India Hackathon Participant, Code Club Member

---

### 7. Skills Section

**How It Works:**
- Add up to 50 skills
- Top 3 skills appear on your profile card
- Endorsements from connections validate skills
- Recruiters search by skills

**Strategic Ordering:**

**Top 3 (Most Important):**
Choose your strongest, most relevant skills that you want to be known for.

Examples for Software Developers:
1. Java / Python / JavaScript (your strongest language)
2. React.js / Spring Boot / Node.js (your main framework)
3. Data Structures and Algorithms / Full-Stack Development

**Categories to Include:**

**Programming Languages:**
Java, Python, JavaScript, C++, SQL

**Frameworks & Libraries:**
React.js, Node.js, Express.js, Spring Boot, Django

**Databases:**
MongoDB, MySQL, PostgreSQL, Redis

**Tools & Platforms:**
Git, GitHub, Docker, AWS, Linux, VS Code

**Concepts & Methodologies:**
Data Structures, Algorithms, OOP, REST APIs, Agile, Microservices

**Soft Skills:**
Problem Solving, Team Collaboration, Communication, Leadership

**Tips:**
- Only list skills you can discuss confidently
- Get endorsements from colleagues and friends
- Give endorsements to receive them
- Take LinkedIn Skill Assessments (shows badge)
- Regularly update with new technologies
- Remove outdated or irrelevant skills

---

### 8. Projects Section

**Why Add Projects:**
- Showcases your practical skills
- Provides portfolio for recruiters
- Differentiates you from other candidates
- Shows initiative and passion

**For Each Project:**

**Project Name**
Associated with: University / Personal / Company
Date Range

**Description:**
- What the project does (1-2 lines)
- Technologies used
- Your role and contributions
- Impact or results
- What you learned

**Add Media:**
- GitHub repository link
- Live demo link
- Screenshots
- Demo video
- Presentation slides

**Example:**

**E-Commerce Shopping Platform**
Personal Project
Jun 2023 - Aug 2023

Built a full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.

**Tech Stack:** React.js, Node.js, Express.js, MongoDB, Stripe API, JWT

**Key Features:**
• Responsive UI with React and Tailwind CSS
• RESTful API with 50+ endpoints
• Secure authentication using JWT
• Integrated Stripe payment gateway
• Admin dashboard for product management

**Impact:** Successfully handles 100+ concurrent users with sub-second response times

🔗 GitHub: [link]
🌐 Live Demo: [link]

---

### 9. Certifications

**What to Include:**
- Online courses (Coursera, Udemy, Udacity)
- Cloud certifications (AWS, Azure, GCP)
- Technology-specific certs (React, Python, Java)
- Professional certifications
- Bootcamp completions

**Popular Certifications for Developers:**
- AWS Certified Cloud Practitioner
- Google IT Support Professional
- Meta Front-End Developer
- IBM Data Science Professional
- Oracle Java Certification
- MongoDB Certified Developer

**Tips:**
- Include credential ID and verification link
- Set expiration date if applicable
- Add skills learned from certification
- Share certificate post on your feed

---

### 10. Recommendations

**Why They Matter:**
- Social proof of your skills
- Build trust with recruiters
- Stand out from competition
- 30-character headline recommendation shown on profile

**How to Get Them:**

1. **Give First:** Write recommendations for others - they'll often reciprocate
2. **Be Specific:** Ask for recommendations highlighting specific skills or projects
3. **Make it Easy:** Provide talking points or reminders of your work together
4. **Choose Wisely:** Professors, managers, colleagues, clients

**Who to Ask:**
- Direct managers from internships
- Project supervisors
- College professors
- Team members you've worked with
- Clients from freelance projects

**Sample Request Message:**

"Hi [Name],

I hope you're doing well! I'm currently updating my LinkedIn profile and would really appreciate if you could write a brief recommendation highlighting [specific project/skill we worked on together].

I'd be happy to return the favor!

Thanks so much,
[Your Name]"

---

## LinkedIn Profile Optimization Strategies

### 1. LinkedIn SEO

**How Recruiters Search:**
- They use Boolean searches with keywords
- They filter by location, industry, experience
- They look at your top 3 skills

**Optimize For Search:**

**Keywords Everywhere:**
- Headline
- About section
- Experience descriptions
- Skills section
- Project descriptions

**Example:**
If you want to be found for "React Developer", mention "React" multiple times naturally across your profile.

**Location:**
- Set to your target job location
- Can use "Open to relocate" in headline

---

### 2. Engagement & Activity

**Why It Matters:**
Active profiles rank higher in searches and get more visibility.

**How to Stay Active:**

**Post Regularly (2-3 times/week):**
- Share your projects and learnings
- Write articles about your tech journey
- Reshare relevant industry content with your thoughts
- Celebrate achievements (certificates, milestones)

**What to Post:**
- "Just deployed my new project..."
- "Learned something cool about [technology]..."
- "Excited to share that I completed..."
- Tips and tutorials
- Your take on tech news

**Engagement Tips:**
- Like and comment on others' posts
- Join and participate in relevant groups
- Follow companies and influencers in your field
- Respond to comments on your posts

---

### 3. Custom URL

**Change your URL from:**
linkedin.com/in/john-doe-123456789

**To:**
linkedin.com/in/johndoe
or
linkedin.com/in/john-doe-developer

**Why:**
- Looks more professional
- Easier to share
- Better for personal branding
- Can include on resume

**How:**
Settings → Edit Public Profile → Edit your custom URL

---

### 4. Featured Section

**Showcase Your Best Work:**

Add up to 3 featured items:
- Projects with links
- Articles you've written
- Certifications
- Presentations
- GitHub repositories
- Portfolio website

**This appears prominently on your profile!**

---

### 5. Open to Work

**Turn On "Open to Work" Feature:**

Settings → Job seeking preferences

**What to Specify:**
- Job titles you're interested in
- Locations you prefer
- Job types (full-time, contract, internship)
- Start date availability

**Options:**
- Show to all LinkedIn members (green ring on photo)
- Show only to recruiters (private mode)

**Pro Tip:** Use the green ring when actively job hunting - it gets you 2x more recruiter messages.

---

## Content Strategy

### What to Share

**Project Updates:**
"Excited to share my latest project - a [description]. Built with [tech stack]. Check it out: [link]"

**Learning Milestones:**
"Just completed [certification/course] on [platform]. Key takeaways: 1) ... 2) ... 3) ..."

**Technical Insights:**
"Here's a cool optimization trick I learned in React..."

**Career Updates:**
"Thrilled to announce I'm starting as [role] at [company]!"

**Engagement Posts:**
"What's your favorite data structure and why?"

---

### Writing Style

**Do:**
- ✅ Be authentic and personal
- ✅ Share your learning journey
- ✅ Provide value to your network
- ✅ Use simple, clear language
- ✅ Include relevant hashtags (3-5 max)
- ✅ Tag people and companies when appropriate
- ✅ Ask questions to encourage engagement

**Don't:**
- ❌ Post too frequently (avoid spam)
- ❌ Share controversial opinions
- ❌ Complain about companies or people
- ❌ Use excessive hashtags
- ❌ Only share self-promotional content
- ❌ Copy-paste generic motivational content

---

## Networking Strategies

### Who to Connect With

**High Priority:**
- Classmates and alumni
- People from internships/jobs
- Professors and mentors
- Recruiters in your field
- Developers at target companies
- People who share your interests

**Growing Your Network:**

**Quality over Quantity:**
- Aim for 500+ connections (shows well-connected)
- But focus on meaningful connections
- Engage with your network regularly

**Connection Request Message:**

"Hi [Name],

I came across your profile and noticed we both [share interest/alumni/work in same field]. I'd love to connect and learn from your experience in [specific area].

Looking forward to connecting!

[Your Name]"

**Keep it:**
- Short (2-3 sentences)
- Personal (mention something specific)
- Professional
- Clear about why you're connecting

---

### Engaging with Your Network

**Regular Actions:**

**Daily (5-10 minutes):**
- Like/comment on 3-5 posts
- Check for messages and respond
- Accept connection requests

**Weekly:**
- Post your own content (1-2 times)
- Send personalized messages to new connections
- Endorse connections' skills

**Monthly:**
- Review and update profile
- Add new skills or projects
- Request recommendations
- Clean up old or irrelevant content

---

## Advanced Tips

### 1. LinkedIn Creator Mode

**Benefits:**
- Follow button instead of Connect
- Featured topics on profile
- Access to LinkedIn Live
- Better content reach
- Creator analytics

**Turn On If:**
- You plan to post regularly
- You want to build thought leadership
- You're creating content (articles, posts, videos)

---

### 2. LinkedIn Learning

**Leverage Free Courses:**
- Many courses are free with LinkedIn
- Add completed courses to profile
- Get certificates to showcase
- Learn new skills continuously

**Recommended for Developers:**
- Programming language courses
- Framework tutorials
- Soft skills training
- Career development

---

### 3. LinkedIn Groups

**Join Relevant Groups:**
- Tech-specific groups (React Developers, Python Programmers)
- Location-based groups
- Alumni groups
- Career-focused groups

**Participate Actively:**
- Answer questions
- Share resources
- Network with members
- Stay updated on industry trends

---

### 4. Following Strategy

**Follow:**
- Companies you want to work for
- Industry leaders and influencers
- Tech bloggers and educators
- Recruiters in your field
- News publications in tech

**Benefits:**
- Stay updated on job openings
- Learn from experts
- Get content ideas
- Understand industry trends

---

## Profile Checklist

Before you finish, verify:

**Profile Completeness:**
- [ ] Professional profile photo
- [ ] Custom background banner
- [ ] Compelling headline with keywords
- [ ] Comprehensive About section (300+ words)
- [ ] All experiences added with descriptions
- [ ] Education section complete
- [ ] 50+ skills added and ordered strategically
- [ ] Top 3 skills reflect your strongest areas
- [ ] Projects added with links and media
- [ ] Certifications included
- [ ] Custom URL set
- [ ] Featured section showcasing best work
- [ ] "Open to Work" turned on (if job hunting)

**Content & Activity:**
- [ ] Made first post sharing a project/learning
- [ ] Joined 5+ relevant groups
- [ ] Following companies and influencers
- [ ] Connected with 100+ people
- [ ] Requested 3+ recommendations
- [ ] Endorsed connections' skills

**Optimization:**
- [ ] Keywords included throughout profile
- [ ] All links working and updated
- [ ] No typos or errors
- [ ] Profile set to public
- [ ] Location matches target job market

---

## Common Mistakes to Avoid

### Profile Mistakes:
- ❌ Incomplete profile (aim for All-Star rating)
- ❌ No profile photo or unprofessional photo
- ❌ Generic headline (just job title)
- ❌ Empty or vague About section
- ❌ Listing job duties instead of achievements
- ❌ No keywords for searchability
- ❌ Outdated information
- ❌ Typos and grammatical errors

### Networking Mistakes:
- ❌ Sending generic connection requests
- ❌ Immediately pitching after connecting
- ❌ Only reaching out when you need something
- ❌ Not responding to messages
- ❌ Connecting with everyone (spammy approach)
- ❌ Not engaging with your network

### Content Mistakes:
- ❌ Never posting anything
- ❌ Only posting job search updates
- ❌ Sharing political or controversial content
- ❌ Copy-pasting generic quotes
- ❌ Oversharing personal life
- ❌ Negative posts about employers

---

## LinkedIn vs Resume

**Key Differences:**

**Resume:**
- 1 page, concise
- Tailored for each application
- Focus on recent/relevant experience
- Formal tone

**LinkedIn:**
- Comprehensive, detailed
- Single version for all
- Include all experience and skills
- More conversational tone
- Multimedia elements
- Ongoing networking platform

**Both Should:**
- Have consistent information
- Use similar keywords
- Highlight achievements
- Show your value proposition

---

## Measuring Success

**Track These Metrics:**

**Profile Views:**
- Goal: 50+ views per week
- Shows your profile is discoverable
- Indicates interest from network

**Search Appearances:**
- Goal: 10+ per week
- Shows you're appearing in recruiter searches
- Validates your SEO efforts

**Connection Growth:**
- Goal: 500+ total connections
- Add 10-20 quality connections per month
- Focus on relevant people in your field

**Engagement:**
- Post views and reactions
- Comments and shares
- Messages from recruiters
- InMail responses

**Job Opportunities:**
- Recruiter messages per month
- Interview requests
- Job offers

---

## Action Plan

### Week 1: Build Foundation
- [ ] Professional photo and banner
- [ ] Write compelling headline
- [ ] Draft detailed About section
- [ ] Add all education and experience
- [ ] Add 30+ skills

### Week 2: Enhance Profile
- [ ] Add projects with links
- [ ] Include certifications
- [ ] Set custom URL
- [ ] Add Featured section
- [ ] Request 2-3 recommendations

### Week 3: Grow Network
- [ ] Connect with 50+ people
- [ ] Join 5 relevant groups
- [ ] Follow target companies
- [ ] Follow industry influencers
- [ ] Engage with 5 posts daily

### Week 4: Content & Activity
- [ ] Make first post
- [ ] Share a project
- [ ] Write an article
- [ ] Comment on 10+ posts
- [ ] Send personalized messages to new connections

---

## Resources

**Profile Review Tools:**
- LinkedIn Profile Strength Meter
- Career Analyzer tools
- Resume.io LinkedIn optimizer

**Content Ideas:**
- LinkedIn's own articles and tips
- Follow #LinkedInTips hashtag
- Industry blogs and newsletters

**Communities:**
- LinkedIn Learning Hub
- Career-specific groups
- Alumni networks

---

## Final Thoughts

**Remember:**

- Your LinkedIn profile is a living document - update it regularly
- Consistency is key - stay active and engaged
- Quality over quantity in everything (connections, posts, skills)
- Be authentic and let your personality shine through
- Networking is about building relationships, not just collecting contacts
- Give value before asking for it
- Optimize for both humans and algorithms
- Your next opportunity might come from your LinkedIn presence

**LinkedIn is more than a resume - it's your professional brand, your network, and your career growth platform.**

**Invest time in building a strong presence, and it will pay dividends throughout your career!**

Good luck building your professional brand!
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Language Mastery
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Resume & LinkedIn Optimization</h1>
          <p className="text-gray-400">Master the art of creating standout resumes and LinkedIn profiles</p>
        </div>

        <div className="mb-6 flex gap-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('resume')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
              activeTab === 'resume'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-5 h-5" />
            Resume Building
          </button>
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
              activeTab === 'linkedin'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Optimization
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
          {activeTab === 'resume' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Complete Resume Building Guide</h2>
                  <p className="text-gray-400">Everything you need to create an ATS-friendly, impactful resume</p>
                </div>
                <a
                  href="/templates/resume-template.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Download Template
                </a>
              </div>
              <div className="prose prose-invert max-w-none">
                {resumeContent.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                        {line.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-blue-400 mt-6 mb-3">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-200 mt-4 mb-2">
                        {line.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (line.startsWith('---')) {
                    return <hr key={index} className="my-6 border-gray-600" />;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-white mt-3 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-300 ml-4 mb-1">
                        {line.replace('- ', '')}
                      </li>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-gray-300 mb-2 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'linkedin' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Complete LinkedIn Optimization Guide</h2>
                <p className="text-gray-400">Build a professional brand and get noticed by recruiters</p>
              </div>
              <div className="prose prose-invert max-w-none">
                {linkedInContent.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                        {line.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-blue-400 mt-6 mb-3">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-200 mt-4 mb-2">
                        {line.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (line.startsWith('---')) {
                    return <hr key={index} className="my-6 border-gray-600" />;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-white mt-3 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-300 ml-4 mb-1">
                        {line.replace('- ', '')}
                      </li>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-gray-300 mb-2 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
