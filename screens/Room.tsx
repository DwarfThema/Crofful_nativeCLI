import { FlatList, KeyboardAvoidingView } from "react-native";
import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";
import { mainTheme } from "../styles";

const SEND_MESSAGE_MUTATION = gql`
  mutation sendMessage($payload: String!, $roomId: Int, $userId: Int) {
    sendMessage(payload: $payload, roomId: $roomId, userId: $userId) {
      ok
      id
    }
  }
`;

const ROOM_QUERY = gql`
  query seeRoom($id: Int!) {
    seeRoom(id: $id) {
      messages {
        id
        payload
        user {
          userName
          avatar
        }
        read
      }
    }
  }
`;

const MessageContainer: any = styled.View`
  padding: 0px 10px;
  flex-direction: ${(props: any) => (props.outGoing ? "row-reverse" : "row")};
  align-items: flex-end;
  margin: 5px 0;
`;

const Author = styled.View``;

const Avatar = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  border-color: ${(p) => p.theme.accent};
  border-width: 2px;
`;

const Message = styled.Text`
  padding: 7px 10px;
  margin: 0px 7px;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
`;

const TextInput = styled.TextInput`
  margin-bottom: 30px;
  height: 40px;
  width: 95%;
  padding: 10px 20px;
  border-radius: 15px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
`;

const Room = ({ route, navigation }: any) => {
  const { data, loading } = useQuery(ROOM_QUERY, {
    variables: {
      id: route?.params?.id,
    },
  });

  useEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.talkingTo?.userName}님과의 대화`,
    });
  }, []);

  const renderItem = ({ item: message }: any) => {
    return (
      <MessageContainer
        outGoing={message.user.userName !== route?.params?.talkingTo?.userName}
      >
        <Author>
          <Avatar source={{ uri: message.user.avatar }} />
        </Author>
        <Message>{message.payload}</Message>
      </MessageContainer>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      <ScreenLayout loading={loading}>
        <FlatList
          inverted
          style={{ width: "100%", marginBottom: 20 }}
          data={data?.seeRoom?.messages}
          keyExtractor={(message) => message.id}
          renderItem={renderItem}
        />
        <TextInput
          placeholder="메세지를 입력하세요."
          returnKeyLabel="보내기"
          returnKeyType="send"
          autoCompleteType="off"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};

export default Room;
