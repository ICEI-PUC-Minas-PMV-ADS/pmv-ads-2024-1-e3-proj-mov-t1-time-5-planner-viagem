import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CriarDespesasScreen = ({ navigation, route }) => {
    const [descricao, setDescricao] = useState(route.params?.descricaoInicial || '');
    const [valor, setValor] = useState(route.params?.valorInicial || '');

    const handleAddExpense = () => {
        if (!descricao || !valor) {
            return;
        }

        if (route.params?.editarIndex !== undefined) {
            navigation.navigate('Despesas', {
                editarIndex: route.params.editarIndex,
                descricao: descricao,
                valor: valor,
            });
        } else {
            navigation.navigate('Despesas', {
                novaDespesa: { descricao, valor }
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Descrição:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a descrição"
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Valor gasto:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o valor"
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleAddExpense}>
                <Text style={styles.saveButtonText}>Adicionar Despesa</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
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
        backgroundColor: '#f9f9f9',
    },
    saveButton: {
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CriarDespesasScreen;
