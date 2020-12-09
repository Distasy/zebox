import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Title, Searchbar } from 'react-native-paper';
import Card from "../components/Cards/HorizontalCardv2";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ShopCard from '../components/Cards/ShopCard';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.container, { marginBottom: 90 }]}>
        <Title style={{ color: "white", fontWeight: "bold", marginBottom: 15, fontSize: 30 }}>Our Products</Title>
        <View>
          <Searchbar
            style={{ backgroundColor: "#18191d" }}
            iconColor="white"
            inputStyle={{ color: "white" }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            placeholderTextColor={'white'}
            selectionColor={'#ecd40a'}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Title style={{ color: "white", fontWeight: "bold", marginTop: 15, fontSize: 25 }}>Hot Offer</Title>
        </View>
        <Card vertical={false} size={1} title="Video ad" desc="Watch videos to earn zb." img='https://cdn.discordapp.com/attachments/775159078950535198/780877697081147392/ads.png' />
        <View style={{ marginBottom: 10 }}>
          <Title style={{ color: "white", fontWeight: "bold", fontSize: 30, marginTop: 15 }}>Recommended</Title>
        </View>

        <Grid>
          <Col style={{ alignItems: "center" }}>
            <ShopCard />
          </Col>
          <Col style={{ alignItems: "center" }}>
            <ShopCard />
          </Col>
        </Grid>
      </View>
    </ScrollView>
  );
}

const Gaming = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 10, marginBottom: 70 }}>
        <Grid>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
        </Grid>
      </View>
    </ScrollView>
  );
}

const Other = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 10, marginBottom: 70 }}>
        <Grid>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
            <Col style={{ alignItems: "center" }}>
              <ShopCard />
            </Col>
          </Row>
        </Grid>
      </View>
    </ScrollView>
  );
}

const initialLayout = { width: Dimensions.get('window').width };


export const ShopScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Gaming' },
    { key: 'third', title: 'Other' },
  ]);

  const renderScene = SceneMap({
    first: Home,
    second: Gaming,
    third: Other
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
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: "#303136",
    paddingTop: 10,
  },
  infos: {
    backgroundColor: "red",
  }
})