import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native";
import Swiper from 'react-native-swiper';
import Card from "../components/Cards/HorizontalCardv2";
import { Col, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { CardFour, CardEcomFour } from "react-native-card-ui";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FlipCard from 'react-native-flip-card';



const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#303136'}]} >
    <ScrollView>
      <View>
      <CardEcomFour
            title={"Daily Reward !"}
            price={"FREE"}
            image={{uri: "https://cdn.discordapp.com/attachments/775159078950535198/781160870415302746/free.png"}}
            buttonText={"CLAIM NOW !"}
            buttonColor={"#ecd40a"}
            onClickButton={() => alert("Has clicked")}
          />
      </View>
          <View>
            <Text style={{fontWeight: "bold", fontSize: 30, color: "white", marginBottom: 10, marginLeft: 10}}>Popular</Text>
            <View style={{ alignItems: "center"}}>
              <Card vertical={false} size={1} title="Video ad" desc="Watch videos to earn zb." img='https://cdn.discordapp.com/attachments/775159078950535198/780877697081147392/ads.png' />
            </View>
            <Text style={{fontWeight: "bold", fontSize: 30, color: "white", marginBottom: 10, marginLeft: 10}}>Surveys</Text>
            
            <View style={{ alignItems: "center"}}>

            <Grid>
              <Col style={{ alignItems: "center"}}>
                <Card vertical={true}  size={1.1} gradiant={true} title="OfferDaddy" lowerPrice={100} img='https://cdn.discordapp.com/attachments/775159078950535198/781089281296039976/offer_dady.png' />
              </Col>
              <Col style={{ alignItems: "center"}}>
                <Card vertical={true}  size={1.1} gradiant={true} title="TheoremReach" lowerPrice={300} img='https://cdn.discordapp.com/attachments/775159078950535198/781108126493048862/theorem_reach.png' />
              </Col>
            </Grid>

            </View>

            <Text style={{fontWeight: "bold", fontSize: 30, color: "white", marginBottom: 10, marginLeft: 10}}>Offerwalls</Text>

            <View style={{ alignItems: "center", marginBottom: 90}}>
            <Grid>
              <Col style={{ alignItems: "center"}}>
                <Card vertical={true}  size={1.1} gradiant={true} title="AdscendMedia" lowerPrice={150} img='https://cdn.discordapp.com/attachments/775159078950535198/781116289145765928/adsence.png' />
              </Col>
              <Col style={{ alignItems: "center"}}>
                <Card vertical={true}  size={1.1} gradiant={true} title="OfferDaddy" lowerPrice={200} img='https://cdn.discordapp.com/attachments/775159078950535198/781089281296039976/offer_dady.png' />
              </Col>
              
            </Grid>

            
          </View>
        </View>

    </ScrollView>
  </View>

);
 
const SecondRoute = () => (
  <View>
    <ScrollView>
      <FlipCard flipHorizontal={true} flipVertical={false}>
        <View>
        <CardFour showButton={false}
            onClicked={() => {
              alert("Buy now");
            }}
            image={{
              uri:
                "https://cdn.discordapp.com/attachments/775159078950535198/781190774569697290/pack_zebox.png"
            }}
            date={" "}
            off={" "}
            offText={
              " "
            }
            buttonText={"BUY NOW!"}
          />
          </View>

          <View>
        <CardFour showButton={true} countTime={350000} countSize={18}
            onClicked={() => {
              alert("Buy now");
            }}
            image={{
              uri:
                "https://cdn.discordapp.com/attachments/775159078950535198/781197242605633576/pack_zebox_back.png"
            }}
            date={""}
            off={""}
            offText={
              ""
            }
            buttonText={"BUY NOW!"}
          />
          </View>
          </FlipCard>
      <View>


        <View style={styles.gifts}>
          <Text style={{fontWeight: "bold", fontSize: 30, color: "white", marginBottom: 10, marginLeft: 10}}>Purchase</Text>

          <Swiper activeDot={
            <View
              style={{
                backgroundColor: '#ecd40A',
                width: 20,
                height: 8,
                borderRadius: 4,
              }}
            />
          } 
          paginationStyle={{
            top: '-120%',
            left: null,
            right: 10
          }}
            style={{ height: 240 }} showsPagination={true} autoplayTimeout={6} autoplay>
            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780818129596973076/shop0.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813248861569024/shop1.png' />
                </Col>
              </Grid>
            </View>
            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813251024781352/shop2.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813254128959579/shop3.png' />
                </Col>
              </Grid>
            </View>
            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813257442197514/shop4.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813260559089674/shop5.png' />
                </Col>
              </Grid>
            </View>
          </Swiper>
        </View>


        <View style={[styles.gifts, {marginBottom: 40, marginTop: -30}]}>
          <Text style={{fontWeight: "bold", fontSize: 30, color: "white", marginBottom: 10,  marginLeft: 10}}>Subscription</Text>

          <Swiper activeDot={
            <View
              style={{
                backgroundColor: '#ecd40A',
                width: 20,
                height: 8,
                borderRadius: 4,
              }}
            />
          } 
          paginationStyle={{
            top: '-120%',
            left: null,
            right: 10
          }} style={{ height: 240 }} showsPagination={true} autoplayTimeout={8} autoplay>
            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813263776251944/shop6.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813267353993286/shop7.png' />
                </Col>
              </Grid>
            </View>
            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813272873435137/shop8.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813274656276490/shop9.png' />
                </Col>
              </Grid>
            </View>

            <View style={styles.slide_discover}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813278422630451/shop10.png' />
                </Col>

                <Col style={{alignItems: 'center'}}>
                  <Card vertical={true} size={1.1} img='https://cdn.discordapp.com/attachments/775159078950535198/780813313311375410/shop11.png' />
                </Col>
              </Grid>
            </View>
          </Swiper>
        </View>

      </View>
      </ScrollView>
    </View>
);
 
const initialLayout = { width: Dimensions.get('window').width };


export const EarnScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Free' },
    { key: 'second', title: 'Paying' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ecd40a' }}
      style={{ backgroundColor: '#333' }}
    />
  );
  return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303136",
  },
  border: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10, },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  discover: {
    flex: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  slide_discover: {
    flex: 1,
    alignItems: 'center',
  },
  gifts: {
    flex: 0,
    height: 290,
  },
  scene: {
    flex: 1,
  },
});
