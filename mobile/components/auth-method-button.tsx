import { Image, Text, TouchableOpacity } from "react-native";

export default function AuthMethodButton({
  image,
  onPress,
  text = "",
  children,
}: {
  image?: string;
  onPress: () => void;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 55 / 2,
        height: 55,
      }}
    >
      {children}
      <Text style={{ fontFamily: "Outfit-Regular", fontSize: 18 }}>{text}</Text>
    </TouchableOpacity>
  );
}
