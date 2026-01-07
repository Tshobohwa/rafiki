import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadFileButton from '../components/uplaod-file-button';
import TextInputPrimary from '../components/text-input-primary';
import { useState } from 'react';

export default function UploadFileOrPasteLink() {
  const [link, setLink] = useState('');
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
      <Text
        style={{
          fontFamily: 'Outfit-Normal',
          textAlign: 'center',
          marginVertical: 24,
        }}
      >
        Or
      </Text>
      <TextInputPrimary
        placeholder="Paste a link here"
        value={link}
        onChangeText={(link) => setLink(link)}
      />
    </SafeAreaView>
  );
}
