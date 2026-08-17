import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import QuizzesScreen from "../screens/quizzes";
import MyClassesScreen from "@/screens/my-classes";
import CameraScreen from "../screens/camera";

const Tab = createBottomTabNavigator();

function CameraButton({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.cameraButtonContainer}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.cameraButton}>{children}</View>
    </TouchableOpacity>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          paddingBottom: Platform.OS === "android" ? 8 : 20,
        },
        tabBarIcon: ({ color, size }) => {
          let name: any = "home";
          if (route.name === "Home") name = "home";
          else if (route.name === "Classes") name = "school";
          else if (route.name === "Profile") name = "person";
          else if (route.name === "Quizzes") name = "document-text";
          else if (route.name === "Camera") name = "camera";
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Classes" component={MyClassesScreen} />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarButton: (props) => (
            <CameraButton
              onPress={props.onPress}
              accessibilityLabel={props.accessibilityLabel}
            >
              <Ionicons name="camera" size={28} color="#fff" />
            </CameraButton>
          ),
        }}
      />

      <Tab.Screen name="Quizzes" component={QuizzesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  cameraButtonContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#2f95dc",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
