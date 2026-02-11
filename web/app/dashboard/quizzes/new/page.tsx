"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createQuiz } from "@/utils/supabase/actions/quiz.action";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function NewQuizPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    if (!file) return;
    
    const validTypes = ["application/pdf", "text/plain"];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a PDF or TXT file");
      return;
    }
    
    setSelectedFile(file);
    setError(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleCreateQuiz = async () => {
    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }

    setIsCreating(true);
    setError(null);

    try {
      const result = await createQuiz({ file: selectedFile });

      if (result.error) {
        setError(result.error);
        return;
      }

      if (result.data) {
        router.push(`/quiz/${result.data.id}`);
      }
    } catch (err) {
      console.error("Quiz creation failed:", err);
      setError("Failed to create quiz. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Quiz</h1>
      <p className="mb-6 text-gray-600">
        Upload a PDF or TXT file to generate quiz questions from the content.
      </p>
      
      <Card 
        className="flex flex-col items-center p-8 border-dashed border-2 hover:border-gray-400 transition-colors cursor-pointer mb-6" 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button 
          className="w-fit"
          disabled={isCreating}
          type="button"
        >
          {selectedFile ? "Change File" : "Upload File"}
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          Supported files: PDF, TXT
        </p>
        {selectedFile && (
          <p className="text-sm text-green-600 mt-2">
            ✓ Selected: {selectedFile.name}
          </p>
        )}
      </Card>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <Button 
        className="w-full"
        onClick={handleCreateQuiz}
        disabled={!selectedFile || isCreating}
      >
        {isCreating ? "Creating Quiz..." : "Generate Quiz"}
      </Button>

      {isCreating && (
        <p className="text-sm text-gray-500 mt-4 text-center">
          This may take a minute. We're analyzing your document and generating questions...
        </p>
      )}
    </div>
  );
}
