import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

import Saldo from './components/Saldo'
import Lancamento from './components/Lancamento'
import SaldoProvider from './context/ContaContext'

const App = () => {

  const [saldo, setSaldo] = useState(0);

  return (
    <SaldoProvider>
    <View style={styles.container}>
      <Saldo Valor={saldo} />

      <Lancamento Credito/>

      <Lancamento />

    </View>
    </SaldoProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
  },
});

export default App;
