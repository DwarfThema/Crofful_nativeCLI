import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "../apollo";

const MeProfile = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text>MeProfile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MeProfile;
