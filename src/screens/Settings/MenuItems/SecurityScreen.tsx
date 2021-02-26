import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, Button } from 'react-native-paper';

export default function SecurityScreen() {
    const [text, setText] = React.useState('');
    return (
        <ScrollView style={styles.container}>
             <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                <TextInput
                    style={{ backgroundColor: "#18191d" }}
                    placeholderTextColor={'white'}
                    selectionColor={'#ecd40a'}
                    label="Actual password"
                    theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                    value={text}
                    secureTextEntry={true}
                    onChangeText={text => setText(text)}
                />
            </View>

            <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                <TextInput
                    style={{ backgroundColor: "#18191d" }}
                    placeholderTextColor={'white'}
                    selectionColor={'#ecd40a'}
                    label="New password"
                    theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                    value={text}
                    secureTextEntry={true}
                    onChangeText={text => setText(text)}
                />
            </View>

            <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                <TextInput
                    style={{ backgroundColor: "#18191d" }}
                    placeholderTextColor={'white'}
                    selectionColor={'#ecd40a'}
                    label="Repeat password"
                    theme={{ colors: { primary: '#ecd40a', placeholder: 'white', text: 'white' } }}
                    value={text}
                    secureTextEntry={true}
                    onChangeText={text => setText(text)}
                />
            </View>

            <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                <Button icon="content-save" mode="contained" style={{backgroundColor: '#D4BE09'}}>
                    Save
                </Button>
            </View>
        </ScrollView>
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