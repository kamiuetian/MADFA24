import React from "react";
import { View } from "react-native";
function Lab2203(props) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "yellow",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            alignSelf: "flex-start",
          }}
        ></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "green" }}
        ></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "brown" }}
        ></View>
      </View>
    </View>
  );
}
/**
 * flex=1,2,34
 */
export default Lab2203;
