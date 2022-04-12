import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
  background-color: blue;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: red;
`;

const SelectPhoto = () => {
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
};

export default SelectPhoto;
