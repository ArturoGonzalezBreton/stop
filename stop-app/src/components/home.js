import React from "react";

import { 
  useNavigate,
} from "react-router-dom";

import {   
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native"

import { 
  Separator, 
  TextSeparator 
} from "../assets/separator";

import AppButton from "../assets/button";

import Message from "../assets/message";

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  screenContainer: {
    flex: 1,
    width: Dimensions.get('window').width/6,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  input: {
    elevation: 8,
    fontSize: 25,
    backgroundColor: "#212121",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: 'white'
  }
});

function Home() {
  const[showMessage, setShowMessage] = React.useState(false);
  const[inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();
  const NavigateToCreate = () => {
      if (inputValue) {
          navigate('/create');
      } else {
          setShowMessage(!showMessage);
      }
  }
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.screenContainer}>
        <TextInput 
          onChangeText={(text) => setInputValue(text)} 
          placeholder="Escribe tu nombre"
          placeholderTextColor="gray"
          value={inputValue}
          style={styles.input}
        />
  
        <TextSeparator />
        <AppButton
          onPress={NavigateToCreate} 
          title="Crear Sala" 
          size="sm" 
          backgroundColor="#007bff" />
        <Separator />
        <AppButton 
          title="Unirse" 
          size="sm" 
          backgroundColor="#007bff" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default Home;