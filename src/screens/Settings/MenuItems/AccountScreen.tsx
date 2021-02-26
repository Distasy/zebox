import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const InfosRoute = () => {
    const [text, setText] = React.useState('');
    return (

    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Nicknames"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="First Name"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Last Name"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="E-mail adress"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Phone number"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <Button icon="content-save" mode="contained" style={{backgroundColor: "#D4BE09"}}>
                Save
            </Button>
        </View>

    </ScrollView>
);
    }

const LocationRoute = () => {
    const [text, setText] = React.useState('');
    return (
    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Country"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Postal Code"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="City"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <TextInput
                style={{ backgroundColor: "#18191d" }}
                placeholderTextColor={'white'}
                selectionColor={'#ecd40a'}
                label="Address"
                theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                value={text}
                multiline={true}
                numberOfLines={3}
                onChangeText={text => setText(text)}
            />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <Button icon="content-save" mode="contained" style={{backgroundColor: '#D4BE09'}}>
                Save
            </Button>
        </View>

    </ScrollView>
);
}

const initialLayout = { width: Dimensions.get('window').width };

export default function AccountScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Informations' },
        { key: 'second', title: 'Address' },
    ]);

    const renderScene = SceneMap({
        first: InfosRoute,
        second: LocationRoute,
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
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#333333",
        paddingTop: 30
    }
})