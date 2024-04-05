import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function HomeScreen({ route, navigation }) {
  let { myvalue } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => {
          navigation.navigate("About", { name: "kamran", regno: "01" });
        }}
      ></Button>
      <Text>{myvalue}</Text>
    </View>
  );
}
function AboutScreen({ navigation, route }) {
  let data = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button
        title="Go to about"
        onPress={() => {
          //navigation.navigate("About");
          navigation.push("About");
        }}
      ></Button>
      <Button
        title="Update Params"
        onPress={() => {
          navigation.setParams({ name: "Ali" });
        }}
      ></Button>
      <Button
        title="Go to home"
        onPress={() => {
          navigation.navigate("Home", { myvalue: "myvalue" });
        }}
      ></Button>
    </View>
  );
}
function Class0104(props) {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>

        <Stack.Screen
          name="Home"
          options={{ title: "My Home" }}
          component={HomeScreen}
          initialParams={{ myvalue: "Default" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
}

export default Class0104;
