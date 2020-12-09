import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Divider,
    TouchableRipple,
    Switch,
    ProgressBar,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1, backgroundColor: "#333"}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image
                            source={{
                                uri: "https://media.discordapp.net/attachments/775159078950535198/775832708479844392/avatar8.png"
                            }}
                            size={50}
                            style={{backgroundColor: null}}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                            <Title style={styles.title}>Quentin</Title>
                            <Caption style={[styles.caption, {marginTop: -5}]}>#10</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Caption style={styles.caption}>Niveau</Caption>
                            <Paragraph style={[styles.paragraph, styles.caption]}> 1</Paragraph>
                        </View>
                    </View>
                    <View style={{width: '90%'}}>
                        <ProgressBar progress={0.5} color="#ecd40a" />
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="home-outline"
                                color="white"
                                size={25}
                            />
                        )}
                        labelStyle={{color: "white"}}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="account-outline"
                                color="white"
                                size={25}
                            />
                        )}
                        label="Profile"
                        labelStyle={{color: "white"}}
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Text style={{color: "white", fontWeight:"bold", marginLeft: 15, marginTop: 10}}>Preferences</Text>
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text style={{color: "white"}}>Sound</Text>
                                <View pointerEvents="none">
                                    <Switch color="#ecd40a" value={true} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                        icon={() => (
                            <Icon
                                name="settings-outline"
                                color="white"
                                size={25}
                            />
                        )}
                        label="Settings"
                        labelStyle={{color: "white"}}
                        onPress={() => {props.navigation.navigate('Settings')}}
            /> 
            <Divider style={{backgroundColor: "#18191d" }}/>
            <DrawerItem
                icon={() => (
                    <Icon
                        name="exit-to-app"
                        color="white"
                        size={25}
                    />
                )}
                label="Sign out"
                labelStyle={{color: "white"}}
                onPress={() => {}}
            />
            <Divider style={{backgroundColor: "#18191d" }}/>
        </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      color: "white",
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: "white"
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#18191d',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });