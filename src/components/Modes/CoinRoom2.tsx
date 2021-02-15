import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FlipCard from 'react-native-flip-card';

import {
  View,
  Button,
  Colors,
  Text
} from 'react-native-ui-lib';

export default class CoinRoom2 extends Component {
  state = {
    flip: false,
    pending: false
  };

  startClock() {
    this.setState({pending: true});
    setTimeout(() => {
      this.setState({pending: false});
      this.setState({flip: true});
      this.setState({flip: true});
    }, 5000);
    this.setState({flip: true});
  }

  render() {
    return (
      <View flex center bg-dark80>
        <View height={100} width={100}>
          <FlipCard
            flipHorizontal
            flipVertical={false}
            friction={0.1}
            perspective={5000}
            style={{borderWidth: 0}}
            clickable={false}
            flip={this.state.flip}
          >
            {/* Face Side */}
            <View style={styles.coinFace} center bg-red40>
              <Text white>The Face</Text>
            </View>
            {/* Back Side */}
            <View style={styles.coinFace} center bg-blue40>
              <Text white>The Back</Text>
            </View>
          </FlipCard>
        </View>

        <View marginT-20>
          {!this.state.pending &&
            !this.state.flip && <Button label="Start Clock" link dark10 onPress={() => this.startClock()}/>}
          {this.state.pending && <Text text70>Wait for it...</Text>}
          {!this.state.pending && this.state.flip && <Text text70>Welcome!</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinFace: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});