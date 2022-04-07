import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const Login = ({ navigation }: any) => {
  const loginIdRef = useRef(null);
  const loginPassRef = useRef(null);
  const onDone = () => {
    alert`done!`;
  };
  const onNext = (nextRef: any) => {
    nextRef?.current?.focus();
  };
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        ref={loginIdRef}
        placeholder="아이디"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onNext(loginPassRef)}
      />
      <TextInput
        ref={loginPassRef}
        secureTextEntry
        placeholder="비밀번호"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onDone()}
      />
    </AuthLayout>
  );
};

export default Login;
AuthLayout;
