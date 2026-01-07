import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/primary-button';

export default function FreeAnswerQuestion() {
  return (
    <SafeAreaView
      style={{ flex: 1, padding: 20, justifyContent: 'space-between' }}
    >
      <View style={{}}>
        <Text style={{ fontFamily: 'Outfit-Medium', fontSize: 24 }}>
          Explain how it is possible to have a free answer question in this app.
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 15,
            padding: 12,
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            height: 200,
          }}
          multiline={true}
          numberOfLines={10}
          textAlignVertical="top"
          placeholder="Type your answer here..."
        />
      </View>
      <PrimaryButton text="Submit" />
    </SafeAreaView>
  );
}
