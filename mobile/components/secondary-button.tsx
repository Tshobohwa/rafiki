import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SecondaryButton = (props: {
  text: string;
  icon?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={[styles.container, props.disabled ? styles.disabled : null]}
      disabled={props.disabled}
    >
      {props.icon}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontFamily: "Outfit-Medium",
    color: "#007AFF",
    fontSize: 18,
  },
  disabled: {
    opacity: 0.6,
  },
});
