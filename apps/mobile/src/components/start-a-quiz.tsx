import { Text, View, ViewBase } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectButton from '../screens/select-button';

export default function StartAQuizScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text style={{ fontFamily: 'Outfit-SemiBold', fontSize: 24 }}>
          Which type of quiz would you like to take?
        </Text>
        <View
          style={{ marginTop: 20, width: '70%', gap: 12, alignSelf: 'center' }}
        >
          <SelectButton text="Multiple Choice" onPress={() => {}} />
          <SelectButton text="Free Response" onPress={() => {}} />
          <SelectButton text="Case Question" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}
