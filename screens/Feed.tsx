import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import Photo from "../components/Photo";
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
  const { data, loading, refetch } = useQuery(FEED_QUERY);

  const renderPhoto = ({ item: photo }: any) => {
    return <Photo {...photo} />;
  };

  const [refreshing, setRefreshing] = useState(false);
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        data={data?.seeFeed}
        keyExtractor={(photo: any) => photo.id}
        renderItem={renderPhoto}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default Feed;
