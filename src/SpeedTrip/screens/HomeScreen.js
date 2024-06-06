import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Notas e Listas"
        onPress={() => navigation.navigate("NotasListas")}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Despesas"
        onPress={() => navigation.navigate("Despesas")}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Gerenciamento de Notas"
        onPress={() => navigation.navigate("GerenciamentoNotas")}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Cadastrar Usuário"
        onPress={() => navigation.navigate("Cadastrar")}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Notas sobre Transporte"
        onPress={() => navigation.navigate("NotasTransporte")}
      />
      <View style={{ height: 20 }} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />

      <View style={{ height: 20 }} />
      <Button title="Principal" onPress={() => navigation.navigate("Principal")} />
      <View style={{ height: 20 }} />
      <Button title="Main" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
