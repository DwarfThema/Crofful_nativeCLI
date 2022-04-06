import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View>
      <Text>로그인 스크린</Text>
      <TouchableOpacity onPress={() => navigation.navigate("회원가입")}>
        <View>
          <Text>회원가입</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
