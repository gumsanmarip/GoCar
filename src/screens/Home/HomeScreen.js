import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Car id:1 and Mileage</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <Button
        title="Urgency list"
        onPress={() => navigation.navigate("UrgencyScreen")}
      />
      <Button
        title="Service History list"
        onPress={() => navigation.navigate("HistoryScreen")}
      />
      <Button title="Add" />
    </View>
  );
};

export default HomeScreen;
