import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CounterDisplay from "./CounterDisplay";
export default function CounterApp() {
  const [getCount, setCount] = useState(0);
  return (
    <View style={styles.container}>
      {" "}
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Counter Application
      </Text>{" "}
      <View style={styles.just} flexDirection="row">
        {" "}
        <Button
          title="Decrease"
          color="red"
          onPress={() => {
            setCount(getCount - 1);
          }}
          disabled={getCount == 0}
        ></Button>{" "}
        {/* <Text> {getCount} </Text>{" "}*/}
        <CounterDisplay setCounter={setCount}></CounterDisplay>
        <Button
          title="Increase"
          color="green"
          onPress={() => {
            setCount(getCount + 1);
          }}
        ></Button>{" "}
      </View>{" "}
      <StatusBar style="auto" />{" "}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  just: { padding: 10, justifyContent: "space-evenly" },
});
