import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import QuizzesScreen from "../screens/quizzes";
import MyClassesScreen from "@/screens/my-classes";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let name: any = "home";
          if (route.name === "Home") name = "home";
          else if (route.name === "Classes") name = "ios-school";
          else if (route.name === "Profile") name = "person";
          else if (route.name === "Quizzes") name = "document-text";
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Classes" component={MyClassesScreen} />
      <Tab.Screen name="Quizzes" component={QuizzesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
