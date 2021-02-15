import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Col, Grid } from "react-native-easy-grid";
import { useNavigation } from '@react-navigation/native';

export default function Mode() {
    const navigation   = useNavigation();
    const windowWidth  = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, {width:windowWidth *0.95, height:windowHeight*0.8}]}>
            <View style={styles.header}>
                <Text style={styles.Titlemode}>Modes</Text>
                <IconButton
                    icon="information-variant"
                    color="#ecf0f1"
                    size={20}
                    style={{ backgroundColor: "#333333", position:"absolute", right:0}}
                    onPress={() => Alert.alert('Info')}
                />
            </View>
            <View style={[{backgroundColor:"#e74c3c"},styles.mode]}>
                <TouchableOpacity onPress={() => navigation.navigate('CoinFlip')}>
                <Image
                    source={{ uri: "https://media.discordapp.net/attachments/775159078950535198/801172242503041024/cf.png" }}
                    style={{height:"100%", width:"100%", borderRadius:20}}
                    />
                </TouchableOpacity>
            </View>
            <View style={[{backgroundColor:"#55efc4"},styles.mode]}>
                <TouchableOpacity onPress={() => navigation.navigate('Boxes')}>
                <Image
                    source={{ uri: "https://media.discordapp.net/attachments/775159078950535198/801183296708149318/boxes.png" }}

                    style={{height:"100%", width:"100%", borderRadius:20}}
                    />
                </TouchableOpacity>
            </View>
            <View style={[{backgroundColor:"#0984e3"},styles.mode]}>
                <TouchableOpacity onPress={() => navigation.navigate('Guess')}>
                <Image
                    source={{ uri: "https://cdn.discordapp.com/attachments/775159078950535198/801516372571586560/guess2.png" }}

                    style={{height:"100%", width:"100%", borderRadius:20}}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{opacity:0.3, color:"white"}}>Sponsored by Banggood</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    alignItems:"center",
    borderColor:"#e1b12c", 
    borderRadius:20,
    borderWidth:1,
  },
  header: {
    backgroundColor: "#e1b12c", 
    height:"10%",
    width:"100%",
    borderTopLeftRadius:19,
    borderTopRightRadius:19,
    marginBottom:"5%"
  },
  Titlemode: {
      color:"#292626",
      fontSize:40,
      fontWeight:"bold",
      textAlign:"center"
  },

  mode: {
      borderRadius:20,
      height:"25%",
      width:"92%",
      marginBottom:"5%"
  }
});
