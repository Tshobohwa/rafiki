import { createQuiz } from "@/utils/supabase/actions/quiz.action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { data: null, error: "No file provided" },
        { status: 400 }
      );
    }

    const result = await createQuiz({ file });

    if (result.error) {
      return NextResponse.json(
        { data: null, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: result.data, error: null });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { data: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
