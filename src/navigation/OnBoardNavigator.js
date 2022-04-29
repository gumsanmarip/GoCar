import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import onboardOneScreen from "../screens/onboard/onboardOneScreen";
import onboardTwoScreen from "../screens/onboard/onboardTwoScreen";

const Stack = createStackNavigator();

const OnboardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="onboardOneScreen" component={onboardOneScreen} />
    <Stack.Screen name="onboardTwoScreen" component={onboardTwoScreen} />
  </Stack.Navigator>
);

export default OnboardNavigator;
