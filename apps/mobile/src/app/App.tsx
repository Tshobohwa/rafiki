/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useFonts } from 'expo-font';
import {
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Svg, { G, Path } from 'react-native-svg';
import { PrimaryButton } from '../components/primary-button';
import QuestionAndOptions from '../screens/question-and-options';
import StartAQuizScreen from '../screens/start-a-quiz';
import UploadFileOrPasteLink from '../screens/upload-file-or-paste-link';

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Outfit-Thin': Outfit_100Thin,
    'Outfit-ExtraLight': Outfit_200ExtraLight,
    'Outfit-Light': Outfit_300Light,
    'Outfit-Regular': Outfit_400Regular,
    'Outfit-Medium': Outfit_500Medium,
    'Outfit-SemiBold': Outfit_600SemiBold,
    'Outfit-Bold': Outfit_700Bold,
    'Outfit-ExtraBold': Outfit_800ExtraBold,
    'Outfit-Black': Outfit_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <UploadFileOrPasteLink />
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({});

export default App;
