import { LanguageMastery } from '../../types';
import { allDevelopmentProblems } from '../development';

export const developmentMastery: LanguageMastery = {
  id: 'development-mastery',
  language: 'Full Stack' as any,
  name: 'Full Stack Web Development Interview Preparation',
  icon: 'Code',
  description: 'Complete Full Stack interview preparation: Frontend, Backend, DevOps, Security, Testing & System Design',
  color: 'from-emerald-500 to-teal-600',
  totalProblems: 159,
  completedProblems: 0,
  problems: allDevelopmentProblems
};
