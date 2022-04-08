import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Feed = ({ navigation }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("타인프로필")}>
        <Text>Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
