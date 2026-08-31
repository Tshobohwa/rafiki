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
import { useState } from "react";
import NotesTab from "@/components/top-tabs/notes-tab";
import SlidesTab from "@/components/top-tabs/slides-tab";

export default function ClassScreen() {
  const tabs: string[] = ["Notes", "Quizzes", "Slides", "Schedule"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const tabButtonClickHandler = (tab: string) => setActiveTab(tab);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 16 }} contentContainerStyle={{ gap: 10 }}>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          Class: Programming language and paradigms
        </Text>
        <PrimaryButton text="Upload Material" />
        <SecondaryButton text="Start a quizz" />

        <View style={{ marginTop: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                style={[
                  {
                    height: 36,
                    justifyContent: "center",
                    width: `${100 / tabs.length}%`,
                    alignItems: "center",
                  },
                  ,
                  activeTab === tab && styles.activeButtonStyle,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={{ fontFamily: "Outfit-Medium" }}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {activeTab === "Notes" && <NotesTab />}
          {activeTab === "Slides" && <SlidesTab />}
          {/* // {activeTab === "Notes" && <NotesTab />} */}
          {/* // {activeTab === "Notes" && <NotesTab />} */}
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
  activeButtonStyle: {
    borderBottomWidth: 2,
  },
});
