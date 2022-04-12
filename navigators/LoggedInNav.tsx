import useMe from "../hooks/useMe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

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
      <Stack.Screen name="업로드" component={UploadNav} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
