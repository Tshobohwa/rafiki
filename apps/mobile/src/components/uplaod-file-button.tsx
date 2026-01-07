import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UploadFileButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={{ fontFamily: 'Outfit-Medium', fontSize: 18 }}>
          Click to upload
        </Text>
      </View>

      <View style={{ marginTop: 8, flexDirection: 'row', gap: 16 }}>
        <View style={styles.documentTypeContainer}>
          <Image
            source={require('../../assets/images/pdf.png')}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.documentTypeText}>PDF</Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Image
            source={require('../../assets/images/google-docs.png')}
            style={{ width: 16, height: 16, marginRight: 16 }}
          />
          <Text style={styles.documentTypeText}>DOCX</Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Image
            source={require('../../assets/images/powerpoint.png')}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.documentTypeText}>Power Point</Text>
        </View>
      </View>
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
  documentTypeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  documentTypeText: {
    fontFamily: 'Outfit-Regular',
  },
});
