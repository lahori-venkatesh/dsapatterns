# DSA Learning Platform

A comprehensive Data Structures and Algorithms learning platform with premium features and Supabase authentication.

## Features

### 🔐 **Production-Ready Authentication**
- **Google OAuth Integration** - One-click sign in with Google via Supabase
- **Email/Password Authentication** - Traditional login with Supabase Auth
- **Password Reset** - Secure password recovery via email
- **Email Verification** - Verify email addresses for security
- **Session Management** - Secure session handling with Supabase
- **Account Security** - Protection against brute force attacks

### 📚 **Learning Platform**
- **Structured Learning Paths** - Beginner, Intermediate, and Pro levels
- **Pattern-Based Learning** - Organized by algorithmic patterns
- **Progress Tracking** - Track completion across all problems
- **Note Taking** - Rich text and drawing notes for each problem
- **Search & Filter** - Find problems and notes quickly

### 💎 **Premium Features**
- **Account-Based Premium** - Codes tied to specific user accounts
- **Anti-Sharing Protection** - Device fingerprinting prevents account sharing
- **Secure Verification** - Admin-controlled verification code system
- **Lifetime Access** - One-time payment for permanent access

## Setup Instructions

### 1. Supabase Setup

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or use existing one
3. Enable Authentication:
   - Go to Authentication > Settings
   - Enable Email and Google providers
   - Configure Google OAuth:
     - Add your Google OAuth client ID and secret
     - Set redirect URLs: `https://your-domain.com/auth/callback`
4. Get your Supabase credentials:
   - Go to Settings > API
   - Copy the Project URL and anon public key

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials:
   - Application type: Web application
   - Authorized redirect URIs: `https://your-project.supabase.co/auth/v1/callback`
5. Copy Client ID and Client Secret to Supabase Auth settings

### 3. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase configuration:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

## Authentication Flow

### **User Registration/Login**
1. User clicks "Continue with Google" or creates email account
2. Supabase handles authentication securely
3. User session managed automatically by Supabase
4. User data stored in Supabase Auth

### **Premium Activation**
1. User pays ₹299 and includes username in payment note
2. User contacts admin via WhatsApp with payment proof
3. Admin assigns verification code to specific username
4. User logs in and enters code to activate premium
5. Premium status updated in local storage and synced

## Security Features

### **Account Protection**
- **Supabase Auth Security** - Enterprise-grade authentication
- **Session Management** - Automatic token refresh and validation
- **Email Verification** - Ensures valid email addresses
- **OAuth Security** - Secure Google sign-in flow

### **Premium Protection**
- **Account-Bound Codes** - Verification codes tied to specific users
- **Admin Control** - Manual verification code assignment
- **Usage Monitoring** - Track code usage and prevent abuse
- **Device Binding** - Premium access tied to verified devices

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **State Management**: Zustand
- **Icons**: Lucide React

## Production Deployment

### **Supabase Configuration**

1. **Authentication Settings**:
   - Enable email confirmations
   - Set up custom SMTP (optional)
   - Configure redirect URLs for production

2. **Row Level Security**:
   ```sql
   -- Enable RLS on user profiles table
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
   
   -- Users can only see their own profile
   CREATE POLICY "Users can view own profile" ON profiles
     FOR SELECT USING (auth.uid() = id);
   
   -- Users can update their own profile
   CREATE POLICY "Users can update own profile" ON profiles
     FOR UPDATE USING (auth.uid() = id);
   ```

### **Environment Variables for Production**

Set these in your hosting platform:

```env
VITE_SUPABASE_URL=https://your-production-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-production-anon-key
```

## Admin Features

### **Verification Code Management**

Admins can assign verification codes to users:

1. User pays and provides username
2. Admin verifies payment
3. Admin assigns code to username
4. User activates premium with assigned code

### **User Management**

- View all registered users in Supabase dashboard
- Monitor authentication events
- Track premium activations
- Handle support requests

## Support

For technical support or premium activation issues:
- Join WhatsApp group for payment verification
- Contact admin with username and payment proof
- Get verification code assigned to your account

---

**Built with ❤️ for aspiring software engineers using Supabase**