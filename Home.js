import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Image } from 'react-native';
import { database } from "./Data.js";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imgStyle: {
    width: 200,
    height: 300,
    margin: 10,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
  },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { key: item.key, index: index })}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{item.key}</Text>
                    <Image source={{ uri: item.img }} style={styles.imgStyle} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <View style={{ borderWidth: 1, padding: 20 }}>
                <Button title={"ADD RECIPE"} onPress={() => navigation.navigate('Add')} />
            </View>
            <SectionList
                style={{ padding: 20 }}
                sections={database}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <View style={[styles.header, { backgroundColor: bgcolor }]}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};


export default Home;
