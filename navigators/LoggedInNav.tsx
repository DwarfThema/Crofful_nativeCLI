import useMe from "../hooks/useMe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";
import Upload from "../screens/Upload";

const Stack = createNativeStackNavigator();

const LoggedInNav = () => {
  const { data } = useMe();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen name="탭" component={TabsNav} />
      <Stack.Screen name="업로드" component={Upload} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
