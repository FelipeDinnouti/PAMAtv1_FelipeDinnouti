import { StyleSheet, Text, View, FlatList, SectionList, Dimensions } from 'react-native';

const kWindowWidth = Dimensions.get('window').width;

function createColorStyle(color) {
    console.log("Creating color style for item list with color: " + color)

    return {
      backgroundColor: color, 
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      flex: 0.1,
      flexGrow: 0.1,
      flexShrink: 0.1,
    }
  }
  
export default SectionListItem = ({name, price}) => (
    <View style={styles.flatlist_item}>
      <View style={createColorStyle(color)}>
      </View>
  
      <View style={styles.flatlist_text_container}>
        <Text style={styles.item_title}>{title}</Text>
        <Text style={styles.item_subtitle}>{subtitle}</Text>
      </View>
    </View>
);

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
