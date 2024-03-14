import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

function Class1403(props) {
  let [name, setName] = useState("");
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log("Touchable clicked");
        }}
      >
        <View style={{ backgroundColor: "yellow", height: 300 }}>
          <Text>This is an article</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
        placeholder="useless placeholder"
      ></TextInput>
      <Button
        title="Get value"
        onPress={() => {
          console.log(name);
        }}
      ></Button>
    </>
  );
}

export default Class1403;
