import React, {useState} from "react";
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {database} from "./Data.js";

const Edit = ({ navigation, route }) => {
    const { key, index } = route.params;
    const [name, setName] = useState(key);

    return (
        <View>
            <Text>Name:</Text>
            <TextInput value={name} style={{ borderWidth: 1 }} onChangeText={(text) => setName(text)} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title={"Save"}
                        onPress={() => {
                            let indexnum = 1
                            if (route.params.type == "Cake"){
                                indexnum = 0;
                            }
                            else if (route.params.type == "Bread"){
                                indexnum = 1;
                            }
                            else if (route.params.type == "Pie"){
                                indexnum = 2;
                            }// Update this logic based on category
                            database[indexnum].data[index].key = name;
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title={"Delete"}
                        onPress={() => {
                            let indexnum = 0;
                            if (route.params.type == "Cake"){
                                indexnum = 0;
                            }
                            else if (route.params.type == "Bread"){
                                indexnum = 1;
                            }
                            else if (route.params.type == "Pie"){
                                indexnum = 2;
                            }// Update this logic based on category
                            Alert.alert("Are you sure?", '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        database[indexnum].data.splice(index, 1);
                                        navigation.navigate("Home");
                                    },
                                },
                                { text: 'No' },
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};


export default Edit;
