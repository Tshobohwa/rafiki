"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AnswerOption {
  answer: string;
  isTrue: boolean;
  comment: string;
}

interface Question {
  question: string;
  answerOptions: AnswerOption[];
}

interface Quiz {
  id: string;
  title: string;
  comment: string;
  quiz_data: Question[];
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${params.id}`);
        const data = await response.json();
        
        if (data.error) {
          console.error("Error fetching quiz:", data.error);
          return;
        }
        
        setQuiz(data);
        setTotalQuestions(data.quiz_data.length);
      } catch (error) {
        console.error("Failed to fetch quiz:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [params.id]);

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    
    if (selectedAnswers.includes(index)) {
      setSelectedAnswers(selectedAnswers.filter((i) => i !== index));
    } else {
      setSelectedAnswers([...selectedAnswers, index]);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers.length === 0 || !quiz) return;

    const currentQuestion = quiz.quiz_data[currentQuestionIndex];
    const correctAnswers = currentQuestion.answerOptions
      .map((opt, idx) => (opt.isTrue ? idx : -1))
      .filter((idx) => idx !== -1);

    const isCorrect =
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every((idx) => correctAnswers.includes(idx));

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (!quiz) return;

    if (currentQuestionIndex < quiz.quiz_data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading quiz...</p>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Quiz not found</p>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
          <div className="text-6xl font-bold mb-4 text-blue-600">
            {percentage}%
          </div>
          <p className="text-xl mb-6">
            You scored {score} out of {totalQuestions}
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRetakeQuiz}>Retake Quiz</Button>
            <Button variant="outline" onClick={() => router.push("/dashboard/quizzes")}>
              Back to Quizzes
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = quiz.quiz_data[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-gray-600 mb-4">{quiz.comment}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span>Score: {score}</span>
        </div>
      </div>

      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
        
        <div className="space-y-3">
          {currentQuestion.answerOptions.map((option, index) => {
            const isSelected = selectedAnswers.includes(index);
            const showCorrect = showFeedback && option.isTrue;
            const showIncorrect = showFeedback && isSelected && !option.isTrue;

            return (
              <div key={index}>
                <button
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showIncorrect
                      ? "border-red-500 bg-red-50"
                      : isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 ${
                        isSelected ? "bg-blue-500 border-blue-500" : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                    <span className="flex-1">{option.answer}</span>
                  </div>
                </button>
                
                {showFeedback && (isSelected || option.isTrue) && (
                  <p className={`mt-2 ml-8 text-sm ${option.isTrue ? "text-green-700" : "text-red-700"}`}>
                    {option.comment}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        {!showFeedback ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswers.length === 0}
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </div>
    </div>
  );
}
