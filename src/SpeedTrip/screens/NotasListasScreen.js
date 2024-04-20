import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Note from '../components/Notes';

const screenTitle = 'Notas/Listas';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);

const NotesListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{screenTitle}</Text>
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      <Note text={'Task 1'}></Note>
      <Note text={'Task 2'}></Note>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default NotesListScreen;
