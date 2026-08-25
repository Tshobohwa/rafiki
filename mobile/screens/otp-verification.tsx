import React, { useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../components/primary-button";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "expo-router";

export default function OTPVerificationScreen() {
  const navigation: any = useNavigation();
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleConfirm = () => {
    Keyboard.dismiss();
    // TODO: call verification API with `value`
    console.log("Confirm OTP:", value);
    navigation.navigate("MainTabs");
  };

  const allFilled = value.length === CELL_COUNT;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify your email address</Text>
      <Text style={styles.subtitle}>
        Please enter the 6-digit code sent to your email address to verify your
        account.
      </Text>

      <View style={styles.otpRow}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(v) => setValue(v.replace(/[^0-9]/g, ""))}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.otpInput, isFocused && styles.focusInput]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View style={{ marginTop: 24 }}>
        <PrimaryButton
          text="Confirm"
          onPress={handleConfirm}
          disabled={!allFilled}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontFamily: "Outfit-Medium", fontSize: 24 },
  subtitle: { fontFamily: "Outfit-Regular", fontSize: 16, marginTop: 10 },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  otpInput: {
    width: 40,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 48,
    fontSize: 20,
    fontFamily: "Outfit-Medium",
  },
  codeFieldRoot: { gap: 10 },
  focusInput: { borderColor: "#007AFF" },
});
