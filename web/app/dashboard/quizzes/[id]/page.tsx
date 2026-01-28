import AnswerOption from "@/components/answer-option";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Question = ({ question }: { question: string }) => {
  return <Card>{question}</Card>;
};

export default function Quiz() {
  const quiz = {
    question: "Comment on fait pour faire la patte",
    answers: [
      {
        option: 1,
        answer: "On utilise de la patte a modeler",
        isValid: false,
      },
      {
        option: 2,
        answer: "On utilise de la patte a modeler",
        isValid: false,
      },
      {
        option: 3,
        answer: "On utilise de la patte a modeler",
        isValid: false,
      },
      {
        option: 4,
        answer: "On utilise de la patte a modeler",
        isValid: false,
      },

      {
        option: 5,
        answer: "On utilise de la patte a modeler",
        isValid: false,
      },
    ],
  };
  return (
    <div className="p-4">
      <Question question={quiz.question} />
      <div className="flex flex-col gap-4">
        {quiz.answers.map((answer) => (
          <AnswerOption
            answer={answer.answer}
            key={answer.option}
            isValid={answer.isValid}
          />
        ))}
      </div>
    </div>
  );
}
