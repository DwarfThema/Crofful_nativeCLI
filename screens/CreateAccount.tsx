import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import BgLogo from "../components/BgLogo";

const CreateAccount = () => {
  return (
    <AuthLayout>
      <BgLogo />
      <TextInput
        placeholder="아이디"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <TextInput
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <TextInput
        placeholder="비밀번호 확인"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <TextInput
        placeholder="닉네임"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <TextInput
        placeholder="성함"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <TextInput
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "80%" }}
      />
      <AuthButton text="회원가입" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
};

export default CreateAccount;
