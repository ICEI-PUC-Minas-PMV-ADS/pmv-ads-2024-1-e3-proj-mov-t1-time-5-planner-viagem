// src/components/TravelRegister.tsx

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TravelRegister: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleAddTrip = () => {
    // Implementar a lógica para adicionar a viagem
    console.log('Nova viagem adicionada:', destination, date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planeje sua primeira viagem!</Text>

      <TextInput
        style={styles.input}
        placeholder="Destino"
        value={destination}
        onChangeText={(text) => setDestination(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"
        value={date}
        onChangeText={(text) => setDate(text)}
      />

      <Button title="Adicionar Viagem" style={styles.button} onPress={handleAddTrip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
  },
});

export default TravelRegister;
