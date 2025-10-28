import { LanguageMastery } from '../../types';

export const resumeLinkedInMastery: LanguageMastery = {
  id: 'resume-linkedin-mastery',
  language: 'Resume & LinkedIn',
  name: 'Resume & LinkedIn Optimization',
  icon: 'Code2',
  description: 'Master the art of creating impactful resumes and optimizing your LinkedIn profile',
  color: 'from-blue-500 to-cyan-600',
  totalProblems: 1,
  completedProblems: 0,
  problems: [
    {
      id: 'resume-linkedin-guide',
      title: 'Complete Guide to Resume Building & LinkedIn Optimization',
      difficulty: 'Easy',
      description: 'Comprehensive guide for creating standout resumes and LinkedIn profiles',
      topics: ['Resume', 'LinkedIn', 'Career Development', 'Professional Branding', 'Job Search'],
      category: "Guide",
      estimatedTime: 60,
      companies: ['All Companies'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 },
      notesUrl: '/notes/resume-linkedin/template.pdf'
    }
  ]
};
