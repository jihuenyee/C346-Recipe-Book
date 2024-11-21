import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, StatusBar} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {database} from "./Data.js";

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <StatusBar />
            <Text>Name:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setName(text)} />
            <Text>Image Link:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImg(text)} />
            <RNPickerSelect
                defaultValue={{label: "Cake", value: "Cake"}}
                onValueChange={(value)=>setType(value)}
                items={[
                    {label: "Cake", value: "Cake"},
                    {label: "Bread", value: "Bread"},
                    {label: "Pie", value: "Pie"},
                ]}
            />
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
