import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Search = ({ navigation }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("사진")}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
