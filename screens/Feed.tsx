import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userName
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

const Feed = ({ navigation }: any) => {
  const { data, loading } = useQuery(FEED_QUERY);

  const renderPhoto = ({ item: photo }: any) => {
    return (
      <View>
        <Text> {photo.caption} </Text>
      </View>
    );
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo: any) => photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
};

export default Feed;
