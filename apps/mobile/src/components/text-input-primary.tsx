import { TextInput } from 'react-native';

export default function TextInputPrimary({
  placeholder,
  value,
  onChangeText,
}: {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}
