import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { Col, Grid } from "react-native-easy-grid"
import { HomeScreen } from '../../screens/HomeScreen';
import LoginScreen from '../../screens/Account/LoginScreen';
import RegisterScreen from '../../screens/Account/RegisterScreen';

class WalletIcon extends Component {
  render() {
    return (
      <View style={{
        paddingVertical: 15,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }}>
        <Icon name='ios-wallet' type="ionicon" style={{marginRight: 5}} />
        <Text style={{
          fontSize: 16,
          color: "black"
      }}>0</Text>
    </View>
    )
  }
}

function GoToButton({ screenName }) {
  const navigation = useNavigation();
  return (
    <View style={{marginRight: 15,}}>
      <Grid style={{justifyContent: 'center', alignItems: "center"}}>
        <Col style={{marginRight: 10}}>
          <WalletIcon />
        </Col>
        <Col>
        <Icon
          onPress={() => navigation.navigate('Settings')}
          name='settings'
          />
        </Col>
      </Grid>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{
          headerRight: () => (
            <GoToButton screenName="Settings" />
          ),
          headerLeft: null,
            headerStyle: {
              shadowColor: 'red',
              shadowRadius: 10,
              elevation: 30,
              backgroundColor: '#ecd40a',
            },
        }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerLeft: null, headerShown: false }} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}