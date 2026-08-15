import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
        Welcome Home
      </Text>
    </SafeAreaView>
  );
}
