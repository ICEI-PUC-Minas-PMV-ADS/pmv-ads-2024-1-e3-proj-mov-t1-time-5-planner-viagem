import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';

const BoxItem = ({iconName,title,sqlString,addRoute}) => {

  const [content,setContent] = useState(['Testing Testing','Testando']);

  useEffect(()=>{
    
  });

  return (
    <View style={styles.boxItem}>
      <View>
        <View>
          <Icon name={iconName} color="#0099DD"/>
          <Text>{title}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name='add' />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {content.forEach((title)=>{
          return(
            <Text>{title}</Text>
          )
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


});

export default BoxItem;
