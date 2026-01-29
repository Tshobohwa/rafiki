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
      className="hover:bg-amber-50 hover:cursor-pointer active:border border-amber-200"
    >
      {answer}
    </Button>
  );
}
