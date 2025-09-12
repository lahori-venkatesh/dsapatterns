import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});

// Auth event listeners
export const onAuthStateChange = (callback: (event: string, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      }
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error('Google sign in error:', error);
    return { success: false, error: error.message };
  }
};

// Email/Password Sign Up
export const signUpWithEmail = async (email: string, password: string, username: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          full_name: username,
        }
      }
    });

    if (error) throw error;

    return { 
      success: true, 
      data,
      message: 'Account created successfully! Please check your email for verification.'
    };
  } catch (error: any) {
    console.error('Email sign up error:', error);
    let errorMessage = 'Failed to create account';
    
    switch (error.message) {
      case 'User already registered':
        errorMessage = 'Email is already registered';
        break;
      case 'Password should be at least 6 characters':
        errorMessage = 'Password should be at least 6 characters';
        break;
      case 'Invalid email':
        errorMessage = 'Invalid email address';
        break;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Email/Password Sign In
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error('Email sign in error:', error);
    let errorMessage = 'Failed to sign in';
    
    switch (error.message) {
      case 'Invalid login credentials':
        errorMessage = 'Invalid email or password';
        break;
      case 'Email not confirmed':
        errorMessage = 'Please verify your email before signing in';
        break;
      case 'Too many requests':
        errorMessage = 'Too many failed attempts. Please try again later';
        break;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Sign Out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
};

// Password Reset
export const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
    return { 
      success: true, 
      message: 'Password reset email sent! Check your inbox.' 
    };
  } catch (error: any) {
    console.error('Password reset error:', error);
    let errorMessage = 'Failed to send reset email';
    
    if (error.message.includes('not found')) {
      errorMessage = 'No account found with this email';
    }
    
    return { success: false, error: errorMessage };
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};

// Update user profile
export const updateUserProfile = async (updates: any) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error('Update profile error:', error);
    return { success: false, error: error.message };
  }
};