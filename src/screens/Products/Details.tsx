import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Stars from 'react-native-stars';
import PicturesSwiper from './PicturesSwiper';


export default function ProductDetails() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF",
        }}>
            <View style={{
                flexDirection: "row",
                height: 340,
                width: "100%",
            }}>

                <PicturesSwiper />
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                width: "100%",
                paddingHorizontal: 20
            }}>
                <View style={{
                    width: "65%"
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: "#4f4a4a"
                    }}>Casque DJI</Text>
                </View>
                <View style={{
                    width: "35%"
                }}>
                    <Text style={{
                        fontSize: 9,
                        color: "#4f4a4a"
                    }}>Customers Rating</Text>
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}

                        />
                        <Text style={{
                            fontSize: 8,
                            marginHorizontal: 5,
                            paddingTop: 4,
                            color: "#b3aeae"
                        }}>
                            84 Reviews
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{
                    fontSize: 16,
                    color: "#b3aeae"
                }}>500€</Text>
                <Text style={{
                    fontSize: 14,
                    lineHeight: 20,
                    color: "#b3aeae",
                    marginTop: 20
                }}>
                    Beautiful DJI Mask for quality FPV  :)
            </Text>
            </View>

            <ScrollView
                style={{ marginTop: 40, paddingHorizontal: 15 }}
                horizontal
                showsHorizontalScrollIndicator={false}

            >
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f6fb",
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    marginRight: 20,
                }}>
                    <Image
                        source={{ uri: "https://www.studiosport.fr/upload/image/casque-dji-fpv-p-image-211276-grande.jpg" }}
                        style={{ height: 80, width: 80 }}
                    />
                </View>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f6fb",
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    marginRight: 20
                }}>
                    <Image
                        source={{ uri: "https://www.studiosport.fr/upload/image/casque-dji-fpv-p-image-211274-grande.jpg" }}
                        style={{ height: 80, width: 80 }}
                    />
                </View>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f6fb",
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    marginRight: 20
                }}>
                    <Image
                        source={{ uri: "https://www1.djicdn.com/dps/115aaebe2866a998b59fc6d08f0dd662@1x.webp" }}
                        style={{ height: 80, width: 80 }}
                    />
                </View>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f6fb",
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    marginRight: 20
                }}>
                    <Image
                        source={{ uri: "https://drones.gulliver-modeles.fr/media/catalog/product/cache/1/image/76d4480fa602ec47be16246bd6356a56/e/0/e001.jpg" }}
                        style={{ height: 80, width: 80 }}
                    />
                </View>
            </ScrollView>


            <View style={{
                backgroundColor: "#000",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                padding: 12,
                marginBottom: 15,
                width: "95%",
                marginLeft: "2.5%"
            }}>
                <Icon
                    name="cart-plus"
                    size={25}
                    style={{ color: "white" }}
                />
                <Text style={{
                    fontSize: 20,
                    color: "#FFF",
                    marginHorizontal: 15
                }}>
                    Add to Cart
                        </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: "#000",
        backgroundColor: 'transparent',
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    myEmptyStarStyle: {
        color: "white"
    }
});
