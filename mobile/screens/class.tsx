import MaterialCard from "@/components/cards/material-card";
import SlideCard from "@/components/cards/slide-card";
import { PrimaryButton } from "@/components/primary-button";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClassScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <ScrollView>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Class: Programming language and paradigms
        </Text>
        <Text>RECENT</Text>
        <Text>MATERIAL</Text>
        <MaterialCard />
        <PrimaryButton text="Add material" />
        <Text>SLIDES</Text>
        <SlideCard
          title="Introduction to Python"
          description="Learn the basics of Python programming."
          numberOfSlides={5}
        />
        <PrimaryButton text="Create slides" />
        <Text>QUIZZES</Text>
        <PrimaryButton text="Start new quiz" />
      </ScrollView>
    </SafeAreaView>
  );
}
