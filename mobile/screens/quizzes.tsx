import NewQuizzCard from "@/components/cards/new-quizz";
import QuizzCard from "@/components/cards/quizz-card";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QuizzesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "#ffffff" }}>
      <ScrollView
        style={{ flex: 1, padding: 20 }}
        contentContainerStyle={{ gap: 20 }}
      >
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Quizzes
        </Text>
        <NewQuizzCard />
        <Text>RECENTS</Text>
        <QuizzCard
          title="Quizz number 1"
          description="Description quizz number 1"
          onPress={() => {}}
          answerdQuestions={12}
          totalQuestions={25}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
