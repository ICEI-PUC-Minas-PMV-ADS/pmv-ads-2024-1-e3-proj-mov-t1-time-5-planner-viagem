import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotaItem = ({nota, onDelete, onEdit, deleteIcon, editIcon}) => {
  const [concluida, setConcluida] = useState(false);

  const toggleConcluida = () => {
    setConcluida(!concluida);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggleConcluida}>
        <Icon
          name={concluida ? 'check-circle' : 'circle-thin'}
          size={24}
          color={concluida ? 'green' : '#ccc'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={[styles.itemText, concluida && styles.concluida]}>
        {nota.texto}
      </Text>
      <TouchableOpacity onPress={() => onEdit(nota)}>
        {editIcon && (
          <Icon
            name={editIcon.name}
            size={editIcon.size}
            color={editIcon.color}
            style={[styles.icon, {marginLeft: 10}]}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(nota.id)}>
        {deleteIcon && (
          <Icon
            name={deleteIcon.name}
            size={deleteIcon.size}
            color={deleteIcon.color}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  concluida: {
    textDecorationLine: 'line-through',
  },
});

export default NotaItem;
