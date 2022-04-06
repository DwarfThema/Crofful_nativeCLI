import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import { buttonTheme } from "../styles";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: `${buttonTheme.bgColor}`,
      }}
    >
      <Stack.Screen
        name="환영"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen name="로그인" component={Login} />
      <Stack.Screen
        name="회원가입"
        options={{
          headerTitle: () => false,
          headerTransparent: true,
        }}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
