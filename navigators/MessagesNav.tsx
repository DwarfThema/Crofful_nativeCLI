import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";
import { mainTheme } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MessagesNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="대화방들" component={Rooms} />
      <Stack.Screen name="대화방" component={Room} />
    </Stack.Navigator>
  );
};

export default MessagesNav;
