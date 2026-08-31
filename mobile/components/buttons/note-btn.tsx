import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const getFileIconName = (format: string) => {
  const normalized = format.toUpperCase();

  if (normalized.includes("PDF")) return "file-text";
  if (normalized.includes("DOC") || normalized.includes("RTF"))
    return "file-text";
  if (normalized.includes("TXT")) return "file-text";
  if (normalized.includes("PPT")) return "file";
  if (normalized.includes("XLS") || normalized.includes("CSV")) return "grid";

  return "file";
};

export default function NoteBtn({
  icon,
  text,
  onPress,
  format,
}: {
  icon?: ReactNode;
  text: string;
  onPress?: () => void;
  format: string;
}) {
  const resolvedIcon = icon ?? (
    <Feather name={getFileIconName(format)} size={18} color="#007AFF" />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.mainAction}
      >
        <View style={styles.iconWrap}>{resolvedIcon}</View>

        <View style={styles.textWrap}>
          <Text style={styles.title}>{text}</Text>
          <Text style={styles.format}>{format}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.downloadButton}>
        <Feather name="download" size={18} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainAction: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
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
  title: {
    fontFamily: "Outfit-Medium",
    fontSize: 16,
    color: "#0f172a",
    marginBottom: 2,
  },
  format: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#475569",
  },
  downloadButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#edf6ff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});
