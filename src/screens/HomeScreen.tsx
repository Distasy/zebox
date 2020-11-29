import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Apps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303136",
    alignItems: "center",
    justifyContent: "center",
  },
});
