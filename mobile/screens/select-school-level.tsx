import { PrimaryButton } from "@/components/primary-button";
import SelectOptionButton from "@/components/select-option-button";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectSchoolLevelScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 25 }}>
      <TouchableOpacity>
        <AntDesign name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
        Select School Level
      </Text>

      <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
        Please select your school level, to personnalize your learning
        experience and provide you with the most relevant content and resources.
      </Text>
      <View style={{ gap: 15, flexDirection: "row", flexWrap: "wrap" }}>
        <SelectOptionButton text="Primary School" onPress={() => {}} />
        <SelectOptionButton text="Secondary School" onPress={() => {}} />
        <SelectOptionButton text="High School" onPress={() => {}} />
      </View>
      <PrimaryButton text="Continue" />
    </SafeAreaView>
  );
}
