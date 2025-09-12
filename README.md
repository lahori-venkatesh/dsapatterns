# DSA Learning Platform

A comprehensive Data Structures and Algorithms learning platform with premium features and Google OAuth authentication.

## Features

### 🔐 **Production-Ready Authentication**
- **Google OAuth Integration** - One-click sign in with Google
- **Email/Password Authentication** - Traditional login with Firebase
- **Password Reset** - Secure password recovery via email
- **Email Verification** - Verify email addresses for security
- **Session Management** - Secure session handling with device fingerprinting
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

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Google and Email/Password providers
4. Enable Firestore Database:
   - Go to Firestore Database
   - Create database in production mode
5. Get your Firebase config:
   - Go to Project Settings > General
   - Copy the Firebase SDK configuration

### 2. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

## Authentication Flow

### **User Registration/Login**
1. User clicks "Continue with Google" or creates email account
2. Firebase handles authentication securely
3. User document created in Firestore with premium status
4. Session managed with device fingerprinting

### **Premium Activation**
1. User pays ₹299 and includes username in payment note
2. User contacts admin via WhatsApp with payment proof
3. Admin assigns verification code to specific username
4. User logs in and enters code to activate premium
5. Premium status updated in Firestore and synced across devices

## Security Features

### **Account Protection**
- **Device Fingerprinting** - Prevents account sharing
- **Session Validation** - Real-time session verification
- **Login Attempt Limiting** - Protection against brute force
- **Email Verification** - Ensures valid email addresses

### **Premium Protection**
- **Account-Bound Codes** - Verification codes tied to specific users
- **Admin Control** - Manual verification code assignment
- **Usage Monitoring** - Track code usage and prevent abuse
- **Device Binding** - Premium access tied to verified devices

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **State Management**: Zustand
- **Icons**: Lucide React

## Production Deployment

### **Firebase Security Rules**

Add these Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Admin-only collections (for verification codes, etc.)
    match /admin/{document=**} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}
```

### **Environment Variables for Production**

Set these in your hosting platform:

```env
VITE_FIREBASE_API_KEY=production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=production_project_id
# ... other Firebase config
```

## Admin Features

### **Verification Code Management**

Admins can assign verification codes to users:

1. User pays and provides username
2. Admin verifies payment
3. Admin assigns code to username in admin panel
4. User activates premium with assigned code

### **User Management**

- View all registered users
- Monitor premium activations
- Track verification code usage
- Handle support requests

## Support

For technical support or premium activation issues:
- Join WhatsApp group for payment verification
- Contact admin with username and payment proof
- Get verification code assigned to your account

---

**Built with ❤️ for aspiring software engineers**