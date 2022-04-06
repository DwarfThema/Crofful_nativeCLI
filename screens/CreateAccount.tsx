import React, { useRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import BgLogo from "../components/BgLogo";

const CreateAccount = () => {
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const onNext = (nextOne: any) => {
    nextOne?.current?.focus();
  };
  const onDone = () => {
    alert`done!`;
  };

  return (
    <AuthLayout>
      <BgLogo />
      <TextInput
        autoFocus
        ref={idRef}
        placeholder="아이디"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={() => onNext(passwordConfirmRef)}
      />
      <TextInput
        ref={passwordConfirmRef}
        placeholder="비밀번호 확인"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={() => onNext(nicknameRef)}
      />
      <TextInput
        ref={nicknameRef}
        placeholder="닉네임"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={() => onNext(nameRef)}
      />
      <TextInput
        ref={nameRef}
        placeholder="성함"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "80%" }}
        onSubmitEditing={onDone}
      />
      <AuthButton text="회원가입" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
};

export default CreateAccount;
