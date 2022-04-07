import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import BgLogo from "../components/BgLogo";

const CreateAccount = () => {
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const onNext = (nextRef: any) => {
    nextRef?.current?.focus();
  };
  const onDone = () => {
    alert`done!`;
  };

  return (
    <AuthLayout>
      <TextInput
        autoFocus
        ref={idRef}
        placeholder="아이디"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        secureTextEntry
        placeholder="비밀번호"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onNext(nicknameRef)}
      />
      <TextInput
        ref={nicknameRef}
        placeholder="닉네임"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onNext(nameRef)}
      />
      <TextInput
        ref={nameRef}
        placeholder="성함"
        placeholderTextColor="gray"
        keyboardType="name-phone-pad"
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="done"
        autoCorrect={false}
        onSubmitEditing={onDone}
        lastOne={true}
      />
      <AuthButton text="회원가입" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
};

export default CreateAccount;
