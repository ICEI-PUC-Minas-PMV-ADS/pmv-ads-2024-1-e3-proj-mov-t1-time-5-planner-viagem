import React, { useState, useRef } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    ScrollView
  } from 'react-native';

import BoxItem from '../components/BoxItem';
  
  const MainScreen = ({navigation})=>{
  
    return (
      <View style={styles.container}>
        <View style={styles.destinyBox} >
          <Text style={styles.destinyText}>São Paulo, SP</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.destinyText}>25/03/2024 - 29/03/2024</Text>
        </View>
        <View style={{height: 30}}></View>
        <View style={styles.cardsBox} >
          <BoxItem iconName="description" title="Notas" sqlTable="notas" addRoute="NotasListas" navigation={navigation}/>
          <View style={{height: 15}}></View>
          <BoxItem iconName="bed" title="Acomodação" navigation={navigation}/>
          <View style={{height: 15}}></View>
          <BoxItem iconName="flight" title="Transporte" navigation={navigation}/>
          <View style={{height: 15}}></View>
          <BoxItem iconName="badge" title="Documentos" navigation={navigation}/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#fff',
      padding: 25,
      paddingTop: 50,
      paddingBottom: 50,
      overflow: 'scroll',
      minHeight: '100%',
    },
    destinyBox: {
      textAlign: 'center',
      width: '100%',
      backgroundColor: '#0099DD',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 10,
      padding: 8
    },
    destinyText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    cardsBox:{
      flex: 0,
      height: '90%'
    }
  });
  
export default MainScreen;