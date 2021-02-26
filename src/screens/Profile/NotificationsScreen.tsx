import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Notifications</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
        justifyContent: 'center',
        alignItems: 'center'
    }
})
