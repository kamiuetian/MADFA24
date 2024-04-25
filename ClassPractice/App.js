import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Class1103 from "./Components/Class1103";
import Class1403 from "./Components/Class1403";
import Lab1503 from "./Components/Lab1503";
import CounterApp from "./Components/CounterApp";
import Class1803 from "./Components/Class1803";
import Lab2203 from "./Components/Lab2203";
import Chessboard from "./Components/Chessboard";
import Class2503_2 from "./Components/Class2503_2";
import Lab2903 from "./Components/Lab2903";
import { NavigationContainer } from "@react-navigation/native";
import Class0104 from "./Components/Class0104";
import Class2504 from "./Components/Class2504";
/**component name and file name should be same */
export default function App() {
  console.log("App component is rendered");

  return (
    <NavigationContainer>
      <>
        <Class2504></Class2504>
        {/*<Class0104></Class0104>*/}
        {/*<Lab2903></Lab2903>*/}
        {/*<Class2503_2></Class2503_2>*/}
        {/*<Chessboard></Chessboard>*/}
        {/*<Lab2203></Lab2203>*/}
        {/* <Class1803></Class1803>*/}
        {/*<CounterApp></CounterApp>*/}
        {/*<Lab1503></Lab1503>*/}
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
    </NavigationContainer>
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
