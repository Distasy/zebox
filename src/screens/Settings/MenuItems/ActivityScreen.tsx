import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Activity</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#333",
        justifyContent: "center",
        alignItems: "center"
    }
})