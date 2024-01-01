import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
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
  }
});

function CreateRoom () {
  const[inputValue, setInputValue] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.screenContainer}>
        <TextInput 
          onChangeText={(text) => setInputValue(text)} 
          placeholder="Escribe el nombre de la sala"
          placeholderTextColor="gray"
          value={inputValue}
          style={styles.input}
        />
        <TextSeparator />
        <AppButton title="Crear" size="sm" backgroundColor="#007bff" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default CreateRoom;