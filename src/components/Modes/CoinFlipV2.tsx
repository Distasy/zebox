import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  TouchableOpacity
} from 'react-native';
import MainText from './UI/MainText';

export default class CoinFlipV2 extends Component {
  interpolateFront: any;
  interpolateBack: any;
  constructor(props: {} | Readonly<{}>){
    super(props);
    // face true = face, face false = crown
    this.state = { isFlipped: false, flipValue: new Animated.Value(0) };
    this.interpolateFront = this.state.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.interpolateBack = this.state.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  handleTouch(){
    const { isFlipped, flipValue } = this.state;
    let rotationConfig = {
      friction: 6,
      tension: 20,
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    };

    if(isFlipped) {
      rotationConfig = {
        ...rotationConfig,
        toValue: 0,
      };
    } else {
      rotationConfig = {
        ...rotationConfig,
        toValue: 180,
      };
    }
    
    Animated.loop(Animated.timing(flipValue, rotationConfig), { iterations: Math.floor(Math.random() * (10 - 5)) + 5 }).start();
    this.setState({ isFlipped: !isFlipped} );
  }

  render() {
    const frontStyle = {
      transform: [
        {rotateY: this.interpolateFront}
      ]
    };
    const backStyle = {
      transform: [
        {rotateY: this.interpolateBack}
      ]
    };
    const coin = (
      <View>
        <TouchableOpacity onPress={()=> this.handleTouch()}>
          <Animated.View style={[styles.flipFront, frontStyle]}>
            <MainText>
              <Image source={{ uri: "https://cdn.discordapp.com/attachments/775159078950535198/802158575752839168/coinA.png" }}  style={ [ {height:80, width: 80 } ] } />
            </MainText>
          </Animated.View>

          <Animated.View style={[styles.flipFront, styles.backFlip, backStyle]}>
            <MainText>
              <Image source={{ uri: "https://media.discordapp.net/attachments/775159078950535198/802158970026459156/coinB.png" }}  style={ [ {height:80, width: 80 } ] } />
            </MainText>
          </Animated.View>
        </TouchableOpacity>
      </View> 
    );
    return (
      <View style={styles.container}>
        {coin}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flipFront: {
    borderRadius: 100,
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backFlip: {
    position: 'absolute',
    top: 0,
  },
});
