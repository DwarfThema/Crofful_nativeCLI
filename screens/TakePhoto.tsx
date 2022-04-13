import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { buttonTheme, mainTheme } from "../styles";

const Container = styled.View`
  flex: 1;
`;

const Actions = styled.View`
  flex: 0.35;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${mainTheme.mainColor};
  border: 7px solid ${buttonTheme.bgColor};
  border-radius: 50px;
`;

const TakePhoto = () => {
  const [ok, setOk] = useState(false);

  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const getPermissions = async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    setOk(granted);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} zoom={0} />
      <Actions>
        <TakePhotoBtn></TakePhotoBtn>
        <TouchableOpacity></TouchableOpacity>
      </Actions>
    </Container>
  );
};

export default TakePhoto;
