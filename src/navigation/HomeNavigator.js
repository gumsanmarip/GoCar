import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import UrgencyScreen from "../screens/Home/UrgencyScreen";
import HistoryScreen from "../screens/Home/HistoryScreen";

const Stack = createStackNavigator();
//<Stack.Screen name="Screen" component={Screen} />
const MessageNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="UrgencyScreen" component={UrgencyScreen} />
    <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
  </Stack.Navigator>
);

export default MessageNavigator;
