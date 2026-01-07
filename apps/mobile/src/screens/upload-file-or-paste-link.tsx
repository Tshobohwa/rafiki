import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadFileButton from '../components/uplaod-file-button';
import TextInputPrimary from '../components/text-input-primary';
import { useState } from 'react';
import { PrimaryButton } from '../components/primary-button';

export default function UploadFileOrPasteLink() {
  const [link, setLink] = useState('');
  return (
    <SafeAreaView
      style={{ flex: 1, padding: 24, justifyContent: 'space-between' }}
    >
      <View>
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
      </View>
      <PrimaryButton text="Continue" />
    </SafeAreaView>
  );
}
