import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadFileButton from '../components/uplaod-file-button';
import TextInputPrimary from '../components/text-input-primary';

export default function UploadFileOrPasteLink() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontFamily: 'Outfit-SemiBold', fontSize: 24 }}>
        Start a quiz
      </Text>
      <Text
        style={{ fontFamily: 'Outfit-Regular', marginTop: 12, fontSize: 18 }}
      >
        Analyze my document to automatically create questions
      </Text>
      <UploadFileButton />
      <Text style={{ fontFamily: 'Outfit-Normal' }}>Or</Text>
      <TextInputPrimary />
    </SafeAreaView>
  );
}
