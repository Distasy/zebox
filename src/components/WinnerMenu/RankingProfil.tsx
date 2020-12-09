import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Foundation';
import { LinearGradient } from 'expo-linear-gradient';
import FlipCard from 'react-native-flip-card';
import { Audio } from 'expo-av';
import { ProgressBar } from 'react-native-paper';
import { Col, Grid } from "react-native-easy-grid";


export default function RankingProfil(props: { colorUser: any; img: any; nbZb: any; pseudo: any; ranking: any; partner: any; youtuber: any; online: any; progress: any; level: any; goal: any; group: any; }) {

    let rectoVerso = false;


    const on_press_handle = () => {

        if (rectoVerso === false) {
            (async () => {
                const play_yes = await Audio.Sound.createAsync(
                    require('../../../assets/sounds/zap.mp3'),
                    { shouldPlay: true }
                );
            })();
            rectoVerso = !rectoVerso;

        }
        else {
            (async () => {
                const play_yes = await Audio.Sound.createAsync(
                    require('../../../assets/sounds/zap2.mp3'),
                    { shouldPlay: true }
                );
            })();
            rectoVerso = !rectoVerso;

        }


    }



    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // ~~~~ Importation des props ~~~~  //
    const colorUser = props.colorUser;
    const img = props.img;
    const pseudo = props.pseudo;
    const nbZb = props.nbZb;
    const ranking = props.ranking;
    const partner = props.partner;
    const youtuber = props.youtuber;
    const online = props.online;
    const progress = props.progress;
    const goal = props.goal;
    const group = props.group;
    const level = props.level;

    let colorP;
    let colorY;
    let colorA;
    //const displayY2;
    // Online
    if (online == true) {
        colorA = "green";
    }
    else {
        colorA = "red";
    }

    // Partner
    if (partner == true) {
        colorP = "#333333";
    }
    else {
        colorP = "transparent";
    }


    // Video
    if (youtuber == true) {
        colorY = "#333333";
    }
    else {
        colorY = "transparent";
    }

    let trColor = "transparent";

    if (ranking == 1) {
        trColor = "#ecd40a";
    };
    if (ranking == 2) {
        trColor = "#9b9b9b";
    };
    if (ranking == 3) {
        trColor = "#764219";
    }

    // Condition à terminée 
    // if ( partner == true )

    return (
        <FlipCard flipHorizontal={true} flipVertical={false} friction={15} onFlipStart={on_press_handle} >
            <View>
                <View style={[styles.profil, {
                    width: windowWidth * 0.90, height: windowHeight * 0.15, borderColor: colorUser, borderLeftWidth: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                }]}>
                    <LinearGradient
                        start={[1.0, 0.4]}
                        end={[1.0, 2.0]}
                        colors={['rgba(51, 51, 51, 0.20)', '#333333', '#333333']}
                        style={styles.FadeAway_discover}>


                        <View style={{ position: "absolute", left: "5%", top: "18%" }}>
                            <Image source={{ uri: img }} style={[styles.image, { height: 70, width: 70, }]} />
                            <Icon name="trophy" size={50} color={trColor} style={{ left: "135%", bottom: "-70%", transform: [{ rotate: '12deg' }] }} />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: "center", width: "100%", height: "100%" }}>
                            <Text style={styles.pseudo}>{pseudo}</Text>
                            <Text style={[styles.money, { color: colorUser }]}>{nbZb} zb</Text>


                        </View>
                        <View style={[styles.sold, { backgroundColor: colorUser }]}>
                            <View style={{ alignItems: "center", top: "15%" }}>
                                <Text style={styles.ranking}>#{ranking}</Text>
                            </View>
                            <View style={{ alignItems: "center", top: "15%" }}>
                                <Icon name="arrow-up" size={35} color="#333333" />
                            </View>


                        </View>


                    </LinearGradient>
                </View>
            </View>



            <View>
                <View style={[styles.profil, {
                    width: windowWidth * 0.90, height: windowHeight * 0.15, borderColor: colorUser, borderRightWidth: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                }]}>
                    <LinearGradient
                        start={[1.0, 0.4]}
                        end={[1.0, 2.0]}
                        colors={['rgba(51, 51, 51, 0.20)', '#333333', '#333333']}
                        style={styles.FadeAway_discover}>

                        <View style={{ position: 'absolute', height: "100%", width: "12%", backgroundColor: colorUser, left: 0, borderRadius: 15, }}>
                            <View style={{ position: "absolute", justifyContent: "center", alignItems: 'center', width: "100%", height: "100%" }}>
                                <Icon name="power" size={30} color={colorA} />
                                <Icon name="video" size={30} color={colorY} />
                                <Icon name="social-500px" size={30} color={colorP} />
                            </View>
                        </View>


                        <View style={{ width: "100%", height: "100%"}}>
                        <Grid style={{ width: "100%", height: "100%" }}>
                        <Col style={{ width: "50%", height: "100%" }}>
                                <View style={{position:"absolute", width: "70%", height: "100%", right: 0}}>

                                    <View style={{ alignItems: "center", top: "5%" }}>
                                        <Icon name="info" size={30} color="#F3F3F3" />
                                    </View>


                                    <View style={{width: "100%", height: "50%", top: "12%", left: "-10%"}}>

                                        <View style={styles.alignIcon}>
                                            <Icon name="burst" size={25} color="#F3F3F3" />
                                            <Text style={[styles.infoBack, {marginLeft: "15%"}]}>Level {level}</Text>
                                        </View>
                                        <View style={styles.alignIcon}>
                                            <Icon name="results-demographics" size={25} color="#F3F3F3" />
                                            <Text style={[styles.infoBack, {marginLeft: "11%"}]}>{group}</Text>
                                        </View>

                                    </View>

                                </View>
                            </Col>

                            <Col style={{ width: "50%", height: "100%" }}>                            
                               
                                <View style={{width: "100%", height: "100%" }}>
                                    <View style={{ alignItems: "center", top: "5%" }}>
                                        <Icon name="target" size={30} color="#F3F3F3" />
                                    </View>
                                    <View style={{width: "100%", height: "50%", top: "12%"}}>

                                        <View style={styles.alignIcon}>
                                            <Icon name="shopping-cart" size={25} color="#F3F3F3" />
                                            <Text style={[styles.infoBack, {marginLeft: 10}]}>{goal}</Text>
                                        </View>
                                        <View style={styles.alignIcon}>
                                            <Icon name="graph-horizontal" size={25} color="#F3F3F3" />
                                            <View style={{marginLeft: "11%", width: "100%"}}>
                                                <ProgressBar progress={progress} color="#ecd40a" />
                                            </View>
                                            
                                        </View>

                                    </View>

                                </View>

                            </Col>



                        </Grid>
                        </View>







                        <View style={{ position: 'absolute', height: "100%", width: "100%", backgroundColor: colorUser, borderRadius: 13, opacity: 0.5 }}>

                            <View style={{ position: 'absolute', height: "100%", width: "50%", backgroundColor: "#4c5054", left: 0, opacity: 0.2 }}>

                            </View>


                            <View style={{ position: 'absolute', height: "100%", width: "50%", backgroundColor: "#292626", right: 0, opacity: 0.2 }}>
                            </View>

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
        position: "absolute",
        left: "5%",
    },
    boxFront: {
        borderRadius: 90,
        height: 100,
        width: 100,
        position: "absolute",
        right: "4%",
    },

    boxBack: {
        borderRadius: 90,
        height: 100,
        width: 100,
        position: "absolute",

    },
    pseudo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    ranking: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333333",
        justifyContent: "center",
        alignItems: "center"

    },
    time: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#ecd40a",
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
        color: "white",
        position: "absolute",
        right: "10%",

    },
    zb: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        top: 10

    },
    sold: {
        position: "absolute",
        right: 0,
        borderRadius: 20,
        width: "25%",
        height: "100%",
    },
    money: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center"

    },
    activity: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        color: "#f3f3f3"

    },

    infoBack: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#F3F3F3"

    },
    alignIcon: {
        paddingLeft: 8,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }
  
});


// ~~~~ Props ~~~~  //
RankingProfil.propTypes = {

    // Type
    colorUser: PropTypes.string,
    img: PropTypes.string,
    pseudo: PropTypes.string,
    ranking: PropTypes.number,
    nbZb: PropTypes.number,
    partner: PropTypes.bool,
    youtuber: PropTypes.bool,
    online: PropTypes.bool,
    level: PropTypes.number,
    goal: PropTypes.string,
    group: PropTypes.string,
    progress: PropTypes.number,
};