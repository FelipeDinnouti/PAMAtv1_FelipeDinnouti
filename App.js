import { StyleSheet, Text, View, FlatList, Dimensions, SectionList } from 'react-native';

import FlatListItem from './src/FlatListItem.js';
import SectionListItem from './src/SectionListItem.js';
import SectionListHeader from './src/SectionListHeader.js'

import FoodStruct from './src/FoodStruct.js'

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
    data: [FoodStruct('Pizza', 20), FoodStruct('Burger', 12), FoodStruct('Butter Chicken', 22)],
  },
  {
    title: 'Sides',
    data: [FoodStruct('Fries', 4), FoodStruct('Onion Rings', 6), FoodStruct('Nugget', 2)],
  },
  {
    title: 'Drinks',
    data: [FoodStruct('Water', 1), FoodStruct('Lemonade', 2), FoodStruct('Coke', 3)],
  },
  {
    title: 'Desserts',
    data: [FoodStruct('Cheese Cake', 4), FoodStruct('Ice Cream', 6)],
  },
];

const kWindowWidth = Dimensions.get('window').width;

export default function App() {
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

        keyExtractor={(item, index) => item.name+index}

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
  },
  list: {
    height: 600
  }
});
