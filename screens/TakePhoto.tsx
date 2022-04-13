import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { buttonTheme, mainTheme } from "../styles";
import { CameraType } from "expo-camera/build/Camera.types";
import Slider from "@react-native-community/slider";

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
  background-color: rgba(0, 0, 0, 0.09);
  border: 4px solid ${mainTheme.mainColor};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const SliderContainer = styled.View``;

const TakePhoto = () => {
  const [ok, setOk] = useState(false);

  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const [zoom, setZoom] = useState(0);

  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

  const getPermissions = async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    setOk(granted);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const onCameraSwitch = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front);
    } else {
      setCameraType(Camera.Constants.Type.back);
    }
  };

  const onZoomValueChange = (e: any) => {
    setZoom(e);
  };

  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} zoom={zoom} />
      <Actions>
        <SliderContainer>
          <Slider
            style={{
              width: 290,
              height: 35,
              position: "absolute",
              top: "-50%",
              left: -92,
            }}
            minimumValue={0}
            maximumValue={0.1}
            minimumTrackTintColor={mainTheme.mainColor}
            maximumTrackTintColor="rgba(130,130,130,1)"
            onValueChange={onZoomValueChange}
          />
        </SliderContainer>
        <TakePhotoBtn>
          <Ionicons name="camera" style={{ fontSize: 40 }} />
        </TakePhotoBtn>
        <TouchableOpacity onPress={onCameraSwitch}>
          <Ionicons
            name="camera-reverse"
            style={{
              position: "absolute",
              fontSize: 35,
              right: -100,
              top: -20,
            }}
          />
        </TouchableOpacity>
      </Actions>
    </Container>
  );
};

export default TakePhoto;
