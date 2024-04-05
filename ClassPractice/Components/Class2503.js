import React from "react";
import { StyleSheet, View } from "react-native";

function Class2503(props) {
  return (
    <View style={styles.main}>
      <View style={[styles.bar, { backgroundColor: "red" }]}></View>
      <View style={[styles.bar, { backgroundColor: "yellow" }]}></View>
      <View style={[styles.bar, { backgroundColor: "green" }]}></View>
      <View style={[styles.bar, { backgroundColor: "blue" }]}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightblue",
    flexWrap: "wrap",
    alignContent: "center",
  },
  bar: { height: 500, width: 100 },
});
export default Class2503;
