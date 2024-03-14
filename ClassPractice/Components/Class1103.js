import React from "react";
import { View, Text } from "react-native";

export default function Class1103(props) {
  console.log(props);
  const onPressHnadler = () => {
    console.log("Text is pressed");
  };
  return (
    <View style={{ backgroundColor: "blue" }}>
      <Text style={{ color: "white", fontSize: 16 }}>
        This is custom{" "}
        <Text onPress={onPressHnadler} style={{ fontWeight: "bold" }}>
          compoent
        </Text>{" "}
        from another file
      </Text>
      <Mytext>I am another Text compoent in 1103</Mytext>
      <Mytext>I am third Text compoent in 1103</Mytext>
    </View>
  );
}

function Mytext(props) {
  return <Text style={{ color: "white", fontSize: 16 }}>{props.children}</Text>;
}
