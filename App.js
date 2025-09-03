import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { FlatListItem } from './src/FlatListItem.js';

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

const kWindowWidth = Dimensions.get('window').width;

function createColorStyle(color) {
  return {
    backgroundColor: color, 
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 0.1,
    flexGrow: 0,
    flexShrink: 0,
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bom dia, Aluno!</Text>
      <FlatList
        data={kExampleFlatListData}
        renderItem={({item}) => <FlatlistItem title={item.title} subtitle={item.subtitle} color={item.color}/>}
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
    fontSize: 32
  },
  item_title: {
    fontSize: 20
  },
  item_subtitle: {
    fontSize: 12
  },
  flatlist_item: {
    width: kWindowWidth*0.85,
    marginBottom: 10,
    backgroundColor: '#f0f2f3',

    borderRadius: 8,

    display: 'flex',
    flexDirection: 'row'
  },
  flatlist_text_container: {
    marginVertical: 8, 
    display: 'flex',
    flex: 1,
    paddingHorizontal: 20
  }
  
});
