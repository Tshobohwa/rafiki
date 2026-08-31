import { Quizz } from "@/types/quizz";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuizzBtn({
  answerdQuestions,
  description,
  title,
  totalQuestions,
}: Quizz) {
  const progress = Math.min(
    Math.max((answerdQuestions / totalQuestions) * 100, 0),
    100,
  );

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <View style={styles.contentRow}>
        <View style={styles.iconWrap}>
          <Feather name="clipboard" size={18} color="#007AFF" />
        </View>

        <View style={styles.textWrap}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.progressText}>
              {answerdQuestions}/{totalQuestions}
            </Text>
          </View>

          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#dfeeff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontFamily: "Outfit-Medium",
    fontSize: 16,
    color: "#0f172a",
    flexShrink: 1,
  },
  progressText: {
    fontFamily: "Outfit-Medium",
    fontSize: 12,
    color: "#475569",
    marginLeft: 10,
  },
  description: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#475569",
    marginBottom: 10,
  },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "#e2e8f0",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#007AFF",
  },
});
