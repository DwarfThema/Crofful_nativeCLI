import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const Login = ({ navigation }: any) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("userName");
    register("password");
  }, [register]);

  const onValid = (data: any) => {
    console.log(data);
  };

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
        autoCapitalize="none"
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("userName", text)}
      />
      <TextInput
        ref={loginPassRef}
        secureTextEntry
        placeholder="비밀번호"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="로그인"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};

export default Login;
AuthLayout;
