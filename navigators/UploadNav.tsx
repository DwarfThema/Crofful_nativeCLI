import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { mainTheme } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const UploadNav = () => {
  const navigation: any = useNavigation();
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
        },
        tabBarActiveTintColor: `${mainTheme.mainColor}`,
        tabBarLabelStyle: { fontWeight: "900" },
        tabBarIndicatorStyle: {
          backgroundColor: `${mainTheme.mainColor}`,
          top: 0,
        },
      }}
    >
      <Tab.Screen name="탭선택" options={{ tabBarLabel: "선택" }}>
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerLeft: () => (
                <Ionicons
                  onPress={() => navigation.navigate("탭")}
                  color={mainTheme.mainColor}
                  name="close"
                  size={28}
                  style={{ left: -10 }}
                />
              ),
            }}
          >
            <Stack.Screen name="선택" component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="탭가져오기" options={{ tabBarLabel: "사진" }}>
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerLeft: () => (
                <Ionicons
                  onPress={() => navigation.navigate("탭")}
                  color={mainTheme.mainColor}
                  name="close"
                  size={28}
                  style={{ left: -10 }}
                />
              ),
            }}
          >
            <Stack.Screen name="사진" component={TakePhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default UploadNav;
