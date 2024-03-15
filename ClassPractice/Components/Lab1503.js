import React from "react";
import { View, StyleSheet, Alert, Button } from "react-native";

function Lab1503(props) {
  const alertHandler = () => {
    Alert.alert(
      "Title",
      "this is message of alert",
      [
        {
          text: "Confirm",
          onPress: () => {
            console.log("Ok button is pressed");
          },
        },
        {
          text: "Cancel",
          onPress: () => {
            console.log("cancel button is pressed");
          },
        },
        {
          text: "Later",
          onPress: () => {
            console.log("Later button is pressed");
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log("User dismissed the alert");
        },
      }
    );
  };
  return (
    <View style={styles.main}>
      <Button title="Open Alert" onPress={alertHandler}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  main: { backgroundColor: "yellow", flex: 1, paddingTop: 50 },
});
export default Lab1503;
