import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../config/supabase';
import { Category, Note, Problem, Theme, UserProgress, Level, User, LoginSession } from '../types';
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
  permanentUserId: string | null;
  activationDate: Date | null;
  lastAccessDate: Date | null;
  verificationCodes: { [code: string]: { deviceFingerprint: string | null; used: boolean; createdAt: number; expiresAt: number; adminGenerated?: boolean; usedAt?: number; permanentUserId?: string } };
  usedCodes: string[];
  verificationAttempts: { [fingerprint: string]: { count: number; lastAttempt: number } };
  maxAttemptsPerDevice: number;
  attemptResetTime: number;
  permanentUsers: { [userId: string]: { codes: string[]; devices: string[]; activationDate: number; lastAccess: number; originalFingerprint?: string } };
  setPaymentStatus: (status: boolean) => void;
  verifyPaymentCode: (code: string) => { success: boolean; message: string };
  generateUserFingerprint: () => string;
  generateSessionId: () => string;
  generatePermanentUserId: () => string;
  checkPermanentAccess: () => boolean;
  recoverUserAccess: (verificationCode: string) => { success: boolean; message: string };
  verifyUserSession: () => boolean;
  generateVerificationCode: (deviceFingerprint?: string) => string;
  clearUserSession: () => void;

  // Data
  categories: Category[];
  selectedLevel: Level;
  notes: Note[];
  searchQuery: string;
  selectedCategory: string | null;
  selectedPattern: string | null;
  selectedProblem: string | null;
  currentView: 'dashboard' | 'dsa-mastery' | 'revision' | 'language-mastery';
  selectedLanguageId: string | null;

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
  setCurrentView: (view: 'dashboard' | 'dsa-mastery' | 'revision' | 'language-mastery') => void;
  setSelectedLanguageId: (languageId: string | null) => void;
  toggleCategory: (categoryId: string) => void;
  openNoteEditor: (note?: Note) => void;
  closeNoteEditor: () => void;
  toggleSearch: () => void;

  // Problem actions
  markProblemComplete: (problemId: string) => void;
  markProblemAttempted: (problemId: string) => void;
  toggleProblemComplete: (problemId: string) => void;

  // Language Mastery Progress
  languageProblemStatus: { [problemId: string]: { completed: boolean; attempted: boolean } };
  toggleLanguageProblemComplete: (problemId: string) => void;
  markLanguageProblemAttempted: (problemId: string) => void;

  // Note actions
  createNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (noteId: string, updates: Partial<Note>) => void;
  deleteNote: (noteId: string) => void;
  getNotesForProblem: (problemId: string) => Note[];
  getNotesForPattern: (patternId: string) => Note[];
  getNotesForCategory: (categoryId: string) => Note[];

  // Progress
  getUserProgress: () => UserProgress;

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
  clearPremiumOnLogout: () => void;
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
      selectedLanguageId: null,
      isNoteEditorOpen: false,
      isSearchOpen: false,
      expandedCategories: new Set(),
      editingNote: null,

      // Language Mastery Progress
      languageProblemStatus: {},

      // Payment state
      isPaid: false,
      userFingerprint: null,
      sessionId: null,
      permanentUserId: null,
      activationDate: null,
      lastAccessDate: null,
      
      // Enhanced verification system with device binding
      verificationCodes: {
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
      usedCodes: [],
      verificationAttempts: {},
      maxAttemptsPerDevice: 3,
      attemptResetTime: 24 * 60 * 60 * 1000,
      permanentUsers: {},

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
        
        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
          const char = fingerprint.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
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
        
        for (const [userId, userData] of Object.entries(state.permanentUsers)) {
          if (userData.devices && userData.devices.includes(currentFingerprint)) {
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
        
        for (const [userId, userData] of Object.entries(state.permanentUsers)) {
          if (userData.codes && userData.codes.includes(upperCode)) {
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
            
            localStorage.setItem('dsa_permanent_user_id', userId);
            localStorage.setItem('dsa_user_fp', currentFingerprint);
            localStorage.setItem('dsa_last_access', Date.now().toString());
            
            return { success: true, message: 'Access recovered successfully! Welcome back to Premium!' };
          }
        }
        
        return { success: false, message: 'Invalid recovery code. Please check your original verification code.' };
      },

      // Enhanced session verification with code binding check
      verifyUserSession: () => {
        const state = get();
        if (!state.isPaid) return true;
        
        const currentFingerprint = state.generateUserFingerprint();
        const storedFingerprint = localStorage.getItem('dsa_user_fp');
        const storedSession = localStorage.getItem('dsa_session_id');
        const sessionTimestamp = localStorage.getItem('dsa_session_ts');
        const storedVerificationCode = localStorage.getItem('dsa_verification_code');
        
        if (sessionTimestamp) {
          const sessionAge = Date.now() - parseInt(sessionTimestamp);
          if (sessionAge > 30 * 24 * 60 * 60 * 1000) {
            if (!state.checkPermanentAccess()) {
              state.clearUserSession();
              return false;
            }
          }
        }
        
        if (storedFingerprint && storedFingerprint !== currentFingerprint) {
          state.clearUserSession();
          return false;
        }
        
        if (storedVerificationCode) {
          const codeData = state.verificationCodes[storedVerificationCode];
          if (!codeData || !codeData.used || (codeData.deviceFingerprint && codeData.deviceFingerprint !== currentFingerprint)) {
            state.clearUserSession();
            return false;
          }
        }
        
        return true;
      },

      // Initialize categories on first load
      initializeCategories: () => {
        set({ categories: mockCategories });
      },

      // Payment actions
      setPaymentStatus: (status) => {
        const state = get();
        if (status) {
          const fingerprint = state.generateUserFingerprint();
          const sessionId = state.generateSessionId();
          
          localStorage.setItem('dsa_user_fp', fingerprint);
          localStorage.setItem('dsa_session_id', sessionId);
          localStorage.setItem('dsa_session_ts', Date.now().toString());
          
          set({ 
            isPaid: status, 
            userFingerprint: fingerprint, 
            sessionId: sessionId 
          });
        } else {
          localStorage.removeItem('dsa_user_fp');
          localStorage.removeItem('dsa_session_id');
          localStorage.removeItem('dsa_session_ts');
          set({ 
            isPaid: status, 
            userFingerprint: null, 
            sessionId: null 
          });
        }
      },
      
      verifyPaymentCode: (code) => {
        const state = get();
        const upperCode = code.toUpperCase().trim();
        const currentFingerprint = state.generateUserFingerprint();
        const now = Date.now();
        
        const deviceAttempts = state.verificationAttempts[currentFingerprint] || { count: 0, lastAttempt: 0 };
        
        if (now - deviceAttempts.lastAttempt > state.attemptResetTime) {
          deviceAttempts.count = 0;
        }
        
        if (deviceAttempts.count >= state.maxAttemptsPerDevice) {
          const timeLeft = Math.ceil((state.attemptResetTime - (now - deviceAttempts.lastAttempt)) / (60 * 60 * 1000));
          return { 
            success: false, 
            message: `Too many failed attempts. Please try again in ${timeLeft} hours.` 
          };
        }
        
        const codeData = state.verificationCodes[upperCode];
        
        if (!codeData) {
          set((state) => ({
            verificationAttempts: {
              ...state.verificationAttempts,
              [currentFingerprint]: {
                count: deviceAttempts.count + 1,
                lastAttempt: now
              }
            }
          }));
          return { success: false, message: 'Invalid verification code. Please check and try again.' };
        }
        
        if (now > codeData.expiresAt) {
          return { success: false, message: 'This verification code has expired. Please contact support for a new code.' };
        }
        
        if (codeData.used) {
          return { success: false, message: 'This verification code has already been used by another user. Each code can only be used once.' };
        }
        
        if (codeData.adminGenerated && !codeData.deviceFingerprint) {
          codeData.deviceFingerprint = currentFingerprint;
        } else if (codeData.deviceFingerprint && codeData.deviceFingerprint !== currentFingerprint) {
          set((state) => ({
            verificationAttempts: {
              ...state.verificationAttempts,
              [currentFingerprint]: {
                count: deviceAttempts.count + 1,
                lastAttempt: now
              }
            }
          }));
          return { 
            success: false, 
            message: 'This verification code has already been activated on a different device. Each code can only be used once per device.' 
          };
        }
        
        const sessionId = state.generateSessionId();
        const permanentUserId = state.generatePermanentUserId();
        
        localStorage.setItem('dsa_user_fp', currentFingerprint);
        localStorage.setItem('dsa_session_id', sessionId);
        localStorage.setItem('dsa_session_ts', now.toString());
        localStorage.setItem('dsa_verification_code', upperCode);
        localStorage.setItem('dsa_permanent_user_id', permanentUserId);
        localStorage.setItem('dsa_activation_date', now.toString());
        localStorage.setItem('dsa_last_access', now.toString());
        
        set((state) => ({
          isPaid: true,
          usedCodes: [...state.usedCodes, upperCode],
          userFingerprint: currentFingerprint,
          sessionId: sessionId,
          permanentUserId: permanentUserId,
          activationDate: new Date(now),
          lastAccessDate: new Date(now),
          permanentUsers: {
            ...state.permanentUsers,
            [permanentUserId]: {
              codes: [upperCode],
              devices: [currentFingerprint],
              activationDate: now,
              lastAccess: now,
              originalFingerprint: currentFingerprint
            }
          },
          verificationCodes: {
            ...state.verificationCodes,
            [upperCode]: {
              ...codeData,
              used: true,
              usedAt: now,
              deviceFingerprint: currentFingerprint,
              permanentUserId: permanentUserId,
              adminGenerated: codeData.adminGenerated || false
            }
          },
          verificationAttempts: {
            ...state.verificationAttempts,
            [currentFingerprint]: { count: 0, lastAttempt: now }
          }
        }));
        
        return { success: true, message: 'Payment verified successfully! Welcome to Premium!' };
      },
      
      generateVerificationCode: (deviceFingerprint?: string) => {
        const state = get();
        let codeNumber = 51;
        while (state.verificationCodes[`DSA2024${codeNumber.toString().padStart(3, '0')}`]) {
          codeNumber++;
        }
        
        const code = `DSA2024${codeNumber.toString().padStart(3, '0')}`;
        const now = Date.now();
        const expiresAt = now + (30 * 24 * 60 * 60 * 1000);
        
        set((state) => ({
          verificationCodes: {
            ...state.verificationCodes,
            [code]: {
              deviceFingerprint: deviceFingerprint || null,
              used: false,
              createdAt: now,
              expiresAt: expiresAt,
              adminGenerated: true
            }
          }
        }));
        
        return code;
      },
      
      clearUserSession: () => {
        localStorage.removeItem('dsa_session_id');
        localStorage.removeItem('dsa_session_ts');
        set({ 
          sessionId: null 
        });
      },

      // Theme actions
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // Search and selection
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedLevel: (level) => set({ selectedLevel: level }),
      setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
      setSelectedPattern: (patternId) => set({ selectedPattern: patternId }),
      setSelectedProblem: (problemId) => set({ selectedProblem: problemId }),
      setCurrentView: (view) => set({ currentView: view }),
      setSelectedLanguageId: (languageId) => set({ selectedLanguageId: languageId }),

      // UI actions
      toggleCategory: (categoryId) =>
        set((state) => {
          const newExpanded = new Set(state.expandedCategories);
          if (newExpanded.has(categoryId)) {
            newExpanded.delete(categoryId);
          } else {
            newExpanded.add(categoryId);
          }
          return { expandedCategories: newExpanded };
        }),

      openNoteEditor: (note) => set({ isNoteEditorOpen: true, editingNote: note || null }),
      closeNoteEditor: () => set({ isNoteEditorOpen: false, editingNote: null }),
      toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

      // Problem actions
      markProblemComplete: (problemId) =>
        set((state) => ({
          categories: state.categories.map((category) => ({
            ...category,
            patterns: category.patterns.map((pattern) => ({
              ...pattern,
              problems: pattern.problems.map((problem) =>
                problem.id === problemId
                  ? {
                      ...problem,
                      userStatus: {
                        ...problem.userStatus,
                        completed: true,
                        attempted: true,
                        lastAttempted: new Date(),
                      },
                    }
                  : problem
              ),
            })),
          })),
        })),

      toggleProblemComplete: (problemId) =>
        set((state) => ({
          categories: state.categories.map((category) => ({
            ...category,
            completedProblems: category.patterns.reduce((sum, pattern) => 
              sum + pattern.problems.filter(p => 
                p.id === problemId ? !p.userStatus.completed : p.userStatus.completed
              ).length, 0
            ),
            patterns: category.patterns.map((pattern) => ({
              ...pattern,
              completedProblems: pattern.problems.filter(p => 
                p.id === problemId ? !p.userStatus.completed : p.userStatus.completed
              ).length,
              problems: pattern.problems.map((problem) =>
                problem.id === problemId
                  ? {
                      ...problem,
                      userStatus: {
                        ...problem.userStatus,
                        completed: !problem.userStatus.completed,
                        attempted: true,
                        lastAttempted: new Date(),
                      },
                    }
                  : problem
              ),
            })),
          })),
        })),

      markProblemAttempted: (problemId) =>
        set((state) => ({
          categories: state.categories.map((category) => ({
            ...category,
            patterns: category.patterns.map((pattern) => ({
              ...pattern,
              problems: pattern.problems.map((problem) =>
                problem.id === problemId
                  ? {
                      ...problem,
                      userStatus: {
                        ...problem.userStatus,
                        attempted: true,
                        lastAttempted: new Date(),
                      },
                    }
                  : problem
              ),
            })),
          })),
        })),

      // Language Mastery Progress Actions
      toggleLanguageProblemComplete: (problemId) =>
        set((state) => {
          const currentStatus = state.languageProblemStatus[problemId] || { completed: false, attempted: false };
          return {
            languageProblemStatus: {
              ...state.languageProblemStatus,
              [problemId]: {
                completed: !currentStatus.completed,
                attempted: true,
              },
            },
          };
        }),

      markLanguageProblemAttempted: (problemId) =>
        set((state) => {
          const currentStatus = state.languageProblemStatus[problemId] || { completed: false, attempted: false };
          return {
            languageProblemStatus: {
              ...state.languageProblemStatus,
              [problemId]: {
                ...currentStatus,
                attempted: true,
              },
            },
          };
        }),

      // Note actions
      createNote: (noteData) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...noteData,
              id: `note_${Date.now()}`,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        })),

      updateNote: (noteId, updates) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === noteId
              ? { ...note, ...updates, updatedAt: new Date() }
              : note
          ),
        })),

      deleteNote: (noteId) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== noteId),
        })),

      getNotesForProblem: (problemId) => {
        const state = get();
        return state.notes.filter((note) => note.problemId === problemId);
      },

      getNotesForPattern: (patternId) => {
        const state = get();
        return state.notes.filter((note) => note.patternId === patternId);
      },

      getNotesForCategory: (categoryId) => {
        const state = get();
        return state.notes.filter((note) => note.categoryId === categoryId);
      },

      // Progress calculation
      getUserProgress: () => {
        const state = get();
        let totalProblems = 0;
        let completedProblems = 0;

        state.categories.forEach((category) => {
          category.patterns.forEach((pattern) => {
            pattern.problems.forEach((problem) => {
              totalProblems++;
              if (problem.userStatus.completed) {
                completedProblems++;
              }
            });
          });
        });

        return {
          totalProblems,
          completedProblems,
          streakDays: 1,
          lastActiveDate: new Date(),
        };
      },

      // Authentication actions
      openLoginModal: () => set({ isLoginModalOpen: true, authError: null }),
      closeLoginModal: () => set({ isLoginModalOpen: false, authError: null }),
      openRegistrationModal: () => set({ isRegistrationModalOpen: true, authError: null }),
      closeRegistrationModal: () => set({ isRegistrationModalOpen: false, authError: null }),

      signInWithGoogle: async () => {
        try {
          console.log('Store: signInWithGoogle called, supabase available:', !!supabase);
          return await supabaseSignInWithGoogle();
        } catch (error: any) {
          console.error('Store: signInWithGoogle error:', error);
          return { success: false, error: error.message };
        }
      },

      signInWithEmail: async (email, password) => {
        try {
          console.log('Store: signInWithEmail called, supabase available:', !!supabase);
          return await supabaseSignInWithEmail(email, password);
        } catch (error: any) {
          console.error('Store: signInWithEmail error:', error);
          return { success: false, error: error.message };
        }
      },

      signUpWithEmail: async (email, password, username) => {
        try {
          console.log('Store: signUpWithEmail called, supabase available:', !!supabase);
          return await supabaseSignUpWithEmail(email, password, username);
        } catch (error: any) {
          console.error('Store: signUpWithEmail error:', error);
          return { success: false, error: error.message };
        }
      },

      resetPassword: async (email) => {
        try {
          console.log('Store: resetPassword called, supabase available:', !!supabase);
          return await supabaseResetPassword(email);
        } catch (error: any) {
          console.error('Store: resetPassword error:', error);
          return { success: false, error: error.message };
        }
      },

      logout: () => {
        console.log('Store: logout called, supabase available:', !!supabase);
        supabaseSignOut();
        // Clear user and premium status on logout
        set({ 
          currentUser: null,
          isPaid: false,
          userFingerprint: null,
          sessionId: null,
          permanentUserId: null,
          activationDate: null,
          lastAccessDate: null
        });
        
        // Clear localStorage premium data
        localStorage.removeItem('dsa_user_fp');
        localStorage.removeItem('dsa_session_id');
        localStorage.removeItem('dsa_session_ts');
        localStorage.removeItem('dsa_verification_code');
        localStorage.removeItem('dsa_permanent_user_id');
        localStorage.removeItem('dsa_activation_date');
        localStorage.removeItem('dsa_last_access');
      },

      initializeAuth: () => {
        try {
          console.log('Initializing auth state listener...');
          console.log('Supabase client available:', !!supabase);
          
          if (!supabase) {
            console.error('Supabase client is null - cannot initialize auth');
            return;
          }
          
          const { data: { subscription } } = onAuthStateChange(async (event, session) => {
            console.log('Auth state changed:', event, session);
            if (session?.user) {
              console.log('User signed in:', session.user);
              const user: User = {
                id: session.user.id,
                username: session.user.user_metadata?.username || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
                email: session.user.email || '',
                photoURL: session.user.user_metadata?.avatar_url || '',
                isPremium: session.user.user_metadata?.isPremium || false,
                createdAt: new Date(session.user.created_at),
                lastLoginAt: new Date(),
                deviceFingerprints: [],
                loginAttempts: 0,
                isEmailVerified: session.user.email_confirmed_at ? true : false,
                authProvider: session.user.app_metadata?.provider || 'email'
              };
              set({ currentUser: user });
              
              
              // Check if user has premium status
              if (user.isPremium) {
                set({ isPaid: true });
              } else {
                set({ isPaid: false });
              }
              
              // Check if user has premium status from server/metadata
              if (user.isPremium) {
                set({ isPaid: true });
              } else {
                // Clear any local premium status if user doesn't have server premium
                set({ 
                  isPaid: false,
                  userFingerprint: null,
                  sessionId: null,
                  permanentUserId: null,
                  activationDate: null,
                  lastAccessDate: null
                });
              }
              set({ 
                isLoginModalOpen: false, 
                isRegistrationModalOpen: false,
                authError: null 
              });
            } else {
              console.log('User signed out');
              // Clear everything on sign out
              set({ 
                currentUser: null,
                isPaid: false,
                userFingerprint: null,
                sessionId: null,
                permanentUserId: null,
                activationDate: null,
                lastAccessDate: null
              });
              
              // Clear localStorage
              localStorage.removeItem('dsa_user_fp');
              localStorage.removeItem('dsa_session_id');
              localStorage.removeItem('dsa_session_ts');
              localStorage.removeItem('dsa_verification_code');
              localStorage.removeItem('dsa_permanent_user_id');
              localStorage.removeItem('dsa_activation_date');
              localStorage.removeItem('dsa_last_access');
            }
          });
          
          (window as any).authUnsubscribe = () => {
            if (subscription) {
              subscription.unsubscribe();
            }
          };
          
          const checkExistingSession = async () => {
            try {
              if (!supabase) {
                console.warn('Supabase not available for session check');
                return;
              }
              
              console.log('Checking for existing session...');
              const { data: { session }, error } = await supabase.auth.getSession();
              console.log('Existing session check:', { session, error });
              
              if (session?.user && !get().currentUser) {
                console.log('Found existing session, setting user...');
                const user: User = {
                  id: session.user.id,
                  username: session.user.user_metadata?.username || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
                  email: session.user.email || '',
                  photoURL: session.user.user_metadata?.avatar_url || '',
                  isPremium: false,
                  createdAt: new Date(session.user.created_at),
                  lastLoginAt: new Date(),
                  deviceFingerprints: [],
                  loginAttempts: 0,
                  isEmailVerified: session.user.email_confirmed_at ? true : false,
                  authProvider: session.user.app_metadata?.provider || 'email'
                };
                set({ currentUser: user });
              }
            } catch (error) {
              console.error('Error checking existing session:', error);
            }
          };
          
          setTimeout(checkExistingSession, 1000);
        } catch (error) {
          console.error('Error initializing auth:', error);
        }
      },

      setCurrentUser: (user) => set({ currentUser: user }),

      activatePremiumWithCode: (code) => {
        const state = get();
        if (!state.currentUser) {
          return { success: false, message: 'Please login first' };
        }

        const upperCode = code.toUpperCase().trim();
        
        const validCodes = [
          'DSA2024001', 'DSA2024002', 'DSA2024003', 'DSA2024004', 'DSA2024005',
          'DSA2024006', 'DSA2024007', 'DSA2024008', 'DSA2024009', 'DSA2024010',
          'DSA2024011', 'DSA2024012', 'DSA2024013', 'DSA2024014', 'DSA2024015',
          'DSA2024016', 'DSA2024017', 'DSA2024018', 'DSA2024019', 'DSA2024020',
          'DSA2024021', 'DSA2024022', 'DSA2024023', 'DSA2024024', 'DSA2024025',
          'DSA2024026', 'DSA2024027', 'DSA2024028', 'DSA2024029', 'DSA2024030',
          'DSA2024031', 'DSA2024032', 'DSA2024033', 'DSA2024034', 'DSA2024035',
          'DSA2024036', 'DSA2024037', 'DSA2024038', 'DSA2024039', 'DSA2024040',
          'DSA2024041', 'DSA2024042', 'DSA2024043', 'DSA2024044', 'DSA2024045',
          'DSA2024046', 'DSA2024047', 'DSA2024048', 'DSA2024049', 'DSA2024050'
        ];
        
        if (!validCodes.includes(upperCode)) {
          return { success: false, message: 'Invalid verification code. Please check and try again.' };
        }
        
        if (state.currentUser.isPremium) {
          return { success: false, message: 'Your account is already premium!' };
        }

        // Update user premium status
        const updatedUser = { 
          ...state.currentUser, 
          isPremium: true,
          premiumActivatedAt: new Date()
        };
        
        // TODO: In a real app, you would update the user's premium status on the server
        // For now, we'll update Supabase user metadata
        if (supabase && state.currentUser) {
          supabase.auth.updateUser({
            data: { isPremium: true, premiumActivatedAt: new Date().toISOString() }
          }).catch(error => console.error('Failed to update user metadata:', error));
        }
        
        set({
          currentUser: updatedUser,
          isPaid: true,
          activationDate: new Date(),
          lastAccessDate: new Date()
        });

        return { success: true, message: 'Premium activated successfully! Welcome to Premium!' };
      },
      
      clearPremiumOnLogout: () => {
        set({ 
          isPaid: false,
          userFingerprint: null,
          sessionId: null,
          permanentUserId: null,
          activationDate: null,
          lastAccessDate: null
        });
        
        // Clear localStorage
        localStorage.removeItem('dsa_user_fp');
        localStorage.removeItem('dsa_session_id');
        localStorage.removeItem('dsa_session_ts');
        localStorage.removeItem('dsa_verification_code');
        localStorage.removeItem('dsa_permanent_user_id');
        localStorage.removeItem('dsa_activation_date');
        localStorage.removeItem('dsa_last_access');
      },
    }),
    {
      name: 'dsa-platform-storage-v3',
      partialize: (state) => ({
        notes: state.notes,
        expandedCategories: Array.from(state.expandedCategories),
        currentUser: state.currentUser,
        // Remove premium-related data from persistence - it should be tied to user account
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState,
        expandedCategories: new Set(
          Array.isArray((persistedState as any)?.expandedCategories)
            ? (persistedState as any).expandedCategories
            : []
        ),
        verificationCodes: (persistedState as any)?.verificationCodes || currentState.verificationCodes,
      }),
    }
  )
);