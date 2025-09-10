import { StyleSheet, Text, View, FlatList, Dimensions, SectionList } from 'react-native';
import { FlatListItem } from './src/FlatListItem.js';
import { SectionListItem } from './src/SectionListItem.js';

import { useFonts, Ultra_400Regular} from '@expo-google-fonts/ultra';

import FoodEntity from './src/FoodEntity.js'

const kExampleFlatListData = [
  {
    title: 'First Item',
    subtitle: 'First Subtitle',
    color: "#D287F9"
  },
  {
    title: 'Second Item',
    subtitle: 'Second Subtitle',
    color: "#F56255",
  },
  {
    title: 'Third Item',
    subtitle: 'Third Subtitle',
    color: "#7298FF"
  },
];

const kSectionListData = [
  {
    title: 'Food',
    data: [FoodEntity('Pizza', 20), FoodEntity('Burger', 12), FoodEntity('Butter Chicken', 22)],
  },
  {
    title: 'Sides',
    data: [FoodEntity('Fries', 4), FoodEntity('Onion Rings', 6), FoodEntity('Nugget', 2)],
  },
  {
    title: 'Drinks',
    data: [FoodEntity('Water', 1), FoodEntity('Lemonade', 2), FoodEntity('Coke', 3)],
  },
  {
    title: 'Desserts',
    data: [FoodEntity('Cheese Cake', 4), FoodEntity('Ice Cream', 6)],
  },
];

const kWindowWidth = Dimensions.get('window').width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Ultra_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bom dia, Aluno!</Text>
      <FlatList
        data={kExampleFlatListData}
        renderItem={({item}) => <FlatlistItem title={item.title} subtitle={item.subtitle} color={item.color}/>}
      />
      <SectionList
        sections={kSectionListData}
        keyExtractor={(item, index) => item+index}
        renderItem={({item}) =>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 40,
    fontSize: 32,
    fontFamily: 'Ultra_400Regular'
  },

});
