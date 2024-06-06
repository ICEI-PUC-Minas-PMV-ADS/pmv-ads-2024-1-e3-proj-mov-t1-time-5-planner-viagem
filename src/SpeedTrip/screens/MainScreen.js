import React, { useState, useRef } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground
  } from 'react-native';

import BoxItem from '../components/BoxItem';
  
  const MainScreen = ({navigation})=>{
  
    return (
      <View style={styles.container}>
        <View style={styles.destinyBox} >
          <Text style={styles.destinyText} >Destino</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.destinyText}>25/03/2024 - 29/03/2024</Text>
        </View>
        <View style={styles.cardsBox} >
          <BoxItem iconName="badge" title="Documentos" />
          <BoxItem iconName="bed" title="Acomodação" />
          <BoxItem iconName="flight" title="Transporte" />
          <BoxItem iconName="description" title="Notas" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 25,
      paddingTop: 50
    },
    destinyBox: {
      textAlign: 'center',
      width: '100%',
      backgroundColor: '#0099DD',
      width: '70%',
      alignSelf: 'center',
      borderRadius: 10,
      padding: 8
    },
    destinyText: {
      textAlign: 'center',
      fontSize: 16
    }
  });
  
export default MainScreen;