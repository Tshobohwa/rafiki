"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { postDocument } from "@/utils/supabase/actions/document.action";
import { useRef, useState } from "react";

export default function NewQuizPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    console.log(file);
    
    setIsUploading(true);
    try {
      const result = await postDocument({ file });

      console.log(result);
      if (result?.success) {
        setUploadedFile(file.name);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file)
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Quiz</h1>
      <p>
        Upload a file, or paste a link to generate quiz questions from the
        content.
      </p>
      <Card 
        className="flex flex-col items-center p-8 border-dashed border-2 hover:border-gray-400 transition-colors cursor-pointer" 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.txt,.pptx"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button 
          className="w-fit"
          disabled={isUploading}
          type="button"
        >
          {isUploading ? "Uploading..." : "Upload File"}
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          Supported files: PDF, DOCX, TXT, PPTX
        </p>
        {uploadedFile && (
          <p className="text-sm text-green-600 mt-2">
            ✓ Uploaded: {uploadedFile}
          </p>
        )}
      </Card>
      <Input
        placeholder="Or upload your link here ..."
        className="h-15 rounded-full mt-4"
        style={{ fontSize: 20 }}
      />
      <Button className="mt-4">Start the quiz</Button>
    </div>
  );
}
