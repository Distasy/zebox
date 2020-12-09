import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

export default function PicturesSwiper() {
    return (
        <Swiper
            style={styles.wrapper}
            dotStyle={{
                backgroundColor: "#000",
                borderColor: "#000",
                borderWidth: 1,
                width: 10,
                height: 10,
                borderRadius: 10
            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                borderColor: "#000",
                borderWidth: 1,
                width: 10,
                height: 10,
                borderRadius: 10
            }}

        >
            <View style={styles.slide}>
                <Image
                    source={{ uri: "https://www.studiosport.fr/upload/image/casque-dji-fpv-p-image-211276-grande.jpg" }}
                    style={{ height: "100%", width: "100%" }}
                />

            </View>
            <View style={styles.slide}>
                <Image
                    source={{ uri: "https://www.studiosport.fr/upload/image/casque-dji-fpv-p-image-211273-grande.jpg" }}
                    style={{ height: "100%", width: "100%" }}
                />

            </View>
            <View style={styles.slide}>
                <Image
                    source={{ uri: "https://www.miniplanes.fr/images/products/448188/dji-goggles-fpv-racer-exp-dji_goggles_racer_ex_co_copy_1-1.jpg" }}
                    style={{ height: "100%", width: "100%" }}
                />

            </View>

        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        width: "100%"
    },

})