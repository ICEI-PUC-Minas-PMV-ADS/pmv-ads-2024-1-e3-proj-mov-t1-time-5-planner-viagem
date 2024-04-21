import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const screenTitle = 'Gerenciamento de Notas';

const initialData = [
  { id: '1', title: 'Itinerário da viagem', items: [] },
  { id: '2', title: 'Locais para visitar', items: [] },
  { id: '3', title: 'Atividades planejadas', items: [] },
  { id: '4', title: 'Horários', items: [] },
];

const NotesManagementScreen = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const [editItemId, setEditItemId] = useState('');
  const [editItemIndex, setEditItemIndex] = useState(-1);
  const [newItemText, setNewItemText] = useState({});
  
  // Função para adicionar um item a uma lista
  const handleAddItem = (itemId) => {
    const text = newItemText[itemId] || '';
    if (!text.trim()) {
      Alert.alert('Aviso', 'Por favor, insira um texto para adicionar.');
      return;
    }

    const updatedData = data.map((d) => {
      if (d.id === itemId) {
        return { ...d, items: [...d.items, text] };
      }
      return d;
    });

    setData(updatedData);
    setNewItemText({ ...newItemText, [itemId]: '' });
  };
  
  // Função para editar um item
  const handleEdit = (itemId, itemIndex) => {
    if (editMode && editItemId === itemId && editItemIndex === itemIndex) {
      const updatedData = data.map((d) => {
        if (d.id === itemId) {
          const updatedItems = [...d.items];
          updatedItems[itemIndex] = editText;
          return { ...d, items: updatedItems };
        }
        return d;
      });

      setData(updatedData);
      setEditMode(false);
      setEditText('');
      setEditItemId('');
      setEditItemIndex(-1);
    } else {
      setEditMode(true);
      const item = data.find((d) => d.id === itemId).items[itemIndex];
      setEditText(item);
      setEditItemId(itemId);
      setEditItemIndex(itemIndex);
    }
  };

  // Função para excluir um item de uma lista
  const handleDeleteItem = (itemId, itemIndex) => {
    const updatedData = data.map((d) => {
      if (d.id === itemId) {
        const updatedItems = [...d.items];
        updatedItems.splice(itemIndex, 1);
        return { ...d, items: updatedItems };
      }
      return d;
    });

    setData(updatedData);
  };

  // Renderiza um item para o FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.header}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => handleAddItem(item.id)}>
          <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.content}>
        {item.items.map((listItem, itemIndex) => (
          <View key={itemIndex} style={styles.listItem}>
            {editMode && editItemId === item.id && editItemIndex === itemIndex ? (
              <TextInput
                style={styles.editInput}
                value={editText}
                onChangeText={setEditText}
                autoFocus
              />
            ) : (
              <Text style={styles.itemText}>{listItem}</Text>
            )}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEdit(item.id, itemIndex)}>
                <Text style={styles.buttonText}>
                  {editMode && editItemId === item.id && editItemIndex === itemIndex ? 'Salvar' : 'Editar'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteItem(item.id, itemIndex)}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TextInput
          style={styles.newItemInput}
          value={newItemText[item.id] || ''}
          onChangeText={(text) => setNewItemText({ ...newItemText, [item.id]: text })}
          placeholder="Adicionar novo item"
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>{screenTitle}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  editInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  newItemInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default NotesManagementScreen;