import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const PrimaryButton = (props: {
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
      <Text style={{ fontFamily: "Outfit-Regular", color: "white" }}>
        {props.text}
      </Text>
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  disabled: {
    opacity: 0.6,
  },
});
