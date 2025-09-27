import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../config/supabase';
import { Category, Note, Problem, Theme, UserProgress, Level } from '../types';
import { mockCategories } from '../data/mockData';
import { 
  signInWithGoogle as supabaseSignInWithGoogle,
  signInWithEmail as supabaseSignInWithEmail,
  signUpWithEmail as supabaseSignUpWithEmail,
  signOut as supabaseSignOut,
  resetPassword as supabaseResetPassword,
  onAuthStateChange
} from '../config/supabase';

interface AppState {
  // Theme
  theme: Theme;
  toggleTheme: () => void;

  // Authentication
  currentUser: User | null;
  users: { [id: string]: User };
  sessions: { [id: string]: LoginSession };
  isLoginModalOpen: boolean;
  isRegistrationModalOpen: boolean;
  authError: string | null;

  // Payment
  isPaid: boolean;
  userFingerprint: string | null;
  sessionId: string | null;
  setPaymentStatus: (status: boolean) => void;
  verifyPaymentCode: (code: string) => { success: boolean; message: string };

  // Data
  categories: Category[];
  selectedLevel: Level;
  notes: Note[];
  searchQuery: string;
  selectedCategory: string | null;
  selectedPattern: string | null;
  selectedProblem: string | null;
  currentView: 'dashboard' | 'revision';

  // UI State
  isNoteEditorOpen: boolean;
  isSearchOpen: boolean;
  expandedCategories: Set<string>;
  editingNote: Note | null;

  // Actions
  initializeCategories: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedLevel: (level: Level) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setSelectedPattern: (patternId: string | null) => void;
  setSelectedProblem: (problemId: string | null) => void;
  setCurrentView: (view: 'dashboard' | 'revision') => void;
  toggleCategory: (categoryId: string) => void;
  openNoteEditor: (note?: Note) => void;
  closeNoteEditor: () => void;
  toggleSearch: () => void;

  // Problem actions
  markProblemComplete: (problemId: string) => void;
  markProblemAttempted: (problemId: string) => void;
  toggleProblemComplete: (problemId: string) => void;

  // Note actions
  createNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (noteId: string, updates: Partial<Note>) => void;
  deleteNote: (noteId: string) => void;
  getNotesForProblem: (problemId: string) => Note[];
  getNotesForPattern: (patternId: string) => Note[];
  getNotesForCategory: (categoryId: string) => Note[];

  // Progress
  getUserProgress: () => {
    const state = get();
    let totalProblems = 0;
    let completedProblems = 0;

    // Calculate progress from categories
    state.categories.forEach(category => {
      category.patterns.forEach(pattern => {
        pattern.problems.forEach(problem => {
          totalProblems++;
          if (problem.completed) {
            completedProblems++;
          }
        });
      });
    });

    return {
      totalProblems,
      completedProblems,
      streakDays: 0, // Placeholder - streak logic not implemented yet
      lastActiveDate: state.currentUser?.lastLoginAt || null
    };
  };

  // Authentication actions
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string; user?: any }>;
  signInWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string; user?: any }>;
  signUpWithEmail: (email: string, password: string, username: string) => Promise<{ success: boolean; error?: string; message?: string; user?: any }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string; message?: string }>;
  logout: () => void;
  initializeAuth: () => void;
  setCurrentUser: (user: User | null) => void;
  activatePremiumWithCode: (code: string) => { success: boolean; message: string };
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      theme: 'dark',
      currentUser: null,
      users: {},
      sessions: {},
      isLoginModalOpen: false,
      isRegistrationModalOpen: false,
      authError: null,
      categories: [],
      selectedLevel: 'beginner' as Level,
      notes: [],
      searchQuery: '',
      selectedCategory: null,
      selectedPattern: null,
      selectedProblem: null,
      currentView: 'dashboard',
      isNoteEditorOpen: false,
      isSearchOpen: false,
      expandedCategories: new Set(),
      editingNote: null,

      // Payment state
      isPaid: false,
      userFingerprint: null,
      sessionId: null,
      permanentUserId: null,
      activationDate: null,
      lastAccessDate: null,
      
      // Enhanced verification system with device binding
      verificationCodes: {
        // Format: { code: { deviceFingerprint: string, used: boolean, createdAt: number, expiresAt: number } }
        // Pre-generated codes for admin distribution
        'DSA2024001': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024002': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024003': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024004': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024005': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024006': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024007': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024008': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024009': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024010': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024011': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024012': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024013': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024014': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024015': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024016': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024017': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024018': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024019': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024020': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024021': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024022': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024023': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024024': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024025': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024026': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024027': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024028': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024029': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024030': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024031': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024032': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024033': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024034': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024035': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024036': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024037': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024038': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024039': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024040': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024041': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024042': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024043': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024044': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024045': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024046': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024047': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024048': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024049': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
        'DSA2024050': { deviceFingerprint: null, used: false, createdAt: Date.now(), expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), adminGenerated: true },
      },
      usedCodes: [], // Keep for backward compatibility
      
      // Track verification attempts to prevent brute force
      verificationAttempts: {},
      maxAttemptsPerDevice: 3,
      attemptResetTime: 24 * 60 * 60 * 1000, // 24 hours
      
      // Permanent user tracking
      permanentUsers: {}, // { userId: { codes: [], devices: [], activationDate: number, lastAccess: number } }

      // Generate unique user fingerprint
      generateUserFingerprint: () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx!.textBaseline = 'top';
        ctx!.font = '14px Arial';
        ctx!.fillText('User fingerprint', 2, 2);
        
        const fingerprint = [
          navigator.userAgent,
          navigator.language,
          screen.width + 'x' + screen.height,
          new Date().getTimezoneOffset(),
          canvas.toDataURL(),
          navigator.hardwareConcurrency || 'unknown',
          navigator.deviceMemory || 'unknown'
        ].join('|');
        
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
          const char = fingerprint.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash; // Convert to 32-bit integer
        }
        
        return Math.abs(hash).toString(36);
      },

      // Generate session ID
      generateSessionId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      },
      
      // Generate permanent user ID
      generatePermanentUserId: () => {
        return 'USER_' + Date.now().toString(36).toUpperCase() + '_' + Math.random().toString(36).substr(2, 6).toUpperCase();
      },
      
      // Check if user has permanent premium access
      checkPermanentAccess: () => {
        const state = get();
        const currentFingerprint = state.generateUserFingerprint();
        
        // Check if current device has permanent access
        for (const [userId, userData] of Object.entries(state.permanentUsers)) {
          if (userData.devices && userData.devices.includes(currentFingerprint)) {
            // Update last access
            set((state) => ({
              permanentUsers: {
                ...state.permanentUsers,
                [userId]: {
                  ...userData,
                  lastAccess: Date.now()
                }
              },
              isPaid: true,
              permanentUserId: userId,
              userFingerprint: currentFingerprint,
              lastAccessDate: new Date()
            }));
            
            // Store in localStorage for quick access
            localStorage.setItem('dsa_permanent_user_id', userId);
            localStorage.setItem('dsa_user_fp', currentFingerprint);
            localStorage.setItem('dsa_last_access', Date.now().toString());
            
            return true;
          }
        }
        
        return false;
      },
      
      // Recover user access
      recoverUserAccess: (verificationCode: string) => {
        const state = get();
        const upperCode = verificationCode.toUpperCase().trim();
        const currentFingerprint = state.generateUserFingerprint();
        
        // Find user by verification code
        for (const [userId, userData] of Object.entries(state.permanentUsers)) {
          if (userData.codes && userData.codes.includes(upperCode)) {
            // Add current device to user's allowed devices
            const updatedDevices = [...(userData.devices || [])];
            if (!updatedDevices.includes(currentFingerprint)) {
              updatedDevices.push(currentFingerprint);
            }
            
            set((state) => ({
              permanentUsers: {
                ...state.permanentUsers,
                [userId]: {
                  ...userData,
                  devices: updatedDevices,
                  lastAccess: Date.now()
                }
              },
              isPaid: true,
              permanentUserId: userId,
              userFingerprint: currentFingerprint,
              lastAccessDate: new Date()
            }));
            
            // Store in localStorage
            localStorage.setItem('dsa_permanent_user_id', userId);
            localStorage.setItem('dsa_user_fp', currentFingerprint);
            localStorage.setItem('dsa_last_access', Date.now().toString());
            
            return { success: true, message: 'Access recovered successfully!' };
          }
        }
        
        return { success: false, message: 'Invalid verification code or code not found.' };
      },
      
      // Clear user session
      clearUserSession: () => {
        localStorage.removeItem('dsa_session_id');
        localStorage.removeItem('dsa_session_ts');
        set({ isPaid: false, userFingerprint: null, sessionId: null });
        localStorage.removeItem('dsa_user_fp');
        localStorage.remove
      }
    }
    )
  )
)