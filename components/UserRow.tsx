import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 25px;
  margin-right: 10px;
`;
const UserName = styled.Text`
  font-weight: 600;
`;

const FollowBtn = styled.TouchableOpacity``;
const FollowBtnText = styled.Text``;

const UserRow = ({ avatar, userName, isFollowng, isMe }: any) => {
  return (
    <Wrapper>
      <Column>
        <Avatar source={{ uri: avatar }} />
        <UserName>{userName}</UserName>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowng ? "언팔로우" : "팔로우"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
};

export default UserRow;
