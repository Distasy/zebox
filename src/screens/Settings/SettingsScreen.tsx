import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export default function SettingsScreen() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <List.Section>
                    <List.Subheader style={{color: "white"}}>Account</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="My Account" left={() => <List.Icon color="white" icon="account-circle" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Security"
                    left={() => <List.Icon color="white" icon="lock" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "white"}}>Tracking</List.Subheader>
                    <List.Item 
                    titleStyle={{color: "white"}} 
                    title="Activity" left={() => <List.Icon color="white" icon="history" />} 
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Rewards"
                    left={() => <List.Icon color="white" icon="gift" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
                    />
                    <List.Item
                    titleStyle={{color: "white"}}
                    title="Orders"
                    left={() => <List.Icon color="white" icon="shopping-search" />}
                    right={() => <List.Icon color="white" icon="arrow-right" />}
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