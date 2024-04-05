import React from "react";
import { StyleSheet, View } from "react-native";

function Class2503(props) {
  return (
    <View style={styles.main}>
      <View
        style={[styles.bar, { backgroundColor: "red", flexShrink: 1 }]}
      ></View>
      <View
        style={[
          styles.bar,
          { backgroundColor: "yellow", flexShrink: 1, height: 300 },
        ]}
      ></View>
      <View
        style={[styles.bar, { backgroundColor: "green", height: 200 }]}
      ></View>
      <View
        style={[
          styles.bar,
          { backgroundColor: "blue", flexShrink: 1, height: 100, top: 500 },
        ]}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  bar: { height: 500, width: 500, position: "absolute" },
});
export default Class2503;
