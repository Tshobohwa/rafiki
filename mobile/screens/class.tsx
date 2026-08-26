import MaterialCard from "@/components/cards/material-card";
import QuizzCard from "@/components/cards/quizz-card";
import SlideCard from "@/components/cards/slide-card";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ClassScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 16 }} contentContainerStyle={{ gap: 10 }}>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Class: Programming language and paradigms
        </Text>
        <PrimaryButton text="Upload Material" />
        <SecondaryButton text="Start a quizz" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: "Outfit-Medium",
    fontSize: 18,
  },
  seeAllText: {
    fontFamily: "Outfit-Regular",
    color: "#007AFF",
  },
});
