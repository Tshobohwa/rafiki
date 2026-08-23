import NewQuizzCard from "@/components/cards/new-quizz";
import UploadFileButton from "@/components/upload-file-button";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <ScrollView>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Rafiki AI
        </Text>
        <NewQuizzCard />
      </ScrollView>
    </SafeAreaView>
  );
}
