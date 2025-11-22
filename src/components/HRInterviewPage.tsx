import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface HRInterviewPageProps {
  onBack: () => void;
}

interface HRQuestion {
  id: string;
  question: string;
  answer: string;
}

const hrQuestions: HRQuestion[] = [
  {
    id: 'q1',
    question: 'Tell Me About Yourself',
    answer: `This is usually the first question in almost every HR interview. It's your opportunity to make a great first impression.

**What They're Really Asking:**
- Can you communicate clearly?
- Are you professional?
- What's most relevant about your background?

**How to Answer - Use the Present-Past-Future Formula:**

**Present:** What you're doing now
**Past:** Relevant experience and achievements
**Future:** Why you're excited about this opportunity

**Example Answer (Engineering Graduate):**

"I recently graduated with a Bachelor's degree in Computer Science from XYZ University with a CGPA of 8.5. During my studies, I developed a strong foundation in programming languages like Java and Python, and completed several projects including a web-based e-commerce platform.

I also completed an internship at ABC Company where I worked on developing REST APIs and gained hands-on experience with Agile methodologies. This experience taught me the importance of clean code and effective collaboration.

I'm now looking to start my professional journey with a company like yours where I can contribute my technical skills while continuing to learn and grow in a dynamic environment."

**Tips:**
✅ Keep it under 2 minutes
✅ Focus on professional information only
✅ Practice until it sounds natural
✅ Tailor it to the job you're applying for`
  },
  {
    id: 'q2',
    question: 'Why Do You Want to Work Here?',
    answer: `This question tests whether you've done your homework about the company and if you're genuinely interested.

**What They're Really Asking:**
- Have you researched our company?
- Are you genuinely interested or just looking for any job?
- Do your goals align with our company culture?

**How to Answer - Use the 3-Point Method:**

1. **Company Research:** Mention something specific about the company
2. **Personal Connection:** Explain why it matters to you
3. **Mutual Benefit:** Show how you can contribute

**Example Answer (Tech Company):**

"I'm impressed by your company's commitment to innovation, particularly your recent launch of the AI-powered analytics platform. As someone who's passionate about leveraging technology to solve real-world problems, I'm excited about the opportunity to be part of such groundbreaking work.

What really resonates with me is your company culture of continuous learning. I noticed you have a robust mentorship program and regular tech talks, which is exactly the kind of environment where I can grow as a developer.

I believe my strong foundation in machine learning and my experience building predictive models during my final year project would allow me to contribute meaningfully to your data science team while learning from some of the best minds in the industry."

**Tips:**
✅ Research the company thoroughly before the interview
✅ Mention specific products, projects, or values
✅ Never say it's just about the salary
✅ Show genuine enthusiasm
✅ Connect company goals with your personal values`
  },
  {
    id: 'q3',
    question: 'What Are Your Strengths?',
    answer: `This is your chance to sell yourself, but you need to be strategic and honest.

**What They're Really Asking:**
- Are you self-aware?
- Do your strengths match the job requirements?
- Can you back up your claims with examples?

**How to Answer - Use the STAR Method:**

**Situation:** Set the context
**Task:** Explain the challenge
**Action:** What you did
**Result:** The outcome

**Example Answer (Problem-Solving):**

"One of my key strengths is problem-solving. I have a natural ability to break down complex problems into manageable parts and find effective solutions.

For example, during my final year project, our team was struggling with a database performance issue that was causing our application to crash. While others wanted to start from scratch, I analyzed the queries and identified that improper indexing was the root cause. I researched optimization techniques, implemented composite indexes, and reduced query time by 80%.

I believe this strength would be valuable in this role, especially when dealing with complex technical challenges or debugging issues."

**Common Strengths to Consider:**
- Analytical thinking
- Communication skills
- Quick learner
- Team collaboration
- Leadership
- Technical skills
- Adaptability
- Attention to detail

**Tips:**
✅ Choose 2-3 strengths maximum
✅ Always provide specific examples
✅ Make sure they're relevant to the job
✅ Be genuine - don't claim strengths you don't have
✅ Practice your examples beforehand`
  },
  {
    id: 'q4',
    question: 'What Are Your Weaknesses?',
    answer: `This is a tricky question because you need to be honest without disqualifying yourself.

**What They're Really Asking:**
- Are you self-aware and honest?
- Can you admit mistakes and learn from them?
- Are your weaknesses deal-breakers for this role?

**How to Answer - Weakness + Improvement Strategy:**

1. **Admit a real weakness** (not a strength in disguise)
2. **Explain the impact** you recognized
3. **Show what you're doing** to improve
4. **Demonstrate progress** you've made

**Example Answer (Public Speaking):**

"I used to struggle with public speaking and presenting in front of large groups. During my first semester, I was extremely nervous during presentations and would rush through my slides.

I realized this was holding me back, so I joined the college debate club to work on this. I started with small group discussions, then gradually moved to larger audiences. I also recorded myself practicing and worked on my pacing and body language.

While I still get nervous before big presentations, I'm now much more confident. In fact, I presented our final year project to a panel of 50 people and industry experts, and received positive feedback on my clarity and delivery."

**Weaknesses to AVOID:**
❌ I work too hard
❌ I'm too perfect
❌ I don't have any weaknesses
❌ Anything critical to the job

**Good Weaknesses to Consider:**
- Public speaking (with improvement story)
- Delegation
- Asking for help
- Time management (with balance story)
- Being too detail-oriented

**Tips:**
✅ Be honest but strategic
✅ Never mention a weakness that's critical for the role
✅ Always show you're actively working on it
✅ Demonstrate self-awareness and growth mindset`
  },
  {
    id: 'q5',
    question: 'Where Do You See Yourself in 5 Years?',
    answer: `This question assesses your ambition, planning ability, and whether you'll stay with the company.

**What They're Really Asking:**
- Do you have career goals?
- Are you ambitious but realistic?
- Will you stay long enough for us to get ROI on training you?
- Do your goals align with opportunities we can offer?

**How to Answer - Show Progression + Flexibility:**

1. **Express growth** in skills and responsibility
2. **Align with company** opportunities
3. **Show commitment** but stay flexible
4. **Avoid specific job titles** that might not exist

**Example Answer (Software Developer):**

"In five years, I see myself as an experienced software developer who has mastered both frontend and backend technologies and is contributing to architectural decisions. I'd like to be someone the team can rely on for solving complex technical challenges.

I'm also interested in gradually taking on mentorship responsibilities - helping onboard and guide junior developers, the way senior developers would guide me in my initial years.

While I can't predict exactly what opportunities will arise, I'm committed to continuous learning and growing with the company. I'd love to explore areas like cloud architecture or machine learning if those align with the company's direction."

**Example Answer (General - Works for Most Roles):**

"In five years, I see myself as a valuable contributor to this company who has grown significantly in both technical skills and professional maturity. I'd like to be someone known for delivering quality work and being a reliable team player.

I'm interested in taking on more responsibilities as I prove myself, whether that's leading projects, mentoring others, or exploring new areas within the company.

What's most important to me is being in an environment where I'm challenged and growing, and from what I've learned about your company, this seems like the perfect place for that."

**Tips:**
✅ Show ambition but be realistic for a fresher
✅ Express desire to grow WITH the company
✅ Show flexibility and openness to opportunities
❌ Never say you want to start your own company
❌ Don't name specific titles unless you're sure they exist`
  },
  {
    id: 'q6',
    question: 'Why Should We Hire You?',
    answer: `This is your elevator pitch - your chance to summarize why you're the best candidate.

**What They're Really Asking:**
- What makes you different from other candidates?
- Can you articulate your value clearly?
- Are you confident about your abilities?

**How to Answer - Use the 3-Point Value Proposition:**

1. **Skills Match:** Relevant technical/functional skills
2. **Cultural Fit:** Personality and values alignment
3. **Unique Value:** Something that sets you apart

**Example Answer (Software Developer):**

"You should hire me because I bring a unique combination of strong technical skills, quick learning ability, and genuine passion for coding.

First, my technical foundation is solid. I've worked with Java, Python, and React in both academic projects and my internship. I recently built a full-stack application that handles 1000+ concurrent users, demonstrating my ability to write scalable code.

Second, I'm a fast learner who thrives in dynamic environments. During my internship, I picked up new technologies quickly and contributed to production code within my first month.

Finally, what sets me apart is my problem-solving approach. I don't just code - I think about user experience, performance, and maintainability. I participate in competitive programming and have solved 300+ problems on LeetCode, which has sharpened my analytical thinking.

I'm not just looking for a job - I'm looking to build a career with a company like yours where I can contribute from day one while growing into a strong engineer."

**Example Answer (General Template):**

"You should hire me because I bring three things that make me the right fit for this role.

First, I have the skills you're looking for. [Mention 2-3 specific skills from the job description and how you have them].

Second, I'm a quick learner and highly motivated. I've consistently taken initiative to learn beyond my curriculum, completed certifications, and worked on practical projects.

Third, I align with your company culture. [Mention something specific about their culture/values and how you embody them]. I specifically want to work here because [mention something specific about the company].

As a fresher, I know I have a lot to learn, but I'm committed to working hard, growing fast, and becoming a valuable long-term asset to your team."

**Tips:**
✅ Be confident but not arrogant
✅ Provide specific examples, not vague claims
✅ Reference the job description
✅ Show you've researched the company
✅ End with enthusiasm and commitment`
  },
  {
    id: 'q7',
    question: 'Tell Me About a Challenge You Faced',
    answer: `This question assesses your problem-solving ability and how you handle difficult situations.

**What They're Really Asking:**
- How do you handle pressure?
- Can you overcome obstacles?
- What's your problem-solving approach?
- Do you take responsibility or blame others?

**How to Answer - Always Use STAR Method:**

**Situation:** Set the scene (briefly)
**Task:** Your responsibility
**Action:** What you specifically did
**Result:** Quantifiable outcome and learning

**Example Answer (Technical Challenge):**

**Situation:** "During my final year project, our team was building a real-time chat application. Two weeks before the deadline, we discovered that our messaging feature couldn't handle more than 50 concurrent users without crashing."

**Task:** "As the team lead and backend developer, it was my responsibility to fix this critical issue while keeping the project on track."

**Action:** "I first analyzed the code and identified that inefficient database queries were causing the bottleneck. Instead of panicking, I researched WebSocket optimization, implemented Redis caching for frequent queries, and restructured our database schema. I worked extra hours and coordinated with team members to test different load scenarios."

**Result:** "Within 5 days, we improved the system to handle 500+ concurrent users smoothly. We submitted on time and received an A grade. More importantly, I learned the importance of performance testing early and how to stay calm under pressure."

**Example Answer (Team Conflict):**

**Situation:** "During my internship, I was assigned to work with a colleague on a critical feature. We had completely different approaches - I wanted to build it step by step, while he wanted to use a third-party library I wasn't familiar with."

**Task:** "We needed to resolve this quickly as we had a tight deadline, and the disagreement was causing delays."

**Action:** "Instead of arguing, I scheduled a meeting where we both presented pros and cons of our approaches with supporting data. I researched his suggested library overnight and found it could indeed save time. I proposed a compromise: use the library but also document it thoroughly."

**Result:** "We completed the feature two days ahead of schedule, and it worked flawlessly. My manager appreciated our mature handling of the disagreement. I learned that being flexible and data-driven is more important than being right."

**Good Challenge Categories:**
- Technical problems you solved
- Team conflicts you resolved
- Deadlines you met despite obstacles
- New skills you learned quickly
- Leadership challenges

**Tips:**
✅ Choose a real challenge, not a trivial one
✅ Never blame others or show a bad attitude
✅ Focus on YOUR actions and decisions
✅ Always end with what you learned
✅ Practice your STAR stories beforehand`
  },
  {
    id: 'q8',
    question: 'What Are Your Salary Expectations?',
    answer: `This is often the most uncomfortable question for freshers, but preparation makes it easier.

**What They're Really Asking:**
- Are your expectations realistic?
- Do you know your market value?
- Are you flexible?

**How to Answer - Research + Flexibility Approach:**

1. **Know the market range** for freshers in that role/company
2. **Express flexibility** rather than rigid numbers
3. **Focus on learning** over money (for freshers)
4. **Ask about their budget** if possible

**Example Answer (When You've Researched):**

"Based on my research of industry standards for this role and location, I understand that freshers typically earn between 4-6 lakhs per annum. Given my skills in [mention relevant skills] and my internship experience, I believe a salary in that range would be fair.

However, I'm more focused on joining a company where I can learn and grow, and I'm confident that your company offers competitive compensation. I'm flexible and open to discussing a package that's in line with your company's policies.

Could you share more about your typical compensation structure for this role?"

**Example Answer (When You're Unsure):**

"As a fresher, I don't have a specific number in mind. I'm more interested in the learning opportunities and growth potential this role offers. I trust that your company has a fair and competitive compensation structure for freshers.

I'm committed to working hard and delivering value, and I'm confident that my compensation will reflect that. Could you share what range you typically offer for this position?"

**Typical Fresher Salary Ranges in India (2024):**

**Software Development:**
- Service Companies: 3-5 LPA
- Product Companies: 6-12 LPA
- Top Product Companies: 15-30 LPA
- Startups: 4-8 LPA + ESOPs

**Other Roles:**
- Data Analyst: 3-6 LPA
- Marketing: 3-5 LPA
- Business Analyst: 4-7 LPA
- Consulting: 5-10 LPA

**DO:**
✅ Research salary ranges on Glassdoor, AmbitionBox
✅ Consider: Base pay + Benefits + Bonuses + ESOPs
✅ Be realistic about your experience level
✅ Show flexibility
✅ Express interest in long-term growth

**DON'T:**
❌ Lie about other offers
❌ Give a very low number (devalues yourself)
❌ Give an unrealistic high number
❌ Seem only motivated by money

**Tips:**
✅ Never be the first to mention a specific number if possible
✅ Research thoroughly before the interview
✅ Consider the total package, not just base salary
✅ For freshers, learning > money initially`
  },
  {
    id: 'q9',
    question: 'Do You Have Any Questions for Us?',
    answer: `This is not optional - you MUST ask questions. It shows interest and engagement.

**What They're Really Assessing:**
- Are you genuinely interested in the role?
- Did you do your research?
- What are your priorities?
- How thoughtful are you?

**Good Questions to Ask:**

**About the Role:**
• "What does a typical day look like for someone in this position?"
• "What would be my key priorities in the first three months?"
• "What are the biggest challenges someone in this role might face?"
• "How do you measure success for this position?"

**About Learning & Growth:**
• "What learning and development opportunities does the company provide?"
• "Is there a mentorship program for new joiners?"
• "How does the company support skill development and certifications?"
• "What does the typical career progression look like for this role?"

**About Team & Culture:**
• "Can you tell me about the team I'd be working with?"
• "How would you describe the company culture?"
• "What do you enjoy most about working here?"
• "How does the team collaborate - what tools and processes do you use?"

**About the Company:**
• "What are the company's plans for growth in the next few years?"
• "What makes your company different from competitors?"
• "What are the biggest opportunities the company is focusing on?"

**About Next Steps:**
• "What are the next steps in the interview process?"
• "When can I expect to hear back from you?"

**Questions to AVOID:**

❌ Salary/benefits (save for offer stage)
❌ Time off/holidays in first interview
❌ How soon you can get promoted
❌ Anything easily found on their website
❌ "What does your company do?" (shows lack of research)

**Example Dialogue:**

Interviewer: "Do you have any questions for us?"

You: "Yes, I do have a few questions. First, I'm curious about what the onboarding process looks like for new developers. How do you typically help freshers ramp up?

[Listen to answer]

That sounds great. I'm also interested in learning - does the company provide opportunities for attending conferences or taking courses to stay updated with new technologies?

[Listen to answer]

One last question - based on our conversation, is there anything about my background or experience that you'd like me to clarify?"

**Tips:**
✅ Prepare 5-6 questions beforehand
✅ Ask 2-3 questions based on time
✅ Listen actively to their answers
✅ Ask follow-up questions if appropriate
✅ Show enthusiasm through your questions`
  },
  {
    id: 'q10',
    question: 'How Do You Handle Stress and Pressure?',
    answer: `This question helps the interviewer understand your coping mechanisms and resilience.

**What They're Really Asking:**
- Can you stay calm under pressure?
- Do you have healthy coping strategies?
- Will you be able to handle the demands of this role?

**How to Answer:**

Share your specific strategies and provide a real example.

**Example Answer:**

"I handle stress by staying organized and maintaining perspective. When I feel overwhelmed, I first take a step back and list out everything I need to do, then prioritize based on urgency and importance.

During my final semester when I was juggling my project, placements, and exams, I created a detailed weekly schedule and broke large tasks into smaller manageable ones. I also made sure to take short breaks to recharge - even a 10-minute walk helps me reset.

I've also learned to communicate early when I'm facing challenges rather than letting stress build up. During my internship, when I was stuck on a bug for hours, I asked my senior for help instead of struggling alone, and we solved it in 30 minutes.

Physical exercise also helps me manage stress. I play cricket twice a week, which helps me clear my mind and come back refreshed."

**Key Elements to Include:**
- Specific coping strategies
- Real-life example
- Proactive approach
- Healthy habits
- Communication
- Results/outcomes

**Good Stress Management Strategies:**
• Prioritization and planning
• Breaking tasks into smaller parts
• Taking regular breaks
• Physical exercise
• Seeking help when needed
• Maintaining work-life balance
• Meditation or mindfulness
• Time management techniques

**Tips:**
✅ Show you have healthy coping mechanisms
✅ Demonstrate you can stay productive under pressure
✅ Give a specific example from your experience
✅ Show self-awareness
❌ Never say you never feel stressed
❌ Don't mention unhealthy coping mechanisms`
  }
];

export const HRInterviewPage: React.FC<HRInterviewPageProps> = ({ onBack }) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Interview Mastery</span>
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center space-x-3">
              <span className="text-4xl">🧠</span>
              <span>HR Interview Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Master HR interviews with detailed answers to the 10 most commonly asked questions
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <span className="text-3xl">🎯</span>
              <span>Why HR Interviews Matter</span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                HR interviews assess your <strong className="text-white">communication skills</strong>, <strong className="text-white">cultural fit</strong>, and <strong className="text-white">personality</strong>. Even with excellent technical skills, you need to ace the HR round to land the job.
              </p>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                <p className="text-pink-200 font-medium">
                  <span className="text-xl mr-2">💡</span>
                  <strong>Pro Tip:</strong> Use the STAR method (Situation, Task, Action, Result) to structure your answers with specific examples. Click each question below to see detailed answers!
                </p>
              </div>
            </div>
          </div>

          {/* Questions Grid */}
          <div className="grid gap-4">
            {hrQuestions.map((q, index) => (
              <div
                key={q.id}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                      {q.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {expandedQuestions.has(q.id) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </button>

                {expandedQuestions.has(q.id) && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-700/50">
                      <div className="prose prose-invert max-w-none">
                        {q.answer.split('\n\n').map((paragraph, idx) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h4 key={idx} className="text-lg font-bold text-pink-400 mt-4 mb-2">
                                {paragraph.replace(/\*\*/g, '')}
                              </h4>
                            );
                          }
                          if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                            return (
                              <p key={idx} className="text-white font-semibold mt-3 mb-2">
                                {paragraph.replace(/\*\*/g, '')}
                              </p>
                            );
                          }
                          if (paragraph.startsWith('•') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
                            return (
                              <p key={idx} className="text-gray-300 ml-4 mb-2">
                                {paragraph}
                              </p>
                            );
                          }
                          if (paragraph.includes('"') && paragraph.length > 100) {
                            return (
                              <div key={idx} className="bg-gray-800/50 border-l-4 border-pink-500 p-4 my-4 rounded-r-lg">
                                <p className="text-gray-200 italic leading-relaxed">
                                  {paragraph.replace(/"/g, '')}
                                </p>
                              </div>
                            );
                          }
                          return (
                            <p key={idx} className="text-gray-300 leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final Tips */}
          <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Remember</h3>
            <div className="space-y-3 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-white">✓ Preparation:</strong> Research and practice your answers
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">✓ Authenticity:</strong> Be yourself, not someone you think they want
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">✓ Examples:</strong> Always back claims with specific instances
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">✓ Attitude:</strong> Show enthusiasm, curiosity, and professionalism
              </p>
              <p className="text-pink-400 font-semibold mt-4">
                You've got this! Good luck with your interviews! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
