import { PrimaryButton } from "@/components/primary-button";
import TextInputPrimary from "@/components/text-input-primary";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateNewClassScreen() {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
        New Class
      </Text>
      <TextInputPrimary placeholder="Enter Class Name" />
      <PrimaryButton text="Create Class" />
    </SafeAreaView>
  );
}
