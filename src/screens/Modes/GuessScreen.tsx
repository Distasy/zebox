import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoinFlipV2 from '../../components/Modes/CoinFlipV2';

export default function GuessScreen() {
  return (
    <View style={styles.container}>
      <CoinFlipV2/>
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