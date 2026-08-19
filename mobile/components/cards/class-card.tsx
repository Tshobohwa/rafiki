import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ClassCard({
  title,
  description,
  slides,
  quizzes,
  materials,
}: {
  title: string;
  description: string;
  slides: number;
  quizzes: number;
  materials: number;
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>{title}</Text>
      <Text
        style={{ fontSize: 16, color: "#666", fontFamily: "Outfit-Medium" }}
      >
        {description}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
          gap: 10,
        }}
      >
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Medium" }}
        >
          Slides: {slides}
        </Text>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Medium" }}
        >
          {"\u00B7"}
        </Text>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Medium" }}
        >
          Quizzes: {quizzes}
        </Text>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Medium" }}
        >
          {"\u00B7"}
        </Text>
        <Text
          style={{ fontSize: 14, color: "#888", fontFamily: "Outfit-Medium" }}
        >
          Materials: {materials}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
  },
});
