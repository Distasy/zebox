import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GuessScreen() {
  return (
    <View style={styles.container}>
        <Text style={{color: "white"}}>GuessScreen</Text>
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