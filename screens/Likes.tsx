import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "../apollo";

const Likes = () => {
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
        <Text>Likes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Likes;
