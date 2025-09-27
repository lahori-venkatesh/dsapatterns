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
            
            return { success: true, message: 'Access recovered successfully! Welcome back to Premium!' };
          }
        }
        
        return { success: false, message: 'Invalid recovery code. Please check your original verification code.' };
      },

      // Verify user session
      verifyUserSession: () => {
        const state = get();
        if (!state.isPaid) return true; // Allow free users
        
        // First check permanent access
        if (state.checkPermanentAccess()) {
          return true;
        }
        
        const currentFingerprint = state.generateUserFingerprint();
        const storedFingerprint = localStorage.getItem('dsa_user_fp');
        const storedSession = localStorage.getItem('dsa_session_id');
        const sessionTimestamp = localStorage.getItem('dsa_session_ts');
        const permanentUserId = localStorage.getItem('dsa_permanent_user_id');
        
        // Check if user has permanent access but lost session
        if (permanentUserId && state.permanentUsers[permanentUserId]) {
          const userData = state.permanentUsers[permanentUserId];
          if (userData.devices && userData.devices.includes(currentFingerprint)) {
            // Restore access
            set({
              isPaid: true,
              permanentUserId: permanentUserId,
              userFingerprint: currentFingerprint,
              lastAccessDate: new Date()
            });
            return true;
          }
        }
        
        // Check if session is older than 24 hours
        if (sessionTimestamp) {
          const sessionAge = Date.now() - parseInt(sessionTimestamp);
          if (sessionAge > 24 * 60 * 60 * 1000) { // 24 hours
            // Session expired, require re-verification
            set({ isPaid: false, userFingerprint: null, sessionId: null });
            localStorage.removeItem('dsa_user_fp');
            localStorage.removeItem('dsa_session_id');
            localStorage.removeItem('dsa_session_ts');
            return false;
          }
        }
        
        // Check fingerprint match
        if (storedFingerprint && storedFingerprint !== currentFingerprint) {
          // Different device/browser detected
          set({ isPaid: false, userFingerprint: null, sessionId: null });
          localStorage.removeItem('dsa_user_fp');
          localStorage.removeItem('dsa_session_id');
          localStorage.removeItem('dsa_session_ts');
          return false;
        }
        
        return true;
      },

      // Initialize categories on first load
      initializeCategories: () => {
        const state = get();
        // Always initialize categories, but check access when needed
        set({ categories: mockCategories });
      },

      // Payment actions
      setPaymentStatus: (status) => {
        const state = get();
        if (status) {
          const fingerprint = state.generateUserFingerprint();
          const sessionId = state.generateSessionId();
          
          // Store fingerprint and session
          localStorage.setItem('dsa_user_fp', fingerprint);
          localStorage.setItem('dsa_session_id', sessionId);
          localStorage.setItem('dsa_session_ts', Date.now().toString());
          
          set({ 
            isPaid: status, 
            userFingerprint: fingerprint, 
            sessionId: sessionId 
          });
        } else {
          // Clear all session data
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
        
        // Check verification attempts for this device
        const deviceAttempts = state.verificationAttempts[currentFingerprint] || { count: 0, lastAttempt: 0 };
        
        // Reset attempts if 24 hours have passed
        if (now - deviceAttempts.lastAttempt > state.attemptResetTime) {
          deviceAttempts.count = 0;
        }
        
        // Check if device has exceeded max attempts
        if (deviceAttempts.count >= state.maxAttemptsPerDevice) {
          const timeLeft = Math.ceil((state.attemptResetTime - (now - deviceAttempts.lastAttempt)) / (60 * 60 * 1000));
          return { 
            success: false, 
            message: `Too many failed attempts. Please try again in ${timeLeft} hours.` 
          };
        }
        
        // Check if code exists and is valid
        const codeData = state.verificationCodes[upperCode];
        
        if (!codeData) {
          // Increment failed attempts
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
        
        // Check if code has expired
        if (now > codeData.expiresAt) {
          return { success: false, message: 'This verification code has expired. Please contact support for a new code.' };
        }
        
        // Check if code has already been used
        if (codeData.used) {
          return { success: false, message: 'This verification code has already been used by another user. Each code can only be used once.' };
        }
        
        // For admin-generated codes, bind to first user's device
        if (codeData.adminGenerated && !codeData.deviceFingerprint) {
          // First time use - bind to this device
          codeData.deviceFingerprint = currentFingerprint;
        } else if (codeData.deviceFingerprint && codeData.deviceFingerprint !== currentFingerprint) {
          // Code is bound to a different device
          // Increment failed attempts for suspicious activity
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
        
        // Code is valid - activate premium and mark as used
        const sessionId = state.generateSessionId();
        const permanentUserId = state.generatePermanentUserId();
        
        // Store user fingerprint and session
        localStorage.setItem('dsa_user_fp', currentFingerprint);
        localStorage.setItem('dsa_session_id', sessionId);
        localStorage.setItem('dsa_session_ts', now.toString());
        localStorage.setItem('dsa_verification_code', upperCode); // Store for verification
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
          // Reset verification attempts on successful verification
          verificationAttempts: {
            ...state.verificationAttempts,
            [currentFingerprint]: { count: 0, lastAttempt: now }
          }
        }));
        
        return { success: true, message: 'Payment verified successfully! Welcome to Premium!' };
      },
      
      // Admin function to generate verification codes (for your backend/manual process)
      generateVerificationCode: (deviceFingerprint?: string) => {
        // Find next available code number
        const state = get();
        let codeNumber = 51; // Start from 051 for new codes
        while (state.verificationCodes[`DSA2024${codeNumber.toString().padStart(3, '0')}`]) {
          codeNumber++;
        }
        
        const code = `DSA2024${codeNumber.toString().padStart(3, '0')}`;
        const now = Date.now();
        const expiresAt = now + (30 * 24 * 60 * 60 * 1000); // 30 days expiry
        
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
      
      // Enhanced session verification with code binding check
      verifyUserSession: () => {
        const state = get();
        if (!state.isPaid) return true; // Allow free users
        
        const currentFingerprint = state.generateUserFingerprint();
        const storedFingerprint = localStorage.getItem('dsa_user_fp');
        const storedSession = localStorage.getItem('dsa_session_id');
        const sessionTimestamp = localStorage.getItem('dsa_session_ts');
        const storedVerificationCode = localStorage.getItem('dsa_verification_code');
        
        // Check if session is older than 24 hours
        if (sessionTimestamp) {
          const sessionAge = Date.now() - parseInt(sessionTimestamp);
          if (sessionAge > 30 * 24 * 60 * 60 * 1000) { // 30 days instead of 24 hours for permanent users
            // Check if user has permanent access
            if (!state.checkPermanentAccess()) {
              state.clearUserSession();
              return false;
            }
          }
        }
        
        // Check fingerprint match
        if (storedFingerprint && storedFingerprint !== currentFingerprint) {
          // Different device/browser detected
          state.clearUserSession();
          return false;
        }
        
        // Verify that the stored verification code is still valid and bound to this device
        if (storedVerificationCode) {
          const codeData = state.verificationCodes[storedVerificationCode];
          if (!codeData || !codeData.used || (codeData.deviceFingerprint && codeData.deviceFingerprint !== currentFingerprint)) {
            // Verification code is invalid or bound to different device
            state.clearUserSession();
            return false;
          }
        }
        
        return true;
      },
      
      // Helper function to clear user session
      clearUserSession: () => {
        localStorage.removeItem('dsa_session_id');
        localStorage.removeItem('dsa_session_ts');
        // Don't remove permanent data - keep for recovery
        // localStorage.removeItem('dsa_user_fp');
        // localStorage.removeItem('dsa_verification_code');
        // localStorage.removeItem('dsa_permanent_user_id');
        set({ 
          sessionId: null 
          // Keep permanent data for recovery
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
          streakDays: 1, // Simplified for MVP
          lastActiveDate: new Date(),
        };
      },

      // Authentication actions
      openLoginModal: () => set({ isLoginModalOpen: true, authError: null }),
      closeLoginModal: () => set({ isLoginModalOpen: false, authError: null }),
      openRegistrationModal: () => set({ isRegistrationModalOpen: true, authError: null }),
      closeRegistrationModal: () => set({ isRegistrationModalOpen: false, authError: null }),

      // Firebase Authentication Methods
      signInWithGoogle: async () => {
        try {
          return await supabaseSignInWithGoogle();
        } catch (error: any) {
          return { success: false, error: error.message };
        }
      },

      signInWithEmail: async (email, password) => {
        try {
          return await supabaseSignInWithEmail(email, password);
        } catch (error: any) {
          return { success: false, error: error.message };
        }
      },

      signUpWithEmail: async (email, password, username) => {
        try {
          return await supabaseSignUpWithEmail(email, password, username);
        } catch (error: any) {
          return { success: false, error: error.message };
        }
      },

      resetPassword: async (email) => {
        try {
          return await supabaseResetPassword(email);
        } catch (error: any) {
          return { success: false, error: error.message };
        }
      },

      logout: () => {
        supabaseSignOut();
        set({ currentUser: null });
      },

      // Initialize Supabase Auth State Listener
      initializeAuth: () => {
        console.log('Initializing auth state listener...');
        const { data: { subscription } } = onAuthStateChange(async (event, session) => {
          console.log('Auth state changed:', event, session);
          if (session?.user) {
            // User is signed in
            console.log('User signed in:', session.user);
            const user: User = {
              id: session.user.id,
              username: session.user.user_metadata?.username || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
              email: session.user.email || '',
              photoURL: session.user.user_metadata?.avatar_url || '',
              isPremium: false, // Will be updated from database
              createdAt: new Date(session.user.created_at),
              lastLoginAt: new Date(),
              deviceFingerprints: [],
              loginAttempts: 0,
              isEmailVerified: session.user.email_confirmed_at ? true : false,
              authProvider: session.user.app_metadata?.provider || 'email'
            };
            set({ currentUser: user });
            
            // Close any open auth modals
            set({ 
              isLoginModalOpen: false, 
              isRegistrationModalOpen: false,
              authError: null 
            });
          } else {
            // User is signed out
            console.log('User signed out');
            set({ currentUser: null });
          }
        });
        
        // Store the subscription for cleanup
        (window as any).authUnsubscribe = () => {
          if (subscription) {
            subscription.unsubscribe();
          }
        };
        
        // Also check for existing session on initialization
        const checkExistingSession = async () => {
          try {
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
        
        // Check for existing session after a short delay
        setTimeout(checkExistingSession, 1000);
      },

      setCurrentUser: (user) => set({ currentUser: user }),

      activatePremiumWithCode: (code) => {
        const state = get();
        if (!state.currentUser) {
          return { success: false, message: 'Please login first' };
        }

        const upperCode = code.toUpperCase().trim();
        
        // Simple verification - check if code exists in our predefined list
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
        
        // Check if code has already been used by this user
        if (state.currentUser.isPremium) {
          return { success: false, message: 'Your account is already premium!' };
        }

        // Update local state
        const updatedUser = { ...state.currentUser, isPremium: true };
        set({
          currentUser: updatedUser
        });

        return { success: true, message: 'Premium activated successfully! Welcome to Premium!' };
      },
    }),
    {
      name: 'dsa-platform-storage-v3', // Changed name to clear old cache
      partialize: (state) => ({
        // Don't persist categories to avoid stale data
        isPaid: state.isPaid,
        permanentUserId: state.permanentUserId,
        permanentUsers: state.permanentUsers,
        activationDate: state.activationDate,
        lastAccessDate: state.lastAccessDate,
        notes: state.notes,
        usedCodes: state.usedCodes,
        expandedCategories: Array.from(state.expandedCategories),
        currentUser: state.currentUser,
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