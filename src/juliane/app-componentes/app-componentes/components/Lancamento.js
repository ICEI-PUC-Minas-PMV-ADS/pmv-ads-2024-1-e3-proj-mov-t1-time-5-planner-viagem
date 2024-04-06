import React, {useState} from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';

import{useSaldo} from '../context/ContaContext';

const Lancamento = (props) => {

  const {saldo, setSaldo} = useSaldo();
  const [valor, setValor] = useState(0);


  return (
<>
    <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="0,00"
        keyboardType="numeric"
      />

      <Button
        title= {props.Credito ? 'Adicionar Saldo' : 'Subtrair Saldo'}
        color= {props.Credito ? 'green' : 'red'}
        onPress={() => {
          if(props.Credito){
            setSaldo(saldo + Number(valor));
          }else{
            setSaldo(saldo - Number(valor));
          } 
        }}
      />
      </>



  );



}
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Lancamento;