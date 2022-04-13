import { Text, View } from "react-native";
import React from "react";

const UploadForm = ({ route }: any) => {
  console.log(route);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>업로드 하는 창</Text>
    </View>
  );
};

export default UploadForm;
