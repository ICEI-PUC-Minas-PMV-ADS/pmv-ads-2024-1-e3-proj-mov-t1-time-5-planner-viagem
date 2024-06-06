import React, { useRef, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

const formatarDataEmPortugues = (data) => {
  if (!data) return '';

  const [ano, mes, dia] = data.split('/');
  const date = new Date(`${ano}/${mes}/${dia}`);
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const diaSemana = date.getDay();

  return ` ${dia} de ${meses[mes - 1]} de ${ano}`;
};
export const Calendario = () => {
  const scrollViewRef = useRef();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'DD/MM/YYYY'
  );
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [startedDate, setStartedDate] = useState('20/12/12');

  function handlechangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
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
        <ImageBackground
          source={require('../assets/img5.avif')}
          resizeMode="cover"
          style={styles.image}
          blurRadius={5}
        >
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Planeje sua primeira viagem!</Text>
            <Text style={styles.descriptionText}>
              Nós iremos guia-lo através do processo
            </Text>
            <Text style={styles.descriptionText}>
              Explore o mundo com facilidade
            </Text>
            <Text style={styles.descriptionText}>
              seu planejador de viagens em mãos
            </Text>
          </View>
        </ImageBackground>

        <View style={{ flex: 1 }}>
          <View style={{ width: '100%', paddingHorizontal: 35, marginTop: 20 }}>
            <Text style={styles.title}>Vamos começar:</Text>
            <Text style={styles.label}>Aonde você quer ir?</Text>
            <TextInput style={styles.inputForm} placeholder="Proxima viagem" />
            <View>
              <Text style={{ fontSize: 18 }}>Mais informações</Text>
              <TouchableOpacity
                style={styles.inputForm}
                onPress={handleOnPressStartDate}
              >
                
                <Text>
                  {startedDate
                    ? formatarDataEmPortugues(startedDate)
                    : 'Selecione uma data'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log('submit data');
              }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>
                {' '}
                Adicionar Viagem
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChange={handlechangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: '#fff',
                    textHeaderColor: '#469af8',
                    textDefaultColor: '#469af8',
                    selectedTextColor: 'blue',
                    mainColor: '#469af8',
                    textSecondaryColor: '#469af8',
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: '#469af8' }}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
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
  image: {
    flex: 1,
    // justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 105,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#4e9af1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 100,
  },
  inputForm: {
    width: '100%',
    borderColor: '#68a0cf',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginBottom: 25,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    color: '#000',
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 24,
  },

  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: 'center',
    marginTop: 14,
    marginBottom: 14,
  },
  submitBtn: {
    backgroundColor: '#342342',
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
