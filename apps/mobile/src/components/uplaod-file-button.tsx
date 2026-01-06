import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UploadFileButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={{ fontFamily: 'Outfit-Medium', fontSize: 18 }}>
          Click to upload a file
        </Text>
      </View>
      <Text style={{ marginTop: 8, fontFamily: 'Outfit-Regular' }}>
        <Text>📁 PDF</Text>
        <Text>📄 DOCX</Text>
        <Text> Power Point</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },
});
