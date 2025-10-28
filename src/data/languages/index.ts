import { sqlMastery } from './sql';
import { developmentMastery } from './development';
import { aptitudeMastery } from './aptitude';
import { machineCodingMastery } from './machineCoding';
import { hrInterviewMastery } from './hrInterview';
import { resumeLinkedInMastery } from './resumeLinkedIn';
import { systemDesignTopics } from './systemDesign';
import { javaMastery } from '../categories/java';
import { pythonMastery } from '../categories/python';
import { cppMastery } from '../categories/cpp';

const systemDesignMastery = {
  id: 'system-design',
  language: 'System Design' as const,
  name: 'System Design',
  icon: 'Layers',
  description: 'Complete system design guide: HLD, LLD, distributed systems, databases, APIs, and scalability patterns',
  color: 'from-orange-500 to-red-600',
  totalProblems: systemDesignTopics.length,
  completedProblems: 0,
  problems: systemDesignTopics
};

export const languageMasteryData = [
  javaMastery,
  pythonMastery,
  cppMastery,
  sqlMastery,
  developmentMastery,
  systemDesignMastery,
  aptitudeMastery,
  machineCodingMastery,
  hrInterviewMastery,
  resumeLinkedInMastery
];

export { javaMastery, pythonMastery, cppMastery, sqlMastery, developmentMastery, systemDesignMastery, aptitudeMastery, machineCodingMastery, hrInterviewMastery, resumeLinkedInMastery };