import ClassCard from "@/components/cards/class-card";
import { SecondaryButton } from "@/components/secondary-button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyClassesScreen() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }} contentContainerStyle={{ gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>
            My Classes
          </Text>
          <SecondaryButton
            text="Create New Class"
            onPress={() => navigation.navigate("CreateNewClassScreen")}
            icon={<AntDesign name="plus" size={16} color="#007AFF" />}
          />
        </View>
        <ClassCard
          title="Mathematics 101"
          description="Introduction to basic mathematics"
          slides={10}
          quizzes={5}
          materials={3}
          onPress={() => navigation.navigate("ClassScreen")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
