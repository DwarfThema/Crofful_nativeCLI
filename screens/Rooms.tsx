import { FlatList, Text, View } from "react-native";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ROOM_FRAGMENT } from "../fragments";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";

const SEE_ROOMS_QUERY = gql`
  query seeRooms {
    seeRooms {
      ...RoomParts
    }
  }
  ${ROOM_FRAGMENT}
`;

const RoomContainer = styled.View``;

const RoomText = styled.Text``;

const Rooms = () => {
  const { data, loading } = useQuery(SEE_ROOMS_QUERY);

  const renderItem = ({ item: room }: any) => {
    return (
      <RoomContainer>
        <RoomText>
          {room.unreadTotal === 0
            ? "읽지 않은 메세지가 없습니다."
            : `${room.unreadTotal}개의 메세지를 읽지 않았습니다.`}
        </RoomText>
      </RoomContainer>
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeRooms}
        keyExtractor={(room) => room.id}
        renderItem={renderItem}
      />
    </ScreenLayout>
  );
};

export default Rooms;
