import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Box from "../components/HomeMenu/Cardbox";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper';
import AnnonceCard from "../components/Cards/AnnonceCard";
import Mode from "../components/HomeMenu/Mode";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
          <View style={{height: "15%", marginBottom: "5%"}}>
            <AnnonceCard img="https://media.discordapp.net/attachments/775159078950535198/801127767978410034/bullhorn.png" desc="La date de sortie sera annoncée par la courte vidéo réalisé par @Tchoow." title="Date de sortie !"/>
          </View>
          <View style={{alignItems:"center", marginBottom: "30%"}}>
            <Mode />
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "#303136",
  },
});