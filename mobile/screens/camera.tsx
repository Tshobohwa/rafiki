import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import * as ExpoCamera from "expo-camera";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen() {
  const navigation: any = useNavigation();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const currentPermission = await (
          ExpoCamera as any
        ).Camera.getCameraPermissionsAsync();
        const permissionStatus = currentPermission?.status ?? "granted";

        if (!isMounted) return;

        if (permissionStatus === "granted") {
          setHasPermission(true);
          return;
        }

        const requestedPermission = await (
          ExpoCamera as any
        ).Camera.requestCameraPermissionsAsync();
        const finalStatus = requestedPermission?.status ?? permissionStatus;

        if (!isMounted) return;

        setHasPermission(finalStatus === "granted");

        if (finalStatus !== "granted") {
          Alert.alert(
            "Permission required",
            "Camera permission is required to take photos.",
          );
        }
      } catch (err) {
        console.warn("Camera permission request failed:", err);
        if (isMounted) {
          setHasPermission(false);
          Alert.alert(
            "Permission required",
            "Camera permission is required to take photos.",
          );
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [navigation]);

  const takePicture = async () => {
    if (!cameraRef.current) return;
    try {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
      console.log("photo:", photo);
      // TODO: handle/upload the photo as needed
    } catch (err) {
      console.warn(err);
    } finally {
      navigation.goBack();
    }
  };

  if (hasPermission === null)
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  if (hasPermission === false)
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
      </View>
    );

  const CameraComp: any =
    (ExpoCamera as any).CameraView ||
    (ExpoCamera as any).default ||
    (ExpoCamera as any).Camera;

  return (
    <View style={styles.container}>
      <CameraComp
        style={styles.camera}
        type="back"
        ref={(ref: any) => {
          cameraRef.current = ref;
        }}
      >
        <View style={styles.controls} pointerEvents="box-none">
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>Snap</Text>
          </TouchableOpacity>
        </View>
      </CameraComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  camera: { flex: 1 },
  controls: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 36,
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  captureText: { color: "#fff", fontWeight: "600" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
