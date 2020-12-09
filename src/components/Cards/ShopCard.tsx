import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function ShopCard() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={ () => navigation.navigate('Details') } style={{width: "100%", alignItems: "center"}}>
        <View style={styles.card}>
            <View style={{ position: "absolute", top: 0 }}>
                <IconButton
                    icon="target"
                    color="#333"
                    size={20}
                    style={{ backgroundColor: "white" }}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View style={{ position: "absolute", top: -15, right: -15 }}>
                    <IconButton
                        icon="plus"
                        color="red"
                        size={30}
                        style={{ backgroundColor: "white", width: 45, height: 45, borderRadius: 30 }}
                        onPress={() => console.log('Pressed')}
                    />
                    
            </View>
            <View>
                <Image style={{ width: "100%", height: 150 }} source={{ uri: "https://media.discordapp.net/attachments/775159078950535198/775468147582697522/logo_ZeBox_png.png?width=530&height=530" }} />
            </View>
            <View>
                <Text style={{ marginLeft: 10, fontSize: 15, color: "#f3f3f3" }}>Article 1</Text>
                <Grid>
                    <Col style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "#f3f3f3" }}>50€</Text>
                    </Col>
                    <Col>
                        <View style={{ flexGrow: 1, flexDirection: "row", alignSelf: "flex-end", position: "absolute", top: 5, right: 10 }}>
                            <View><Icon color="yellow" name="star" /></View>
                            <View><Icon color="yellow" name="star" /></View>
                            <View><Icon color="yellow" name="star" /></View>
                            <View><Icon color="yellow" name="star" /></View>
                            <View><Icon name="star" /></View>
                        </View>
                    </Col>
                </Grid>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(47, 196, 237, 0.5)",
        borderRadius: 15,
        width: "90%",
        height: 230,
        paddingTop: "15%",
    },
})