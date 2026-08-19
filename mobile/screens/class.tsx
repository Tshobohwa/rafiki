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
      <ScrollView style={{ padding: 16 }} contentContainerStyle={{ gap: 24 }}>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Class: Programming language and paradigms
        </Text>
        <Text>RECENT</Text>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>QUIZZES</Text>
            <SecondaryButton
              text="Start new quiz"
              icon={<AntDesign name="plus" size={16} color="#007AFF" />}
            />
          </View>
          <QuizzCard
            title={"Quizz 1"}
            description={"Description for Quizz 1"}
            onPress={() => {}}
            totalQuestions={10}
            answerdQuestions={7}
          />
          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 10 }}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>MATERIAL</Text>
            <SecondaryButton
              text="Add material"
              icon={<AntDesign name="plus" size={16} color="#007AFF" />}
            />
          </View>
          <MaterialCard />
          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 10 }}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>SLIDES</Text>
            <SecondaryButton
              text="Create slides"
              icon={<AntDesign name="plus" size={16} color="#007AFF" />}
            />
          </View>
          <SlideCard
            title="Introduction to Python"
            description="Learn the basics of Python programming."
            numberOfSlides={5}
          />
          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 10 }}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
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
  seeAllText: {
    fontFamily: "Outfit-Regular",
    color: "#007AFF",
  },
});
