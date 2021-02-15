import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoinRoom  from "../../components/Modes/CoinRoom";

export default function CoinFlipScreen() {
  return (
    <View style={styles.container}>
        <CoinRoom imgA="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png"
                  imgB="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png"/>

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