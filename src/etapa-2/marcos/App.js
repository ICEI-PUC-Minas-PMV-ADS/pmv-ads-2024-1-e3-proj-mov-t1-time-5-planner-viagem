import React from "react";
import { StatusBar } from "react-native";
import registerTravel from "./src/pages/registerTravel";

import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes'

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>OLA ola ola </Text>
      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
        <registerTravel/>
    </NavigationContainer>
>>>>>>> travel-registration
  );
}



