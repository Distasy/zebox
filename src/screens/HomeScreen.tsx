import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Box from "../components/HomeMenu/Cardbox";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper';

export const HomeScreen = () => {
  return (
    <ScrollView>
    <View style={[styles.container, {paddingTop:"5%"}]}>
        <Swiper>
          <View>
            <Box rarity="nitro" imgBox="https://cdn.discordapp.com/attachments/777479021386530829/785887251905118228/test_box.png" entries={50} collected={46000} mode="Lucky"/>
          </View>
          <View>
            <Box rarity="elite" imgBox="https://cdn.discordapp.com/attachments/775159078950535198/775468008360509481/green.png" entries={5} collected={15000} mode="Lucky"/>
          </View>
          <View>
            <Box rarity="gold" imgBox="https://cdn.discordapp.com/attachments/775159078950535198/775468015818113064/yellow.png" entries={3} collected={1000} mode="Lucky"/>
          </View>
        </Swiper>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303136",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%",
  },
});