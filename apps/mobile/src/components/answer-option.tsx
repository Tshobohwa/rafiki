import { Text, TouchableOpacity } from 'react-native';

export default function AnswerOption({
  id,
  text,
  value,
  onPress,
}: {
  id: string;
  text: string;
  value?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        height: 72,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginVertical: 8,
        flexDirection: 'row',
      }}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, fontFamily: 'Outfit-SemiBold', marginRight: 12 }}
      >
        {id}.
        <Text style={{ fontFamily: 'Outfit-Regular', fontSize: 16 }}>
          {text}
        </Text>
      </Text>
    </TouchableOpacity>
  );
}
