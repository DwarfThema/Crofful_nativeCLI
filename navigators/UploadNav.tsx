import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { mainTheme } from "../styles";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const UploadNav = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: `${mainTheme.mainColor}`,
        tabBarIndicatorStyle: {
          backgroundColor: `${mainTheme.mainColor}`,
          top: 0,
        },
      }}
    >
      <Tab.Screen name="탭선택">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="선택" component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="탭가져오기">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="가져오기" component={TakePhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default UploadNav;
