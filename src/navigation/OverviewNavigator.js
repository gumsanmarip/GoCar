import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OverviewScreen from "../screens/Overview/OverviewScreen";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
  </Stack.Navigator>
);

export default Navigator;
