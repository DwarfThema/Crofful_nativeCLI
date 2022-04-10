import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Contiainer = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text``;
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
  return (
    <Contiainer>
      <Header>
        {/* <UserAvatar source={} /> */}
        <Username> {user.userName} </Username>
      </Header>
      <File
        style={{ width: deviceWidth, height: deviceHeight - 600 }}
        source={{ uri: file }}
      />
      <Actions>
        <Actions />
        <Actions />
      </Actions>
      <Likes> {`${likes}개의 좋아요`} </Likes>
      <Cpation>
        <Username>{user.userName}</Username>
        <CaptionText> {caption} </CaptionText>
      </Cpation>
    </Contiainer>
  );
};

export default Photo;
