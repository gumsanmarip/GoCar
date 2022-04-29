import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ScheduleNavigator from "./ScheduleNavigator";
import HomeNavigator from "./HomeNavigator";
import OverviewNavigator from "./OverviewNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Schedule" component={ScheduleNavigator} />
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Overview" component={OverviewNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
