import { TextInput, type TextInputProps } from "react-native";

export default function TextInputPrimary({
  placeholder,
  value,
  onChangeText,
  style,
  ...props
}: TextInputProps) {
  return (
    <TextInput
      {...props}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[
        {
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 12,
          fontFamily: "Outfit-Regular",
          fontSize: 16,
        },
        style,
      ]}
    />
  );
}
