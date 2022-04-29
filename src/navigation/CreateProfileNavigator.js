import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateProfileScreen from "../screens/CreateProfile/CreateProfileScreen";

const Stack = createStackNavigator();

const createProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
  </Stack.Navigator>
);

export default createProfileNavigator;
