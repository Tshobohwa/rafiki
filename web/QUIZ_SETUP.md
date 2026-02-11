# Quiz Feature Setup

## Overview
The quiz feature allows users to upload PDF or TXT files and automatically generate educational quizzes using OpenAI's GPT model.

## Database Schema
You need to create a `quizzes` table in Supabase with the following structure:

```sql
CREATE TABLE quizzes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  comment TEXT,
  quiz_data JSONB NOT NULL,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own quizzes"
  ON quizzes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quizzes"
  ON quizzes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quizzes"
  ON quizzes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quizzes"
  ON quizzes FOR DELETE
  USING (auth.uid() = user_id);
```

## Environment Variables
Make sure your `.env.local` file contains:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## How It Works

1. **Upload**: User uploads a PDF or TXT file on `/dashboard/quizzes/new`
2. **Extract**: Text is extracted from the file
3. **Generate**: OpenAI analyzes the content and generates quiz questions
4. **Store**: Quiz is saved to Supabase database
5. **Take Quiz**: User is redirected to `/quiz/[id]` to take the quiz
6. **Score**: System tracks correct answers and shows final score

## Features

- Multiple choice questions with 1-5 options
- Multiple correct answers supported
- Explanations for each answer option
- Real-time score tracking
- Quiz retake functionality
- Responsive design
