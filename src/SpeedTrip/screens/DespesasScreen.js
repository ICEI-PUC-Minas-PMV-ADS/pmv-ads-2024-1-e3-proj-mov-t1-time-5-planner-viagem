import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DespesasScreen = ({ route, navigation }) => {
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        const novaDespesa = route.params?.novaDespesa;
        const editarIndex = route.params?.editarIndex;
        if (novaDespesa) {
            setDespesas(prevDespesas => [...prevDespesas, novaDespesa]);
        } else if (editarIndex !== undefined) {
            const { descricao, valor } = route.params;
            const novasDespesas = [...despesas];
            novasDespesas[editarIndex] = { descricao, valor };
            setDespesas(novasDespesas);
        }
    }, [route.params]);

    const editarDespesa = (index, descricao, valor) => {
        navigation.navigate('CriarDespesas', {
            editarIndex: index,
            descricaoInicial: descricao,
            valorInicial: valor,
        });
    };

    const excluirDespesa = (index) => {
        const novasDespesas = [...despesas];
        novasDespesas.splice(index, 1);
        setDespesas(novasDespesas);
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
            <View style={styles.line} />

            <FlatList
                data={despesas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.expenseItem}>
                        <Text style={styles.expenseText}>{item.descricao}: R${parseFloat(item.valor).toFixed(2)}</Text>
                        <TouchableOpacity onPress={() => editarDespesa(index, item.descricao, item.valor)}>
                            <Icon name="pencil" size={20} color="#3498DB" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => excluirDespesa(index)}>
                            <Icon name="trash" size={20} color="#E74C3C" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                )}
            />

            <View style={styles.expenseContainer}>
                <Text style={styles.totalExpenseText}>Total: R${calcularSomaTotal()}</Text>
            </View>

            <TouchableOpacity style={styles.addButton} onPress={navigateToCriarDespesas}>
                <Icon name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
    expenseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    expenseText: {
        fontSize: 16,
        color: '#333',
    },
    icon: {
        marginLeft: 16,
    },
    expenseContainer: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    totalExpenseText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    addButton: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#3498DB',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DespesasScreen;
