import React from "react";

import { 
  Route, 
  Routes, 
} from "react-router-dom";

import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native"

import CreateRoom from "./components/create";

import Home from "./components/home";

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: 'black'
  },
});


function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Routes>
        <Route
          exact path="/"
          element={<Home/>}
        />
        <Route
          path="/create"
          element={<CreateRoom/>}
        />
      </Routes>
    </SafeAreaView>
  );
}

export default App;