import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/create";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.45 };

const Separator = () => <View style={styles.separator} />;
const TextSeparator = () => <View style={styles.textSeparator} />;

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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#212121",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textSeparator: {
    marginVertical: 25,
    borderBottomColor: '#737373',
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

const AppButton = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

function App () {
  const[inputValue, setInputValue] = React.useState('');
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
        <AppButton title="Crear Sala" size="sm" backgroundColor="#007bff" />
        <Separator />
        <AppButton title="Unirse" size="sm" backgroundColor="#007bff" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default App;