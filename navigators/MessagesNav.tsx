import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";

const Stack = createNativeStackNavigator();

const MessagesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="대화방들" component={Rooms} />
      <Stack.Screen name="대화방" component={Room} />
    </Stack.Navigator>
  );
};

export default MessagesNav;
