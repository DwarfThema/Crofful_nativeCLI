import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Photo = ({ navigation }: any) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("타인프로필")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Photo;
