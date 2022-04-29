import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScheduleScreen from "../screens/Schedule/ScheduleScreen";
import ServiceScreen from "../screens/Schedule/ServiceScreen";
import EquipmentScreen from "../screens/Schedule/EquipmentScreen";
import InspectionScreen from "../screens/Schedule/InspectionScreen";
import RegistrationScreen from "../screens/Schedule/RegistrationScreen";

const Stack = createStackNavigator();

const ScheduleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
    <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
    <Stack.Screen name="EquipmentScreen" component={EquipmentScreen} />
    <Stack.Screen name="InspectionScreen" component={InspectionScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
  </Stack.Navigator>
);

export default ScheduleNavigator;
