import React from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import Profil from "../components/WinnerMenu/WinnerProfil";
import Ranking from "../components/WinnerMenu/RankingProfil";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Foundation';


const SecondRoute = () => (
  <View style={[styles.container, { alignItems: "center", width: "100%" }]}>
    <ScrollView style={{ width: "100%" }}>

      <View style={{ height: "12%", width: "100%", alignItems: "center", marginBottom: 20 }}>
        <View style={styles.countdown}>

        </View>

      </View>


      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#49c8eb"
          pseudo="Mr Pivert"
          ranking={1}
          nbZb={9999}
          youtuber={true}
          partner={true}
          online={true}
          group="Vioume"
          progress={0.3}
          goal="Ps5"
          level={3}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png" />
      </View>

      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#e2844e"
          pseudo="Lilian"
          ranking={2}
          nbZb={2351}
          youtuber={true}
          partner={true}
          online={true}
          group="Vioume"
          progress={0.25}
          goal="Skin Fortnite"
          level={5}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831540810776586/avatar3.png" />
      </View>

      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#f2e5b1"
          pseudo="Florent"
          nbZb={2351}
          youtuber={true}
          partner={true}
          online={true}
          ranking={3}
          group="Fortool"
          progress={0.9}
          goal="dji fpv"
          level={1}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831541317632090/avatar6.png" />
      </View>
      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#7e6992"
          pseudo="Quentin haha"
          ranking={10}
          nbZb={123}
          youtuber={false}
          partner={true}
          online={false}
          group="Distasy"
          progress={0.2}
          goal="Dji fpv"
          level={6}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png" />
      </View>
      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#7e6992"
          pseudo="Quentin haha"
          ranking={10}
          nbZb={123}
          online={true}
          group="Fortool"
          progress={0.1}
          goal="Dji fpv"
          level={3}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png" />
      </View>
      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Ranking colorUser="#7e6992"
          pseudo="Quentin haha"
          ranking={10}
          nbZb={123}
          online={false}
          group="Fortool"
          progress={0.6}
          goal="Dji slip"
          level={7}
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png" />
      </View>
      <View style={{ marginBottom: "40%" }}>
      </View>

    </ScrollView>
    <View style={styles.me}>

      <View style={{ height: "100%", width: "100%", top: "5%" }}>
        <Image source={{ uri: "https://cdn.discordapp.com/attachments/775159078950535198/775831541129150464/avatar7.png" }} style={[styles.userLogo, { height: 60, width: 60, }]} />
      </View>

      <View style={{ height: "100%", width: "100%", position: "absolute", alignItems: 'center', top: "5%" }}>
        <Text style={styles.info}>562 zb</Text>
      </View>
      <View style={{ height: "100%", width: "100%", position: "absolute", alignItems: 'center', top: 0 }}>
        <View style={{ height: "40%", width: "40%", top: "60%", position: "absolute", alignItems: 'center', backgroundColor: "rgba(182,220,119,0.7)", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <Text style={[styles.reward, { paddingTop: "5%" }]}>Reward: 0</Text>
        </View>
      </View>
      <View style={{ height: "100%", width: "25%", position: "absolute", backgroundColor: 'rgba(182,220,119,0.7)', borderBottomLeftRadius: 20, right: 0 }}>
        <View style={{ alignItems: "center", top: 0 }}>
          <Text style={styles.ranking}>#423</Text>
        </View>
        <View style={{ alignItems: "center", top: 0 }}>
          <Icon name="arrow-up" size={35} color="#f3f3f3" />
        </View>
      </View>

    </View>
  </View>
);

const FirstRoute = () => (
  <ScrollView>
    <View style={[styles.container, { alignItems: "center", paddingTop: 15 }]}>
      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Profil userColor="#f3f3f3"
          pseudo="Tchoow"
          time={5}
          rarity="Rare"
          nameItem="drone"
          nbZb={502}
          imgItem="https://www.drone-fpv-racer.com/23137-large_default/diatone-mxc-taycan-cinewhoop-duct-3-frame-kit.jpg"
          img="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png"
          box="https://cdn.discordapp.com/attachments/775159078950535198/775468015059206144/white.png"
          box2="https://cdn.discordapp.com/attachments/775159078950535198/781998871706337350/white.png" />
      </View>

      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Profil userColor="#e07222"
          pseudo="Quentin"
          time={5}
          rarity="Commun"
          nameItem="Arduino"
          nbZb={2351}
          imgItem="https://static.fnac-static.com/multimedia/Images/EC/EC/76/65/6649580-1505-1540-1/tsp20171117184932/Carte-Arduino-UNO-65139-ATMega328.jpg#d58692f7-cff1-4736-baab-ecb7bfd15d0e"
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png"
          box="https://cdn.discordapp.com/attachments/775159078950535198/775468010948657152/orange.png"
          box2="https://cdn.discordapp.com/attachments/775159078950535198/782638687459475466/orange.png" />
      </View>
      <View style={{ flex: 1, marginBottom: 20, alignItems: "center" }}>
        <Profil userColor="#2fc4ed"
          pseudo="Segali"
          time={999}
          rarity="Legendary"
          nameItem="ZIZI"
          nbZb={2640}
          imgItem="https://static.fnac-static.com/multimedia/Images/EC/EC/76/65/6649580-1505-1540-1/tsp20171117184932/Carte-Arduino-UNO-65139-ATMega328.jpg#d58692f7-cff1-4736-baab-ecb7bfd15d0e"
          img="https://cdn.discordapp.com/attachments/775159078950535198/775831541129150464/avatar7.png"
          box="https://cdn.discordapp.com/attachments/775159078950535198/775468009702686760/light_blue.png"
          box2="https://cdn.discordapp.com/attachments/775159078950535198/781998866970050580/light_blue.png" />
      </View>


    </View>
  </ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export const WinnerScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Rewards' },
    { key: 'second', title: 'ZBCoins' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ecd40a' }}
      style={{ backgroundColor: '#333', }}
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
  scene: {
    flex: 1,
  },
  test: {
    color: 'white'
  },
  me: {
    position: 'absolute',
    bottom: 0,
    borderColor: 'rgba(182,220,119,0.7)',
    borderTopWidth: 10,
    opacity: 0.7,
    backgroundColor: "#333333",
    width: "100%",
    height: "15%",
    marginBottom: 60
  },
  userLogo: {
    borderRadius: 90,
    position: "absolute",
    left: "5%",
    top: "10%"
  },
  info: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  ranking: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center"
  },
  reward: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center"
  },
  countdown: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#4c5054",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: "5%",
    opacity: 1,
  },
  FadeAway_discover: {
    borderRadius: 20,
    width: '80%',
    height: '100%',

  },
});