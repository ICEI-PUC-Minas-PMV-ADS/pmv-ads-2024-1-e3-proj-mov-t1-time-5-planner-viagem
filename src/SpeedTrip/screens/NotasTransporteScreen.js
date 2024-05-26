import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function NotasTransporteScreen() {
    const [notas, setNotas] = useState([]);

    const adicionarNota = () => {
        // Adicionar nota 
        const novaNota = { texto: '', id: Date.now() };
        setNotas([...notas, novaNota]);
    };

    const handleNotaChange = (text, id) => {
        // Atualizar o texto da nota
        const novasNotas = notas.map(nota =>
            nota.id === id ? { ...nota, texto: text } : nota
        );
        setNotas(novasNotas);
    };

    const removerNota = id => {
        // Remover nota 
        const novasNotas = notas.filter(nota => nota.id !== id);
        setNotas(novasNotas);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notas sobre transporte</Text>
            <Text style={styles.subtitle}>Toque no + para adicionar</Text>

            {/* Renderiza as notas */}
            <ScrollView style={styles.scrollView}>
                {notas.map(nota => (
                    <View key={nota.id} style={styles.notaContainer}>
                        <TextInput
                            style={styles.notaInput}
                            placeholder="Digite sua nota sobre transporte (horários, conexões, etc)"
                            placeholderTextColor="#CCCCCC"
                            onChangeText={text => handleNotaChange(text, nota.id)}
                            value={nota.texto}
                            multiline
                        />
                        <TouchableOpacity style={styles.botaoExcluir} onPress={() => removerNota(nota.id)}>
                            <Text style={styles.textoBotaoExcluir}>x</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Botão para adicionar notas */}
            <TouchableOpacity style={styles.addButton} onPress={adicionarNota}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        marginBottom: 18,
        
    },
    scrollView: {
        width: '90%',
    },
    notaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    notaInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    botaoExcluir: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
    },
    textoBotaoExcluir: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    addButton: {
        borderRadius: 30,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        position: 'relative', 
        bottom: 3,  
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
});