import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Foundation';
import { LinearGradient } from 'expo-linear-gradient';
import FlipCard from 'react-native-flip-card';
import { Audio } from 'expo-av';


export default function WinnerProfil(props) {

    const on_press_handle = () => {

        // it shuld be async function .
        (async () => {
          const play_yes = await Audio.Sound.createAsync(
            require('../../../assets/sounds/whoosh.mp3'),
            { shouldPlay: true }
          );
        })();
    
      }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

   // ~~~~ Importation des props ~~~~  //
   const borderL  = props.borderL;
   const img      = props.img;
   const box      = props.box;
   const pseudo   = props.pseudo;
   const date     = props.date;
   const nameItem = props.nameItem;
   const rarity   = props.rarity;
   const imgItem  = props.imgItem;
   const box2     = props.box2;
   const nbZb     = props.nbZb;

  return (
    <FlipCard flipHorizontal={true} flipVertical={false} friction={15} onFlipStart={on_press_handle} >
    <View>
    <View style={[styles.profil, {width: windowWidth * 0.90, height: windowHeight * 0.15, borderColor: borderL, borderLeftWidth: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,}]}>
            <LinearGradient
    start={[1.0, 0.4]}
    end={[1.0, 2.0]}
    colors={['rgba(51, 51, 51, 0.20)', '#333333', '#333333']}
    style={styles.FadeAway_discover}>


        <View style={{position : "absolute", left: "5%", top:"20%"}}>
            <Image source={{ uri: img }} style={[styles.image, { height: 70, width : 70, }]}/>
            <Icon name="crown" size={50} color="#ecd40a" style={{ left: 19.5, top: -22}} />
        </View>
        

        <View style={{position: 'absolute', right: 5, top: '6%'}}>
             <Image source={{ uri: box }} style={styles.boxFront}/>
        </View>

        <View style={{alignItems: 'center', top: "9%"}}>
            <Text style={styles.pseudo}>Won by</Text>
        <Text style={styles.pseudo}>{pseudo}</Text>
        <Text style={styles.date}>{date} minutes ago.</Text>
        </View>
        
        

        </LinearGradient>
    </View>
    </View>



    <View>
    <View style={[styles.profil, {width: windowWidth * 0.90, height: windowHeight * 0.15, borderColor: borderL, borderRightWidth: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,}]}>
            <LinearGradient
    start={[1.0, 0.4]}
    end={[1.0, 2.0]}
    colors={['rgba(51, 51, 51, 0.20)', '#333333', '#333333']}
    style={styles.FadeAway_discover}>
        <View>
            <Image source={{ uri: imgItem}} style={styles.imgItem}/>
        </View>

        <View style={{position : "absolute", top: "5%"}}>
         <Image source={{ uri: box2 }} style={styles.boxBack}/>
        </View>
        

        <View style={{alignItems: 'center', top: "9%", position: 'absolute', width: '100%'}}>
            <Text style={styles.pseudo}>Item won</Text>
            <Text style={styles.pseudo}>{nameItem}</Text>
            <Text style={[styles.rarity, {color: borderL}]}>{rarity}</Text>
        </View>
        <View style={{alignItems: 'center', top: "25%", position: 'absolute', width: '100%'}}>
            <Text style={styles.price}>Price</Text>
            <Text style={[styles.zb, {top: 25}]}>{nbZb} zb</Text>

        </View>
    
        

        </LinearGradient>
    </View>
    </View>

    </FlipCard>
    
  );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#303136",
        
      },

    profil: {
      alignItems: "center",
      backgroundColor: "#4c5054",
      borderRadius: 20,
      justifyContent: 'center'
    },
    image: {
        borderRadius: 90,
        position : "absolute",
        left: "5%",
      },
    boxFront: {
        borderRadius: 90,
        height: 100,
        width : 100,
        position : "absolute",
        right: "4%",
    },

    boxBack: {
        borderRadius: 90,
        height: 100,
        width : 100,
        position : "absolute",

    },
    pseudo: {
        fontSize: 18,
        fontWeight: "bold",
        color : "white",
        top: "8%",
    },
    date: {
        fontSize: 17,
        fontWeight: "bold",
        color : "#ecd40a",
        top: "12%"
    },
    FadeAway_discover: {
        borderRadius: 20,
        width: '100%',
        height: '100%'
    },
    rarity: {
        fontSize: 20,
        fontWeight: "bold",
        top: "12%",
        textDecorationLine: "underline"

    },
    imgItem: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
        opacity: 0.1


    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color : "white",
        position: "absolute",
        right: "10%",

    },
    zb: {
        fontSize: 18,
        fontWeight: "bold",
        color : "white",
        position: "absolute",
        right: "6%",

    },
  });
  

  // ~~~~ Props ~~~~  //
WinnerProfil.propTypes = {

    // Type
    borderL  : PropTypes.string,
    img      : PropTypes.string,
    box      : PropTypes.string,
    box2     : PropTypes.string,
    pseudo   : PropTypes.string,
    date     : PropTypes.string,
    nameItem : PropTypes.string,
    imgItem  : PropTypes.string,
    rarity   : PropTypes.string,
    nbZb     : PropTypes.number,
  
  };