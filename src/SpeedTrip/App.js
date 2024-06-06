import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastrarScreen from "./screens/CadastrarScreen";
import { Calendario } from './screens/Calendario';
import CriarDespesasScreen from "./screens/CriarDespesasScreen";
import DespesasScreen from "./screens/DespesasScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import NotasListasScreen from "./screens/NotasListasScreen";
import NotasTransporteScreen from "./screens/NotasTransporteScreen";
import NotesManagementScreen from "./screens/NotesManagementScreen";
import PrincipalScreen from "./screens/PrincipalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen
          name="NotasListas"
          component={NotasListasScreen}
          options={{ title: "Notas/Listas" }}
        />
        <Stack.Screen name="Despesas" component={DespesasScreen} />
        <Stack.Screen name="CriarDespesas" component={CriarDespesasScreen} />
        <Stack.Screen
          name="GerenciamentoNotas"
          component={NotesManagementScreen}
          options={{ title: "Gerenciamento de Notas" }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen
          name="NotasTransporte"
          component={NotasTransporteScreen}
        />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Principal" component={PrincipalScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Calendario" component={Calendario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
