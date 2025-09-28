import { createClient } from '@supabase/supabase-js';

// Safely get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase Config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing',
  urlValue: supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'undefined',
  keyValue: supabaseAnonKey ? supabaseAnonKey.substring(0, 20) + '...' : 'undefined'
});

// Create Supabase client - ensure it's always created if credentials exist
const supabase = (() => {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase credentials missing:', {
        url: supabaseUrl ? 'Present' : 'Missing',
        key: supabaseAnonKey ? 'Present' : 'Missing',
        allEnvVars: Object.keys(import.meta.env).filter(key => key.startsWith('VITE_'))
      });
      return null;
    }

    console.log('Creating Supabase client...');
    const client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
      }
    });
    
    console.log('Supabase client created successfully');
    
    // Test connection asynchronously
    setTimeout(async () => {
      try {
        const { data, error } = await client.auth.getSession();
        console.log('Initial session check:', { hasSession: !!data.session, error });
      } catch (error) {
        console.error('Session check failed:', error);
      }
    }, 100);
    
    return client;
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    return null;
  }
})();

export { supabase };

// Auth event listeners
export const onAuthStateChange = (callback: (event: string, session: any) => void) => {
  if (!supabase) {
    console.warn('Supabase not available for auth state changes');
    return { data: { subscription: { unsubscribe: () => {} } } };
  }
  
  return supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state change:', event, session);
    if (session?.user) {
      console.log('Session user details:', {
        id: session.user.id,
        email: session.user.email,
        provider: session.user.app_metadata?.provider
      });
    }
    callback(event, session);
  });
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    if (!supabase) {
      throw new Error('Authentication service is not available. Please check your configuration.');
    }
    
    console.log('Starting Google OAuth...');
    

    // Check if Google provider is enabled
    console.log('Checking Google OAuth configuration...');
    
    // Use production URL for redirect in production, localhost for development
    const isProduction = window.location.hostname !== 'localhost';
    const redirectUrl = isProduction 
      ? `${window.location.origin}/auth/callback`
      : `${window.location.origin}/auth/callback`;
    
    console.log('Redirect URL:', redirectUrl);
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
        skipBrowserRedirect: false,
        scopes: 'email profile'
      }
    });

    if (error) {
      console.error('Google OAuth error:', error);
      
      // Handle specific Google OAuth errors
      if (error.message?.includes('Provider not found')) {
        throw new Error('Google sign-in is not configured. Please contact support or use email/password login.');
      } else if (error.message?.includes('Invalid redirect URL')) {
        throw new Error('Google sign-in configuration error. Please contact support.');
      } else {
        throw new Error(`Google sign-in failed: ${error.message}`);
      }
    }
    
    console.log('Google OAuth initiated:', data);
    
    // The redirect should happen automatically
    // If we reach here without redirect, there might be an issue
    if (!data.url) {
      throw new Error('Google sign-in failed to initialize. Please try again.');
    }
    
    return { success: true, data };
  } catch (error: any) {
    console.error('Google sign in error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to sign in with Google. Please try email/password login.'
    };
  }
};

// Email/Password Sign Up
export const signUpWithEmail = async (email: string, password: string, username: string) => {
  try {
    if (!supabase) {
      throw new Error('Authentication service is not available. Please check your configuration.');
    }
    
    console.log('Starting email signup for:', email);
    

    // Basic validation
    if (!email || !password || !username) {
      throw new Error('All fields are required');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }
    
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password,
      options: {
        data: {
          username: username.trim(),
          full_name: username.trim(),
        }
      }
    });

    if (error) {
      console.error('Signup error:', error);
      throw error;
    }

    console.log('Signup successful:', data);
    
    return { 
      success: true, 
      data,
      user: data.user,
      message: data.user && !data.user.email_confirmed_at 
        ? 'Account created! Please check your email to verify your account.'
        : 'Account created successfully!'
    };
  } catch (error: any) {
    console.error('Email signup error:', error);
    
    let errorMessage = 'Failed to create account';
    
    if (error.message?.includes('User already registered')) {
      errorMessage = 'An account with this email already exists. Please try signing in instead.';
    } else if (error.message?.includes('Password should be at least')) {
      errorMessage = 'Password must be at least 6 characters long';
    } else if (error.message?.includes('Invalid email')) {
      errorMessage = 'Please enter a valid email address';
    } else if (error.message?.includes('not configured')) {
      errorMessage = 'Authentication service is not configured. Please contact support.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Email/Password Sign In
export const signInWithEmail = async (email: string, password: string) => {
  try {
    if (!supabase) {
      throw new Error('Authentication service is not available. Please check your configuration.');
    }
    
    console.log('Starting email signin for:', email);
    

    // Basic validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    if (error) {
      console.error('Signin error:', error);
      throw error;
    }

    console.log('Signin successful:', data);
    return { success: true, data, user: data.user };
  } catch (error: any) {
    console.error('Email signin error:', error);
    
    let errorMessage = 'Failed to sign in';
    
    if (error.message?.includes('Invalid login credentials')) {
      errorMessage = 'Invalid email or password. Please check your credentials and try again.';
    } else if (error.message?.includes('Email not confirmed')) {
      errorMessage = 'Please verify your email address before signing in. Check your inbox for a verification link.';
    } else if (error.message?.includes('Too many requests')) {
      errorMessage = 'Too many failed attempts. Please wait a few minutes before trying again.';
    } else if (error.message?.includes('not configured')) {
      errorMessage = 'Authentication service is not configured. Please contact support.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Sign Out
export const signOut = async () => {
  try {
    if (!supabase) {
      console.warn('Supabase not available for sign out');
      return { success: true };
    }
    
    console.log('Signing out...');
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    console.log('Signout successful');
    return { success: true };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
};

// Password Reset
export const resetPassword = async (email: string) => {
  try {
    if (!supabase) {
      throw new Error('Authentication service is not available. Please check your configuration.');
    }
    
    console.log('Sending password reset for:', email);
    
    if (!email) {
      throw new Error('Email address is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }
    
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
    
    console.log('Password reset email sent');
    return { 
      success: true, 
      message: 'Password reset email sent! Please check your inbox and follow the instructions.' 
    };
  } catch (error: any) {
    console.error('Password reset error:', error);
    
    let errorMessage = 'Failed to send password reset email';
    if (error.message?.includes('not found')) {
      errorMessage = 'No account found with this email address';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    if (!supabase) {
      console.warn('Supabase not available for getting current user');
      return null;
    }
    
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    console.log('Current user:', user);
    return user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};

// Update user profile
export const updateUserProfile = async (updates: any) => {
  try {
    if (!supabase) {
      throw new Error('Authentication service is not available. Please check your configuration.');
    }
    
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