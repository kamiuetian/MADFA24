import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Class1103 from "./Components/Class1103";
import Class1403 from "./Components/Class1403";
import Lab1503 from "./Components/Lab1503";
/**component name and file name should be same */
export default function App() {
  console.log("App component is rendered");
  return (
    <>
      <Lab1503></Lab1503>
      {/*<Class1403></Class1403>*/}
      {/*<Class1103>
        <Text>I am inside cla1103</Text>
      </Class1103>*}
      {/*<View style={styles.container}>
        <Greeting name="kamran" age="30"></Greeting>
        <Greeting name="Ali"></Greeting>
        <Greeting name="aashir"></Greeting>
        <StatusBar style="auto" />
  </View>*/}
    </>
  );
}
/**Greeting */
//props.name
function Greeting({ name }) {
  /**usestate is a function that returns an array */
  console.log("Greeting Component is rendered");
  let [event, setEvent] = useState("EID");
  console.log(name);
  const onChnageEvent = () => {
    // event = "Birthday";
    setEvent("Birthday");
    console.log(event);
  };
  return (
    <>
      <Text>
        Geetings of {event} from {name}
      </Text>
      <Button title="ChangeEvent" onPress={onChnageEvent}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
