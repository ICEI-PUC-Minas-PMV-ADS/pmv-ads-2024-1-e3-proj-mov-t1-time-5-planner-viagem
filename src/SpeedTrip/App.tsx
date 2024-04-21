import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NotesListScreen from './screens/NotasListasScreen';
import DespesasScreen from './screens/DespesasScreen';
import CriarDespesasScreen from './screens/CriarDespesasScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Notas/Listas" component={NotesListScreen} />
        <Screen name="Despesas" component={DespesasScreen} />
        <Screen name="CriarDespesas" component={CriarDespesasScreen} />
        <Screen name="GerenciamentoNotas" component={NotesManagementScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

