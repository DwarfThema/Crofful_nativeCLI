import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

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

const Room = ({ route, navigation }: any) => {
  const { data } = useQuery(ROOM_QUERY, {
    variables: {
      id: route?.params?.id,
    },
  });

  console.log(data, `룸 넘버는 ${route.params.id}`);

  useEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.talkingTo?.userName}님과의 대화`,
    });
  }, []);
  return (
    <View>
      <Text>Messages List</Text>
    </View>
  );
};

export default Room;
