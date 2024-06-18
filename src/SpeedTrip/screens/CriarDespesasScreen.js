import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { insertDespesa, updateDespesa } from '../services/DespesasDbService';

const CriarDespesasScreen = ({ navigation, route }) => {
  const [descricao, setDescricao] = useState(route.params?.descricaoInicial || '');
  const [valor, setValor] = useState(route.params?.valorInicial?.toString() || '');
  const id = route.params?.id;

  const handleAddExpense = async () => {
    if (!descricao || !valor) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      if (route.params?.editarIndex !== undefined) {
        await updateDespesa(id, descricao, valor);
      } else {
        await insertDespesa(descricao, valor);
      }
      navigation.navigate('Despesas');
    } catch (error) {
      console.error("Erro ao salvar despesa:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criar ou Editar Despesa</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escreva uma descrição"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Valor gasto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o valor"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleAddExpense}>
        <Text style={styles.saveButtonText}>Salvar Despesa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  saveButton: {
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CriarDespesasScreen;
