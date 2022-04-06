import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { buttonTheme } from "../styles";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const BgLogo = styled.Image`
  position: absolute;
  max-width: 100%;
  height: 100%;
  z-index: -1;
`;

const Logo = styled.Image`
  height: 100px;
  max-width: 80%;
  margin-bottom: 10px;
`;

const CreateAccount = styled.View`
  background-color: ${buttonTheme.bgColor};
  padding: 10px 40px;
  border-radius: 7px;
`;
const CreatAccountText = styled.Text`
  color: ${buttonTheme.fontColor};
  font-size: 15px;
  font-weight: 900;
`;

const LoginLink = styled.Text`
  color: ${buttonTheme.fontColor};
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
`;

const Welcome = ({ navigation }: any) => {
  const goToCreateAccount = () => navigation.navigate("회원가입");
  const goToLogin = () => navigation.navigate("로그인");
  return (
    <Container>
      <BgLogo
        source={require("../assets/crofful_logo_bg.jpg")}
        resizeMode="contain"
      />
      <Logo
        resizeMode="contain"
        source={require("../assets/crofful_logo_Wt.png")}
      />
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount>
          <CreatAccountText>회원가입</CreatAccountText>
        </CreateAccount>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>로그인</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;
