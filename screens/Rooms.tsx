import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ROOM_FRAGMENT } from "../fragments";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";
import useMe from "../hooks/useMe";
import { mainTheme } from "../styles";

const SEE_ROOMS_QUERY = gql`
  query seeRooms {
    seeRooms {
      ...RoomParts
    }
  }
  ${ROOM_FRAGMENT}
`;

const RoomContainer = styled.View`
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RoomText = styled.Text``;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-color: ${mainTheme.mainColor};
  border-width: 2px;
  margin-right: 15px;
`;
const Data = styled.View``;

const Username = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const UnreadText = styled.Text``;
const UnreadDot = styled.View`
  margin-right: 10px;
  background-color: red;
  height: 8px;
  width: 8px;
  border-radius: 5px;
`;

const Rooms = () => {
  const { data, loading } = useQuery(SEE_ROOMS_QUERY);
  const { data: meData } = useMe();

  const renderItem = ({ item: room }: any) => {
    const notMe = room.users.find(
      (user: any) => user.userName !== meData?.me?.userName
    );

    return (
      <RoomContainer>
        <Column>
          <Avatar resizeMode="cover" source={{ uri: notMe.avatar }} />
          <Data>
            <Username>{notMe.userName} </Username>
            <UnreadText>{room.unreadTotal} 개의 읽지 않은 메세지 </UnreadText>
          </Data>
        </Column>
        <Column>{room.unreadTotla !== 0 ? <UnreadDot /> : null}</Column>
      </RoomContainer>
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 0.7,
              backgroundColor: "rgba(0,0,0,0.1) ",
            }}
          ></View>
        )}
        style={{ width: "100%" }}
        data={data?.seeRooms}
        keyExtractor={(room) => room.id}
        renderItem={renderItem}
      />
    </ScreenLayout>
  );
};

export default Rooms;
