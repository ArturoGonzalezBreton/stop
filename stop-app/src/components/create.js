import React from "react";

import { 
  useNavigate,
} from "react-router-dom";

import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Text,
  View
} from 'react-native';

import { TextSeparator } from "../assets/separator";

import AppButton from "../assets/button";

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
  input: {
    elevation: 8,
    fontSize: 25,
    backgroundColor: "#212121",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: 'white'
  },
  textHidden: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  text: {
    fontSize: 14,
    color: "#ff0045",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

function CreateRoom () {
  const[showMessage, setShowMessage] = React.useState(false);
  const[inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();
  const NavigateToRoom = () => {
      if (inputValue) {
          navigate('/room');
      } else {
        setShowMessage(true);
      }
  }
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.screenContainer}>
        <TextInput 
          onChangeText={(text) => setInputValue(text)} 
          placeholder="Nombre de la sala"
          placeholderTextColor="gray"
          value={inputValue}
          style={styles.input}
        />
        <View style={styles.appButtonContainer}>
          <Text style={showMessage ? styles.text : styles.textHidden}>
            La sala debe tener nombre.
          </Text>
        </View>
        <AppButton 
          title="Crear" 
          size="sm" 
          backgroundColor="#007bff"
          onPress={NavigateToRoom} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default CreateRoom;