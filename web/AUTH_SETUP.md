# Email Authentication Setup with Supabase

This guide explains the email authentication implementation in your Next.js app.

## Features Implemented

✅ Email/Password Sign Up
✅ Email/Password Login
✅ Google OAuth (configured, needs Supabase setup)
✅ Protected Routes (Dashboard)
✅ Logout Functionality
✅ Automatic Session Management
✅ Redirect Logic

## File Structure

```
web/
├── utils/supabase/
│   ├── actions/
│   │   └── auth.action.ts       # Server actions for auth
│   ├── client.ts                # Browser client
│   ├── server.ts                # Server client
│   └── middleware.ts            # Legacy middleware helper
├── components/
│   ├── login-form.tsx           # Login form component
│   └── signup-form.tsx          # Signup form component
├── app/
│   ├── auth/
│   │   ├── login/page.tsx       # Login page
│   │   ├── signup/page.tsx      # Signup page
│   │   └── callback/route.ts    # OAuth callback handler
│   └── dashboard/               # Protected routes
└── middleware.ts                # Route protection
```

## How It Works

### 1. Authentication Actions (`auth.action.ts`)
- `signUp()` - Creates new user with email/password
- `signIn()` - Authenticates existing user
- `signOut()` - Logs out user
- `getUser()` - Gets current user session
- `signInWithGoogle()` - Initiates Google OAuth flow

### 2. Route Protection (`middleware.ts`)
- Protects `/dashboard/*` routes - redirects to login if not authenticated
- Redirects authenticated users away from `/auth/login` and `/auth/signup`
- Refreshes user session on each request

### 3. Forms
- **Login Form**: Email/password with error handling and loading states
- **Signup Form**: Full name, email, password with confirmation validation

## Supabase Configuration

### Enable Email Authentication
1. Go to your Supabase Dashboard
2. Navigate to Authentication → Providers
3. Enable Email provider
4. Configure email templates (optional)

### Enable Google OAuth (Optional)
1. Go to Authentication → Providers
2. Enable Google provider
3. Add your Google OAuth credentials:
   - Client ID
   - Client Secret
4. Add authorized redirect URL: `http://localhost:3000/auth/callback`
5. For production, add your production URL

### Database Setup
Supabase automatically creates an `auth.users` table. If you want to store additional user data:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);
```

## Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Usage

### Sign Up
```typescript
// Form submits to signUp action
const formData = new FormData();
formData.append('fullName', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('password', 'password123');
await signUp(formData);
```

### Login
```typescript
// Form submits to signIn action
const formData = new FormData();
formData.append('email', 'john@example.com');
formData.append('password', 'password123');
await signIn(formData);
```

### Get Current User
```typescript
import { getUser } from '@/utils/supabase/actions/auth.action';

const user = await getUser();
if (user) {
  console.log(user.email);
}
```

### Logout
```typescript
import { signOut } from '@/utils/supabase/actions/auth.action';

await signOut(); // Redirects to /auth/login
```

## Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/auth/signup`
3. Create an account
4. You'll be redirected to `/dashboard`
5. Try logging out and logging back in

## Security Notes

- Passwords are hashed by Supabase (never stored in plain text)
- Sessions are stored in HTTP-only cookies
- Middleware validates sessions on every request
- Protected routes automatically redirect unauthenticated users
- CSRF protection is built into Next.js Server Actions

## Troubleshooting

**"Invalid login credentials"**
- Check email/password are correct
- Verify user exists in Supabase Dashboard

**OAuth not working**
- Ensure Google provider is enabled in Supabase
- Check redirect URL matches exactly
- Verify OAuth credentials are correct

**Redirects not working**
- Clear browser cookies
- Check middleware.ts is in the root of `web/` directory
- Verify NEXT_PUBLIC_SITE_URL is set correctly
