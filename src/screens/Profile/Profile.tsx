import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image
                            source={{
                                uri: 'https://media.discordapp.net/attachments/775159078950535198/775831377689182208/avatar1.png'
                            }}
                            size={80}
                        />
                        <View style={{marginLeft: 20}}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>Quentin</Title>
                            <Caption style={styles.caption}>Niveau 1</Caption>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon style={{color: "#dadada"}} name="map-marker-radius" size={20} />
                        <Text style={{color: "#dadada", marginLeft: 28}}>Registered since 11/11/2020</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon style={{color: "#dadada"}} name="account-group" size={20} />
                        <Text style={{color: "#dadada", marginLeft: 28}}>ZeBox</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dadada',
                        borderRightWidth: 1
                    }]}>
                        <Title style={{color: "#dadada"}}>150 ZCoins</Title>
                        <Caption style={{color: "#dadada"}}>Wallet</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title style={{color: "#dadada"}}>2</Title>
                        <Caption style={{color: "#dadada"}}>Participations</Caption>
                    </View>
                </View>
            </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292626",
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: "#dadada",
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        color: "#dadada",
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }
})