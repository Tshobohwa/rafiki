"use client";

import { Button } from "./ui/button";

export default function AnswerOption({
  answer,
  isValid,
}: {
  answer: string;
  isValid: boolean;
}) {
  return (
    <Button
      onClick={() => {
        !isValid;
      }}
      variant={"secondary"}
      className="hover:bg-amber-50"
    >
      {answer}
    </Button>
  );
}
