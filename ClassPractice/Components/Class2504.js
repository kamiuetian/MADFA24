import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
function Class2504(props) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-name", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  const mergeData = async (value) => {
    try {
      await AsyncStorage.mergeItem("my-name", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  return (
    <>
      <Button
        title="Save Data"
        onPress={() => {
          storeData({ name: "kamran" });
        }}
      ></Button>
      <Button
        title="Add new Data"
        onPress={() => {
          mergeData({ name: "ALi" });
        }}
      ></Button>
    </>
  );
}

export default Class2504;
