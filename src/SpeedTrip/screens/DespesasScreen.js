import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DespesasScreen = ({ navigation }) => {
    const [despesas, setDespesas] = useState([]);
    const calcularSomaTotal = () => {
        return despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0).toFixed(2);
    };

    const navigateToCriarDespesas = () => {
        navigation.navigate('CriarDespesas', {
            adicionarDespesa: (descricao, valor) => {
                setDespesas((despesasAtuais) => [
                    ...despesasAtuais,
                    { descricao, valor }
                ]);
            },
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Despesas</Text>
            </View>
            <View style={styles.line} />

            <FlatList
                data={despesas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.expenseItem}>
                        <Text>{item.descricao}: R${parseFloat(item.valor).toFixed(2)}</Text>
                    </View>
                )}
            />

            <View style={styles.expenseContainer}>
                <Text style={styles.expenseText}>R${calcularSomaTotal()}</Text>
            </View>

            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={navigateToCriarDespesas}>
                    <Icon name="add" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        padding: 8,
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
    expenseItem: {
        paddingVertical: 8,
    },
    expenseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 16,
    },
    expenseText: {
        fontSize: 24,
        color: '#3498DB',
    },
    addButtonContainer: {
        position: 'absolute',
        bottom: 24,
        right: 24,
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DespesasScreen;
