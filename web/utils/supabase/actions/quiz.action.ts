"use server";

import { createClient } from "../server";
import OpenAI from "openai";
// @ts-expect-error - pdf-parse-fork doesn't have proper TypeScript definitions
import pdf from "pdf-parse-fork";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnswerOption {
  answer: string;
  isTrue: boolean;
  comment: string;
}

interface Question {
  question: string;
  answerOptions: AnswerOption[];
}

interface QuizResponse {
  title: string;
  comment: string;
  quiz: Question[];
}

async function extractTextFromFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const fileType = file.type;

  if (fileType === "application/pdf") {
    const data = await pdf(Buffer.from(buffer));
    return data.text;
  } else if (fileType === "text/plain") {
    return new TextDecoder().decode(buffer);
  } else {
    throw new Error("Unsupported file type. Please upload PDF or TXT files.");
  }
}

export const createQuiz = async ({ file }: { file: File }) => {
  try {
    const supabase = await createClient();

    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("Authentication error:", authError);
      return { data: null, error: "User not authenticated" };
    }

    // Extract text from file
    const fileContent = await extractTextFromFile(file);

    if (!fileContent || fileContent.trim().length === 0) {
      return { data: null, error: "Could not extract text from file" };
    }

    // Create the prompt for OpenAI
    const prompt = `You are an AI assistant that analyzes documents and creates quizzes.

TASK:
1. Extract and understand all key points from the provided file content.
2. Generate a quiz with multiple-choice questions covering EACH important point in the text.
3. Questions must test understanding, not simple copy-paste facts.

RULES:
- Each question must have **at most 5 answer options**.
- Each question must have **at least 1 correct answer**.
- Each answer option must include:
  - \`answer\`: the option text
  - \`isTrue\`: boolean indicating whether it is correct
  - \`comment\`: a short explanation of **why the answer is correct or incorrect**
- Keep explanations clear and educational.
- Do NOT include markdown, comments, or extra text outside the JSON.
- Output must be **valid JSON only**.

OUTPUT FORMAT (STRICT):
{
  "title": string,
  "comment": string,
  "quiz": [
    {
      "question": string,
      "answerOptions": [
        {
          "answer": string,
          "isTrue": boolean,
          "comment": string
        }
      ]
    }
  ]
}

INPUT:
Here is the extracted file content:
${fileContent}`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that creates educational quizzes. Always respond with valid JSON only.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0].message.content;
    if (!responseContent) {
      return { data: null, error: "No response from OpenAI" };
    }

    const quizData: QuizResponse = JSON.parse(responseContent);

    // Store quiz in database
    const { data: insertedQuiz, error: insertError } = await supabase
      .from("quizzes")
      .insert({
        user_id: user.id,
        title: quizData.title,
        comment: quizData.comment,
        quiz_data: quizData.quiz,
        file_name: file.name,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      return { data: null, error: "Failed to save quiz" };
    }

    return { data: insertedQuiz, error: null };
  } catch (error) {
    console.error("Quiz creation error:", error);
    return { data: null, error: error instanceof Error ? error.message : "Failed to create quiz" };
  }
};
