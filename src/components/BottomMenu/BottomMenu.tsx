import React, {useState} from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";
import { HomeScreen } from "../../screens/HomeScreen";
import { EarnScreen } from "../../screens/EarnScreen";
import { WinnerScreen} from "../../screens/WinnerScreen";
import { ShopScreen } from "../../screens/ShopScreen";
import { useSafeArea } from "react-native-safe-area-context";
import { View, StatusBar } from "react-native";


export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  const styleTypes = ['default','dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if(styleId === styleTypes.length){
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    <View style={{ flex: 1, position: "relative"}}>
      <StatusBar backgroundColor="#292626" />
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="appstore-o" component={EarnScreen} />
        <Tab.Screen name="Trophy" component={WinnerScreen}/>
        <Tab.Screen name="shoppingcart" component={ShopScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};
