-- ============================================
-- QUIZ SYSTEM DATABASE SETUP
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- Create quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  comment TEXT,
  quiz_data JSONB NOT NULL,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create quiz_attempts table to track user attempts
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  answers JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quizzes_user_id ON quizzes(user_id);
CREATE INDEX IF NOT EXISTS idx_quizzes_created_at ON quizzes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_id ON quiz_attempts(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_completed_at ON quiz_attempts(completed_at DESC);

-- Enable Row Level Security
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES FOR QUIZZES TABLE
-- ============================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can create their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can update their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can delete their own quizzes" ON quizzes;

-- Create new policies
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

-- ============================================
-- RLS POLICIES FOR QUIZ_ATTEMPTS TABLE
-- ============================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own quiz attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can create their own quiz attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can view attempts for their quizzes" ON quiz_attempts;

-- Create new policies
CREATE POLICY "Users can view their own quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view attempts for their quizzes"
  ON quiz_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM quizzes
      WHERE quizzes.id = quiz_attempts.quiz_id
      AND quizzes.user_id = auth.uid()
    )
  );

-- ============================================
-- TRIGGER FOR UPDATED_AT TIMESTAMP
-- ============================================

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists
DROP TRIGGER IF EXISTS update_quizzes_updated_at ON quizzes;

-- Create trigger for quizzes table
CREATE TRIGGER update_quizzes_updated_at
  BEFORE UPDATE ON quizzes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE QUIZ DATA STRUCTURE (FOR REFERENCE)
-- ============================================
-- This is how quiz_data JSONB should be structured:
-- [
--   {
--     "question": "What is the capital of France?",
--     "answerOptions": [
--       {
--         "answer": "Paris",
--         "isTrue": true,
--         "comment": "Correct! Paris is the capital and largest city of France."
--       },
--       {
--         "answer": "London",
--         "isTrue": false,
--         "comment": "Incorrect. London is the capital of the United Kingdom."
--       }
--     ]
--   }
-- ]

-- ============================================
-- SAMPLE QUIZ_ATTEMPTS ANSWERS STRUCTURE
-- ============================================
-- This is how answers JSONB should be structured:
-- [
--   {
--     "questionIndex": 0,
--     "selectedAnswers": [0],
--     "correctAnswers": [0],
--     "isCorrect": true
--   }
-- ]

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these to verify the setup:

-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('quizzes', 'quiz_attempts');

-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('quizzes', 'quiz_attempts');

-- Check policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('quizzes', 'quiz_attempts');

-- ============================================
-- CLEANUP (OPTIONAL - USE WITH CAUTION)
-- ============================================
-- Uncomment and run these if you need to start fresh:

-- DROP TABLE IF EXISTS quiz_attempts CASCADE;
-- DROP TABLE IF EXISTS quizzes CASCADE;
-- DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
