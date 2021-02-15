import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Col, Grid } from "react-native-easy-grid";
import * as Animatable from 'react-native-animatable';

export default function AnnonceCard(props: { img: any; title: any; desc: any;}) {

    const img = props.img;
    const desc = props.desc;
    const title = props.title;
    return (
            <View style={styles.container}>
                <Grid>
                    <Col style={{ width: "25%", height: "100%" }}>
                        <View style={{backgroundColor:"#e1b12c", left:"10%" ,borderBottomLeftRadius: 20 }}>
                            <Animatable.Image
                                    animation={"swing"}
                                    easing="ease-in-out-sine"
                                    iterationDelay={6000}
                                    duration={1500}
                                    iterationCount="infinite"
                                    source={{ uri: img}}
                                    style={{height:"100%", width:"100%", borderRadius:90}}
                                />
                        </View>
                    </Col>
                    <Col style={{ width: "75%", height: "100%", borderTopLeftRadius: 20, backgroundColor:"#292626"}}>
                        <View>
                            <Text style={styles.titre}>{title}
                            </Text>
                            <Text style={styles.desc}>{desc}
                            </Text>
                        </View>
                    </Col>
                </Grid>
            </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1b12c", //couleur border
    width:"100%",
    borderTopWidth:10,
    borderColor:"#e1b12c", //couleur border
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    height: "100%"
  },
  titre: {
      color:"#ecf0f1",
      fontSize:22,
      fontWeight:"bold",
      textAlign:"center",
      opacity:0.8
  },

  desc: {
    left:"2%",
    color:"#ecf0f1",
    fontSize:15,
    paddingRight:"5%",
    opacity:0.8
  },

  mention: {
    color:"#e1b12c",
    fontWeight:"bold",
    opacity:0.8,
    fontSize:15,

  }


});


// ~~~~ Props ~~~~  //
AnnonceCard.propTypes = {

    // Type
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,

};