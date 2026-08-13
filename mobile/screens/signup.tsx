import AuthMethodButton from "@/components/auth-method-button";
import { PrimaryButton } from "@/components/primary-button";
import TextInputPrimary from "@/components/text-input-primary";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 25 }}>
      <TouchableOpacity>
        <AntDesign name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>Signup</Text>

      <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
        Signup with Email
      </Text>
      <View style={{ gap: 15 }}>
        <TextInputPrimary
          inputMode="email"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        <TextInputPrimary
          inputMode="none"
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
        />
      </View>
      <PrimaryButton text="Signup" />
      <Text
        style={{
          fontFamily: "Outfit-Regular",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Or signup with
      </Text>
      <View>
        <AuthMethodButton text="Google" onPress={() => submit()}>
          <Image
            source={require("../assets/images/google.png")}
            style={{ width: 28, height: 28 }}
          />
        </AuthMethodButton>
      </View>
      <TouchableOpacity>
        <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
          Already have an account?{" "}
          <Text style={{ fontFamily: "Outfit-Bold", fontSize: 16 }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
