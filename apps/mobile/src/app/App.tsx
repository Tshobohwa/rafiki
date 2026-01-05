/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { PrimaryButton } from '../components/primary-button';

export const App = () => {
  return (
    <View style={{}}>
      <Text>Mobile App</Text>
      <PrimaryButton text="Start a quiz" />
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;
