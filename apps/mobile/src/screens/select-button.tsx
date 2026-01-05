import { Text, TouchableOpacity } from 'react-native';

export default function SelectButtonScreen({
  text,
  onPress,
}: {
  text: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontFamily: 'Outfit-SemiBold', fontSize: 20 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
