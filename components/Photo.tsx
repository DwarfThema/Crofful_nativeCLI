import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Contiainer = styled.View``;
const Header = styled.View`
  padding: 10px 5px;
  flex-direction: row;
  align-items: center;
`;
const HeaderTextContainer = styled.View``;
const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
  border-color: ${(p) => p.theme.accent};
  border-width: 2px;
`;
const TouchableToStory = styled.TouchableOpacity``;
const Username = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const TouchableToProfile = styled.TouchableOpacity``;
const GameName = styled.Text`
  font-weight: 300;
`;

const TouchableToGame = styled.TouchableOpacity``;
const File = styled.Image``;
const Actions = styled.TouchableOpacity``;
const Cpation = styled.View``;
const CaptionText = styled.Text``;
const Likes = styled.Text``;

interface IPhoto {
  id: number;
  user: any;
  file: string;
  isLiked: boolean;
  likes: number;
  caption?: string;
  comments?: any[];
}

const Photo = ({
  id,
  user,
  caption,
  file,
  isLiked,
  likes,
  comments,
}: IPhoto) => {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  const navigation = useNavigation();
  const [imageHeight, setImageHeight] = useState(deviceHeight - 500);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 3);
    });
  }, []);

  return (
    <Contiainer>
      <Header>
        <TouchableToStory>
          <UserAvatar resizeMode="cover" source={{ uri: user.avatar }} />
        </TouchableToStory>
        <HeaderTextContainer>
          <TouchableToProfile onPress={() => navigation.navigate("타인프로필")}>
            <Username> {user.userName} </Username>
          </TouchableToProfile>
          <TouchableToGame>
            <GameName> "모여봐요 동물의 숲" </GameName>
          </TouchableToGame>
        </HeaderTextContainer>
      </Header>
      <File
        resizeMode="contain"
        style={{ width: deviceWidth, height: deviceHeight - 500 }}
        source={{ uri: file }}
      />
      <Actions>
        <Actions />
        <Actions />
      </Actions>
      <Likes> {`${likes}개의 좋아요`} </Likes>
      <Cpation>
        <TouchableToProfile onPress={() => navigation.navigate("타인프로필")}>
          <Username> {user.userName} </Username>
        </TouchableToProfile>
        <CaptionText> {caption} </CaptionText>
      </Cpation>
    </Contiainer>
  );
};

export default Photo;
