import React, { useState, useRef } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground
  } from 'react-native';
  
  const PrincipalScreen = ({navigation})=>{
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/wing.jpg')} resizeMode="cover" style={styles.image}>
          
          <View style={styles.principalBox}>
            <Text style={styles.titlePrincipal}>
                Bem vindo(a) ao <Text style={styles.speedTrip}>SpeedTrip</Text>
            </Text>
            <Text style={styles.textBox}>Explore novos horizontes, gerencie seus caminhos com o <Text style={styles.speedTrip}>SpeedTrip</Text></Text>
            <Button title="Faça Login" style={styles.loginButton} color="green" onPress={()=>{navigation.navigate('Login')}}/>
            <Text style={styles.fazerCadastro}>
                Não tem cadastro?<Text style={styles.linkCadastro} onPress={()=>{navigation.navigate('Cadastrar')}}>Cadastre-se</Text>
            </Text>
         </View>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    speedTrip:{
        color: 'green'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    principalBox: {
      backgroundColor: 'white',
      width: '90%',
      maxHeight: '45%',
      borderRadius: 40,
      padding: 25,
      marginBottom: 40,
      overflow: 'hidden',
      flex: 1,
      justifyContent: 'space-around'
    },
    textBox:{
      textAlign: 'center'
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'center',
    },
    fazerCadastro: {
        marginTop: 20,
        textAlign: 'center',
    },
    titlePrincipal: {
      fontWeight: 'bold',
      fontSize: 30, 
      textAlign: 'center'
    },
    linkCadastro: {
        color: 'green',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        padding: 0
    }
  });
  
export default PrincipalScreen;