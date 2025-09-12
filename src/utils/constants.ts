// Performance constants
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const;

// Level configuration
export const LEVEL_CONFIG = {
  beginner: {
    name: 'Beginner',
    salary: '10-15 LPA',
    description: 'Build strong foundations with core DSA concepts',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-300'
  },
  intermediate: {
    name: 'Intermediate', 
    salary: '15-20 LPA',
    description: 'Master advanced algorithms and complex patterns',
    color: 'from-blue-500 to-purple-600',
    textColor: 'text-blue-300'
  },
  pro: {
    name: 'Pro Level',
    salary: '20+ LPA', 
    description: 'Conquer FAANG interviews with expert techniques',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-300'
  }
} as const;

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  MASTERED: 100,
  EXPERT: 75,
  PROFICIENT: 50,
  LEARNING: 25
} as const;