import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { EarnScreen } from "../../screens/EarnScreen";
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Earns" component={EarnScreen} />
      </Drawer.Navigator>
    </View>
  );
};
