import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

const image = {uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/09/praia-carneiros-2.jpeg'};

export default function CadastrarScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.titleCadastrar} >Preencha o formulário abaixo para se cadastrar!</Text>
        <View style={styles.formulario}>
          <Text>Nome</Text>
          <TextInput style={styles.inputForm}/>
          <Text>E-mail</Text>
          <TextInput style={styles.inputForm}/>
          <Text>Senha</Text>
          <TextInput style={styles.inputForm}/>
          <Button title='Cadastrar' style={styles.formButton} />
          <Text style={styles.fazerLogin} >Já tem cadastro? <Text style={styles.linkLogin}>Faça login</Text></Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  formulario: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    borderRadius: 40,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 35
  },
  inputForm:{
    borderColor: '#68a0cf',
    borderWidth: 2,
    borderRadius: 6,
    padding: 5,
    marginBottom: 10
  },
  image:{
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  formButton: {
    borderRadius: 30
  },
  titleCadastrar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize : 15,
    marginTop: 200
  },
  fazerLogin: {
    marginTop: 20,
    textAlign: 'center'
  },
  linkLogin:{
    color : '#68a0cf'
  }
});

