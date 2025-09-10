import { StyleSheet, Text, View, FlatList, SectionList, Dimensions } from 'react-native';

const kWindowWidth = Dimensions.get('window').width;
  
export default SectionListItem = ({name, price}) => (
    <View style={styles.item}>
      <View style={styles.text_container}>
        <Text style={styles.item_title}>{name}</Text>
        <Text style={styles.item_subtitle}>{price}$</Text>
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
item: {
    width: kWindowWidth*0.85,
    marginBottom: 10,
    backgroundColor: '#f0f2f3',

    borderRadius: 8,

    display: 'flex',
    flexDirection: 'row'
},
text_container: {
    marginVertical: 8, 
    display: 'flex',
    flex: 1,
    paddingHorizontal: 20
}

});
