import { StyleSheet, Text, View, FlatList, Dimensions, SectionList } from 'react-native';

import FlatListItem from './src/FlatListItem.js';
import SectionListItem from './src/SectionListItem.js';
import SectionListHeader from './src/SectionListHeader.js'

import { useFonts, Ultra_400Regular} from '@expo-google-fonts/ultra';
import FoodEntity from './src/FoodEntity.js'

const kExampleFlatListData = [
  {
    id: 0,
    title: 'First Item',
    subtitle: 'First Subtitle',
    color: "#D287F9"
  },
  {
    id: 1,
    title: 'Second Item',
    subtitle: 'Second Subtitle',
    color: "#F56255",
  },
  {
    id: 2,
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
      <Text style={styles.title}>Good morning!</Text>
      <FlatList style={styles.list}
        data={kExampleFlatListData}
        // React uses the as a unique identifier for the item, meaning it can re-render it properly
        keyExtractor={(item) => item.id}
        // How it renders the item 
        renderItem={({item}) => <FlatListItem title={item.title} subtitle={item.subtitle} color={item.color}/>}
      />
      
      <Text style={styles.title}>Foodstuffs</Text>
      
      <SectionList
        sections={kSectionListData}

        keyExtractor={(item) => item.id}

        renderItem={({item}) => <SectionListItem name={item.name} price={item.price}/>}
        renderSectionHeader={({section}) => <SectionListHeader title={section.title}/>}
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
    marginBottom: 20,
    marginTop: 60,
    fontSize: 32,
    fontFamily: 'Ultra_400Regular'
  },
  list: {
    height: 600
  }
});
