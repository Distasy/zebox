import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MainText = props => (
  <View {...props} style={[styles.main, props.style]} >
    {props.children}
  </View>
); 

const styles = StyleSheet.create({
  main: {
    fontFamily: 'monospace',
    fontSize: 30,
    color: '#d2d5dd',
  }
});

export default MainText;
