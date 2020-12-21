import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardFlip from 'react-native-card-flip';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Dimensions, Modal, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Foundation';
import { Col, Grid } from "react-native-easy-grid";
import * as Animatable from 'react-native-animatable';


export default function Cardbox(props: { imgBox: any; colorBox: any; collected: any; entries: any; rarity: any; mode: any;}) {

  // ~~~~ Importation des props ~~~~  //
  const imgBox     = props.imgBox;
  const collected  = props.collected;
  const entries    = props.entries;
  const rarity     = props.rarity;
  const mode       = props.mode;
  let   zbTotal;
  let   colorBox;
  let   luck;
  let   pourcentage;
  let   bar;
  let   shakespeed;
  let   colorMode;
  let   imgMode;
  let   animationMode;
  let   imgBack;
  let   animationText;

if (mode == "Lucky")
{
    colorMode="#18ac80";
    imgMode="https://cdn.discordapp.com/attachments/775159078950535198/785936016967991326/trefle.png";
    animationMode="rotate";
    imgBack="https://cdn.discordapp.com/attachments/775159078950535198/785970593673510912/CardLucky-final.png";

}
else
{
    colorMode="#1b9ebf";
    imgMode="https://cdn.discordapp.com/attachments/775159078950535198/785955590366691348/speedometer.png";
    animationMode="swing";
    imgBack="https://cdn.discordapp.com/attachments/775159078950535198/785970594856173608/CardRush-final.png";

}
switch(rarity) {

    case "basic": // white
    colorBox="#f4feff";
    zbTotal=1000;

    break;
    
    case "elite": // green
    colorBox="#28d123";
    zbTotal=2500;
    break;

    case "rare": // dark blue
    colorBox="#253ce9";
    zbTotal=5000;
    break;

    case "epic": // purple
    colorBox="#a91afb";
    zbTotal=10000;
    break;

    case "legend": // orange
    colorBox="#e07223";
    zbTotal=150000;
    break;
    
    case "gold": // yellow
    colorBox="#fcd90d";
    zbTotal=20000;
    break;

    case "mythic": // light blue
    colorBox="#f8feff";
    zbTotal=30000;
    break;

    case "nitro": // red
    colorBox="#f9122c";
    zbTotal=50000;
    break;

    }
    pourcentage=(collected/zbTotal)*100;
    luck=(entries/zbTotal)*100;
    bar = pourcentage/100;
    shakespeed=10000-(pourcentage*95);
    if ( pourcentage >= 90)
        animationText="pulse";
    else
        animationText="";

    return(
        <View style={{ height: "95%", width: "92.5%", alignItems: "center" }}>
            <View style={styles.card}>
                <View style={{ height: "100%", width: "100%", position: "absolute" }}>

                    <Image
                        source={{ uri: imgBack }}

                        style={
                            [styles.image,
                            {
                                width: "100%",
                                height: "100%",
                            }
                            ]}
                    />

                    <View style={{ height: "100%", width: "100%", position: "absolute", alignItems: "center", justifyContent: "center", top: "20%" }}>
                    <Animatable.Image
                        animation="bounce"
                        easing="ease-out"
                        iterationCount={"infinite"}
                        iterationDelay={shakespeed}
                        duration={1500}
                        source={{ uri: imgBox}}
                        style={[styles.box, {height:"50%", width:"50%"}]}
                    />
                </View>
                <View style={{ height: "100%", width: "100%", position: "absolute" }}>
                    <View style={{ position:"absolute", height: "50%", width: "50%", right:"-5%", top:"-5%",}}>
                    <Animatable.Image
                            animation={animationMode}
                            easing="ease-in-out-sine"
                            iterationDelay={7000}
                            duration={1500}
                            iterationCount="infinite"
                            source={{ uri: imgMode}}
                            style={[styles.trefle, {height:"33%", width:"30%", position:"absolute"}]}
                        />
                    </View>

                </View>
                <View style={{ height: "100%", width: "100%", position: "absolute", }}>
                    <View style={{ height: "10%", width: "100%", bottom: "10%", position: "absolute" }}>
                        <View style={{ height: "100%", width: "100%", position: "absolute" }}>
                            <Animatable.Text animation={animationText} easing="ease-out" iterationCount="infinite" style={styles.pourcentage}>{pourcentage}%</Animatable.Text>
                        </View>
                        <View style={{ height: "100%", width: "100%", position: "absolute" }}>
                            <Text style={[styles.rarity, {color:colorBox}]}>{rarity}</Text>
                        </View>
                    </View>

                    <View style={{ height: "10%", width: "100%", position: "absolute", bottom: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <ProgressBar progress={bar} color={colorBox} style={{ bottom: "-45%", height: "80%", width: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} />
                    </View>

                </View>

            </View>

            <View style={{ height: "70%", width: "100%", position: "absolute", top: 0 }}>
                <View style={{ height: "100%", width: "100%", position: "absolute", alignItems: "center" }}>
                    <View style={{ height: "20%", width: "100%", position: "absolute", backgroundColor: "#18191d", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        
                        <View style={styles.statsContainer}>
                            <Text style={styles.statsText}>{collected}/{zbTotal}</Text>
                            <Image source={{ uri:"https://cdn.discordapp.com/attachments/775159078950535198/785895075581657168/zb.png" }} style={styles.icon} />
                        </View>

                        <View style={{ height: "5%", width: "100%", position: "absolute", backgroundColor: colorBox, bottom: 0, opacity: 0.4 }}>

                        </View>
                    </View>
                    <View style={{ height: "60%", width: "100%", position: "absolute", justifyContent: "center" }}>
                        <View style={{ left: "5%" }}>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View><Icon name="check" size={40} color="#f3f3f3" style={{ opacity: 0.5 }} /></View>
                                <View><Text style={[styles.stat, { left: "8%" }]}>{entries}</Text></View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", top: "10%" }}>
                                <View><Icon name="graph-pie" size={40} color="#f3f3f3" style={{ opacity: 0.5 }} /></View>
                                <View><Text style={styles.stat}>{luck}%</Text></View>
                                
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{height:"40%", width:"100%", position:"absolute", justifyContent:"center"}}>

                    <View style={{height:"50%", width:"35%", right:0, bottom:0,backgroundColor:colorMode, position:"absolute", borderBottomLeftRadius:20, justifyContent:"center"}}>
                        <Text style={styles.mode}>{mode}</Text>


                    </View>
                </View>

            </View>

        </View>

        </View >
    )
}

// ~~~~ Style ~~~~  //
const styles = StyleSheet.create({

    card: {
        marginTop: '5%',
        width: "95%",
        height: "100%",
        backgroundColor: "#f3f3f3",
        borderRadius: 25,
    },

    image: {
        borderRadius: 20,
        alignItems: "center",
        position: "absolute",
    },
    box: {
        alignItems: "center",
        position: "absolute",

    },
    trefle: {
        position: "absolute",
        left:"10%",
        bottom:"25%",
        opacity:0.9

    },
    FadeAway_discover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    pourcentage: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#f3f3f3",
        textAlign: "right",
        marginRight: "3%",
        opacity: 0.5
    },
    rarity: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "left",
        marginLeft: "3%",
        opacity: 0.5,
    },
    header: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#f3f3f3",
        marginRight:"5%",
        textAlign:"right"
        
    },
    stat: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#f3f3f3",
        opacity: 0.5,
        marginLeft: "17%"
    },
    appContainer: {
        flex: 1,
      },
      statsContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        height: "100%"
      },
      icon: {
        width: "12%",
        height: "110%",
        top: "0.5%",
        opacity:0.7
      },
      statsText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
        paddingRight: 5,
        opacity:0.7
      },
      mode: {
        fontWeight: 'bold',
        color: '#f3f3f3',
        fontSize: 25,
        textAlign:"center",
        textAlignVertical:"center"
      },
});


// ~~~~ Props ~~~~  //
Cardbox.propTypes = {

    // Type
    imgBox:      PropTypes.string,
    colorBox:    PropTypes.string,
    rarity:      PropTypes.string,
    collected:   PropTypes.number,
    entries:     PropTypes.number,
    mode   :     PropTypes.string,
};
