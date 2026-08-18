/* eslint-disable jsx-a11y/accessible-emoji */
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
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
} from "@expo-google-fonts/outfit";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../navigation/BottomTabs";
import CameraScreen from "../screens/camera";
import ClassScreen from "@/screens/class";

const Stack = createNativeStackNavigator();

export const App = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Thin": Outfit_100Thin,
    "Outfit-ExtraLight": Outfit_200ExtraLight,
    "Outfit-Light": Outfit_300Light,
    "Outfit-Regular": Outfit_400Regular,
    "Outfit-Medium": Outfit_500Medium,
    "Outfit-SemiBold": Outfit_600SemiBold,
    "Outfit-Bold": Outfit_700Bold,
    "Outfit-ExtraBold": Outfit_800ExtraBold,
    "Outfit-Black": Outfit_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ClassScreen />
    </SafeAreaProvider>
  );

  // return (
  //   <SafeAreaProvider>
  //     <NavigationIndependentTree>
  //       <NavigationContainer>
  //         <Stack.Navigator screenOptions={{ headerShown: false }}>
  //           <Stack.Screen name="MainTabs" component={BottomTabs} />
  //           <Stack.Screen
  //             name="CameraModal"
  //             component={CameraScreen}
  //             options={{ presentation: "fullScreenModal" }}
  //           />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </NavigationIndependentTree>
  //   </SafeAreaProvider>
  // );
};

const styles = StyleSheet.create({});

export default App;
