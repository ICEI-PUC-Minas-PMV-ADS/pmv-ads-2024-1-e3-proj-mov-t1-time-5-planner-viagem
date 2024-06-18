import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getDespesas, deleteDespesa } from '../services/DespesasDbService';

const DespesasScreen = ({ navigation }) => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarDespesas();
    });

    return unsubscribe;
  }, [navigation]);

  const carregarDespesas = async () => {
    try {
      const despesasFromDb = await getDespesas();
      setDespesas(despesasFromDb);
    } catch (error) {
      console.error('Erro ao carregar despesas:', error);
    }
  };

  const editarDespesa = (index, descricao, valor, id) => {
    navigation.navigate('CriarDespesas', {
      editarIndex: index,
      descricaoInicial: descricao,
      valorInicial: valor,
      id: id,
    });
  };

  const excluirDespesa = async (id) => {
    try {
      await deleteDespesa(id);
      carregarDespesas(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error('Erro ao excluir despesa:', error);
    }
  };

  const calcularSomaTotal = () => {
    const total = despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0);
    return total.toFixed(2);
  };

  const navigateToCriarDespesas = () => {
    navigation.navigate('CriarDespesas');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={despesas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.expenseItem}>
            <View style={styles.expenseTextContainer}>
              <Text style={styles.expenseText}>{item.descricao}</Text>
              <Text style={styles.expenseValue}>R${parseFloat(item.valor).toFixed(2)}</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => editarDespesa(index, item.descricao, item.valor, item.id)}>
                <Icon name="pencil" size={24} color="#3498DB" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirDespesa(item.id)}>
                <Icon name="trash" size={24} color="#E74C3C" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: R${calcularSomaTotal()}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={navigateToCriarDespesas}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  expenseTextContainer: {
    flex: 1,
  },
  expenseText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  expenseValue: {
    fontSize: 16,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  totalContainer: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3498DB',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DespesasScreen;
