import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import NotaItem from '../components/NotaItem';

const NotasListasScreen = () => {
  const [notas, setNotas] = useState([]);
  const [novaNotaTexto, setNovaNotaTexto] = useState('');
  const [notaEditando, setNotaEditando] = useState(null);

  const adicionarNota = () => {
    if (notaEditando) {
      setNotas(
        notas.map(nota =>
          nota.id === notaEditando.id ? {...nota, texto: novaNotaTexto} : nota,
        ),
      );
      setNotaEditando(null);
    } else {
      if (novaNotaTexto.trim() !== '') {
        const novaNota = {id: uuidv4(), texto: novaNotaTexto};
        setNotas([...notas, novaNota]);
        setNovaNotaTexto('');
      }
    }
    limparInput();
  };

  const excluirNota = notaId => {
    setNotas(notas.filter(nota => nota.id !== notaId));
  };

  const editarNota = nota => {
    setNotaEditando(nota);
    setNovaNotaTexto(nota.texto);
  };

  const limparInput = () => {
    setNovaNotaTexto('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={novaNotaTexto}
          onChangeText={text => setNovaNotaTexto(text)}
          placeholder="Digite sua nota"
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarNota}>
          <Text style={styles.addButtonText}>
            {notaEditando ? 'Salvar' : 'Adicionar'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.notasContainer}
        data={notas}
        renderItem={({item}) => (
          <NotaItem
            nota={item}
            onDelete={excluirNota}
            onEdit={editarNota}
            deleteIcon={{name: 'trash', size: 24, color: 'red'}}
            editIcon={{name: 'edit', size: 24, color: 'blue'}}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image
              source={require('../assets/quadro-branco.png')}
              style={styles.emptyImage}
            />
            <Text style={[styles.text, styles.emptyText]}>
              Não há notas. Fique à vontade para adicionar.
            </Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  notasContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flatListContent: {
    paddingBottom: 100,
  },
  emptyContainer: {
    alignItems: 'center',
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    alignItems: 'center',
  },
});

export default NotasListasScreen;
