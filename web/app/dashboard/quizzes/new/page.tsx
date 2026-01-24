import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NewQuizPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Quiz</h1>
      <p>
        Upload a file, or paste a link to generate quiz questions from the
        content.
      </p>
      <Card className="flex flex-col items-center">
        <Button className="w-fit">Upload File</Button>
        <p>Supported files: PDF, DOCX, TXT, PPTX</p>
      </Card>
      <Input
        placeholder="Or upload your link here ..."
        className="h-15 rounded-full"
        style={{ fontSize: 20 }}
      />
      <Button>Start the quiz</Button>
    </div>
  );
}
