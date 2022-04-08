import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Feed from "../screens/Feed";
import MeProfile from "../screens/MeProfile";
import Notification from "../screens/Notification";
import Photo from "../screens/Photo";
import Search from "../screens/Search";
import SomeProfile from "../screens/SomeProfile";
import { buttonTheme } from "../styles";

const Stack = createNativeStackNavigator();

const StackNavFacotry = ({ screenName }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerBackTitleVisible: false,
        headerTintColor: `gray`,
        headerStyle: { backgroundColor: "white" },
        headerShadowVisible: true,
      }}
    >
      {screenName === "피드" ? (
        <Stack.Screen name="탭피드" component={Feed} />
      ) : null}
      {screenName === "찾기" ? (
        <Stack.Screen name="탭찾기" component={Search} />
      ) : null}
      {screenName === "알림" ? (
        <Stack.Screen name="탭알림" component={Notification} />
      ) : null}
      {screenName === "내프로필" ? (
        <Stack.Screen name="탭내프로필" component={MeProfile} />
      ) : null}
      <Stack.Screen name="타인프로필" component={SomeProfile} />
      <Stack.Screen name="사진" component={Photo} />
    </Stack.Navigator>
  );
};

export default StackNavFacotry;
