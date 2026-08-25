import AuthMethodButton from "@/components/auth-method-button";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import TextInputPrimary from "@/components/text-input-primary";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function AuthenticationScreen() {
  const navigation: any = useNavigation();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const submitEmailHandler = () => {
    navigation.navigate("OTPVerificationScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "space-between", padding: 30 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={insets.bottom}
      >
        <View>
          <Text
            style={{
              fontFamily: "Outfit-Medium",
              fontSize: 28,
              marginTop: 30,
              textAlign: "center",
            }}
          >
            Rafiki AI
          </Text>
          <Image
            source={require("../assets/images/einstein.png")}
            style={{ marginVertical: 20, alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Outfit-Medium",
              textAlign: "center",
            }}
          >
            Your AI learning partner
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          {!isKeyboardVisible && (
            <AuthMethodButton text="Continue with Google">
              <Image
                source={require("../assets/images/google.png")}
                style={{ height: 18, width: 18 }}
              />
            </AuthMethodButton>
          )}
          <TextInputPrimary
            placeholder="Continue with email"
            style={{ textAlign: "center", borderRadius: 30 }}
            value={email}
            onChangeText={setEmail}
          />
          {isEmailValid && (
            <PrimaryButton text="Continue" onPress={submitEmailHandler} />
          )}
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Outfit-Regular",
            }}
          >
            <Text>By Continuing you agree to Rafiki's </Text>
            <Text
              onPress={() => {}}
              style={{
                textDecorationLine: "underline",
                fontFamily: "Outfit-Medium",
              }}
            >
              Consumer Terms
            </Text>{" "}
            and{" "}
            <Text
              onPress={() => {}}
              style={{
                textDecorationLine: "underline",
                fontFamily: "Outfit-Medium",
              }}
            >
              usage policy
            </Text>{" "}
            and aknwoledge their{" "}
            <Text
              onPress={() => {}}
              style={{
                textDecorationLine: "underline",
                fontFamily: "Outfit-Medium",
              }}
            >
              consumer policy
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
