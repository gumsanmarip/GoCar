import React from "react";
import { View, Text, Button } from "react-native";

const ScheduleScreen = ({ navigation }) => {
  return (
    <View>
      <Text>all schedules for car</Text>
      <Button
        title="Maintenance Schedule List"
        onPress={() => navigation.navigate("MaintenanceScreen")}
      />
      <Button
        title="Equipment Check list"
        onPress={() => navigation.navigate("EquipmentScreen")}
      />
      <Button
        title="Inspection"
        onPress={() => navigation.navigate("InspectionScreen")}
      />
      <Button
        title="Registration"
        onPress={() => navigation.navigate("RegistrationScreen")}
      />
    </View>
  );
};

export default ScheduleScreen;
