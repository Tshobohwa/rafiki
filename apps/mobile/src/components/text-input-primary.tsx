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
      style={{
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
      }}
    />
  );
}
