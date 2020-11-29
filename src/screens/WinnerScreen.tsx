import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Profil from "../components/WinnerMenu/WinnerProfil";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView } from "react-native-gesture-handler";

const FirstRoute = () => (
  <ScrollView>
    <View style={{ alignItems: "center" }}>
        <View style={{flex: 1, marginBottom: 20}}>
            <Profil borderL="#f3f3f3" pseudo="Tchoow" date="2" img="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png" box="https://cdn.discordapp.com/attachments/775159078950535198/775468015059206144/white.png"/>
        </View>

        <View style={{flex: 1, marginBottom: 20}}>
          <Profil borderL="red" pseudo="Quentin" date="10" img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png" box="https://cdn.discordapp.com/attachments/775159078950535198/775468013637337108/red.png"/>
        </View>
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView>
    <View style={[styles.container, { alignItems: "center" }]}>
      <View style={{flex: 1, marginBottom: 20}}>
          <Profil borderL="#f3f3f3" pseudo="Tchoow" date="2" rarity="Rare" nameItem="drone" nbZb={502 }imgItem="https://www.drone-fpv-racer.com/23137-large_default/diatone-mxc-taycan-cinewhoop-duct-3-frame-kit.jpg" img="https://cdn.discordapp.com/attachments/775159078950535198/775832708479844392/avatar8.png" box="https://cdn.discordapp.com/attachments/775159078950535198/775468015059206144/white.png" box2="https://cdn.discordapp.com/attachments/775159078950535198/781998871706337350/white.png"/>
      </View>

      <View style={{flex: 1, marginBottom: 20}}>
        <Profil borderL="#e07222" pseudo="Quentin" date="10" rarity="Commun" nameItem="Arduino" nbZb={2351} imgItem="https://static.fnac-static.com/multimedia/Images/EC/EC/76/65/6649580-1505-1540-1/tsp20171117184932/Carte-Arduino-UNO-65139-ATMega328.jpg#d58692f7-cff1-4736-baab-ecb7bfd15d0e" img="https://cdn.discordapp.com/attachments/775159078950535198/775831377689182208/avatar1.png" box="https://cdn.discordapp.com/attachments/775159078950535198/775468010948657152/orange.png" box2="https://cdn.discordapp.com/attachments/519799997534044170/781994980407377920/box_oppen3_orange.png"/>
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

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ecd40a' }}
      style={{ backgroundColor: '#333', marginBottom: 20 }}
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
  }
});

