import React from "react";
import { Button, Text } from "react-native";

function CounterDisplay({ setCounter }) {
  return (
    <>
      <Text>{getCount}</Text>
      <Button
        title="update from child"
        onPress={() => {
          setCounter(20);
        }}
      ></Button>
    </>
  );
}

export default CounterDisplay;
