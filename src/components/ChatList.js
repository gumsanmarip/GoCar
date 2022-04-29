import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "0",
    title: "john",
    messages: "hi",
    image: require("../assets/pp1.png"),
  },
  {
    id: "1",
    title: "jacob",
    messages: "poop",
    image: require("../assets/pp1.png"),
  },
  {
    id: "2",
    title: "jolf",
    messages: "bitch",
    image: require("../assets/pp1.png"),
  },
];

const ChatPerson = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const ChatMessages = ({ messages }) => (
  <View>
    <Text>{messages}</Text>
  </View>
);

const ChatList = () => {
  const renderItem = ({ item }) => <ChatPerson title={item.title} />;

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChatList;
