import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NotasListasScreen from "./screens/NotasListasScreen";
import DespesasScreen from "./screens/DespesasScreen";
import CriarDespesasScreen from "./screens/CriarDespesasScreen";
import NotesManagementScreen from "./screens/NotesManagementScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastrarScreen from "./screens/CadastrarScreen";
import NotasTransporteScreen from "./screens/NotasTransporteScreen";
import PrincipalScreen from "./screens/PrincipalScreen";
import MainScreen from "./screens/MainScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
