import { TouchableOpacity, Text } from "react-native";

export default function SelectOptionButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
