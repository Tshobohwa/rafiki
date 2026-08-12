import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextInputPrimary from "@/components/text-input-primary";
import { useState } from "react";
import { PrimaryButton } from "@/components/primary-button";
import AuthMethodButton from "@/components/auth-method-button";

export default function LoginScreen() {
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
      <Text style={{ fontFamily: "Outfit-Medium", fontSize: 24 }}>Login</Text>

      <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
        Login with Email
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
      <TouchableOpacity>
        <Text style={{ fontFamily: "Outfit-Bold", fontSize: 16 }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <PrimaryButton text="Login" />
      <Text
        style={{
          fontFamily: "Outfit-Regular",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Or login with
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
          Don't have an account?{" "}
          <Text style={{ fontFamily: "Outfit-Bold", fontSize: 16 }}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
