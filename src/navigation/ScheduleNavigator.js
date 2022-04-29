import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScheduleScreen from "../screens/Schedule/ScheduleScreen";
import MaintenanceScreen from "../screens/Schedule/MaintenanceScreen";
import EquipmentScreen from "../screens/Schedule/EquipmentScreen";
import InspectionScreen from "../screens/Schedule/InspectionScreen";
import RegistrationScreen from "../screens/Schedule/RegistrationScreen";

const Stack = createStackNavigator();

const ScheduleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
    <Stack.Screen name="MaintenanceScreen" component={MaintenanceScreen} />
    <Stack.Screen name="EquipmentScreen" component={EquipmentScreen} />
    <Stack.Screen name="InspectionScreen" component={InspectionScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
  </Stack.Navigator>
);

export default ScheduleNavigator;
