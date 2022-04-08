import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { buttonTheme } from "../styles";

const Tabs = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: `${buttonTheme.bgColor}`,
        headerTitle: () => false,
        headerTransparent: true,
      }}
    >
      <Tabs.Screen
        name="피드"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="찾기"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="알림"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="프로필"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default LoggedInNav;
