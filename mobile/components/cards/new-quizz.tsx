import { Text, View } from "react-native";
import { PrimaryButton } from "../primary-button";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function NewQuizzCard() {
  return (
    <View
      style={{
        padding: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 10,
      }}
    >
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
        Start a new quizz
      </Text>
      <Text
        style={{
          fontFamily: "Outfit-Regular",
          textAlign: "center",
          color: "#666",
        }}
      >
        Upload a file or select a lesson material to start a new quizz
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 3 }}>
          <AntDesign name="file-pdf" size={16} color="#666" />
          <Text style={{ fontFamily: "Outfit-Regular" }}>PDF</Text>
        </View>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Bold" }}
        >
          {"\u00B7"}
        </Text>

        <View>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 3 }}
          >
            <AntDesign name="file-word" size={16} color="#666" />{" "}
            <Text style={{ fontFamily: "Outfit-Regular" }}>Word</Text>
          </View>
        </View>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Bold" }}
        >
          {"\u00B7"}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 3 }}>
          <AntDesign name="file-text" size={16} color="#666" />{" "}
          <Text style={{ fontFamily: "Outfit-Regular" }}>Txt</Text>
        </View>
      </View>
      <PrimaryButton text="Upload" width={"100%"} />
    </View>
  );
}
