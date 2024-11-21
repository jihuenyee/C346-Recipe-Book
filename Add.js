import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, StatusBar} from 'react-native';
import {database} from "./Data.js";

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');

    return (
        <View>
            <StatusBar />
            <Text>Name:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setName(text)} />
            <Text>Image Link:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImg(text)} />
            <Button
                title={"Submit"}
                onPress={() => {
                    let indexnum = 0; // Default index; customize as needed
                    let item = { key: name, img: img };
                    database[indexnum].data.push(item);
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};


export default Add;
