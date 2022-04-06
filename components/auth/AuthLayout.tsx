import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100%;
  max-width: 80%;
  margin-bottom: 10px;
`;

const AuthLayout = ({ children }: any) => {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require("../../assets/crofful_logo_Wt.png")}
      />
      {children}
    </Container>
  );
};

export default AuthLayout;
