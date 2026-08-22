import { SafeAreaView } from "react-native-safe-area-context";
import FreeAnswerQuestion from "./free-answer-question";

export default function QuizzScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FreeAnswerQuestion />
    </SafeAreaView>
  );
}
