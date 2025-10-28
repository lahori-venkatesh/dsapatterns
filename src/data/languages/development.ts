import { LanguageMastery } from '../../types';
import { allDevelopmentProblems } from '../development';

export const developmentMastery: LanguageMastery = {
  id: 'development-mastery',
  language: 'Full Stack' as any,
  name: 'Full Stack Web Development',
  icon: 'Code',
  description: 'Master Full Stack: JavaScript, TypeScript, React, Node.js, Next.js, Database, DBMS, Networks, OS, Security, Testing, DevOps & more',
  color: 'from-emerald-500 to-teal-600',
  totalProblems: 186,
  completedProblems: 0,
  problems: allDevelopmentProblems
};
