import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuizzCard({
  title,
  description,
  totalQuestions,
  answerdQuestions,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
  totalQuestions?: number;
  answerdQuestions?: number;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={{ fontSize: 24, fontFamily: "Outfit-Medium" }}>
            {answerdQuestions || 0} / {totalQuestions}
          </Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontFamily: "Outfit-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  cardDescription: {
    fontFamily: "Outfit-Regular",
    fontSize: 14,
    color: "#666",
  },
  progressBarContainer: {
    height: 14,
    width: "100%",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#4caf50",
    width: "65%",
  },
});
