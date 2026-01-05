import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const PrimaryButton = (props: { text: string; icon?: ReactNode }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontFamily: 'Outfit-Regular' }}>{props.text}</Text>
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
