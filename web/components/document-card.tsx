"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Document {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  publicUrl: string;
  userId: string;
}

interface DocumentCardProps {
  document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const router = useRouter();

  const getCleanFileName = (name: string) => {
    const parts = name.split('-');
    if (parts.length > 5) {
      return parts.slice(5).join('-');
    }
    return name;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCreateQuiz = async () => {
    try {
      setIsCreatingQuiz(true);

      // Fetch the file from the public URL
      const response = await fetch(document.publicUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch document");
      }

      const blob = await response.blob();
      const file = new File([blob], document.name, { type: blob.type });

      // Call the API route to create quiz
      const formData = new FormData();
      formData.append("file", file);

      const createResponse = await fetch("/api/quiz/create", {
        method: "POST",
        body: formData,
      });

      const result = await createResponse.json();

      if (result.error) {
        throw new Error(result.error);
      }

      // Redirect to the quiz page
      if (result.data?.id) {
        router.push(`/quiz/${result.data.id}`);
      }
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert(error instanceof Error ? error.message : "Failed to create quiz");
    } finally {
      setIsCreatingQuiz(false);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base line-clamp-2">
              {getCleanFileName(document.name)}
            </CardTitle>
            <CardDescription className="mt-1">
              Document
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Created: {formatDate(document.created_at)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Updated: {formatTime(document.updated_at)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          asChild
        >
          <a 
            href={document.publicUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            View
          </a>
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1"
          onClick={handleCreateQuiz}
          disabled={isCreatingQuiz}
        >
          {isCreatingQuiz ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Quiz"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
