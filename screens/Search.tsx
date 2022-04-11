import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "../components/auth/AuthShared";
import DismissKeyboard from "../components/dismissKeyboard";

const SEARCH_PHOTO = gql`
  query searchPhoto($keyword: String!) {
    searchPhoto(keyword: $keybord) {
      id
      file
    }
  }
`;

const Input = styled.TextInput``;

const Search = ({ navigation }: any) => {
  const { register, setValue, getValues } = useForm();
  const [startQueryFn, { loading, data }] = useLazyQuery(SEARCH_PHOTO);

  const SerarchBox = () => (
    <TextInput
      style={{ color: "black" }}
      placeholder="Search Photo"
      autoCapitalize="none"
      returnKeyLabel="search"
      returnKeyType="search"
      autoCorrect={false}
      autoFocus={true}
      onChangeText={(text: string) => setValue("keyboard", text)}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: SerarchBox,
    });
    register("keyword");
  }, []);

  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>search</Text>
      </View>
    </DismissKeyboard>
  );
};

export default Search;
