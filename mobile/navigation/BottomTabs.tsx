import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import QuizzesScreen from "../screens/quizzes";
import MyClassesScreen from "@/screens/my-classes";

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

export default function BottomTabs({ navigation }: any) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 90,
          paddingBottom: Platform.OS === "android" ? 12 : 20,
          borderTopWidth: 1,
          borderTopColor: "rgba(0,122,255,0.12)",
          backgroundColor: "transparent",
          elevation: 0,
          shadowColor: "transparent",
          justifyContent: "center",
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        },
        tabBarIcon: ({ color, size }) => {
          let name: any = "home";
          if (route.name === "Home") name = "home";
          else if (route.name === "Classes") name = "school";
          else if (route.name === "Profile") name = "person";
          else if (route.name === "Quizzes") name = "document-text";
          else if (route.name === "Camera") name = "camera";
          return (
            <View>
              <Ionicons name={name} size={size} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Classes" component={MyClassesScreen} />

      <Tab.Screen
        name="Camera"
        component={() => null}
        options={{
          tabBarButton: (props) => (
            <CameraButton
              onPress={() => navigation.navigate("CameraModal")}
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
    top: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0,122,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "transparent",
    elevation: 0,
  },
});
