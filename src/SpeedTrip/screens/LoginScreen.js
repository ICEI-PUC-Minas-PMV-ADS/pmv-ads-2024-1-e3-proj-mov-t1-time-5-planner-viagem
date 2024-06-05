import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const scrollViewRef = useRef();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    navigation.navigate('Home');
  };

  const handleCreateAccount = () => {
    console.log('Creating a new account');
    navigation.navigate('Cadastrar');
  };

  const handleForgotPassword = () => {
    console.log('Password reset requested');
    navigation.navigate('Home');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground source={require('../assets/login-screen.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Bem Vindo(a) de volta</Text>
            <Text style={styles.descriptionText}>
              Continue sua aventura com o SpeedTrip, onde cada passo é planejado e cada processo é registrado.
            </Text>
          </View>
          <View style={styles.formulario}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="seu-email@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordContainer}>
              <Text style={styles.showPasswordText}>Mostrar Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Recupere sua senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={styles.createAccountButton}>
              <Text>Sem conta ainda?</Text><Text style={styles.createAccountText}>Cadastre-se agora!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  formulario: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 35,
    borderRadius: 40,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    alignItems: 'center',
    marginBottom: 0,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    color: '#000',
  },
  inputForm: {
    width: '100%',
    borderColor: '#68a0cf',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  showPasswordContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 20,
  },
  showPasswordText: {
    color: '#4e9af1',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4e9af1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#4e9af1',
    textDecorationLine: 'underline',
  },
  createAccountButton: {},
  createAccountText: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
