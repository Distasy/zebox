import React    from 'react';
import { View, Dimensions, StyleSheet, Image, Text, Alert, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { Col, Grid } from "react-native-easy-grid";
import FlipCard from 'react-native-flip-card';

export default function CoinRoom(props: { imgA: any; imgB: any; num: any; pseudoA: any; pseudoB: any;}) {

  var fliped = false;

    const on_press_handle = () => {

      for(let i=0;i<10;i++) {
        fliped = !fliped;
        wait(fliped, i)
      }
    }

    const wait = (fliped:boolean, i:number) => {
      setTimeout(() => {
        console.log(fliped)
      }, i * 1000)
    }

  const imgA = props.imgA;
  const imgB = props.imgB;

    return (
        <View style={styles.container}>
                <Grid >
                    <Col style={{justifyContent:"center"}}>
                        <View style={{left :"5%", width: "65%", alignItems: "center"}}>
                            <TouchableOpacity onPress={on_press_handle}>
                              <Image source={{ uri: imgA }}  style={ [ {height:80, width: 80}, styles.images ] } />
                            </TouchableOpacity>
                            <Text style={styles.pseudo}>Tchoow</Text>
                        </View>
                        
                    </Col>
                    <Col style={{justifyContent: "center"}}>
                      <View  style={{ width: "65%", alignSelf: "flex-end", right:"5%", alignItems:"center"}}>
                         <Image source={{ uri: imgB }}  style={ [ {height:80, width: 80 }, styles.images ] } />
                         <Text style={styles.pseudo}>Quentin</Text>

                      </View>
                    </Col>
                    
                </Grid>
                <View style={{height:"100%", width:"100%", position:"absolute", justifyContent:"center", alignItems:"center"}}>
                  <FlipCard flipHorizontal={true} flipVertical={false} friction={6} perspective={5000} clickable={false} flip={fliped}>
                    <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
                          <Image source={{ uri: "https://cdn.discordapp.com/attachments/775159078950535198/802158575752839168/coinA.png" }}  style={ [ {height:80, width: 80 }, styles.images ] } />
                    </View>
                    <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
                          <Image source={{ uri: "https://media.discordapp.net/attachments/775159078950535198/802158970026459156/coinB.png" }}  style={ [ {height:80, width: 80 }, styles.images ] } />
                    </View>
                  </FlipCard>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#e74c3c", //couleur border
    width:"95%",
    borderRadius:20,
    height: "25%",
    borderTopWidth:20,
    borderColor:"#c0392b"
  },
  images : {
    left:0,
    borderRadius: 90,
  },

  pseudo : {
    color: "#ecf0f1",
    fontSize:18,
    fontWeight:"bold",
  }


});


// ~~~~ Props ~~~~  //
CoinRoom.propTypes = {

    // Type
    imgA:     PropTypes.string,
    imgB:     PropTypes.string,
    num:     PropTypes.number,
    pseudoA: PropTypes.string,
    pseudoB: PropTypes.string,

};