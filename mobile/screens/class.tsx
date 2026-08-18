import MaterialCard from "@/components/cards/material-card";
import QuizzCard from "@/components/cards/quizz-card";
import SlideCard from "@/components/cards/slide-card";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClassScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <ScrollView>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Class: Programming language and paradigms
        </Text>
        <Text>RECENT</Text>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>QUIZZES</Text>
            <SecondaryButton text="Start new quiz" />
          </View>
          <QuizzCard
            title={"Quizz 1"}
            description={"Description for Quizz 1"}
            onPress={() => {}}
            totalQuestions={10}
            answerdQuestions={7}
          />
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>MATERIAL</Text>
            <SecondaryButton text="Add material" />
          </View>
          <MaterialCard />
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>SLIDES</Text>
            <SecondaryButton text="Create slides" />
          </View>
          <SlideCard
            title="Introduction to Python"
            description="Learn the basics of Python programming."
            numberOfSlides={5}
          />
        </View>
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
  addButton: {
    backgroundColor: "#007AFF",
  },
});
