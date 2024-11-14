import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Image } from 'react-native';

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

const database = [
  {data:[
      {key: "Red Velvet", img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/02/red-velvet-cake-recipe.jpg"},
      {key: "Triple Chocolate Cake", img:"https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg"}
    ],
    title: "Cake", bgcolor: "pink"},
  {data:[
      {key: "Pretzels", img:"https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg"},
      {key: "Banana Bread", img:"https://sallysbakingaddiction.com/wp-content/uploads/2018/10/moist-banana-bread.jpg"}
    ],
    title: "Bread", bgcolor: "lightblue"},
  {data:[
      {key: "Lemon Meringue", img:"https://sallysbakingaddiction.com/wp-content/uploads/2018/03/slice-of-lemon-meringue-pie.jpg"},
      {key: "Pumpkin Pie", img:"https://sallysbakingaddiction.com/wp-content/uploads/2014/10/sallys-baking-addiction-pumpkin-pie.jpg"}
    ],
    title: "Pie", bgcolor: "green"},
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{item.key}</Text>
          <View><Image source={{ uri: item.img }} style={styles.imgStyle} /></View>
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <View style={{borderWidth: 1, padding: 20}}><Button title={"ADD RECIPE"} /></View>
        <SectionList style={{padding: 20}} sections={database} renderItem={renderItem}
                     renderSectionHeader={({ section: { title, bgcolor } }) => (
                         <View style={[styles.header, { backgroundColor: bgcolor }]}>
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}
        />
      </View>
  );
};

export default App;
