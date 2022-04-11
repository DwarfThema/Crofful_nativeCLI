import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme } from "../styles";
import StackNavFacotry from "./SharedStackNav";

const Tabs = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: `${lightTheme.accent}`,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="피드"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      >
        {() => <StackNavFacotry screenName="피드" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="찾기"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-search-outline" size={size} color={color} />
          ),
        }}
      >
        {() => <StackNavFacotry screenName="찾기" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="카메라"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="add-circle-outline"
              size={size + 15}
              color={color}
            />
          ),
        }}
      >
        {() => <StackNavFacotry screenName="카메라" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="알림"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={size}
              color={color}
            />
          ),
        }}
      >
        {() => <StackNavFacotry screenName="알림" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="내프로필"
        options={{
          title: "🫥",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-person-outline" size={size} color={color} />
          ),
        }}
      >
        {() => <StackNavFacotry screenName="내프로필" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default LoggedInNav;
