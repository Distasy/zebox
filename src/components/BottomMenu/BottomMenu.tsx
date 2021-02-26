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
import NotificationsScreen from "../../screens/Profile/NotificationsScreen";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import ProductDetails from "../../screens/Products/Details";
import AccountScreen from "../../screens/Settings/MenuItems/AccountScreen";
import SecurityScreen from "../../screens/Settings/MenuItems/SecurityScreen";
import OrdersScreen from "../../screens/Settings/MenuItems/OrdersScreen";
import RewardsScreen from "../../screens/Settings/MenuItems/RewardsScreen";
import ActivityScreen from "../../screens/Settings/MenuItems/ActivityScreen";
import CoinFlipScreen from "../../screens/Modes/CoinFlipScreen";
import GuessScreen from "../../screens/Modes/GuessScreen";
import BoxesScreen from "../../screens/Modes/BoxesScreen";
import FetchInfo from './TabBar';

const BottomMenu = ({navigation} : any) => {
  const Tab = createBottomTabNavigator();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  var cart;
  var b = 0;
  if(b == 1)
  {
    cart = <Appbar.Action icon="cart" onPress={_handleMore} />
  }
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <StatusBar backgroundColor="#18191d" />
      <Appbar.Header statusBarHeight={0} style={{backgroundColor: "#18191d"}}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title={null} />
        <Appbar.Action onPress={ () => navigation.navigate('Activity') } icon={{uri: "https://cdn.discordapp.com/attachments/519799997534044170/782649632383434782/zb_y.png" }} />
        <Appbar.Action onPress={ () => navigation.navigate('Notifications') } icon="bell" />
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


const Drawer = createDrawerNavigator();
const BottomMenuDrawer = () => {
  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={BottomMenu} />
      </Drawer.Navigator>
  );
}

const Stack = createStackNavigator(); 

export const BottomMenuStack = ({navigation} : any) => {
  return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{headerShown: false}} name="Home" 
        component={BottomMenuDrawer}  
        />
        <Stack.Screen name="Shop" options={{headerShown: false}} component={ShopScreen} />
        <Stack.Screen name="Profile" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={ProfileScreen} />
        <Stack.Screen name="Settings" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={SettingsScreen} />
        <Stack.Screen name="My Account" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={AccountScreen} />
        <Stack.Screen name="Notifications" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={NotificationsScreen} />
        <Stack.Screen name="Security" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={SecurityScreen} />
        <Stack.Screen name="Orders" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={OrdersScreen} />
        <Stack.Screen name="Rewards" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={RewardsScreen} />
        <Stack.Screen name="Activity" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white"}} component={ActivityScreen} />
        <Stack.Screen name="Details" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white", title:"Casque DJI"}} component={ProductDetails} />
        <Stack.Screen name="CoinFlip" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white", title:"CoinFlip"}} component={CoinFlipScreen} />
        <Stack.Screen name="Boxes" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white", title:"Boxes"}} component={BoxesScreen} />
        <Stack.Screen name="Guess" options={{ headerStyle: { backgroundColor: '#18191d'}, headerTintColor:"white", title:"Guess"}} component={GuessScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
  );
}
