import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import { getData } from '../services/NotasDbService';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
const BoxItem = ({iconName,title,sqlTable,addRoute,navigation}) => {
  const isFocused = useIsFocused();
  const [content,setContent] = useState([]);
  useEffect(()=>{
    if(isFocused){
        (async function(){
            const result = await getData(sqlTable);
            setContent(result);
        })();
    }
  },[isFocused]);

  
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxMenu}>
        <View style={styles.boxTitle}>
          <Icon name={iconName} color="white"/>
          <View style={{width: 8}}></View>
          <Text style={{fontWeight:'bold', padding: 0, margin: 0,color: 'white'}}>{title}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>{addRoute ? navigation.navigate(`${addRoute}`): navigation.navigate('Home')}}>
            <Icon name='add' color="white"/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.boxContent}>
        {content.map((item)=>{
          return(
            <Text style={styles.itemTitle} key={item.texto}>{item.texto}</Text>
          )
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    boxItem:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        width: '100%',
        maxHeight: '100%',
    },
    boxMenu:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#0099DD',
        padding: 5,
    },
    boxTitle:{
        flex: 0,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 3,
    },
    boxContent:{
        maxHeight: '100%',
        padding: 10,
        backgroundColor: 'lightgrey',
    },
    itemTitle:{
        marginBottom: 5,
        fontSize: 13
    }
});

export default BoxItem;
