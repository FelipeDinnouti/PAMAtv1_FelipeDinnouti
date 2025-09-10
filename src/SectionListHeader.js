import { StyleSheet, Text, View, FlatList, SectionList, Dimensions } from 'react-native';

const kWindowWidth = Dimensions.get('window').width;
  
export default SectionListHeader = ({title}) => (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
});
