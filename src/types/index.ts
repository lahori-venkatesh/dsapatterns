export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Theme = 'light' | 'dark';
export type Level = 'beginner' | 'intermediate' | 'pro';

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  pattern: string;
  category: string;
  leetcodeUrl: string;
  estimatedTime: number; // minutes
  tags: string[];
  userStatus: {
    completed: boolean;
    attempted: boolean;
    lastAttempted: Date | null;
    timeSpent: number;
  };
}

export interface Note {
  id: string;
  problemId?: string;
  patternId?: string;
  categoryId?: string;
  title: string;
  content: string;
  drawingData?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  problems: Problem[];
  totalProblems: number;
  completedProblems: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  level: Level;
  patterns: Pattern[];
  totalProblems: number;
  completedProblems: number;
}

export interface UserProgress {
  totalProblems: number;
  completedProblems: number;
  streakDays: number;
  lastActiveDate: Date | null;
}

export interface User {
  id: string;
  username: string;
  email: string;
  photoURL?: string;
  isPremium: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
  deviceFingerprints: string[];
  loginAttempts: number;
  isEmailVerified: boolean;
  authProvider: 'email' | 'google';
  premiumActivatedAt?: Date;
}

export interface LoginSession {
  id: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;
  deviceFingerprint: string;
  isActive: boolean;
}

export interface PermanentUser {
  codes: string[];
  devices: string[];
  activationDate: number;
  lastAccess: number;
  originalFingerprint: string;
}

export interface LoginSession {
  userId: string;
  sessionId: string;
  deviceFingerprint: string;
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
}