import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';
import { User } from '../types';

// Generate device fingerprint for security
export const generateDeviceFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
  }
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
    navigator.hardwareConcurrency || 'unknown',
    (navigator as any).deviceMemory || 'unknown',
    navigator.platform
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash).toString(36);
};

// Create or update user document in Firestore
export const createUserDocument = async (firebaseUser: FirebaseUser, additionalData?: any) => {
  if (!firebaseUser) return;
  
  const userRef = doc(db, 'users', firebaseUser.uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    const { displayName, email, photoURL } = firebaseUser;
    const deviceFingerprint = generateDeviceFingerprint();
    
    try {
      await setDoc(userRef, {
        id: firebaseUser.uid,
        username: displayName || email?.split('@')[0] || 'User',
        email: email || '',
        photoURL: photoURL || '',
        isPremium: false,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        deviceFingerprints: [deviceFingerprint],
        loginAttempts: 0,
        isEmailVerified: firebaseUser.emailVerified,
        authProvider: additionalData?.authProvider || 'email',
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document:', error);
      throw error;
    }
  } else {
    // Update last login and device fingerprint
    const deviceFingerprint = generateDeviceFingerprint();
    const userData = userSnap.data();
    const deviceFingerprints = userData.deviceFingerprints || [];
    
    if (!deviceFingerprints.includes(deviceFingerprint)) {
      deviceFingerprints.push(deviceFingerprint);
    }
    
    try {
      await updateDoc(userRef, {
        lastLoginAt: serverTimestamp(),
        deviceFingerprints: deviceFingerprints,
        loginAttempts: 0 // Reset on successful login
      });
    } catch (error) {
      console.error('Error updating user document:', error);
    }
  }
  
  return userRef;
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await createUserDocument(result.user, { authProvider: 'google' });
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error('Google sign in error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to sign in with Google' 
    };
  }
};

// Email/Password Sign Up
export const signUpWithEmailAndPassword = async (
  email: string, 
  password: string, 
  username: string
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name
    await updateProfile(result.user, {
      displayName: username
    });
    
    // Send email verification
    await sendEmailVerification(result.user);
    
    await createUserDocument(result.user, { 
      username,
      authProvider: 'email' 
    });
    
    return { 
      success: true, 
      user: result.user,
      message: 'Account created successfully! Please check your email for verification.'
    };
  } catch (error: any) {
    console.error('Email sign up error:', error);
    let errorMessage = 'Failed to create account';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email is already registered';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Email/Password Sign In
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await createUserDocument(result.user);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error('Email sign in error:', error);
    let errorMessage = 'Failed to sign in';
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed attempts. Please try again later';
        break;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Sign Out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
};

// Password Reset
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { 
      success: true, 
      message: 'Password reset email sent! Check your inbox.' 
    };
  } catch (error: any) {
    console.error('Password reset error:', error);
    let errorMessage = 'Failed to send reset email';
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Auth state observer
export const onAuthStateChange = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Get user document from Firestore
export const getUserDocument = async (uid: string): Promise<User | null> => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      return {
        id: data.id,
        username: data.username,
        email: data.email,
        photoURL: data.photoURL,
        isPremium: data.isPremium || false,
        createdAt: data.createdAt?.toDate() || new Date(),
        lastLoginAt: data.lastLoginAt?.toDate() || new Date(),
        deviceFingerprints: data.deviceFingerprints || [],
        loginAttempts: data.loginAttempts || 0,
        isEmailVerified: data.isEmailVerified || false,
        authProvider: data.authProvider || 'email'
      } as User;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting user document:', error);
    return null;
  }
};

// Update user premium status
export const updateUserPremiumStatus = async (uid: string, isPremium: boolean) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      isPremium,
      premiumActivatedAt: isPremium ? serverTimestamp() : null
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating premium status:', error);
    return { success: false, error: 'Failed to update premium status' };
  }
};