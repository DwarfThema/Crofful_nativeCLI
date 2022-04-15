import { FlatList, KeyboardAvoidingView, View } from "react-native";
import React, { useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";
import { mainTheme } from "../styles";
import { useForm } from "react-hook-form";
import useMe from "../hooks/useMe";

const SEND_MESSAGE_MUTATION = gql`
  mutation sendMessage($payload: String!, $roomId: Int, $userId: Int) {
    sendMessage(payload: $payload, roomId: $roomId, userId: $userId) {
      ok
      id
    }
  }
`;

//userId 를 이용해서 DM 할 때 방을 만들 수 있도록 해보자.

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
  margin: 0px 7px 0px 20px;
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
  const {
    data: {
      me: { avatar: meAvatar, userName: meUserName },
    },
  } = useMe();

  const { register, setValue, handleSubmit, getValues } = useForm();

  const updateSendMessage = (cache: any, result: any) => {
    const {
      data: {
        sendMessage: { ok, id },
      },
    } = result;
    if (ok && meAvatar && meUserName) {
      const { message } = getValues();
      const messageObj = {
        id: id,
        payload: message,
        user: {
          userName: meUserName,
          avatar: meAvatar,
        },
        read: true,
        __typename: "Message",
      };
      const messageFragment = cache.writeFragment({
        fragment: gql`
          fragment NewMessage on Message {
            id
            payload
            user {
              userName
              avatar
            }
            read
          }
        `,
        data: messageObj,
      });
      cache.modify({
        id: `Room:${route.params.id}`,
        fields: {
          message(prev: any) {
            return [messageFragment, ...prev];
          },
        },
      });
    }
  };

  const [sendMessageMutation, { loading: sendMessageLoading }] = useMutation(
    SEND_MESSAGE_MUTATION,
    {
      update: updateSendMessage,
    }
  );

  const { data, loading } = useQuery(ROOM_QUERY, {
    variables: {
      id: route?.params?.id,
    },
  });
  useEffect(() => {
    register("message", { required: true });
  }, [register]);

  const onValid = ({ message }: any) => {
    if (!sendMessageLoading) {
      sendMessageMutation({
        variables: {
          payload: message,
          roomId: route?.params?.id,
        },
      });
    }
  };

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
          style={{ width: "100%", marginBottom: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }}></View>}
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
          onChangeText={(text) => setValue("message", text)}
          onSubmitEditing={handleSubmit(onValid)}
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};
export default Room;
