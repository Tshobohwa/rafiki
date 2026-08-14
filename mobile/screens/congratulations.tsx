import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CongratulationsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        gap: 20,
        paddingTop: 130,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Outfit-Medium",
            textAlign: "center",
          }}
        >
          Congratulations you made
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            fontFamily: "Outfit-Bold",
            textAlign: "center",
          }}
        >
          15 / 20
        </Text>
      </View>
      <View style={{ gap: 12, width: "100%" }}>
        <PrimaryButton text="Continue" />
        <SecondaryButton text="Restart quiz" />
      </View>
    </SafeAreaView>
  );
}
