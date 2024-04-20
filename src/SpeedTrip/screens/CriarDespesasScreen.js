import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CriarDespesasScreen = ({ route, navigation }) => {
    const { adicionarDespesa } = route.params;
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [descricaoPreenchida, setDescricaoPreenchida] = useState(false);
    const [valorPreenchido, setValorPreenchido] = useState(false);

    const handleAddExpense = () => {
        adicionarDespesa(descricao, valor);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back-outline" size={28} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Adicione suas despesas</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Descrição:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a descrição"
                        value={descricao}
                        onChangeText={(text) => {
                            setDescricao(text);
                            setDescricaoPreenchida(!!text);
                        }}
                    />
                    <Icon name={descricaoPreenchida ? "checkmark-circle" : "ellipse-outline"} size={24} color={descricaoPreenchida ? "#28a745" : "#ccc"} style={styles.icon} />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Valor gasto:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o valor"
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={(text) => {
                            setValor(text);
                            setValorPreenchido(!!text);
                        }}
                    />
                    <Icon name={valorPreenchido ? "checkmark-circle" : "ellipse-outline"} size={24} color={valorPreenchido ? "#28a745" : "#ccc"} style={styles.icon} />
                </View>
            </View>

            <TouchableOpacity
                style={[
                    styles.saveButton,
                    descricaoPreenchida && valorPreenchido ? styles.saveButtonActive : styles.saveButtonInactive,
                ]}
                onPress={handleAddExpense}
                disabled={!(descricaoPreenchida && valorPreenchido)}
            >
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    backButton: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#dcdcdc',
        marginVertical: 12,
    },
    formContainer: {
        flex: 1,
    },
    inputGroup: {
        marginBottom: 16,
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
    },
    icon: {
        marginTop: 10,
        marginLeft: 8,
    },
    saveButton: {
        paddingVertical: 12,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    saveButtonActive: {
        backgroundColor: '#28a745',
    },
    saveButtonInactive: {
        backgroundColor: '#dcdcdc',
        opacity: 0.6,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CriarDespesasScreen;
