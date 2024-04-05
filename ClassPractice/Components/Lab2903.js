import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

function Lab2903(props) {
  let [count, setCount] = useState();
  let [loggedIn, setLoogedIn] = useState(false);
  console.log("Component loaded");
  useEffect(() => {
    console.log("UseEffect of Count state loaded");
  }, [count]);
  useEffect(() => {
    console.log("UseEffect of LoggedIn state loaded");
  }, [loggedIn]);
  return (
    <View>
      <Text>Counter</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCount(count++);
        }}
      ></Button>
      <Button
        title="Log me in"
        onPress={() => {
          setLoogedIn(!loggedIn);
        }}
      ></Button>
    </View>
  );
}

export default Lab2903;
//no second arg
//[]
//list of
