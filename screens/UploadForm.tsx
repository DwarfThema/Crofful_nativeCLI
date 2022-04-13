import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useForm } from "react-hook-form";
import { mainTheme } from "../styles";

const Container = styled.View`
  flex: 1;
  padding: 0px 50px;
  align-items: center;
`;

const Photo = styled.Image`
  height: 350px;
  width: 135%;
  background-color: rgba(0, 0, 0, 0.08);
`;
const CaptionContainer = styled.View``;
const Caption = styled.TextInput`
  padding: 10px 20px;
  width: 300px;
  margin-top: 40px;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
`;

const HeaderRightText = styled.Text`
  font-size: 17px;
  color: ${mainTheme.mainColor};
  font-weight: 800;
  margin-right: -5px;
`;

const UploadForm = ({ route, navigation }: any) => {
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("caption");
  }, [register]);

  const HeaderRight = () => (
    <TouchableOpacity onPress={() => navigation.navigate("업로드폼")}>
      <HeaderRightText>업로드</HeaderRightText>
    </TouchableOpacity>
  );

  const HeaderRightLoading = () => (
    <ActivityIndicator size="small" color={mainTheme.mainColor} />
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightLoading,
      headerLeft: () => null,
    });
  }, [HeaderRightLoading]);

  const onValid = ({ caption }: any) => {};

  return (
    <DismissKeyboard>
      <Container>
        <Photo resizeMode="contain" source={{ uri: route.params.file }} />
        <CaptionContainer>
          <Caption
            placeholder="내용을 작성해 주세요"
            onChangeText={(text) => setValue("caption", text)}
            onSubmitEditing={handleSubmit(onValid)}
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </CaptionContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default UploadForm;
