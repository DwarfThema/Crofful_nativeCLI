import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";
import { FlatList } from "react-native";

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
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState("");
  const getPhotos = async () => {
    if (ok) {
      const { assets }: any = await MediaLibrary.getAssetsAsync();
      setPhotos(assets);
    }
  };

  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") {
        setOk(true);
      }
    } else if (accessPrivileges !== "none") {
      setOk(true);
    }
  };
  useEffect(() => {
    getPermissions();
    getPhotos();
  }, []);

  console.log(photos);
  return (
    <Container>
      <Top />
      <Bottom></Bottom>
    </Container>
  );
};

export default SelectPhoto;
