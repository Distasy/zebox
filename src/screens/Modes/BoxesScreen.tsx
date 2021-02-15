import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxesScreen() {
  return (
    <View style={styles.container}>
        <Text style={{color: "white"}}>BoxesSceen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#303136",
    }
})