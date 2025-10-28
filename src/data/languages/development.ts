import { LanguageMastery } from '../../types';
import { allDevelopmentProblems } from '../development';

export const developmentMastery: LanguageMastery = {
  id: 'development-mastery',
  language: 'Full Stack' as any,
  name: 'Full Stack Web Development',
  icon: 'Code',
  description: 'Complete Full Stack interview prep: JavaScript, TypeScript, React, Node.js, Express, Next.js, APIs, Security, Testing & DevOps',
  color: 'from-emerald-500 to-teal-600',
  totalProblems: 125,
  completedProblems: 0,
  problems: allDevelopmentProblems
};
