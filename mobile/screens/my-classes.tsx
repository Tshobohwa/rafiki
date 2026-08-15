import { SecondaryButton } from "@/components/secondary-button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyClassesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <TouchableOpacity>
        <AntDesign name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
          My Classes
        </Text>
        <SecondaryButton
          text="Create New Class"
          onPress={() => navigation.navigate("CreateNewClassScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
