import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

function Item(item) {
  function makeACall(id) {
    //make call
  }
  return (
    <View>
      <Text
        onPress={() => {
          makeACall(item.id);
        }}
      >
        {title}
      </Text>
      <Image source={require("../assets/icon.png")}></Image>
    </View>
  );
}
function Class1803(props) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <>
      <Pressable
        onPressIn={() => {
          console.log("On PressIn");
        }}
        onPressOut={() => {
          console.log("On PressOut");
        }}
        onPress={() => {
          console.log("On Press");
        }}
        onLongPress={() => {
          console.log("On LongPress");
        }}
      >
        <Text>Pressable aPi demo</Text>
      </Pressable>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          <Item item={item}></Item>;
        }}
        keyExtractor={id}
      ></FlatList>
    </>
  );
}

export default Class1803;

//shallow copy
/*let obj1={name:"Ali"}
let obj2={name:"Ali"}
let obj3==obj1;
obj1.name==obj2.name*/
