import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextInputPrimary from "@/components/text-input-primary";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
