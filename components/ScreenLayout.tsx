import React from "react";
import { ActivityIndicator, View } from "react-native";

const ScreenLayout = ({ loading, children }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator color="blue" size="large" /> : children}
    </View>
  );
};

export default ScreenLayout;
