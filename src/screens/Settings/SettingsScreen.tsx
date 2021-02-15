import React from 'react';
import { View, StyleSheet, ScrollView, Share } from 'react-native';
import { List } from 'react-native-paper';

export default function SettingsScreen(props) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: "Viens tester l'application ZeBox et gagne un max de cadeaux !",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return (
        <ScrollView style={styles.container}>
            <View>
                <List.Section>
                    <List.Subheader style={{color: "white"}}>Account</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="My Account" left={() => <List.Icon color="white" icon="account-circle" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={() => {props.navigation.navigate('My Account')}}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Security"
                    left={() => <List.Icon color="white" icon="lock" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={() => {props.navigation.navigate('Security')}}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "white"}}>Tracking</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="Activity" left={() => <List.Icon color="white" icon="history" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={() => {props.navigation.navigate('Activity')}}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Rewards"
                    left={() => <List.Icon color="white" icon="gift" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={() => {props.navigation.navigate('Rewards')}}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Orders"
                    left={() => <List.Icon color="white" icon="shopping-search" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={() => {props.navigation.navigate('Orders')}}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "white"}}>Informations</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="Follow us" left={() => <List.Icon color="white" icon="share" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Conditions"
                    left={() => <List.Icon color="white" icon="file-document" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Confidentiality"
                    left={() => <List.Icon color="white" icon="file-document" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "white"}}>Support</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="Report a bug" left={() => <List.Icon color="white" icon="bug" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Help"
                    left={() => <List.Icon color="white" icon="help" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="Share the app !" left={() => <List.Icon color="white" icon="share" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    onPress={onShare}
                    />
                </List.Section>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292626",
    }
})