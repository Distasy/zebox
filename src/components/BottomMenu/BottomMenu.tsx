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
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screens/Account/LoginScreen";
import RegisterScreen from '../../screens/Account/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/BottomMenu/CustomDrawer';
import SplashScreen from "../../screens/Account/SplashScreen";
import ProfileScreen from "../../screens/Profile/Profile";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import ProductDetails from "../../screens/Products/Details";


const Drawer = createDrawerNavigator();
const BottomMenuDrawer = () => {
  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={BottomMenu} />
      </Drawer.Navigator>
  );
}

const BottomMenu = ({navigation}) => {
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

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  
  var cart;
  var b = 1;
  if(navigation.navigate.routeName == "shoppingcart")
  {
    cart = <Appbar.Action icon="cart" onPress={_handleMore} />
  }

  return (
    <View style={{ flex: 1, position: "relative"}}>
      <StatusBar backgroundColor="#18191d" />
      <Appbar.Header statusBarHeight={0} style={{backgroundColor: "#18191d"}}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title={null} />
        <Appbar.Action icon={{uri: "https://cdn.discordapp.com/attachments/519799997534044170/782649632383434782/zb_y.png" }} onPress={_handleSearch} />
        <Appbar.Action icon="bell" onPress={_handleMore} />
        {cart}
      </Appbar.Header>
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

const Stack = createStackNavigator();

export const BottomMenuStack = () => {
  return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{headerShown: false}} name="Home" 
        component={BottomMenuDrawer} 
        />
        <Stack.Screen name="Shop" options={{headerShown: false}} component={ShopScreen} />
        <Stack.Screen name="Profile" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={ProfileScreen} />
        <Stack.Screen name="Settings" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={SettingsScreen} />
        <Stack.Screen name="Details" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white", title:"Casque DJI"}} component={ProductDetails} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
  );
}
