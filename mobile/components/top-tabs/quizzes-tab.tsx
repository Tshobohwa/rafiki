import quizzes from "@/mock-data/quizzes";
import { View } from "react-native";
import QuizzBtn from "../buttons/quizz-btn";

export default function QuizzesTab() {
  return (
    <View style={{ paddingTop: 10 }}>
      {quizzes.map(
        ({ answerdQuestions, description, id, title, totalQuestions }) => (
          <QuizzBtn
            answerdQuestions={answerdQuestions}
            description={description}
            id={id}
            totalQuestions={totalQuestions}
            title={title}
            key={id}
          />
        ),
      )}
    </View>
  );
}
