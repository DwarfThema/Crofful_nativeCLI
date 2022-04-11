import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "../components/auth/AuthShared";
import DismissKeyboard from "../components/dismissKeyboard";

const Input = styled.TextInput``;

const Search = ({ navigation }: any) => {
  const { register, setValue, watch } = useForm();
  console.log(watch());
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
